import { createFileRoute } from '@tanstack/react-router'
import { Heart, Users, Brain, Clock, CheckCircle, MapPin, Video, MessageCircle } from 'lucide-react'
import { useWhatsApp } from '../hooks/useWhatsApp'
import { useSEO, seoConfigs } from '../hooks/useSEO'
import Breadcrumbs from '../components/Breadcrumbs'

function ServicesPage() {
  const { scheduleAppointment, requestInfo } = useWhatsApp()

  useSEO(seoConfigs.servicos)

  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: 'Serviços', href: '/servicos' }]} />
      </div>

      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Serviços Oferecidos
          </h1>
                    <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Atendimento psicológico online e presencial especializado para suas necessidades,
            com foco no seu bem-estar através de videochamadas seguras e eficazes.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Terapia Individual
              </h3>
                            <p className="text-gray-700 mb-6">
                Atendimento online personalizado por videochamada para questões como ansiedade, depressão,
                autoestima, relacionamentos e desenvolvimento pessoal.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-blue-500" />
                  <span className="text-gray-700">Transtornos de ansiedade</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-blue-500" />
                  <span className="text-gray-700">Depressão e tristeza</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-blue-500" />
                  <span className="text-gray-700">Autoestima e autoconhecimento</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-blue-500" />
                  <span className="text-gray-700">Síndrome do pânico</span>
                </li>
              </ul>
              <div className="text-center space-y-4">
                <div>
                                                      <span className="text-2xl font-bold text-blue-600">Fazer Orçamento</span>
                    <p className="text-gray-600 text-sm mt-1">Orçamento personalizado</p>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => scheduleAppointment('individual', 'service_page')}
                    className="flex-1 bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-600 transition-colors flex items-center justify-center space-x-1"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Agendar</span>
                  </button>
                  <button
                    onClick={() => requestInfo('individual', 'service_page')}
                    className="flex-1 border border-blue-500 text-blue-500 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-50 transition-colors"
                  >
                    Saiba mais
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Terapia de Casal
              </h3>
                            <p className="text-gray-700 mb-6">
                Trabalho online especializado por videochamada para casais que desejam melhorar a comunicação,
                resolver conflitos e fortalecer o relacionamento no conforto de casa.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-purple-500" />
                  <span className="text-gray-700">Problemas de comunicação</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-purple-500" />
                  <span className="text-gray-700">Conflitos recorrentes</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-purple-500" />
                  <span className="text-gray-700">Infidelidade</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-purple-500" />
                  <span className="text-gray-700">Planejamento familiar</span>
                </li>
              </ul>
              <div className="text-center space-y-4">
                <div>
                  <span className="text-2xl font-bold text-purple-600">Fazer Orçamento</span>
                  <p className="text-gray-600 text-sm mt-1">Consulta personalizada para casais</p>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => scheduleAppointment('couple', 'service_page')}
                    className="flex-1 bg-purple-500 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-purple-600 transition-colors flex items-center justify-center space-x-1"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Agendar</span>
                  </button>
                  <button
                    onClick={() => requestInfo('couple', 'service_page')}
                    className="flex-1 border border-purple-500 text-purple-500 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-purple-50 transition-colors"
                  >
                    Saiba mais
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-6">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Desenvolvimento Pessoal
              </h3>
                            <p className="text-gray-700 mb-6">
                Sessões online focadas no crescimento pessoal, autoconhecimento e
                desenvolvimento de habilidades emocionais através de videochamada.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Inteligência emocional</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Habilidades sociais</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Tomada de decisões</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Gestão do estresse</span>
                </li>
              </ul>
              <div className="text-center space-y-4">
                <div>
                  <span className="text-2xl font-bold text-green-600">Fazer Orçamento</span>
                  <p className="text-gray-600 text-sm mt-1">Primeira sessão de desenvolvimento</p>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => scheduleAppointment('development', 'service_page')}
                    className="flex-1 bg-green-500 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-green-600 transition-colors flex items-center justify-center space-x-1"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Agendar</span>
                  </button>
                  <button
                    onClick={() => requestInfo('development', 'service_page')}
                    className="flex-1 border border-green-500 text-green-500 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-green-50 transition-colors"
                  >
                    Saiba mais
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Modalidades de Atendimento
            </h2>
            <p className="text-xl text-gray-600">
              Priorizamos o atendimento online pela flexibilidade e conforto, mas também oferecemos presencial
            </p>
          </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-xl shadow-lg border-2 border-purple-200">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mr-4">
                  <Video className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-semibold">Atendimento Online ⭐</h3>
              </div>
              <p className="text-gray-700 mb-6 font-medium">
                Nossa modalidade principal: Sessões por videochamada com a mesma qualidade do atendimento presencial,
                no conforto e segurança da sua casa.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="font-medium">Máxima flexibilidade de horários</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="font-medium">Economia de tempo e deslocamento</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="font-medium">Plataforma segura e confidencial</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="font-medium">Conforto do seu ambiente</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-semibold">Atendimento Presencial</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Consultas em consultório localizado em Rocha Miranda, Rio de Janeiro,
                com ambiente acolhedor e privativo para quem prefere o contato presencial.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Ambiente controlado e privativo</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Fácil acesso por transporte público</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Horários mais limitados</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Como Funciona o Processo
            </h2>
            <p className="text-xl text-gray-600">
              Um processo estruturado e personalizado para seu bem-estar
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
                <h3 className="text-xl font-semibold mb-3">Conversa Inicial</h3>
                <p className="text-gray-600">
                Conversa inicial para nos conhecermos e você entender
                como posso ajudar no seu processo terapêutico.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Planejamento</h3>
              <p className="text-gray-600">
                Definimos juntos os objetivos terapêuticos e o plano de tratamento
                mais adequado para você.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Acompanhamento</h3>
              <p className="text-gray-600">
                Sessões regulares com técnicas baseadas em evidências científicas,
                sempre respeitando seu ritmo.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-yellow-600">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Resultados</h3>
              <p className="text-gray-600">
                Avaliação contínua do progresso e ajustes no tratamento para
                garantir os melhores resultados.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="text-center mb-8">
              <Clock className="w-16 h-16 text-blue-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Horários de Atendimento
              </h2>
              <p className="text-lg text-gray-600">
                Flexibilidade para se adequar à sua rotina
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Horários Disponíveis</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="font-medium">Segunda à Sexta</span>
                    <span className="text-gray-600">8h às 18h</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Sábado</span>
                    <span className="text-gray-600">8h às 12h</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Domingo</span>
                    <span className="text-gray-600">Fechado</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Informações Importantes</h3>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Sessões de 50 minutos</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Cancelamento até 24h antes</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Orçamento personalizado</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Horários de emergência disponíveis</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-psychology text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto para começar?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Solicite seu orçamento personalizado e dê o primeiro passo
            em direção ao seu bem-estar emocional.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contato"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Solicitar Orçamento
            </a>
            <a
                                href="tel:+5521969553695"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Ligar Agora
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export const Route = createFileRoute('/servicos')({
  component: ServicesPage,
}) as any
