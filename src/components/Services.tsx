import { Link } from '@tanstack/react-router'
import { Heart, Users, Brain } from 'lucide-react'

export function Services() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Como posso te ajudar?
          </h2>
          <div className="text-xl text-gray-600 max-w-3xl mx-auto space-y-4">
            <p>
              Atendimento com abordagem existencial-humanista, com mais de 5 anos de experiência.
            </p>
            <p>
              Tratamentos de ansiedade, depressão, relacionamentos, TDAH, transtornos de personalidade e neurodiversidades.
            </p>
          </div>
        </div>

        <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8">
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
  )
}
