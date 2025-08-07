import { createFileRoute } from '@tanstack/react-router'
import { GraduationCap, Award, Users, Clock, Heart, BookOpen } from 'lucide-react'
import { useSEO, seoConfigs } from '../hooks/useSEO'
import Breadcrumbs from '../components/Breadcrumbs'

function AboutPage() {
  // SEO Configuration
  useSEO(seoConfigs.sobre)

  return (
    <div>
      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: 'Sobre', href: '/sobre' }]} />
      </div>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Conheça Raquel Rodrigues
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Psicóloga dedicada ao cuidado da saúde mental, com formação sólida e
                experiência em terapia cognitivo-comportamental.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="w-80 h-80 bg-white/20 rounded-full flex items-center justify-center">
                <Heart className="w-32 h-32 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Sou Raquel Rodrigues, psicóloga formada pela Universidade de São Paulo (USP)
              e especialista em Terapia Cognitivo-Comportamental. Há mais de 8 anos dedico-me
              ao atendimento clínico, ajudando pessoas a superarem desafios emocionais e
              desenvolverem uma vida mais plena e equilibrada.
            </p>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Minha jornada na psicologia começou com o desejo profundo de contribuir para
              o bem-estar das pessoas. Ao longo dos anos, especializei-me em diversas áreas,
              sempre mantendo o foco no atendimento humanizado e baseado em evidências científicas.
            </p>

            <p className="text-lg text-gray-600 mb-12 leading-relaxed">
              Acredito que cada pessoa possui recursos internos únicos e meu papel é
              auxiliar na descoberta e fortalecimento dessas capacidades, criando um
              espaço seguro e acolhedor para o crescimento pessoal.
            </p>
          </div>
        </div>
      </section>

      {/* Qualifications */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Formação e Especialização
            </h2>
            <p className="text-xl text-gray-600">
              Educação contínua e especialização para oferecer o melhor atendimento
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <GraduationCap className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Graduação</h3>
              <p className="text-gray-600">
                <strong>Psicologia</strong><br />
                Universidade de São Paulo (USP)<br />
                2012 - 2016
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Especialização</h3>
              <p className="text-gray-600">
                <strong>Terapia Cognitivo-Comportamental</strong><br />
                Instituto de Psicologia USP<br />
                2017 - 2018
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <BookOpen className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Pós-Graduação</h3>
              <p className="text-gray-600">
                <strong>Psicologia Clínica</strong><br />
                PUC-SP<br />
                2019 - 2020
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience & Approach */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Experiência Profissional
              </h2>

              <div className="space-y-8">
                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-xl font-semibold mb-2">Consultório Particular</h3>
                  <p className="text-gray-600 mb-2">2017 - Presente</p>
                  <p className="text-gray-700">
                    Atendimento clínico individual e de casais, focando em transtornos
                    de ansiedade, depressão e desenvolvimento pessoal.
                  </p>
                </div>

                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-xl font-semibold mb-2">Hospital das Clínicas - USP</h3>
                  <p className="text-gray-600 mb-2">2016 - 2018</p>
                  <p className="text-gray-700">
                    Psicóloga hospitalar, atuando com pacientes em tratamento médico
                    e seus familiares.
                  </p>
                </div>

                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-xl font-semibold mb-2">Centro de Atenção Psicossocial</h3>
                  <p className="text-gray-600 mb-2">2015 - 2017</p>
                  <p className="text-gray-700">
                    Atendimento em saúde mental pública, trabalhando com diversos
                    transtornos psicológicos.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Minha Abordagem
              </h2>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Heart className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Humanizada</h4>
                    <p className="text-gray-600">
                      Cada pessoa é única, e o atendimento é personalizado respeitando
                      a individualidade e o ritmo de cada paciente.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <BookOpen className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Baseada em Evidências</h4>
                    <p className="text-gray-600">
                      Utilizo técnicas comprovadas cientificamente, principalmente da
                      Terapia Cognitivo-Comportamental.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Colaborativa</h4>
                    <p className="text-gray-600">
                      Terapeuta e paciente trabalham juntos na construção de estratégias
                      eficazes para superar desafios.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Focada em Resultados</h4>
                    <p className="text-gray-600">
                      Estabelecemos objetivos claros e trabalhamos de forma estruturada
                      para alcançá-los.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Vamos conversar?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Estou aqui para te ajudar em sua jornada de autoconhecimento e bem-estar.
            Entre em contato para agendar uma consulta inicial.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contato"
              className="bg-psychology text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Agendar Consulta
            </a>
            <a
              href="tel:+552197575345"
              className="border-2 border-psychology text-psychology px-8 py-3 rounded-lg font-semibold hover:bg-psychology hover:text-white transition-colors"
            >
              Ligar Agora
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export const Route = createFileRoute('/sobre')({
  component: AboutPage,
})
