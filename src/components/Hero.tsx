import { Link } from '@tanstack/react-router'

export function Hero() {
  return (
    <section className="gradient-psychology text-white py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-10 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Raquel Rodrigues
              <span className="block text-yellow-300 text-3xl md:text-4xl mt-2">Psicóloga Online</span>
              <span className="block text-xl md:text-2xl text-blue-200 mt-2">Tratamentos de ansiedade, depressão e relacionamentos</span>
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Atendimento psicológico para crianças, adultos e idosos, de forma online ou presencial.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/5521969553695?text=Olá! eu vim do seu site e gostaria de ter mais informações sobre a terapia online."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => console.log("Clique no whatsapp")}
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-center"
              >
                Converse comigo
              </a>
              <Link
                to="/sobre"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-center"
              >
                Saiba mais sobre mim
              </Link>
            </div>
          </div>
          <div className="hidden md:flex justify-center lg:justify-end">
            <div className="w-96 h-96 rounded-full overflow-hidden shadow-2xl">
              <img
                src="/raquelrodrigues.jpeg"
                alt="Raquel Rodrigues - Psicóloga"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
