import type { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { Reveal } from '@/components/paz/reveal'

type Width = 'measure' | 'wide' | 'full'

const WIDTHS: Record<Width, string> = {
  /** Editorial reading width — for prose. */
  measure: 'measure',
  /** Wide composition — for imagery and layouts that need more room. */
  wide: 'max-w-6xl',
  /** Edge to edge. */
  full: 'max-w-none',
}

/**
 * Horizontal frame. Centres content at one of three measures and holds the
 * consistent gutter. Never decorates — it only sets the reading width.
 */
export function Container({
  width = 'wide',
  className,
  children,
  ...rest
}: { width?: Width } & ComponentPropsWithoutRef<'div'>) {
  return (
    <div
      className={cn('mx-auto w-full px-6 md:px-10', WIDTHS[width], className)}
      {...rest}
    >
      {children}
    </div>
  )
}

/**
 * Vertical rhythm. A chapter's breathing room on a chosen surface. Keeps
 * spacing decisions out of individual components so the whole scroll paces
 * evenly.
 */
export function Section({
  as = 'section',
  tone = 'bone',
  space = 'default',
  className,
  children,
  ...rest
}: {
  as?: ElementType
  tone?: 'bone' | 'ink' | 'none'
  space?: 'default' | 'sm' | 'none'
  className?: string
  children: ReactNode
} & Omit<ComponentPropsWithoutRef<'section'>, 'className' | 'children'>) {
  const Tag = as as ElementType
  return (
    <Tag
      className={cn(
        tone === 'bone' && 'bg-background text-foreground',
        tone === 'ink' && 'bg-ink text-bone',
        space === 'default' && 'section-y',
        space === 'sm' && 'section-y-sm',
        className,
      )}
      {...rest}
    >
      {children}
    </Tag>
  )
}

/**
 * A quiet passage between chapters — a hairline and a single mark. Gives the
 * eye a beat of rest without announcing itself. Decorative, so hidden from
 * assistive tech.
 */
export function SectionDivider({
  mark,
  tone = 'ink',
  className,
}: {
  /** an optional small mark centred on the rule, e.g. a roman numeral or "~" */
  mark?: ReactNode
  tone?: 'ink' | 'bone'
  className?: string
}) {
  const line = tone === 'ink' ? 'bg-ink/15' : 'bg-bone/20'
  const text = tone === 'ink' ? 'text-ink/40' : 'text-bone/50'
  return (
    <Reveal
      aria-hidden="true"
      className={cn('flex items-center justify-center gap-6 py-16 md:py-24', className)}
    >
      <span className={cn('h-px w-16 md:w-24', line)} />
      {mark ? <span className={cn('type-eyebrow', text)}>{mark}</span> : null}
      <span className={cn('h-px w-16 md:w-24', line)} />
    </Reveal>
  )
}
