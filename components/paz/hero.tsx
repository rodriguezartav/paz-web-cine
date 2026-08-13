import Image from 'next/image'
import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { Wordmark } from '@/components/paz/wordmark'

/**
 * Hero — the threshold. A single full-frame photograph carries it; the
 * wordmark and one line of intent sit quietly over the image. The UI does
 * nothing but frame the place.
 *
 * Photography always wins: the only overlay is a soft top-and-bottom veil,
 * never a heavy scrim.
 */
export function Hero({
  image,
  imageAlt,
  eyebrow,
  meta,
  title,
  tagline,
  cue,
  children,
}: {
  image: string
  imageAlt: string
  /** small label, upper-left (e.g. a place) */
  eyebrow?: ReactNode
  /** small label, upper-right (e.g. a date) */
  meta?: ReactNode
  /** the large display statement beneath the wordmark */
  title?: ReactNode
  /** the single line beneath the wordmark */
  tagline?: ReactNode
  /** the quiet scroll cue at the base */
  cue?: ReactNode
  /** replaces the default centred wordmark block entirely, if provided */
  children?: ReactNode
}) {
  return (
    <header className="relative h-svh min-h-[640px] w-full overflow-hidden">
      <div className="grain absolute inset-0">
        <Image
          src={image}
          alt={imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-ink/25 via-transparent to-ink/35"
      />

      <div className="relative flex h-full flex-col text-bone">
        {(eyebrow || meta) && (
          <div className="flex items-center justify-between px-6 pt-7 md:px-10">
            {eyebrow ? (
              <span className="type-eyebrow text-bone/85">{eyebrow}</span>
            ) : (
              <span />
            )}
            {meta ? (
              <span className="font-sans text-xs lowercase tracking-[0.1em] text-bone/85">
                {meta}
              </span>
            ) : null}
          </div>
        )}

        {title && !children ? (
          /*
           * Mobile keeps the pair at the base — badge, then the statement.
           * Desktop swaps them: the statement centres itself and the badge
           * settles at the foot of the frame.
           */
          <>
            <div aria-hidden="true" className="flex-1 md:hidden" />

            <div className="flex flex-col items-center px-6 text-center md:order-2 md:items-start md:px-10 md:pb-10 md:text-left">
              <Wordmark
                size="lg"
                variant="badge"
                className="mb-7 drop-shadow-[0_2px_24px_rgba(64,59,58,0.45)] md:mb-0"
              />
            </div>

            <div className="flex flex-col items-center px-6 pb-8 text-center md:order-1 md:flex-1 md:items-start md:justify-center md:px-10 md:pb-0 md:text-left">
              <h1 className="mx-auto max-w-2xl text-balance font-display text-[clamp(1.375rem,3vw,2.125rem)] leading-[1.18] tracking-[-0.01em] text-bone drop-shadow-[0_1px_22px_rgba(64,59,58,0.45)] md:mx-0 md:max-w-3xl">
                {title}
              </h1>
              {tagline ? (
                <p className="mt-6 max-w-md text-balance font-display text-lg leading-relaxed text-bone/90 md:text-xl">
                  {tagline}
                </p>
              ) : null}
            </div>
          </>
        ) : (
          <div className="flex flex-1 flex-col items-center justify-center px-6 text-center md:items-start md:px-10 md:text-left">
            {children ?? (
              <>
                <Wordmark
                  size="lg"
                  variant="badge"
                  className="drop-shadow-[0_2px_24px_rgba(64,59,58,0.45)]"
                />
                {tagline ? (
                  <p className="mt-8 max-w-md text-balance font-display text-lg leading-relaxed text-bone/90 md:text-xl">
                    {tagline}
                  </p>
                ) : null}
              </>
            )}
          </div>
        )}

        {cue ? (
          <div className="flex items-end justify-center pb-9 md:order-3">
            <span
              className={cn('font-sans text-[0.7rem] lowercase tracking-[0.24em] text-bone/70')}
            >
              {cue}
            </span>
          </div>
        ) : null}
      </div>
    </header>
  )
}
