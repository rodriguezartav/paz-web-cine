import Image from 'next/image'
import { Reveal } from '@/components/reveal'
import { Wordmark } from '@/components/wordmark'
import { Dualities } from '@/components/dualities'

export function Closing() {
  return (
    <>
      <section className="relative h-svh min-h-[600px] w-full overflow-hidden">
        <div className="grain absolute inset-0">
          <Image
            src="/images/figure-shore.png"
            alt="A person crouched at the edge of a grey dawn sea, a misty jungle headland behind"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-b from-ink/20 via-transparent to-ink/55"
        />
        <div className="relative flex h-full flex-col items-center justify-center px-6 text-center text-bone">
          <Reveal>
            <p className="font-banner text-5xl italic md:text-7xl">come back to life</p>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-8 max-w-md font-sans text-base leading-relaxed text-balance text-bone/85">
              a spiritually focused center. your path belongs only to you. if you travel
              here with someone, apply separately.
            </p>
          </Reveal>
          <Reveal delay={360}>
            <a
              href="#apply"
              className="mt-12 inline-flex items-center gap-3 border-b border-bone/50 pb-1 font-sans text-sm uppercase tracking-[0.24em] text-bone transition-colors hover:border-bone"
            >
              request to arrive
            </a>
          </Reveal>
        </div>
      </section>

      <footer
        id="apply"
        className="bg-ink px-6 py-24 text-bone md:py-32"
      >
        <div className="mx-auto flex max-w-5xl flex-col gap-16 md:flex-row md:items-end md:justify-between">
          <div className="max-w-sm">
            <Wordmark className="text-bone [&_*]:text-bone" />
            <p className="mt-8 font-sans text-sm leading-relaxed text-bone/70">
              two acres of primary rainforest, Osa Peninsula, Costa Rica. surrounded by
              the most biodiverse canopy on earth.
            </p>
            <a
              href="mailto:arrive@pazcorcovado.com"
              className="mt-8 inline-block border-b border-bone/40 pb-1 font-sans text-sm lowercase tracking-[0.08em] text-bone/90 transition-colors hover:border-bone"
            >
              arrive@pazcorcovado.com
            </a>
          </div>

          <Dualities className="text-bone/60 [&_*]:text-bone/60 md:text-right md:[&_li]:justify-end" />
        </div>

        <div className="mx-auto mt-20 flex max-w-5xl items-center justify-between border-t border-bone/15 pt-8 font-sans text-xs lowercase tracking-[0.14em] text-bone/40">
          <span>[ progress ~ humanity ]</span>
          <span>[ d24 m12 y25 ]</span>
        </div>
      </footer>
    </>
  )
}
