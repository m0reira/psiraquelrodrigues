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
  phoneNumber: '552196955369',
  defaultMessage: 'Olá! Gostaria de agendar uma consulta com a Psicóloga Raquel Rodrigues.'
}) => {
  const analytics = useWhatsAppAnalytics()

  const generateMessage = useCallback((messageConfig: WhatsAppMessage): string => {
    switch (messageConfig.type) {
      case 'appointment':
        if (messageConfig.service === 'individual') {
          return 'Olá! Gostaria de agendar uma consulta de terapia individual. Quando você tem disponibilidade?'
        }
        if (messageConfig.service === 'couple') {
          return 'Olá! Gostaria de agendar uma consulta de terapia de casal. Quando vocês têm disponibilidade?'
        }
        if (messageConfig.service === 'development') {
          return 'Olá! Gostaria de agendar uma consulta focada em desenvolvimento pessoal. Quando você tem disponibilidade?'
        }
        return 'Olá! Gostaria de agendar minha primeira consulta gratuita de 30 minutos.'

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
        return 'Olá! Estou passando por um momento difícil e gostaria de saber se há possibilidade de um atendimento mais urgente.'

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

    // Track analytics
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
    // Verifica se está em um dispositivo móvel ou desktop que suporta WhatsApp
    if (typeof window === 'undefined') return false

    const userAgent = window.navigator.userAgent.toLowerCase()
    const isMobile = /android|iphone|ipad|ipod|blackberry|iemobile|opera mini/.test(userAgent)

    return true // WhatsApp Web funciona em desktop também
  }, [])

  const formatPhoneNumber = useCallback((phone: string): string => {
    // Remove todos os caracteres não numéricos
    const cleanPhone = phone.replace(/\D/g, '')

    // Formata para exibição brasileira
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
