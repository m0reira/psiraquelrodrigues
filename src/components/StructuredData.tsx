import { useEffect } from 'react'

interface StructuredDataProps {
  type: 'psychologist' | 'service' | 'organization' | 'breadcrumb'
  data?: any
}

const StructuredData = ({ type, data }: StructuredDataProps) => {
  useEffect(() => {
    const generateSchema = () => {
      switch (type) {
        case 'psychologist':
          return {
            "@context": "https://schema.org",
            "@type": "Person",
            "@id": "https://psicologaraquelrodrigues.com.br/#psychologist",
            "name": "Raquel Rodrigues",
            "jobTitle": "Psicóloga",
            "description": "Psicóloga Online - Raquel Rodrigues | Terapia online para ansiedade, depressão e relacionamentos.",
                    "url": "https://psicologaraquelrodrigues.com.br",
        "image": "https://psicologaraquelrodrigues.com.br/raquelrodrigues.jpeg",
            "telephone": "+5521969553695",
            "email": "psi.raquelrodrigues@gmail.com",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Rua dos Rubis, 144",
              "addressLocality": "Rocha Miranda",
              "addressRegion": "RJ",
              "postalCode": "21510-200",
              "addressCountry": "BR"
            },
            "hasCredential": [
              {
                "@type": "EducationalOccupationalCredential",
                "name": "Graduação em Psicologia",
                "educationalLevel": "Graduação",
                "credentialCategory": "Diploma",
                "recognizedBy": {
                  "@type": "Organization",
                  "name": "Universidade Federal do Rio de Janeiro (UFRJ)"
                }
              },
              {
                "@type": "EducationalOccupationalCredential",
                "name": "Especialização em Terapia Existencial-Humanista",
                "educationalLevel": "Especialização",
                "credentialCategory": "Certificado",
                "recognizedBy": {
                  "@type": "Organization",
                  "name": "Instituto de Psicologia UFRJ"
                }
              }
            ],
            "knowsAbout": [
              "Terapia Existencial-Humanista",
              "Ansiedade",
              "Depressão",
              "Terapia de Casal",
              "Desenvolvimento Pessoal",
              "Psicologia Clínica"
            ],
            "memberOf": {
              "@type": "Organization",
              "name": "Conselho Regional de Psicologia"
            }
          }

        case 'organization':
          return {
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "@id": "https://psicologaraquelrodrigues.com.br/#organization",
            "name": "Raquel Rodrigues - Psicóloga",
            "description": "Psicóloga Online - Raquel Rodrigues | Terapia online para ansiedade, depressão e relacionamentos.",
            "url": "https://psicologaraquelrodrigues.com.br",
            "telephone": "+5521969553695",
            "email": "psi.raquelrodrigues@gmail.com",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Rua dos Rubis, 144",
              "addressLocality": "Rocha Miranda",
              "addressRegion": "RJ",
              "postalCode": "21510-200",
              "addressCountry": "BR"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": -22.8561,
              "longitude": -43.3403
            },
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "08:00",
                "closes": "18:00"
              },
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": "Saturday",
                "opens": "08:00",
                "closes": "12:00"
              }
            ],
                          "priceRange": "Orçamento personalizado",
            "paymentAccepted": ["Dinheiro", "Cartão", "PIX", "Transferência"],
            "areaServed": {
              "@type": "State",
              "name": "Rio de Janeiro"
            },
            "serviceType": "Psicologia Clínica",
            "provider": {
              "@id": "https://psicologaraquelrodrigues.com.br/#psychologist"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Serviços de Psicologia",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Terapia Individual",
                    "description": "Atendimento psicológico individual online por videochamada com foco em ansiedade, depressão e desenvolvimento pessoal"
                  },
                  "price": "150",
                  "priceCurrency": "BRL"
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Terapia de Casal",
                    "description": "Atendimento online especializado para casais com problemas de relacionamento através de videochamada"
                  },
                  "price": "200",
                  "priceCurrency": "BRL"
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Desenvolvimento Pessoal",
                    "description": "Sessões online focadas no crescimento pessoal e autoconhecimento através de videochamada"
                  },
                  "price": "130",
                  "priceCurrency": "BRL"
                }
              ]
            }
          }

        case 'service':
          return {
            "@context": "https://schema.org",
            "@type": "MedicalService",
            "@id": "https://psicologaraquelrodrigues.com.br/#service",
            "name": data?.name || "Serviços de Psicologia",
            "description": data?.description || "Psicóloga Online - Raquel Rodrigues | Terapia online para ansiedade, depressão e relacionamentos.",
            "provider": {
              "@id": "https://psicologaraquelrodrigues.com.br/#psychologist"
            },
            "serviceType": "Psicologia",
            "areaServed": "Rio de Janeiro, RJ",
            "availableChannel": [
              {
                "@type": "ServiceChannel",
                "name": "Presencial",
                "availableLanguage": "pt-BR"
              },
              {
                "@type": "ServiceChannel",
                "name": "Online",
                "availableLanguage": "pt-BR"
              }
            ]
          }

        case 'breadcrumb':
          return {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": data?.items || []
          }

        default:
          return null
      }
    }

    const schema = generateSchema()
    if (schema) {
      const script = document.createElement('script')
      script.type = 'application/ld+json'
      script.text = JSON.stringify(schema)
      script.id = `structured-data-${type}`

      const existing = document.getElementById(`structured-data-${type}`)
      if (existing) {
        existing.remove()
      }

      document.head.appendChild(script)

      return () => {
        const scriptToRemove = document.getElementById(`structured-data-${type}`)
        if (scriptToRemove) {
          scriptToRemove.remove()
        }
      }
    }
  }, [type, data])

  return null
}

export default StructuredData
