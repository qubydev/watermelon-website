import { Button } from "@/components/ui/button"
import { Mail } from "lucide-react"

const products = [
  {
    name: 'Agndex Dashboard',
    image:
      'https://assets.watermelon.sh/components/agndex-dashboard-thumbnail.png',
  },
  {
    name: 'Astrix Dashboard',
    image:
      'https://assets.watermelon.sh/components/astrix-dashboard-thumbnail.png',
  },
  {
    name: 'Bionis Dashboard',
    image:
      'https://assets.watermelon.sh/components/bionis-dashboard-thumbnail.png',
  },
  {
    name: 'Demostack Dashboard',
    image:
      'https://assets.watermelon.sh/components/demostack-dashboard-thumbnail.png',
  },
  {
    name: 'Gridline Dashboard',
    image:
      'https://assets.watermelon.sh/components/gridline-dashboard-thumbnail.png',
  },
  {
    name: 'Jobtracker Dashboard',
    image:
      'https://assets.watermelon.sh/components/jobtracker-dashboard-thumbnail.png',
  },
  {
    name: 'Library Dashboard',
    image:
      'https://assets.watermelon.sh/components/library-dashboard-thumbnail.png',
  },
  {
    name: 'Medesk Dashboard',
    image:
      'https://assets.watermelon.sh/components/medesk-dashboard-thumbnail.png',
  },
  {
    name: 'Portfolio Dashboard',
    image:
      'https://assets.watermelon.sh/components/task-management-dashboard.webp',
  },
  {
    name: 'Tallie Dashboard',
    image:
      'https://assets.watermelon.sh/components/tallie-dashboard-thumbnail.png',
  },
]

export default function Home() {
  return (
    <main className="relative z-[1] flex h-screen overflow-hidden bg-background">
      <section className="left-panel-grid relative flex h-full w-120 shrink-0 flex-col overflow-hidden bg-background px-8 py-10" aria-label="Agency panel">
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-brand/60 via-brand/20 to-transparent" aria-hidden="true" />
        <div className="absolute inset-x-0 -bottom-6 h-20 bg-gradient-to-t from-foreground/90 via-foreground/25 to-transparent blur-lg" aria-hidden="true" />
        <div className="relative flex flex-1 flex-col">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 border bg-card px-4 py-1.5 text-xs font-bold tracking-widest text-primary uppercase">
              Free & Open Source
            </div>
            <h1 className="text-2xl leading-8 font-bold tracking-normal text-balance text-foreground">
              Building the future of modern product interfaces
            </h1>
            <p className="mt-4 text-base leading-6 font-medium text-muted-foreground">
              Watermelon UI is the foundational layer for modern web applications. Beautifully designed, perfectly animated, and deeply technical.
            </p>
            <div className="mt-8 flex gap-2">
              <Button variant="default">
                Explore
                <svg
                  className="ml-2 h-4 w-4"
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
              <Button variant="secondary">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fill="currentColor"
                    d="M12 2C6.48 2 2 6.58 2 12.25c0 4.52 2.87 8.35 6.84 9.71.5.09.68-.22.68-.49v-1.9c-2.78.62-3.37-1.21-3.37-1.21-.45-1.19-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.56 2.35 1.11 2.92.85.09-.67.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.32 9.32 0 0 1 12 6.97c.85 0 1.7.12 2.5.35 1.9-1.33 2.74-1.05 2.74-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.79-4.57 5.05.36.32.68.94.68 1.9v2.79c0 .27.18.59.69.49A10.1 10.1 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z"
                  />
                </svg>
                Github
              </Button>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-2" aria-label="Watermelon stats">
              <div className="border bg-card px-4 py-3">
                <div className="text-xl leading-6 font-bold text-foreground">600+</div>
                <div className="mt-1 text-xs leading-4 font-semibold tracking-widest text-muted-foreground uppercase">Components</div>
              </div>
              <div className="border bg-card px-4 py-3">
                <div className="text-xl leading-6 font-bold text-foreground">100+</div>
                <div className="mt-1 text-xs leading-4 font-semibold tracking-widest text-muted-foreground uppercase">Animations</div>
              </div>
              <div className="border bg-card px-4 py-3">
                <div className="text-xl leading-6 font-bold text-foreground">500</div>
                <div className="mt-1 text-xs leading-4 font-semibold tracking-widest text-muted-foreground uppercase">Stars</div>
              </div>
              <div className="border bg-card px-4 py-3">
                <div className="text-xl leading-6 font-bold text-foreground">100k+</div>
                <div className="mt-1 text-xs leading-4 font-semibold tracking-widest text-muted-foreground uppercase">Visitors</div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative flex shrink-0 items-center justify-between pt-6">
          <a className="flex items-center gap-3" href="https://ui.watermelon.sh/" aria-label="Watermelon UI home">
            <img className="h-7 w-11 object-contain" src="/favicon.svg" alt="" aria-hidden="true" />
            <span className="text-lg leading-6 font-bold text-foreground">Watermelon UI</span>
          </a>
          <div className="flex gap-2" aria-label="Social links">
            <a
              className="inline-flex size-9 items-center justify-center border bg-card text-muted-foreground transition-colors hover:text-foreground"
              href="https://x.com/WatermelonUI"
              aria-label="Watermelon UI on X"
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
              aria-label="Watermelon UI on GitHub"
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
              aria-label="Email Watermelon UI"
            >
              <Mail className="size-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <section
        className="h-full flex-1 overflow-y-auto overscroll-contain bg-background"
        aria-label="Product showcase"
      >
        <div className="grid min-h-full gap-4">
          {products.map((product, index) => (
            <div
              className="overflow-hidden rounded-none"
              id={index === 0 ? 'shadow-interviewer' : undefined}
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
      </section>
    </main>
  )
}
