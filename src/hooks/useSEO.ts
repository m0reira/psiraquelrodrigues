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

    updateMetaTag('description', description)
    if (keywords) updateMetaTag('keywords', keywords)
    updateMetaTag('robots', noindex ? 'noindex, nofollow' : 'index, follow')

    updateMetaTag('og:title', title, true)
    updateMetaTag('og:description', description, true)
    updateMetaTag('og:image', ogImage, true)
    if (canonical) updateMetaTag('og:url', canonical, true)

    updateMetaTag('twitter:title', title)
    updateMetaTag('twitter:description', description)
    updateMetaTag('twitter:image', ogImage)

    if (canonical) {
      let link = document.querySelector('link[rel="canonical"]')
      if (!link) {
        link = document.createElement('link')
        link.setAttribute('rel', 'canonical')
        document.head.appendChild(link)
      }
      link.setAttribute('href', canonical)
    }

    if (structuredData) {
      const script = document.createElement('script')
      script.type = 'application/ld+json'
      script.text = JSON.stringify(structuredData)
      script.id = 'page-structured-data'

      const existing = document.getElementById('page-structured-data')
      if (existing) {
        existing.remove()
      }

      document.head.appendChild(script)
    }

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
    title: 'Raquel Rodrigues - Psicóloga Online | Terapia Cognitivo-Comportamental RJ',
    description: 'Psicóloga Raquel Rodrigues - Atendimento online e presencial no Rio de Janeiro. Especialista em terapia cognitivo-comportamental, ansiedade, depressão e terapia de casal. Consultas por videochamada com a mesma eficácia. Primeira consulta gratuita.',
    keywords: 'psicóloga online, terapia online, psicóloga rio de janeiro, terapia cognitivo-comportamental, ansiedade, depressão, terapia de casal online, videochamada psicologia, consulta psicológica online, primeira consulta gratuita',
    canonical: 'https://raquelrodrigues.com.br'
  },

  sobre: {
    title: 'Sobre Raquel Rodrigues - Psicóloga Online Especialista em TCC | Rio de Janeiro',
    description: 'Conheça a trajetória da psicóloga Raquel Rodrigues. Especialista em Terapia Cognitivo-Comportamental com mais de 8 anos de experiência clínica. Atendimento online e presencial no Rio de Janeiro com a mesma qualidade terapêutica.',
    keywords: 'raquel rodrigues, psicóloga online, terapia cognitivo-comportamental online, formação psicologia, experiência clínica, rio de janeiro, atendimento virtual',
    canonical: 'https://raquelrodrigues.com.br/sobre'
  },

  servicos: {
    title: 'Psicologia Online | Terapia Individual, Casal por Videochamada - RJ',
    description: 'Serviços de psicologia online e presencial: Terapia Individual por videochamada (R$ 150), Terapia de Casal online (R$ 200), Desenvolvimento Pessoal virtual (R$ 130). Atendimento psicológico à distância com a mesma eficácia do presencial.',
    keywords: 'psicologia online, terapia individual online, terapia de casal online, desenvolvimento pessoal online, videochamada psicologia, consulta virtual, preços psicologia online, rio de janeiro, atendimento psicológico virtual',
    canonical: 'https://raquelrodrigues.com.br/servicos'
  },

  contato: {
    title: 'Agende sua Consulta Online | Psicóloga Raquel Rodrigues RJ',
    description: 'Agende sua consulta online ou presencial com a psicóloga Raquel Rodrigues. Primeira consulta gratuita por videochamada. Atendimento virtual e presencial no Rio de Janeiro. WhatsApp: (21) 9 6955-3695. Flexibilidade de horários para consultas online.',
    keywords: 'agendar consulta online, psicóloga online, primeira consulta gratuita online, whatsapp psicóloga, videochamada psicologia, consulta virtual, rio de janeiro, raquel rodrigues, agendamento online',
    canonical: 'https://raquelrodrigues.com.br/contato'
  }
}

export default useSEO
