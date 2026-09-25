import { ProductGrid } from "@/components/product-grid"
import { SplitLayout } from "@/components/split-layout"
import { buttonVariants } from "@/components/ui/button"
import { products } from "@/data/products"
import { stats } from "@/data/studio"
import { CONTACT_EMAIL } from "@/lib/site"
import { cn } from "@/lib/utils"
import { Link } from "react-router-dom"

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
      name: 'Solana',
      src: '/logos/solana.svg',
      className: 'h-4 sm:h-4.5 max-w-22 sm:max-w-24',
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
            className="flex h-16 items-center justify-center border-r border-b border-border/80 px-2 py-2 sm:px-3"
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
  return (
    <SplitLayout
      panelLabel="Agency panel"
      panel={
        <>
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
        </>
      }
      showcaseLabel="Product showcase"
      showcase={<ProductGrid products={products} maxMobileItems={3} />}
    />
  )
}
