import { createFileRoute } from '@tanstack/react-router'
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from 'lucide-react'
import { useState } from 'react'
import { useSEO, seoConfigs } from '../hooks/useSEO'
import Breadcrumbs from '../components/Breadcrumbs'

function ContactPage() {
  // SEO Configuration
  useSEO(seoConfigs.contato)

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    service: '',
    preferredTime: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simular envio do formulário
    await new Promise(resolve => setTimeout(resolve, 1000))

    setSubmitted(true)
    setIsSubmitting(false)

    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        service: '',
        preferredTime: ''
      })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div>
      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: 'Contato', href: '/contato' }]} />
      </div>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Entre em Contato
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Estou aqui para te ajudar. Entre em contato para agendar sua consulta
            ou tirar suas dúvidas sobre o atendimento psicológico.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Agende sua Consulta
              </h2>

              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-green-800 mb-2">
                    Mensagem Enviada!
                  </h3>
                  <p className="text-green-700">
                    Obrigada pelo seu contato. Retornarei em breve para agendar sua consulta.
                  </p>
                </div>
              ) : (
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
                        Telefone *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="(21) 97575-5345"
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
                        <option value="individual">Terapia Individual</option>
                        <option value="casal">Terapia de Casal</option>
                        <option value="desenvolvimento">Desenvolvimento Pessoal</option>
                        <option value="consulta">Apenas uma consulta</option>
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
                      <option value="manha">Manhã (8h às 12h)</option>
                      <option value="tarde">Tarde (13h às 17h)</option>
                      <option value="noite">Noite (18h às 20h)</option>
                      <option value="sabado">Sábado (8h às 12h)</option>
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
                    disabled={isSubmitting}
                    className="w-full bg-psychology text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        <span>Enviando...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Enviar Mensagem</span>
                      </>
                    )}
                  </button>

                  <p className="text-sm text-gray-500 text-center">
                    * Campos obrigatórios. Suas informações são mantidas em sigilo absoluto.
                  </p>
                </form>
              )}
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Informações de Contato
              </h2>

              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Telefone</h3>
                    <p className="text-gray-600 mb-2">(21) 97575-5345</p>
                    <p className="text-sm text-gray-500">
                      WhatsApp disponível para agendamentos
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">E-mail</h3>
                    <p className="text-gray-600 mb-2">contato@raquelrodrigues.com</p>
                    <p className="text-sm text-gray-500">
                      Resposta em até 24 horas
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Endereço</h3>
                    <p className="text-gray-600 mb-2">
                      Rua Augusta, 1234 - Sala 567<br />
                      Consolação, São Paulo - SP<br />
                      CEP: 01234-567
                    </p>
                    <p className="text-sm text-gray-500">
                      Próximo ao metrô Consolação
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Horários</h3>
                    <div className="text-gray-600 space-y-1">
                      <p>Segunda à Sexta: 8h às 18h</p>
                      <p>Sábado: 8h às 12h</p>
                      <p>Domingo: Fechado</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="mt-12 space-y-4">
                <h3 className="text-xl font-semibold mb-4">Ações Rápidas</h3>

                <a
                  href="tel:+552197575345"
                  className="w-full bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Ligar Agora</span>
                </a>

                <a
                  href="https://wa.me/552197575345?text=Olá! Gostaria de agendar uma consulta com a Psicóloga Raquel Rodrigues."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-green-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-600 transition-colors flex items-center justify-center space-x-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>WhatsApp</span>
                </a>

                <a
                  href="mailto:contato@raquelrodrigues.com?subject=Agendamento de Consulta"
                  className="w-full border-2 border-psychology text-psychology py-3 px-6 rounded-lg font-semibold hover:bg-psychology hover:text-white transition-colors flex items-center justify-center space-x-2"
                >
                  <Mail className="w-5 h-5" />
                  <span>Enviar E-mail</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Perguntas Frequentes
            </h2>
            <p className="text-xl text-gray-600">
              Algumas dúvidas comuns sobre o atendimento
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-3">
                Como funciona a primeira consulta?
              </h3>
              <p className="text-gray-600">
                A primeira consulta é gratuita e dura 30 minutos. É um momento para nos conhecermos,
                você falar sobre suas necessidades e eu explicar como posso te ajudar.
                Sem compromisso ou pressão.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-3">
                Qual a diferença entre atendimento presencial e online?
              </h3>
              <p className="text-gray-600">
                Ambos têm a mesma eficácia terapêutica. O presencial oferece o contato direto,
                enquanto o online proporciona maior flexibilidade e comodidade.
                A escolha depende da sua preferência e disponibilidade.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-3">
                Com que frequência são as sessões?
              </h3>
              <p className="text-gray-600">
                Geralmente, recomendo sessões semanais no início do tratamento.
                Conforme o progresso, podemos espaçar para quinzenal ou mensal.
                Tudo é decidido em conjunto, respeitando suas necessidades.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-3">
                O sigilo é garantido?
              </h3>
              <p className="text-gray-600">
                Sim, absolutamente. O sigilo profissional é fundamental na psicologia.
                Tudo o que for conversado em sessão é mantido em total confidencialidade,
                conforme o Código de Ética da profissão.
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
