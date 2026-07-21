import Image from 'next/image'
import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { Reveal } from '@/components/reveal'

/**
 * A full-viewport cinematic still with an optional line of text set quietly
 * over it. The photograph carries the scene; type recedes.
 */
export function FilmStill({
  src,
  alt,
  caption,
  chapter,
  align = 'end',
  priority = false,
}: {
  src: string
  alt: string
  caption?: ReactNode
  chapter?: string
  align?: 'start' | 'center' | 'end'
  priority?: boolean
}) {
  return (
    <section className="relative h-svh min-h-[560px] w-full overflow-hidden">
      <div className="grain absolute inset-0">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-ink/45 via-transparent to-ink/20"
      />
      <div
        className={cn(
          'relative flex h-full flex-col px-6 md:px-12',
          align === 'end' && 'justify-end pb-16 md:pb-20',
          align === 'center' && 'justify-center',
          align === 'start' && 'justify-start pt-24',
        )}
      >
        {chapter ? (
          <span className="mb-4 font-sans text-xs uppercase tracking-[0.3em] text-bone/70">
            {chapter}
          </span>
        ) : null}
        {caption ? (
          <Reveal
            as="p"
            className="max-w-2xl font-display text-2xl leading-snug text-balance text-bone md:text-4xl"
          >
            {caption}
          </Reveal>
        ) : null}
      </div>
    </section>
  )
}

/**
 * An editorial rest — generous whitespace on bone, a chapter marker, and a
 * single passage of prose. This is where the interface fully disappears.
 */
export function Passage({
  chapter,
  eyebrow,
  children,
  lead,
}: {
  chapter?: string
  eyebrow?: string
  lead?: ReactNode
  children?: ReactNode
}) {
  return (
    <section className="bg-background px-6 py-28 md:py-40">
      <div className="mx-auto max-w-3xl">
        {(chapter || eyebrow) && (
          <Reveal className="mb-10 flex items-baseline justify-between border-b border-border pb-4">
            {chapter ? (
              <span className="font-sans text-xs uppercase tracking-[0.3em] text-ink/60">
                {chapter}
              </span>
            ) : (
              <span />
            )}
            {eyebrow ? (
              <span className="font-sans text-xs lowercase tracking-[0.1em] text-ink/50">
                {eyebrow}
              </span>
            ) : null}
          </Reveal>
        )}
        {lead ? (
          <Reveal
            as="p"
            className="font-display text-3xl leading-tight text-balance text-ink md:text-5xl"
          >
            {lead}
          </Reveal>
        ) : null}
        {children ? (
          <div className="mt-10 space-y-6 font-sans text-lg leading-relaxed text-ink/85 md:text-xl">
            {children}
          </div>
        ) : null}
      </div>
    </section>
  )
}
