export function SecretSauceSection() {
  return (
    <section className="relative px-6 py-32 border-t border-border">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="space-y-4">
          <div className="inline-block px-3 py-1 bg-accent/10 border border-accent/30 rounded">
            <span className="text-accent text-sm font-mono">THE INTRIGUE</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Game Theory for
            <br />
            <span className="text-accent">Communication.</span>
          </h2>
        </div>
        
        <div className="space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
          <p>
            Spam is not a technical glitch; it is an <span className="text-foreground font-medium">economic failure</span>.
          </p>
          
          <p>
            We haven't just made spam difficult; we made it <span className="text-accent font-medium">economically irrational</span>.
          </p>
          
          <div className="relative p-8 mt-8 border border-accent/30 bg-accent/5">
            <p className="text-foreground text-lg">
              A self-regulating ecosystem where malicious actors burn their own capital, 
              and honest communication is frictionless.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
