import { useCallback } from 'react'
import { useWhatsAppAnalytics } from '../utils/whatsappAnalytics'

interface WhatsAppConfig {
  phoneNumber: string
  defaultMessage: string
}

interface WhatsAppMessage {
  type: 'appointment' | 'info' | 'emergency' | 'custom'
  service?: 'individual' | 'couple' | 'development'
  message?: string
}

export const useWhatsApp = (config: WhatsAppConfig = {
  phoneNumber: '5521969553695',
  defaultMessage: 'Olá! Vim através do seu site e gostaria de conversar com você. Tenho interesse em saber mais sobre valores, duração das sessões e sua disponibilidade de horários.'
}) => {
  const analytics = useWhatsAppAnalytics()

  const generateMessage = useCallback((messageConfig: WhatsAppMessage): string => {
    switch (messageConfig.type) {
      case 'appointment':
        if (messageConfig.service === 'individual') {
          return 'Olá! Vim através do seu site e gostaria de agendar uma consulta de terapia individual. Tenho interesse em saber mais sobre valores, duração das sessões e sua disponibilidade de horários. Quando você tem disponibilidade para uma primeira consulta?'
        }
        if (messageConfig.service === 'couple') {
          return 'Olá! Vim através do seu site e gostaria de agendar uma consulta de terapia de casal. Tenho interesse em saber mais sobre valores, duração das sessões e sua disponibilidade de horários. Quando vocês têm disponibilidade para uma primeira consulta?'
        }
        if (messageConfig.service === 'development') {
          return 'Olá! Vim através do seu site e gostaria de agendar uma consulta focada em desenvolvimento pessoal. Tenho interesse em saber mais sobre valores, duração das sessões e sua disponibilidade de horários. Quando você tem disponibilidade para uma primeira consulta?'
        }
        return 'Olá! Vim através do seu site e gostaria de solicitar um orçamento personalizado para terapia. Tenho interesse em saber mais sobre valores, duração das sessões e sua disponibilidade de horários.'

      case 'info':
        if (messageConfig.service === 'individual') {
          return 'Olá! Gostaria de saber mais informações sobre a terapia individual: valores, duração e como funciona.'
        }
        if (messageConfig.service === 'couple') {
          return 'Olá! Gostaria de saber mais informações sobre a terapia de casal: valores, duração e como funciona.'
        }
        if (messageConfig.service === 'development') {
          return 'Olá! Gostaria de saber mais informações sobre o trabalho de desenvolvimento pessoal: valores, duração e como funciona.'
        }
        return 'Olá! Gostaria de saber mais informações sobre os serviços oferecidos.'

      case 'emergency':
        return 'Olá! Estou passando por um momento difícil e gostaria de saber se há possibilidade de um atendimento mais urgente. Tenho interesse em saber mais sobre valores, duração das sessões e sua disponibilidade de horários.'

      case 'custom':
        return messageConfig.message || config.defaultMessage

      default:
        return config.defaultMessage
    }
  }, [config.defaultMessage])

    const sendMessage = useCallback((messageConfig: WhatsAppMessage, source: 'float_button' | 'service_page' | 'contact_page' | 'home_page' = 'float_button') => {
    const message = generateMessage(messageConfig)
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${config.phoneNumber}?text=${encodedMessage}`

    analytics.trackMessageSent(messageConfig.service, source)

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
  }, [config.phoneNumber, generateMessage, analytics])

  const sendCustomMessage = useCallback((message: string) => {
    sendMessage({ type: 'custom', message })
  }, [sendMessage])

  const scheduleAppointment = useCallback((service?: 'individual' | 'couple' | 'development', source: 'float_button' | 'service_page' | 'contact_page' | 'home_page' = 'float_button') => {
    analytics.trackAppointmentRequest(service, source)
    sendMessage({ type: 'appointment', service }, source)
  }, [sendMessage, analytics])

  const requestInfo = useCallback((service?: 'individual' | 'couple' | 'development', source: 'float_button' | 'service_page' | 'contact_page' | 'home_page' = 'float_button') => {
    analytics.trackServiceInquiry(service!, source)
    sendMessage({ type: 'info', service }, source)
  }, [sendMessage, analytics])

  const sendEmergencyMessage = useCallback(() => {
    sendMessage({ type: 'emergency' })
  }, [sendMessage])

  const isWhatsAppAvailable = useCallback((): boolean => {
    if (typeof window === 'undefined') return false

    return true
  }, [])

  const formatPhoneNumber = useCallback((phone: string): string => {
    const cleanPhone = phone.replace(/\D/g, '')

    if (cleanPhone.length === 13 && cleanPhone.startsWith('55')) {
      const ddd = cleanPhone.slice(2, 4)
      const firstPart = cleanPhone.slice(4, 9)
      const secondPart = cleanPhone.slice(9, 13)
      return `(${ddd}) ${firstPart}-${secondPart}`
    }

    return phone
  }, [])

  return {
    sendMessage,
    sendCustomMessage,
    scheduleAppointment,
    requestInfo,
    sendEmergencyMessage,
    generateMessage,
    isWhatsAppAvailable,
    formatPhoneNumber,
    phoneNumber: config.phoneNumber,
    formattedPhoneNumber: formatPhoneNumber(config.phoneNumber)
  }
}

export default useWhatsApp
