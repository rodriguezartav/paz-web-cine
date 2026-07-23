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
  presentation = 'overlay',
  imageScale = 'full',
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
  /** keep legacy overlay scenes, or place words in a bone clearing after the image */
  presentation?: 'overlay' | 'clearing'
  /** clearing-only image scale */
  imageScale?: 'full' | 'inset'
}) {
  const centred = align === 'center' || variant === 'banner'

  if (presentation === 'clearing') {
    return (
      <section className="bg-bone text-ink">
        <div
          className={cn(
            'relative overflow-hidden',
            imageScale === 'full'
              ? 'h-[78svh] min-h-[520px] w-full'
              : 'mx-auto mt-[22vh] h-[62svh] min-h-[440px] w-[78%] md:h-[68svh]',
          )}
        >
          <div className="grain absolute inset-0">
            <Image
              src={image}
              alt={imageAlt}
              fill
              priority={priority}
              sizes={imageScale === 'full' ? '100vw' : '78vw'}
              className="object-cover"
            />
          </div>
        </div>

        {(chapter || caption || note || cta) && (
          <div
            className={cn(
              'flex min-h-[70svh] flex-col justify-center px-6 py-[22vh] md:px-12',
              centred && 'items-center text-center',
              !centred && align === 'end' && 'items-end',
              !centred && align === 'start' && 'items-start',
            )}
          >
            <div className={cn('w-full max-w-2xl', centred && 'mx-auto')}>
              {chapter ? <span className="mb-6 block type-eyebrow text-ink/50">{chapter}</span> : null}
              {caption ? (
                <Reveal
                  as="p"
                  className={cn(
                    'text-balance text-ink',
                    variant === 'banner' ? 'type-banner' : 'type-lead',
                  )}
                >
                  {caption}
                </Reveal>
              ) : null}
              {note ? (
                <Reveal delay={0.15}>
                  <p className="mt-8 max-w-md type-body text-balance text-ink/75">{note}</p>
                </Reveal>
              ) : null}
              {cta ? (
                <Reveal delay={0.2}>
                  <a
                    href={cta.href}
                    className="mt-12 inline-flex items-center gap-3 border-b border-ink/40 pb-1 font-sans text-sm uppercase tracking-[0.24em] text-ink transition-colors hover:border-ink"
                  >
                    {cta.label}
                  </a>
                </Reveal>
              ) : null}
            </div>
          </div>
        )}
      </section>
    )
  }

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
