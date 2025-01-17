import Hero from '@/components/hero'
import Features from '@/components/features'
import SupportedChains from '@/components/supported-chains'
import CTA from '@/components/cta'

export default function Home() {
  return (
    <div className="space-y-20 py-10">
      <Hero />
      <Features />
      <SupportedChains />
      <CTA />
    </div>
  )
}

