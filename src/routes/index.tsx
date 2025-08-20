import { createFileRoute, Link } from '@tanstack/react-router'
import { Heart, Brain, Users, Clock, MapPin, Phone } from 'lucide-react'
import { useSEO, seoConfigs } from '../hooks/useSEO'

function HomePage() {
  // SEO Configuration
  useSEO(seoConfigs.home)

  return (
    <div>
      {/* Hero Section */}
      <section className="gradient-psychology text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
                            <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Raquel Rodrigues
                <span className="block text-yellow-300 text-3xl md:text-4xl">Psicóloga Clínica</span>
                <span className="block text-xl md:text-2xl text-blue-200 mt-2">Acolhimento, escuta e presença</span>
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Atendimento psicológico para crianças, adultos e idosos, de forma presencial e online.
                Abordagem existencial-humanista com mais de 5 anos de experiência.
                Um espaço de encontro consigo mesmo.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contato"
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-center"
                >
                  Agendar Consulta
                </Link>
                <Link
                  to="/sobre"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-center"
                >
                  Conheça-me
                </Link>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="w-80 h-80 bg-white/20 rounded-full flex items-center justify-center">
                <Brain className="w-32 h-32 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Como posso te ajudar?
            </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Atendimento psicológico fundamentado na abordagem existencial-humanista,
              compreendendo o ser humano como único, livre e em constante construção.
              Um convite ao autoconhecimento, à autenticidade e à construção de sentido para a vida.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Ansiedade e Depressão</h3>
                            <p className="text-gray-600">
                Acompanhamento especializado para ansiedade (TAG, síndrome do pânico), depressão,
                luto, transtorno bipolar e transtorno de personalidade borderline.
              </p>
            </div>

            <div className="text-center p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Terapia de Casal</h3>
                            <p className="text-gray-600">
                Espaço de escuta genuína e acolhimento para casais, promovendo
                o autoconhecimento e a construção de relacionamentos mais autênticos.
              </p>
            </div>

            <div className="text-center p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Brain className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Desenvolvimento Pessoal</h3>
                            <p className="text-gray-600">
                Um convite ao autoconhecimento e à autenticidade, promovendo
                a construção de sentido para a vida e o cuidado emocional.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/servicos"
              className="bg-psychology text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Ver Todos os Serviços
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Sobre Raquel Rodrigues
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Psicóloga clínica com mais de 5 anos de experiência, especializada na
                abordagem existencial-humanista que compreende o ser humano como único e livre.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                A psicoterapia é um espaço de encontro consigo mesmo. Acredito que a escuta
                genuína e o acolhimento são caminhos potentes para o cuidado emocional,
                mais do que tratar sintomas, estar presente para quem busca compreender sua dor.
              </p>
              <Link
                to="/sobre"
                className="text-psychology font-semibold hover:text-blue-700 transition-colors"
              >
                Saiba mais sobre mim →
              </Link>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Horários Flexíveis</h4>
                    <p className="text-gray-600">Segunda à sábado, manhã e tarde</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Atendimento Online Prioritário</h4>
                    <p className="text-gray-600">Videochamada segura e consultório no RJ</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Primeira Consulta Online</h4>
                    <p className="text-gray-600">Avaliação inicial gratuita por videochamada</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-psychology text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto para começar sua jornada?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            O primeiro passo para uma vida mais equilibrada e feliz está a um clique de distância.
            Vamos conversar sobre como posso te ajudar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contato"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Agendar Consulta
            </Link>
            <a
                                href="tel:+552196955369"
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

export const Route = createFileRoute('/')({
  component: HomePage,
})
