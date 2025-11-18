import { Button } from '@/components/ui/button'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20">
      {/* Grid background effect */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]" />
      
      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
        <div className="inline-block px-4 py-1 border border-accent/30 rounded mb-4">
          <span className="text-accent text-sm font-mono tracking-wider">[DeUC] PROTOCOL</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-balance leading-[1.1]">
          Silence the Noise.
          <br />
          <span className="text-accent">Amplify Identity.</span>
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-pretty">
          The communication protocol hasn't changed in 50 years. We are rewriting the rules. 
          Welcome to the Silent Revolution—no random numbers, no borders, no spam.
        </p>
        
        <div className="pt-6">
          <Button 
            size="lg" 
            className="bg-accent text-accent-foreground hover:bg-accent/90 font-mono text-base px-8 py-6 h-auto"
          >
            [Request Access]
          </Button>
        </div>
      </div>
    </section>
  )
}
