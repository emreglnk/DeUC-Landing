export function ProblemSection() {
  return (
    <section className="relative px-6 py-32 border-t border-border">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Telephony is <span className="line-through decoration-destructive decoration-2">Dead</span>.
          </h2>
          
          <div className="h-px w-20 bg-accent" />
        </div>
        
        <div className="space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
          <p>
            That 10-digit number in your pocket is the <span className="text-foreground font-medium">weakest link</span> in your digital identity. 
            It is public, vulnerable, and tethered to the 19th century.
          </p>
          
          <p>
            Web3 liberated finance. It liberated art. Why is communication still held hostage by the logic of 1990s switchboards?
          </p>
          
          <p className="text-foreground text-2xl font-medium pt-4">
            We are not just bypassing the carrier. We are <span className="text-accent">vaporizing</span> it.
          </p>
        </div>
      </div>
    </section>
  )
}
