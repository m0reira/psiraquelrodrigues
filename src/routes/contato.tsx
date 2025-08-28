import { createFileRoute } from '@tanstack/react-router'
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react'
import React, { useState } from 'react'
import { useSEO, seoConfigs } from '../hooks/useSEO'
import Breadcrumbs from '../components/Breadcrumbs'

function ContactPage() {
  useSEO(seoConfigs.contato)

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    preferredTime: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const message = `*Novo contato do site*

*Nome:* ${formData.name}
*Email:* ${formData.email}
*Telefone:* ${formData.phone || 'Não informado'}
*Serviço:* ${formData.service || 'Não especificado'}
*Horário preferido:* ${formData.preferredTime || 'Não especificado'}

*Mensagem:*
${formData.message || 'Sem mensagem adicional'}

_Enviado através do formulário do site_`

    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/5521969553695?text=${encodedMessage}`

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')

    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      preferredTime: '',
      message: ''
    })
  }

  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: 'Contato', href: '/contato' }]} />
      </div>

      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Entre em Contato
          </h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Estou aqui para te ajudar. Vamos conversar sobre como posso contribuir
            para o seu bem-estar e desenvolvimento pessoal.
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Agende sua Consulta
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      E-mail *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Telefone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="(21) 96955-3695"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      Tipo de Atendimento
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Selecione o serviço</option>
                      <option value="Terapia Individual">Terapia Individual</option>
                      <option value="Terapia de Casal">Terapia de Casal</option>
                      <option value="Desenvolvimento Pessoal">Desenvolvimento Pessoal</option>
                      <option value="Consulta Avulsa">Consulta Avulsa</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-700 mb-2">
                    Horário Preferencial
                  </label>
                  <select
                    id="preferredTime"
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Selecione um horário</option>
                    <option value="Manhã (8h às 12h)">Manhã (8h às 12h)</option>
                    <option value="Tarde (13h às 17h)">Tarde (13h às 17h)</option>
                    <option value="Noite (18h às 20h)">Noite (18h às 20h)</option>
                    <option value="Sábado (8h às 12h)">Sábado (8h às 12h)</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Conte-me um pouco sobre o que te trouxe até aqui ou suas expectativas para o atendimento..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center space-x-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Enviar via WhatsApp</span>
                </button>

                <p className="text-sm text-gray-500 text-center">
                  * Campos obrigatórios. Ao clicar em "Enviar via WhatsApp", suas informações serão formatadas e enviadas através do WhatsApp.
                </p>
              </form>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Informações de Contato
              </h2>

                              <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Telefone</h3>
                      <p className="text-gray-600 mb-4">(21) 96955-3695</p>
                      <a
                        href="https://wa.me/5521969553695?text=Olá! Gostaria de agendar uma consulta com a Psicóloga Raquel Rodrigues."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors inline-flex items-center space-x-2"
                      >
                        <MessageCircle className="w-4 h-4" />
                        <span>WhatsApp</span>
                      </a>
                    </div>
                  </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">E-mail</h3>
                    <p className="text-gray-600 mb-4">psi.raquelrodrigues@gmail.com</p>
                    <a
                      href="mailto:psi.raquelrodrigues@gmail.com"
                      className="bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center space-x-2"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Enviar E-mail</span>
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Localização</h3>
                    <p className="text-gray-600">
                      Rua dos Rubis, 144<br />
                      Rocha Miranda - Rio de Janeiro/RJ
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Horários de Atendimento</h3>
                    <div className="text-gray-600 space-y-1">
                      <p>Segunda a Sexta: 8h às 18h</p>
                      <p>Sábado: 8h às 12h</p>
                      <p>Domingo: Fechado</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Perguntas Frequentes
          </h2>

          <div className="space-y-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Como funciona o orçamento?
              </h3>
              <p className="text-gray-600">
                Oferecemos uma conversa inicial para solicitar o orçamento. É um momento para nos conhecermos,
                você me contar sobre suas necessidades e eu explicar como posso te ajudar no seu processo terapêutico.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Qual a diferença entre atendimento online e presencial?
              </h3>
              <p className="text-gray-600">
                O atendimento online tem a mesma eficácia do presencial. A diferença está no conforto
                e flexibilidade que o online oferece, permitindo que você tenha sua sessão de qualquer lugar.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Como é mantido o sigilo das informações?
              </h3>
              <p className="text-gray-600">
                Todas as informações compartilhadas são mantidas em absoluto sigilo, conforme o Código
                de Ética da Psicologia. Seu bem-estar e privacidade são minha prioridade.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Como funciona o orçamento e pagamento?
              </h3>
              <p className="text-gray-600">
                Faremos um orçamento personalizado baseado nas suas necessidades após nossa conversa inicial.
                Aceito diversas formas de pagamento: dinheiro, cartão, PIX e transferência.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export const Route = createFileRoute('/contato')({
  component: ContactPage,
})
