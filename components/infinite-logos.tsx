"use client"

const logos = [
  "Amazon",
  "Google",
  "Microsoft",
  "Apple",
  "Meta",
  "Netflix",
  "Spotify",
  "Airbnb",
  "Uber",
  "Amazon",
  "Google",
  "Microsoft",
  "Apple",
  "Meta",
]

export default function InfiniteLogos() {
  return (
    <section className="py-12 bg-background overflow-hidden border-y border-border">
      <div className="container mx-auto px-4">
        <p className="text-center text-muted-foreground text-sm mb-8">Trusted by Industry Leaders</p>

        <div className="relative flex overflow-hidden">
          <div className="flex gap-8 animate-marquee">
            {logos.map((logo, index) => (
              <div
                key={`${logo}-${index}`}
                className="flex-shrink-0 px-8 py-3 rounded-lg bg-muted/30 border border-border hover:border-secondary transition-colors whitespace-nowrap"
              >
                <p className="text-sm font-medium text-muted-foreground hover:text-secondary transition-colors">
                  {logo}
                </p>
              </div>
            ))}
          </div>

          {/* Duplicate for infinite scroll effect */}
          <div className="flex gap-8 animate-marquee">
            {logos.map((logo, index) => (
              <div
                key={`${logo}-${index}-2`}
                className="flex-shrink-0 px-8 py-3 rounded-lg bg-muted/30 border border-border hover:border-secondary transition-colors whitespace-nowrap"
              >
                <p className="text-sm font-medium text-muted-foreground hover:text-secondary transition-colors">
                  {logo}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
