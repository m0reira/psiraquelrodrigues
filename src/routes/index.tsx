import { createFileRoute } from '@tanstack/react-router'
import { useSEO, seoConfigs } from '../hooks/useSEO'
import { Hero } from '../components/Hero'
import { Services } from '../components/Services'
import { About } from '../components/About'
import { CallToAction } from '../components/CallToAction'

function HomePage() {
  useSEO(seoConfigs.home)

  return (
    <div>
      <Hero />
        <Services />
        <About />
      <CallToAction />
    </div>
  )
}

export const Route = createFileRoute('/')({
  component: HomePage,
}) as any
