import { Shield, Globe, User } from 'lucide-react'

export function SolutionSection() {
  const features = [
    {
      icon: Shield,
      title: 'Economic Firewall',
      description: 'Access requires value. Your time has a cost; our protocol mathematically guarantees it.',
    },
    {
      icon: Globe,
      title: 'Borderless Reach',
      description: 'A ghost bridge between the Old World (GSM) and the New World. Where you are—or where they are—is irrelevant.',
    },
    {
      icon: User,
      title: 'True Identity',
      description: 'Exist by your name, not a string of random digits.',
    },
  ]

  return (
    <section className="relative px-6 py-32 border-t border-border">
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="space-y-4">
          <div className="inline-block px-3 py-1 bg-accent/10 border border-accent/30 rounded">
            <span className="text-accent text-sm font-mono">DeUC PROTOCOL</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            An invisible sovereign layer
            <br />
            built on top of the internet.
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group relative p-8 border border-border bg-card hover:border-accent/50 transition-all duration-300"
            >
              <div className="space-y-4">
                <div className="inline-flex p-3 bg-accent/10 border border-accent/30 rounded">
                  <feature.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
              
              {/* Hover effect */}
              <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
