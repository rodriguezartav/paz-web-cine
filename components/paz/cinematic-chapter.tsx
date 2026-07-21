import Image from 'next/image'
import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { Reveal } from '@/components/paz/reveal'

/**
 * CinematicChapter — a full-viewport photographic scene. The image is the
 * chapter; type recedes to a single line held at one edge. An optional
 * chapter marker sits above, and an optional quiet link may follow.
 *
 * `variant="banner"` sets the line in the emotional banner face — reserve it
 * for a rare, resonant moment (an opening or a farewell), never routine
 * captions.
 */
export function CinematicChapter({
  image,
  imageAlt,
  chapter,
  caption,
  note,
  variant = 'caption',
  align = 'end',
  cta,
  priority = false,
}: {
  image: string
  imageAlt: string
  chapter?: ReactNode
  caption?: ReactNode
  /** an optional quiet secondary line beneath the caption */
  note?: ReactNode
  variant?: 'caption' | 'banner'
  align?: 'start' | 'center' | 'end'
  /** an optional quiet link, e.g. { label, href } */
  cta?: { label: string; href: string }
  priority?: boolean
}) {
  const centred = align === 'center' || variant === 'banner'

  return (
    <section className="relative h-svh min-h-[560px] w-full overflow-hidden">
      <div className="grain absolute inset-0">
        <Image
          src={image}
          alt={imageAlt}
          fill
          priority={priority}
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <div
        aria-hidden="true"
        className={cn(
          'absolute inset-0',
          variant === 'banner'
            ? 'bg-gradient-to-b from-ink/20 via-transparent to-ink/55'
            : 'bg-gradient-to-t from-ink/45 via-transparent to-ink/20',
        )}
      />

      <div
        className={cn(
          'relative flex h-full flex-col px-6 md:px-12',
          centred && 'items-center justify-center text-center',
          !centred && align === 'end' && 'justify-end pb-16 md:pb-20',
          !centred && align === 'start' && 'justify-start pt-24',
        )}
      >
        {chapter ? (
          <span className="mb-4 type-eyebrow text-bone/70">{chapter}</span>
        ) : null}

        {caption ? (
          <Reveal
            as="p"
            className={cn(
              'text-balance text-bone',
              variant === 'banner'
                ? 'type-banner'
                : 'max-w-2xl font-display text-2xl leading-snug md:text-4xl',
            )}
          >
            {caption}
          </Reveal>
        ) : null}

        {note ? (
          <Reveal delay={0.15}>
            <p className="mt-8 max-w-md font-sans text-base leading-relaxed text-balance text-bone/85">
              {note}
            </p>
          </Reveal>
        ) : null}

        {cta ? (
          <Reveal delay={0.2}>
            <a
              href={cta.href}
              className="mt-12 inline-flex items-center gap-3 border-b border-bone/50 pb-1 font-sans text-sm uppercase tracking-[0.24em] text-bone transition-colors hover:border-bone"
            >
              {cta.label}
            </a>
          </Reveal>
        ) : null}
      </div>
    </section>
  )
}
