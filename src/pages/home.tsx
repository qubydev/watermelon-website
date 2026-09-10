import { Button } from "@/components/ui/button"
import { Mail } from "lucide-react"

const products = [
  {
    name: 'Studio Site 1',
    image: '/showcase/site-1.png',
  },
  {
    name: 'Studio Site 2',
    image: '/showcase/site-2.png',
  },
  {
    name: 'Studio Site 1 Variation',
    image: '/showcase/site-1.png',
  },
  {
    name: 'Studio Site 2 Variation',
    image: '/showcase/site-2.png',
  },
  {
    name: 'Studio Site 1 Concept',
    image: '/showcase/site-1.png',
  },
  {
    name: 'Studio Site 2 Concept',
    image: '/showcase/site-2.png',
  },
]

function ProductShowcase({ firstId }: { firstId?: string }) {
  return (
    <div className="grid gap-4">
      {products.map((product, index) => (
        <div
          className="overflow-hidden rounded-none"
          id={index === 0 ? firstId : undefined}
          key={product.name}
        >
          <img
            className="block h-auto w-full rounded-none"
            src={product.image}
            alt={`${product.name} dashboard preview`}
          />
        </div>
      ))}
    </div>
  )
}

function BackedByLogos() {
  const logos = [
    {
      name: 'A16z',
      src: '/logos/a16z.svg',
    },
    {
      name: 'Antler',
      src: '/logos/antler.svg',
    },
    {
      name: 'Y Combinator',
      src: '/logos/y-combinator.svg',
    },
  ]

  return (
    <div className="mt-12" aria-label="Founders backed by">
      <div className="text-xs leading-4 font-semibold tracking-widest text-muted-foreground uppercase">
        Trusted by VC-backed founders
      </div>
      <div className="mt-4 grid grid-cols-3 divide-x divide-border/80 overflow-hidden border border-border/80">
        {logos.map((logo) => (
          <div
            className="flex h-16 items-center justify-center px-4"
            key={logo.name}
            aria-label={logo.name}
          >
            <img className="h-6 w-full max-w-24 object-contain" src={logo.src} alt="" aria-hidden="true" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <main className="relative z-[1] flex min-h-screen bg-background md:h-screen md:overflow-hidden">
      <section className="left-panel-grid relative flex min-h-screen w-full flex-col overflow-visible bg-background px-5 py-8 sm:px-8 md:h-full md:w-120 md:shrink-0 md:overflow-hidden md:py-10" aria-label="Agency panel">
        <div className="absolute inset-x-0 bottom-0 hidden h-48 bg-gradient-to-t from-primary/60 via-primary/20 to-transparent md:block" aria-hidden="true" />
        <div className="absolute inset-x-0 -bottom-6 hidden h-20 bg-gradient-to-t from-foreground/90 via-foreground/25 to-transparent blur-lg md:block" aria-hidden="true" />
        <div className="relative flex flex-1 flex-col">
          <div>
            <a className="mb-5 flex items-center gap-2.5 md:hidden" href="https://ui.watermelon.sh/" aria-label="Watermelon Studio home">
              <img className="h-5 w-8 object-contain" src="/favicon.svg" alt="" aria-hidden="true" />
              <span className="text-sm leading-5 font-bold text-foreground">Watermelon Studio</span>
            </a>
            <div className="mb-4">
              <div className="inline-flex items-center gap-2 bg-emerald-500/10 px-3 py-1.5 text-[10px] leading-4 font-semibold tracking-widest text-emerald-400 uppercase">
                <span className="size-2 bg-emerald-500" aria-hidden="true" />
                Open for projects
              </div>
            </div>
            <h1 className="text-2xl leading-8 font-bold tracking-normal text-balance text-foreground">
              Designing and shipping standout digital products
            </h1>
            <p className="mt-4 text-base leading-6 font-medium text-muted-foreground">
              Watermelon Studio partners with founders and teams to craft websites, apps, and launch-ready brand systems with thoughtful design and precise engineering.
            </p>
            <div className="mt-8 flex gap-2">
              <Button variant="secondary">
                View work
              </Button>
              <Button variant="default">
                Book a call
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  color="currentColor"
                  aria-hidden="true"
                >
                  <path
                    d="M9 6.65032C9 6.65032 15.9383 6.10759 16.9154 7.08463C17.8924 8.06167 17.3496 15 17.3496 15M16.5 7.5L6.5 17.5"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  />
                </svg>
              </Button>
            </div>
            <BackedByLogos />

            <div className="mt-12 md:hidden" aria-label="Product showcase">
              <ProductShowcase />
            </div>
          </div>
        </div>
        <div className="relative flex shrink-0 flex-col items-start gap-4 pt-10 sm:flex-row sm:items-center sm:justify-between sm:gap-0 md:pt-6">
          <a className="flex items-center gap-3" href="https://ui.watermelon.sh/" aria-label="Watermelon Studio home">
            <img className="h-7 w-11 object-contain" src="/favicon.svg" alt="" aria-hidden="true" />
            <span className="text-lg leading-6 font-bold text-foreground">Watermelon Studio</span>
          </a>
          <div className="flex gap-2" aria-label="Social links">
            <a
              className="inline-flex size-9 items-center justify-center border bg-card text-muted-foreground transition-colors hover:text-foreground"
              href="https://x.com/WatermelonUI"
              aria-label="Watermelon Studio on X"
            >
              <svg className="size-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path
                  d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.656l-5.214-6.817-5.966 6.817H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z"
                />
              </svg>
            </a>
            <a
              className="inline-flex size-9 items-center justify-center border bg-card text-muted-foreground transition-colors hover:text-foreground"
              href="https://github.com/WatermelonCorp/watermelon-platform"
              aria-label="Watermelon Studio on GitHub"
            >
              <svg className="size-4" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M12 2C6.48 2 2 6.58 2 12.25c0 4.52 2.87 8.35 6.84 9.71.5.09.68-.22.68-.49v-1.9c-2.78.62-3.37-1.21-3.37-1.21-.45-1.19-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.56 2.35 1.11 2.92.85.09-.67.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.32 9.32 0 0 1 12 6.97c.85 0 1.7.12 2.5.35 1.9-1.33 2.74-1.05 2.74-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.79-4.57 5.05.36.32.68.94.68 1.9v2.79c0 .27.18.59.69.49A10.1 10.1 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z"
                />
              </svg>
            </a>
            <a
              className="inline-flex size-9 items-center justify-center border bg-card text-muted-foreground transition-colors hover:text-foreground"
              href="mailto:hello@watermelon.sh"
              aria-label="Email Watermelon Studio"
            >
              <Mail className="size-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <section
        className="hidden h-full flex-1 overflow-y-auto overscroll-contain bg-background md:block"
        aria-label="Product showcase"
      >
        <ProductShowcase firstId="shadow-interviewer" />
      </section>
    </main>
  )
}
