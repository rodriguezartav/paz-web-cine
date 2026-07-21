import Image from 'next/image'
import { Wordmark } from '@/components/wordmark'

export function Opening() {
  return (
    <header className="relative h-svh min-h-[640px] w-full overflow-hidden">
      <div className="grain absolute inset-0">
        <Image
          src="/images/hero-jungle-ocean.png"
          alt="A view from inside the rainforest looking out over a calm, misty ocean at dawn on the Osa Peninsula"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* Legibility veil — never a heavy scrim, just enough */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-ink/25 via-transparent to-ink/35"
      />

      <div className="relative flex h-full flex-col">
        <nav
          aria-label="Primary"
          className="flex items-center justify-between px-6 pt-7 md:px-10"
        >
          <span className="font-sans text-xs uppercase tracking-[0.28em] text-bone/85">
            Osa Peninsula
          </span>
          <span className="font-sans text-xs lowercase tracking-[0.1em] text-bone/85">
            [ d24 m12 y25 ]
          </span>
        </nav>

        <div className="flex flex-1 flex-col items-center justify-center px-6 text-center text-bone">
          <Wordmark size="lg" className="drop-shadow-[0_1px_18px_rgba(64,59,58,0.4)]" />
          <p className="mt-10 max-w-md font-display text-lg leading-relaxed text-balance text-bone/90 md:text-xl">
            not an escape, but a return to humanity.
          </p>
        </div>

        <div className="flex items-end justify-center pb-9">
          <span className="font-sans text-[0.7rem] lowercase tracking-[0.24em] text-bone/70">
            scroll to descend
          </span>
        </div>
      </div>
    </header>
  )
}
