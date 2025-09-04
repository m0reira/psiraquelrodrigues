import { Link } from '@tanstack/react-router'

export function CallToAction() {
  return (
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
            Entre em contato
          </Link>
        </div>
      </div>
    </section>
  )
}
