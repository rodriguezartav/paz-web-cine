import Link from 'next/link'
import { Wordmark, SiteFooter, Reveal } from '@/components/paz'

/**
 * Home — intentionally a threshold, not yet the homepage. The foundation is
 * in place; the full opening film will be composed here from the design
 * system. For now this holding page stays quiet: the wordmark, a single line,
 * and the way into the founding chapter.
 */
export default function HomePage() {
  return (
    <main className="flex min-h-svh flex-col bg-background text-foreground">
      <section className="flex flex-1 flex-col items-center justify-center px-6 text-center">
        <Reveal>
          <Wordmark size="lg" />
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mt-12 max-w-md type-body text-ink/70 text-balance">
            the experience is being composed, chapter by chapter.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <Link
            href="/about"
            className="mt-10 inline-flex items-center border-b border-ink/40 pb-1 font-sans text-sm uppercase tracking-[0.24em] text-ink transition-colors hover:border-ink"
          >
            enter the philosophy
          </Link>
        </Reveal>
      </section>

      <SiteFooter />
    </main>
  )
}
