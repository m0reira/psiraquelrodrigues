import { Link } from '@tanstack/react-router'
import { Clock, MapPin, Phone } from 'lucide-react'

export function About() {
  return (
    <section className="py-8 bg-white md:bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Sobre Raquel Rodrigues
            </h2>

            <div className="lg:hidden flex justify-center mb-8">
              <div className="w-64 h-64 rounded-full overflow-hidden shadow-lg">
                <img
                  src="/raquelrodrigues.jpeg"
                  alt="Raquel Rodrigues - Psicóloga"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className=''>
              <p className="text-lg text-gray-600 mb-4">
                Psicóloga clínica com mais de 5 anos de experiência, especializada na
                abordagem existencial-humanista que compreende o ser humano como único e livre.
              </p>
              <p className="text-lg text-gray-600 mb-4">
              Nesse período, venho me aprofundando no acompanhamento de questões como ansiedade (TAG, síndrome do pânico), depressão, luto, transtorno bipolar e transtorno de personalidade borderline.
              </p>
              <p className="text-lg text-gray-600 mb-6">
              Acredito que a escuta genuína e o acolhimento são caminhos potentes para o cuidado emocional.
              </p>
              </div>

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
                  <h4 className="font-semibold">Conversa Inicial</h4>
                  <p className="text-gray-600">Solicite seu orçamento online por videochamada</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
