interface WhatsAppAnalyticsEvent {
  action: 'click' | 'message_sent' | 'service_inquiry' | 'appointment_request'
  service?: 'individual' | 'couple' | 'development'
  source: 'float_button' | 'service_page' | 'contact_page' | 'home_page'
  timestamp: number
  userAgent: string
}

class WhatsAppAnalytics {
  private events: WhatsAppAnalyticsEvent[] = []
  private storageKey = 'whatsapp_analytics'

  constructor() {
    this.loadEvents()
  }

  private loadEvents() {
    if (typeof window !== 'undefined') {
      try {
        const stored = localStorage.getItem(this.storageKey)
        if (stored) {
          this.events = JSON.parse(stored)
        }
      } catch (error) {
        console.warn('Failed to load WhatsApp analytics:', error)
      }
    }
  }

  private saveEvents() {
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem(this.storageKey, JSON.stringify(this.events))
      } catch (error) {
        console.warn('Failed to save WhatsApp analytics:', error)
      }
    }
  }

  track(event: Omit<WhatsAppAnalyticsEvent, 'timestamp' | 'userAgent'>) {
    const fullEvent: WhatsAppAnalyticsEvent = {
      ...event,
      timestamp: Date.now(),
      userAgent: typeof window !== 'undefined' ? window.navigator.userAgent : 'unknown'
    }

    this.events.push(fullEvent)
    this.saveEvents()

    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'whatsapp_interaction', {
        event_category: 'engagement',
        event_label: event.action,
        custom_parameter_service: event.service,
        custom_parameter_source: event.source
      })
    }

    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'Contact', {
        content_name: 'WhatsApp Contact',
        content_category: event.service || 'general',
        source: event.source
      })
    }

    console.log('WhatsApp Analytics Event:', fullEvent)
  }

  getEvents(): WhatsAppAnalyticsEvent[] {
    return [...this.events]
  }

  getEventsByService(service: 'individual' | 'couple' | 'development'): WhatsAppAnalyticsEvent[] {
    return this.events.filter(event => event.service === service)
  }

  getEventsBySource(source: WhatsAppAnalyticsEvent['source']): WhatsAppAnalyticsEvent[] {
    return this.events.filter(event => event.source === source)
  }

  getEventsByDateRange(startDate: Date, endDate: Date): WhatsAppAnalyticsEvent[] {
    const startTime = startDate.getTime()
    const endTime = endDate.getTime()
    return this.events.filter(event =>
      event.timestamp >= startTime && event.timestamp <= endTime
    )
  }

  getStats() {
    const total = this.events.length
    const byAction = this.events.reduce((acc, event) => {
      acc[event.action] = (acc[event.action] || 0) + 1
      return acc
    }, {} as Record<string, number>)

    const byService = this.events.reduce((acc, event) => {
      if (event.service) {
        acc[event.service] = (acc[event.service] || 0) + 1
      }
      return acc
    }, {} as Record<string, number>)

    const bySource = this.events.reduce((acc, event) => {
      acc[event.source] = (acc[event.source] || 0) + 1
      return acc
    }, {} as Record<string, number>)

    return {
      total,
      byAction,
      byService,
      bySource,
      mostPopularService: Object.entries(byService).sort(([,a], [,b]) => b - a)[0]?.[0],
      mostUsedSource: Object.entries(bySource).sort(([,a], [,b]) => b - a)[0]?.[0]
    }
  }

  clearEvents() {
    this.events = []
    this.saveEvents()
  }

  exportEvents(): string {
    return JSON.stringify({
      exportDate: new Date().toISOString(),
      events: this.events,
      stats: this.getStats()
    }, null, 2)
  }
}

export const whatsappAnalytics = new WhatsAppAnalytics()

export const useWhatsAppAnalytics = () => {
  const trackClick = (service?: 'individual' | 'couple' | 'development', source: WhatsAppAnalyticsEvent['source'] = 'float_button') => {
    whatsappAnalytics.track({
      action: 'click',
      service,
      source
    })
  }

  const trackMessageSent = (service?: 'individual' | 'couple' | 'development', source: WhatsAppAnalyticsEvent['source'] = 'float_button') => {
    whatsappAnalytics.track({
      action: 'message_sent',
      service,
      source
    })
  }

  const trackServiceInquiry = (service: 'individual' | 'couple' | 'development', source: WhatsAppAnalyticsEvent['source'] = 'service_page') => {
    whatsappAnalytics.track({
      action: 'service_inquiry',
      service,
      source
    })
  }

  const trackAppointmentRequest = (service?: 'individual' | 'couple' | 'development', source: WhatsAppAnalyticsEvent['source'] = 'float_button') => {
    whatsappAnalytics.track({
      action: 'appointment_request',
      service,
      source
    })
  }

  return {
    trackClick,
    trackMessageSent,
    trackServiceInquiry,
    trackAppointmentRequest,
    getStats: () => whatsappAnalytics.getStats(),
    getEvents: () => whatsappAnalytics.getEvents()
  }
}
