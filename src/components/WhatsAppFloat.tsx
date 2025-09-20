import { MessageCircle, X } from 'lucide-react'
import { useState } from 'react'
import { useWhatsApp } from '../hooks/useWhatsApp'

const WhatsAppFloat = () => {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isVisible, setIsVisible] = useState(true)

  const {
    scheduleAppointment,
    requestInfo,
    sendCustomMessage,
    sendEmergencyMessage,
    formattedPhoneNumber
  } = useWhatsApp()

  const quickMessages = [
    {
      text: "Conversa inicial - Solicitar orçamento",
      action: () => scheduleAppointment()
    },
    {
      text: "Informações sobre terapia individual",
      action: () => requestInfo('individual')
    },
    {
      text: "Informações sobre terapia de casal",
      action: () => requestInfo('couple')
    },
    {
      text: "Agendar terapia individual",
      action: () => scheduleAppointment('individual')
    },
    {
      text: "Atendimento de urgência",
      action: () => sendEmergencyMessage()
    }
  ]

  if (!isVisible) return null

  return (
    <div className="fixed bottom-24 md:bottom-6 right-6 z-50">
      {isExpanded && (
        <div className="mb-4 bg-white rounded-2xl shadow-2xl border border-gray-200 p-4 w-80 max-w-[calc(100vw-3rem)]">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">WhatsApp</h3>
                <p className="text-sm text-gray-500">Raquel Rodrigues - {formattedPhoneNumber}</p>
              </div>
            </div>
            <button
              onClick={() => setIsExpanded(false)}
              className="p-1 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-4 h-4 text-gray-500" />
            </button>
          </div>

          <div className="space-y-2">
            <p className="text-sm text-gray-600 mb-3">
              Escolha uma das opções abaixo ou envie uma mensagem personalizada:
            </p>

                        {quickMessages.map((item, index) => (
              <button
                key={index}
                onClick={() => {
                  item.action()
                  setIsExpanded(false)
                }}
                className="w-full text-left p-3 rounded-lg border border-gray-200 hover:bg-gray-50 hover:border-green-300 transition-colors text-sm"
              >
                {item.text}
              </button>
            ))}

            <button
              onClick={() => {
                sendCustomMessage("Olá! eu vim do seu site e gostaria de ter mais informações sobre a terapia online.")
                setIsExpanded(false)
              }}
              className="w-full bg-green-500 text-white p-3 rounded-lg font-semibold hover:bg-green-600 transition-colors flex items-center justify-center space-x-2 mt-3"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Enviar mensagem personalizada</span>
            </button>
          </div>
        </div>
      )}

      <div className="relative">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
          aria-label="Abrir WhatsApp"
        >
          <MessageCircle className="w-6 h-6" />

          <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20"></div>
        </button>

        <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white flex items-center justify-center">
          <div className="w-2 h-2 bg-green-600 rounded-full animate-pulse"></div>
        </div>

        {!isExpanded && (
          <div className="absolute right-16 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            Fale comigo no WhatsApp
            <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-gray-900"></div>
          </div>
        )}
      </div>

      {isExpanded && (
        <button
          onClick={() => setIsVisible(false)}
          className="absolute -top-2 -left-2 w-6 h-6 bg-gray-500 hover:bg-gray-600 text-white rounded-full flex items-center justify-center text-xs transition-colors"
          aria-label="Fechar WhatsApp"
        >
          <X className="w-3 h-3" />
        </button>
      )}
    </div>
  )
}

export default WhatsAppFloat
