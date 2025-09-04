import { createFileRoute } from "@tanstack/react-router";
import { Users, Clock, Heart, BookOpen } from "lucide-react";
import { useSEO, seoConfigs } from "../hooks/useSEO";
import Breadcrumbs from "../components/Breadcrumbs";

function AboutPage() {
  useSEO(seoConfigs.sobre);

  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: "Sobre", href: "/sobre" }]} />
      </div>

      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Conheça Raquel Rodrigues</h1>
              <p className="text-xl text-blue-100 mb-8">
                Psicóloga clínica com abordagem existencial-humanista, oferecendo acolhimento,
                escuta e presença no processo terapêutico.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl">
                <img
                  src="/psicologaraquelrodrigues.jpeg"
                  alt="Raquel Rodrigues - Psicóloga Clínica"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 md:mb-8">Quem sou eu?</h2>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Sou Raquel Rodrigues, psicóloga clínica com registro no Conselho Regional de Psicologia
              do Rio de Janeiro (CRP 05/58703). Atuo há mais de 5 anos oferecendo atendimento psicológico para crianças,
              adultos e idosos, de forma online e presencial.
            </p>

            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Minha atuação é fundamentada na abordagem existencial-humanista, que compreende o ser humano
              como único, livre e em constante construção.
            </p>

            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Ao longo da minha trajetória, venho me aprofundando no acompanhamento de questões como
              ansiedade (TAG, síndrome do pânico), depressão, luto, transtorno bipolar e transtorno de
              personalidade borderline. Acredito que a escuta genuína e o acolhimento são caminhos potentes
              para o cuidado emocional 💜
            </p>
          </div>
        </div>
      </section>

      <section className="py-8 md:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-12">Minha Abordagem</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Heart className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Abordagem Existencial-Humanista</h4>
                    <p className="text-gray-600">
                      Compreendo o ser humano como único, livre e em constante construção, respeitando
                      a individualidade de cada pessoa.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <BookOpen className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Escuta Genuína</h4>
                    <p className="text-gray-600">
                      A escuta genuína e o acolhimento são caminhos potentes para o cuidado emocional,
                      criando um espaço seguro de encontro.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Autoconhecimento</h4>
                    <p className="text-gray-600">
                      Um convite ao autoconhecimento, à autenticidade e à construção de sentido para a vida,
                      mais do que tratar sintomas.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Presença Terapêutica</h4>
                    <p className="text-gray-600">
                      Estar presente e disponível para quem busca compreender sua dor, suas escolhas
                      e seus caminhos de crescimento pessoal.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Vamos conversar?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Estou aqui para te ajudar em sua jornada de autoconhecimento e bem-estar. Entre em contato para
            agendar uma consulta inicial.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/5521969553695?text=Olá! Vim através do seu site e gostaria de conversar com você. Tenho interesse em saber mais sobre valores, duração das sessões e sua disponibilidade de horários."
              className="border-2 border-psychology text-psychology px-8 py-3 rounded-lg font-semibold hover:bg-psychology hover:text-blue-600 transition-colors"
            >
              Enviar mensagem
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export const Route = createFileRoute('/sobre')({
  component: AboutPage,
}) as any;
