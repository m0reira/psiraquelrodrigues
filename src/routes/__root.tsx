import { createRootRoute, Link, Outlet, useLocation } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { Menu, X, Phone, Mail, MessageCircle, Users, Heart, Home } from 'lucide-react'
import { useState, useEffect } from 'react'
import WhatsAppFloat from '../components/WhatsAppFloat'
import { useWhatsAppAnalytics } from '../utils/whatsappAnalytics'
import StructuredData from '../components/StructuredData'

function RootComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { trackClick } = useWhatsAppAnalytics()
  const location = useLocation()

  const [isBottomBarVisible, setIsBottomBarVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    const timeoutId = setTimeout(() => {
      requestAnimationFrame(scrollToTop)
    }, 50)

    return () => clearTimeout(timeoutId)
  }, [location.pathname])

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsBottomBarVisible(false)
      } else {
        setIsBottomBarVisible(true)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [lastScrollY])

  const handleMenuLinkClick = () => {
    setIsMenuOpen(false)
  }

  const getBottomBarItems = () => {
    const currentPath = location.pathname

    if (currentPath === '/') {
      return [
        { to: '/sobre', icon: Users, label: 'Sobre', isActive: false },
        { to: '/servicos', icon: Heart, label: 'Serviços', isActive: false },
        { to: '/contato', icon: Phone, label: 'Contato', isActive: false },
        {
          href: 'https://wa.me/5521969553695?text=Olá! eu vim do seu site e gostaria de ter mais informações sobre a terapia online.',
          icon: MessageCircle,
          label: 'WhatsApp',
          isExternal: true
        }
      ]
    }

    return [
      { to: '/', icon: Home, label: 'Início', isActive: false },
      ...(currentPath !== '/sobre' ? [{ to: '/sobre', icon: Users, label: 'Sobre', isActive: false }] : []),
      ...(currentPath !== '/servicos' ? [{ to: '/servicos', icon: Heart, label: 'Serviços', isActive: false }] : []),
      ...(currentPath !== '/contato' ? [{ to: '/contato', icon: Phone, label: 'Contato', isActive: false }] : []),
      {
        href: 'https://wa.me/5521969553695?text=Olá! eu vim do seu site e gostaria de ter mais informações sobre a terapia online.',
        icon: MessageCircle,
        label: 'WhatsApp',
        isExternal: true
      }
    ]
  }

  return (
    <>
      <StructuredData type="psychologist" />
      <StructuredData type="organization" />

      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
        <header className="bg-white shadow-sm sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <Link to="/" className="text-2xl font-bold text-psychology">
                Raquel Rodrigues
              </Link>

              <nav className="hidden md:flex space-x-8">
                <Link
                  to="/"
                  className="text-gray-700 hover:text-psychology transition-colors"
                  activeProps={{
                    className: "text-psychology font-semibold"
                  }}
                >
                  Início
                </Link>
                <Link
                  to="/sobre"
                  className="text-gray-700 hover:text-psychology transition-colors"
                  activeProps={{
                    className: "text-psychology font-semibold"
                  }}
                >
                  Sobre
                </Link>
                <Link
                  to="/servicos"
                  className="text-gray-700 hover:text-psychology transition-colors"
                  activeProps={{
                    className: "text-psychology font-semibold"
                  }}
                >
                  Serviços
                </Link>
                <Link
                  to="/contato"
                  className="text-gray-700 hover:text-psychology transition-colors"
                  activeProps={{
                    className: "text-psychology font-semibold"
                  }}
                >
                  Contato
                </Link>
              </nav>

              <div className="hidden lg:flex items-center space-x-4">
                <a
                  href="https://wa.me/5521969553695?text=Olá! eu vim do seu site e gostaria de ter mais informações sobre a terapia online."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-sm text-gray-600 hover:text-green-600 transition-colors cursor-pointer"
                  title="Clique para abrir no WhatsApp"
                  onClick={() => trackClick(undefined, 'home_page')}
                >
                  <Phone className="h-4 w-4" />
                  <span>(21) 96955-3695</span>
                  <MessageCircle className="h-3 w-3 text-green-500" />
                </a>
                <a
                  href="mailto:psi.raquelrodrigues@gmail.com?subject=Agendamento de Consulta"
                  className="flex items-center space-x-2 text-sm text-gray-600 hover:text-blue-600 transition-colors"
                  title="Clique para enviar e-mail"
                >
                  <Mail className="h-4 w-4" />
                  <span>psi.raquelrodrigues@gmail.com</span>
                </a>
              </div>

              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>

            {isMenuOpen && (
              <div className="md:hidden py-4 border-t">
                <nav className="flex flex-col space-y-4">
                  <Link
                    to="/"
                    className="text-gray-700 hover:text-psychology transition-colors"
                    onClick={handleMenuLinkClick}
                  >
                    Início
                  </Link>
                  <Link
                    to="/sobre"
                    className="text-gray-700 hover:text-psychology transition-colors"
                    onClick={handleMenuLinkClick}
                  >
                    Sobre
                  </Link>
                  <Link
                    to="/servicos"
                    className="text-gray-700 hover:text-psychology transition-colors"
                    onClick={handleMenuLinkClick}
                  >
                    Serviços
                  </Link>
                  <Link
                    to="/contato"
                    className="text-gray-700 hover:text-psychology transition-colors"
                    onClick={handleMenuLinkClick}
                  >
                    Contato
                  </Link>
                </nav>
                <div className="mt-4 pt-4 border-t space-y-2">
                  <a
                    href="https://wa.me/5521969553695?text=Olá! eu vim do seu site e gostaria de ter mais informações sobre a terapia online."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-sm text-gray-600 hover:text-green-600 transition-colors"
                    title="Clique para abrir no WhatsApp"
                    onClick={() => {
                      trackClick(undefined, 'home_page')
                      setIsMenuOpen(false)
                    }}
                  >
                    <Phone className="h-4 w-4" />
                    <span>(21) 96955-3695</span>
                    <MessageCircle className="h-3 w-3 text-green-500" />
                  </a>
                  <a
                    href="mailto:psi.raquelrodrigues@gmail.com?subject=Agendamento de Consulta"
                    className="flex items-center space-x-2 text-sm text-gray-600 hover:text-blue-600 transition-colors"
                    title="Clique para enviar e-mail"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Mail className="h-4 w-4" />
                    <span>psi.raquelrodrigues@gmail.com</span>
                  </a>
                </div>
              </div>
            )}
          </div>
        </header>

        <main>
          <Outlet />
        </main>

        <footer className="bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Raquel Rodrigues</h3>
                <p className="text-gray-300 mb-4">
                  Psicóloga especializada em terapia existencial-humanista,
                  oferecendo atendimento humanizado e personalizado.
                </p>
                <a
                  href="https://wa.me/5521969553695?text=Olá! eu vim do seu site e gostaria de ter mais informações sobre a terapia online."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-300 hover:text-green-400 transition-colors"
                  title="Clique para abrir no WhatsApp"
                  onClick={() => trackClick(undefined, 'home_page')}
                >
                  <Phone className="h-4 w-4" />
                  <span>(21) 96955-3695</span>
                  <MessageCircle className="h-3 w-3 text-green-500" />
                </a>
                <a
                  href="mailto:psi.raquelrodrigues@gmail.com?subject=Agendamento de Consulta"
                  className="flex items-center space-x-2 text-gray-300 hover:text-blue-400 transition-colors mt-2"
                  title="Clique para enviar e-mail"
                >
                  <Mail className="h-4 w-4" />
                  <span>psi.raquelrodrigues@gmail.com</span>
                </a>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4">Navegação</h4>
                <ul className="space-y-2">
                  <li>
                    <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                      Início
                    </Link>
                  </li>
                  <li>
                    <Link to="/sobre" className="text-gray-300 hover:text-white transition-colors">
                      Sobre
                    </Link>
                  </li>
                  <li>
                    <Link to="/servicos" className="text-gray-300 hover:text-white transition-colors">
                      Serviços
                    </Link>
                  </li>
                  <li>
                    <Link to="/contato" className="text-gray-300 hover:text-white transition-colors">
                      Contato
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4">Horário de Atendimento</h4>
                <div className="text-gray-300 space-y-2">
                  <p>Segunda à Sexta: 9h às 19h</p>
                  <p>Sábado: 9h às 13h</p>
                  <p>Domingo: Fechado</p>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; {new Date().getFullYear()} Raquel Rodrigues - Psicóloga. Todos os direitos reservados.</p>
            </div>
          </div>
        </footer>
      </div>

      <WhatsAppFloat />


      <nav className={`fixed bottom-0 left-0 right-0 md:hidden bg-white border-t border-gray-200 py-2 z-50 shadow-lg bottom-bar-smooth ${
        isBottomBarVisible ? 'translate-y-0' : 'translate-y-full'
      }`}>
        <div className="flex justify-around items-center">
          {getBottomBarItems().map((item, index) => {
            const IconComponent = item.icon

            if (item.isExternal) {
              return (
                <a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center py-2 px-3 text-gray-600 hover:text-psychology transition-colors"
                >
                  <IconComponent className="w-5 h-5 mb-1" />
                  <span className="text-xs">{item.label}</span>
                </a>
              )
            }

            return (
              <Link
                key={index}
                to={item.to}
                className="flex flex-col items-center py-2 px-3 text-gray-600 hover:text-psychology transition-colors"
              >
                <IconComponent className="w-5 h-5 mb-1" />
                <span className="text-xs">{item.label}</span>
              </Link>
            )
          })}
        </div>
      </nav>

      {!(import.meta as any).env.PROD && <TanStackRouterDevtools />}
    </>
  )
}

export const Route = createRootRoute({
  component: RootComponent,
})
