import { useEffect } from 'react'

interface SEOProps {
  title: string
  description: string
  keywords?: string
  canonical?: string
  ogImage?: string
  noindex?: boolean
  structuredData?: any
}

export const useSEO = ({
  title,
  description,
  keywords,
  canonical,
  ogImage = 'https://raquelrodrigues.com.br/og-image.jpg',
  noindex = false,
  structuredData
}: SEOProps) => {
  useEffect(() => {
    // Update title
    document.title = title

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, property?: boolean) => {
      const attribute = property ? 'property' : 'name'
      let meta = document.querySelector(`meta[${attribute}="${name}"]`)

      if (!meta) {
        meta = document.createElement('meta')
        meta.setAttribute(attribute, name)
        document.head.appendChild(meta)
      }

      meta.setAttribute('content', content)
    }

    // Basic meta tags
    updateMetaTag('description', description)
    if (keywords) updateMetaTag('keywords', keywords)
    updateMetaTag('robots', noindex ? 'noindex, nofollow' : 'index, follow')

    // Open Graph tags
    updateMetaTag('og:title', title, true)
    updateMetaTag('og:description', description, true)
    updateMetaTag('og:image', ogImage, true)
    if (canonical) updateMetaTag('og:url', canonical, true)

    // Twitter Cards
    updateMetaTag('twitter:title', title)
    updateMetaTag('twitter:description', description)
    updateMetaTag('twitter:image', ogImage)

    // Canonical URL
    if (canonical) {
      let link = document.querySelector('link[rel="canonical"]')
      if (!link) {
        link = document.createElement('link')
        link.setAttribute('rel', 'canonical')
        document.head.appendChild(link)
      }
      link.setAttribute('href', canonical)
    }

    // Structured Data
    if (structuredData) {
      const script = document.createElement('script')
      script.type = 'application/ld+json'
      script.text = JSON.stringify(structuredData)
      script.id = 'page-structured-data'

      // Remove existing page structured data
      const existing = document.getElementById('page-structured-data')
      if (existing) {
        existing.remove()
      }

      document.head.appendChild(script)
    }

    // Cleanup function
    return () => {
      if (structuredData) {
        const script = document.getElementById('page-structured-data')
        if (script) {
          script.remove()
        }
      }
    }
  }, [title, description, keywords, canonical, ogImage, noindex, structuredData])
}

// Predefined SEO configurations for different pages
export const seoConfigs = {
  home: {
    title: 'Raquel Rodrigues - Psicóloga | Terapia Cognitivo-Comportamental RJ',
    description: 'Psicóloga Raquel Rodrigues no Rio de Janeiro. Especialista em terapia cognitivo-comportamental, ansiedade, depressão e terapia de casal. Atendimento presencial e online. Primeira consulta gratuita.',
    keywords: 'psicóloga, rio de janeiro, terapia cognitivo-comportamental, ansiedade, depressão, terapia de casal, psicologia, atendimento online, primeira consulta gratuita',
    canonical: 'https://raquelrodrigues.com.br'
  },

  sobre: {
    title: 'Sobre Raquel Rodrigues - Psicóloga Especialista em TCC | Rio de Janeiro',
    description: 'Conheça a trajetória da psicóloga Raquel Rodrigues. Formada pela USP, especialista em Terapia Cognitivo-Comportamental com mais de 8 anos de experiência clínica no Rio de Janeiro.',
    keywords: 'raquel rodrigues, psicóloga usp, terapia cognitivo-comportamental, formação psicologia, experiência clínica, rio de janeiro',
    canonical: 'https://raquelrodrigues.com.br/sobre'
  },

  servicos: {
    title: 'Serviços de Psicologia | Terapia Individual, Casal e Online - RJ',
    description: 'Conheça os serviços de psicologia oferecidos: Terapia Individual (R$ 150), Terapia de Casal (R$ 200), Desenvolvimento Pessoal (R$ 130). Atendimento presencial e online no Rio de Janeiro.',
    keywords: 'terapia individual, terapia de casal, desenvolvimento pessoal, psicologia online, preços psicologia, rio de janeiro, atendimento psicológico',
    canonical: 'https://raquelrodrigues.com.br/servicos'
  },

  contato: {
    title: 'Contato - Agende sua Consulta | Psicóloga Raquel Rodrigues RJ',
    description: 'Entre em contato com a psicóloga Raquel Rodrigues. Primeira consulta gratuita. Atendimento no Rio de Janeiro. WhatsApp: (21) 97575-5345. Agende sua sessão de psicologia.',
    keywords: 'contato psicóloga, agendar consulta, primeira consulta gratuita, whatsapp psicóloga, rio de janeiro, raquel rodrigues',
    canonical: 'https://raquelrodrigues.com.br/contato'
  }
}

export default useSEO
