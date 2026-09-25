import { useEffect, useRef } from "react"
import { buttonVariants } from "@/components/ui/button"
import { SmokeEffect } from "@/components/ui/smoke-effect"
import { cn } from "@/lib/utils"
import { Footer } from "@/components/footer"
import { Link } from "react-router-dom"
import { CONTACT_EMAIL } from "@/lib/site"
import { products } from "@/data/products"
import { ArrowUpRight } from "lucide-react"

function ProductShowcase({ firstId }: { firstId?: string }) {
  return (
    <div className="grid gap-4">
      {products.map((product, idx) => (
        <div
          className={cn(
            "product-noise group relative block overflow-hidden rounded-none border border-border/80 bg-card",
            idx >= 3 && "hidden md:block"
          )}
          id={idx === 0 ? firstId : undefined}
          key={product.slug}
        >
          {/* Phones crop into the top-left of the screenshot so the UI stays readable */}
          <div className="aspect-[4/3] overflow-hidden sm:aspect-auto">
            <img
              className="block h-auto w-[200%] max-w-none origin-top-left -translate-x-[4%] -translate-y-[3%] rounded-none sm:w-full sm:translate-x-0 sm:translate-y-0"
              src={product.image}
              alt={`${product.name} preview`}
            />
          </div>

          {/* Mobile: bottom section with title & Open in same line, badges in bottom line */}
          <div className="flex flex-col gap-2.5 border-t border-border/80 px-4 py-3 sm:hidden">
            <div className="flex items-center justify-between gap-3">
              <div className="text-base font-bold text-foreground">{product.name}</div>
              <Link
                to={`/work/${product.slug}`}
                className="group/open inline-flex shrink-0 items-center gap-1.5 border border-foreground/30 bg-foreground px-3.5 py-1.5 text-xs font-semibold text-background shadow-xs transition-all hover:bg-foreground/90 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                aria-label={`Open ${product.name}`}
              >
                <span>Open</span>
                <ArrowUpRight className="size-3.5 transition-transform duration-200 group-hover/open:translate-x-0.5 group-hover/open:-translate-y-0.5" aria-hidden="true" />
              </Link>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {product.badges.map((badge) => (
                <span
                  className="border border-border/80 bg-background/85 px-2 py-0.5 text-[11px] leading-4 font-medium text-muted-foreground backdrop-blur-md"
                  key={badge}
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Desktop: clean uniform badges inside the image + dedicated Open button */}
          <div className="absolute inset-x-5 bottom-3 hidden flex-wrap items-center gap-1.5 sm:flex">
            {product.badges.map((badge) => (
              <span
                className="border border-border/80 bg-background/85 px-2.5 py-1 text-xs leading-5 font-medium text-muted-foreground backdrop-blur-md"
                key={badge}
              >
                {badge}
              </span>
            ))}
            <Link
              to={`/work/${product.slug}`}
              className="group/open ml-auto inline-flex items-center gap-1.5 border border-foreground/30 bg-foreground px-3.5 py-1.5 text-xs font-semibold text-background shadow-xs transition-all hover:bg-foreground/90 hover:gap-2 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              aria-label={`Open ${product.name}`}
            >
              <span>Open</span>
              <ArrowUpRight className="size-3.5 transition-transform duration-200 group-hover/open:translate-x-0.5 group-hover/open:-translate-y-0.5" aria-hidden="true" />
            </Link>
          </div>
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
      className: 'h-6 max-w-20',
    },
    {
      name: 'Antler',
      src: '/logos/antler.svg',
      className: 'h-5 max-w-22',
    },
    {
      name: 'Y Combinator',
      src: '/logos/y-combinator.svg',
      className: 'h-5 max-w-24',
    },
    {
      name: 'Sequoia Capital',
      src: '/logos/sequoia.svg',
      className: 'h-4 max-w-24',
    },
    {
      name: 'Accel',
      src: '/logos/accel.svg',
      className: 'h-5 max-w-20',
    },
    {
      name: 'Founders Fund',
      src: '/logos/founders-fund.svg',
      className: 'h-4 max-w-24',
    },
  ]

  return (
    <div className="mt-12" aria-label="Founders backed by">
      <div className="text-xs leading-4 font-semibold tracking-widest text-muted-foreground uppercase">
        Trusted by VC-backed founders
      </div>
      <div className="mt-4 grid grid-cols-3 border-t border-l border-border/80 overflow-hidden">
        {logos.map((logo) => (
          <div
            className="flex h-16 items-center justify-center border-r border-b border-border/80 px-3 py-2"
            key={logo.name}
            aria-label={logo.name}
          >
            <img
              className={cn("w-full object-contain brightness-90 transition-opacity hover:opacity-100", logo.className)}
              src={logo.src}
              alt=""
              aria-hidden="true"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

const stats = [
  { value: '$310M+', label: 'Raised by our clients' },
  { value: '$5B+', label: 'Combined valuation' },
  { value: '50+', label: 'Products built' },
  { value: '5d', label: 'To first prototype' },
]

function Stats() {
  return (
    <div className="mt-12" aria-label="By the numbers">
      <div className="text-xs leading-4 font-semibold tracking-widest text-muted-foreground uppercase">
        By the numbers
      </div>
      <div className="mt-4 grid grid-cols-2 divide-x divide-y divide-border/80 overflow-hidden border border-border/80">
        {stats.map((stat) => (
          <div className="flex h-20 flex-col items-center justify-center px-2 text-center" key={stat.label}>
            <div className="text-xl leading-7 font-bold text-foreground">{stat.value}</div>
            <div className="text-[11px] leading-4 font-medium text-muted-foreground">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Home() {
  const showcaseRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = showcaseRef.current
    if (!el) return

    requestAnimationFrame(() => {
      el.scrollTo({
        top: 180,
        behavior: 'smooth',
      })
    })
  }, [])

  return (
    <main className="relative z-[1] flex min-h-screen bg-background md:h-screen md:overflow-hidden">
      <section
        className="relative block min-h-screen w-full bg-background md:h-full md:w-120 md:shrink-0 md:overflow-y-auto"
        aria-label="Agency panel"
      >
        <div className="left-panel-grid relative flex min-h-full w-full flex-col px-5 py-6 sm:px-8 md:py-8">
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-80 overflow-hidden md:h-72"
            aria-hidden="true"
          >
            <SmokeEffect color="#1A73F2" className="h-full w-full" />
            <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-background to-transparent" />
          </div>
          <div className="relative z-10 flex flex-1 flex-col">
            <div className="stagger">
              <a className="mb-6 flex items-center gap-2.5" href="https://ui.watermelon.sh/" aria-label="Watermelon Studio home">
                <img className="h-5 w-8 object-contain" src="/favicon.svg" alt="" aria-hidden="true" />
                <span className="text-lg leading-6 font-bold text-foreground">Watermelon Studio</span>
              </a>
              <h1 className="text-2xl leading-8 font-bold tracking-normal text-balance text-foreground">
                Designing standout digital products and brands
              </h1>
              <p className="mt-4 text-base leading-6 font-medium text-muted-foreground">
                We partner with ambitious founders to design and build high-impact websites, apps, and brand systems.
              </p>
              <div className="mt-8 flex gap-2">
                <Link className={buttonVariants({ variant: 'secondary' })} to="/work">
                  View work
                </Link>
                <a
                  className={buttonVariants({ variant: 'default' })}
                  href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("Let's talk")}`}
                >
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
                </a>
              </div>
              <BackedByLogos />
              <Stats />
            </div>

            <div className="mt-12 md:hidden" aria-label="Product showcase">
              <ProductShowcase />
            </div>
          </div>

          <div className="relative z-10 mt-auto">
            <Footer />
          </div>
        </div>
      </section>

      <section
        ref={showcaseRef}
        className="hidden h-full flex-1 overflow-y-auto overscroll-contain bg-background md:block"
        aria-label="Product showcase"
      >
        <ProductShowcase firstId="shadow-interviewer" />
      </section>
    </main>
  )
}
