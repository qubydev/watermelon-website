import { useEffect, useRef, type ReactNode } from "react"
import { Footer } from "@/components/footer"
import { SmokeEffect } from "@/components/ui/smoke-effect"

import { cn } from "@/lib/utils"

type SplitLayoutProps = {
  /** Content of the fixed left panel */
  panel: ReactNode
  panelLabel: string
  /** Scrollable showcase on the right (stacked under the panel on mobile) */
  showcase: ReactNode
  showcaseLabel: string
  /** Initial vertical scroll offset for the showcase panel */
  initialShowcaseScroll?: number
  showcaseClassName?: string
  /** Whether to suppress rendering the showcase at the bottom of the panel on mobile */
  hideMobileShowcase?: boolean
}

export function SplitLayout({
  panel,
  panelLabel,
  showcase,
  showcaseLabel,
  initialShowcaseScroll = 0,
  showcaseClassName,
  hideMobileShowcase = false,
}: SplitLayoutProps) {
  const showcaseRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (showcaseRef.current && initialShowcaseScroll > 0) {
      showcaseRef.current.scrollTop = initialShowcaseScroll
    }
  }, [initialShowcaseScroll])

  return (
    <main className="relative z-[1] flex min-h-screen bg-background md:h-screen md:overflow-hidden">
      <section
        className="relative block min-h-screen w-full bg-background md:h-full md:w-120 md:shrink-0 md:overflow-y-auto"
        aria-label={panelLabel}
      >
        <div className="left-panel-grid relative flex min-h-full w-full flex-col px-5 pt-6 sm:px-8 md:pt-8">
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-80 overflow-hidden md:h-72"
            aria-hidden="true"
          >
            <SmokeEffect color="#1A73F2" className="h-full w-full" />
            <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-background to-transparent" />
          </div>

          <div className="relative z-10 flex flex-1 flex-col pt-2">
            <div>
              <div className="stagger">{panel}</div>

              {!hideMobileShowcase && (
                <div className="mt-12 md:hidden" aria-label={showcaseLabel}>
                  {showcase}
                </div>
              )}
            </div>
          </div>

          <div className="relative z-10 mt-auto">
            <Footer />
          </div>
        </div>
      </section>

      <section
        ref={showcaseRef}
        className={cn(
          "hidden h-full flex-1 overflow-y-auto overscroll-contain bg-background md:block md:border-l md:border-border/80",
          showcaseClassName
        )}
        aria-label={showcaseLabel}
      >
        <div className="relative">{showcase}</div>
      </section>
    </main>
  )
}
