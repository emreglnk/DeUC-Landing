import { HeroSection } from '@/components/hero-section'
import { ProblemSection } from '@/components/problem-section'
import { SolutionSection } from '@/components/solution-section'
import { SecretSauceSection } from '@/components/secret-sauce-section'
import { Footer } from '@/components/footer'

export default function LandingPage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <SecretSauceSection />
      <Footer />
    </main>
  )
}
