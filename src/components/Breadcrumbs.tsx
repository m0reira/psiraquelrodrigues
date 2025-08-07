import { Link } from '@tanstack/react-router'
import { ChevronRight, Home } from 'lucide-react'
import StructuredData from './StructuredData'

interface BreadcrumbItem {
  name: string
  href: string
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
}

const Breadcrumbs = ({ items }: BreadcrumbsProps) => {
  // Generate structured data for breadcrumbs
  const structuredDataItems = [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Início",
      "item": "https://raquelrodrigues.com.br"
    },
    ...items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 2,
      "name": item.name,
      "item": `https://raquelrodrigues.com.br${item.href}`
    }))
  ]

  return (
    <>
      <StructuredData
        type="breadcrumb"
        data={{ items: structuredDataItems }}
      />

      <nav aria-label="Breadcrumb" className="py-4">
        <ol className="flex items-center space-x-2 text-sm text-gray-600">
          <li>
            <Link
              to="/"
              className="flex items-center hover:text-psychology transition-colors"
              aria-label="Voltar ao início"
            >
              <Home className="w-4 h-4" />
              <span className="sr-only">Início</span>
            </Link>
          </li>

          {items.map((item, index) => (
            <li key={item.href} className="flex items-center">
              <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
              {index === items.length - 1 ? (
                <span
                  className="font-medium text-gray-900"
                  aria-current="page"
                >
                  {item.name}
                </span>
              ) : (
                <Link
                  to={item.href as any}
                  className="hover:text-psychology transition-colors"
                >
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  )
}

export default Breadcrumbs
