export function Footer() {
  return (
    <footer className="relative px-6 py-20 border-t border-border">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-4">
            <div className="text-3xl font-bold font-mono tracking-tight">[DeUC]</div>
            <p className="text-muted-foreground">Protocol</p>
          </div>
          
          <div className="space-y-6 text-muted-foreground">
            <div className="space-y-2">
              <div className="text-sm font-mono text-accent">STATUS</div>
              <div>Pre-Seed</div>
            </div>
            
            <div className="space-y-2">
              <div className="text-sm font-mono text-accent">CONTACT</div>
              <a 
                href="mailto:hello@deuc.io" 
                className="text-foreground hover:text-accent transition-colors"
              >
                hello@deuc.io
              </a>
              <p className="text-sm italic">
                (Soon, you will be able to call this address.)
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
