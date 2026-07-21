import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { Container, Section } from '@/components/paz/layout'
import { Reveal } from '@/components/paz/reveal'

/**
 * QuietQuote — a single held sentence surrounded by air. Used sparingly to
 * let one thought resonate. Sits on bone or ink; the words do all the work,
 * so there are no quotation marks, rules, or ornament unless an attribution
 * is given.
 */
export function QuietQuote({
  children,
  attribution,
  tone = 'bone',
  variant = 'display',
}: {
  children: ReactNode
  attribution?: ReactNode
  tone?: 'bone' | 'ink'
  /** `display` for a stated line, `banner` for a rare emotional one */
  variant?: 'display' | 'banner'
}) {
  const text = tone === 'ink' ? 'text-bone' : 'text-ink'
  const sub = tone === 'ink' ? 'text-bone/55' : 'text-ink/50'

  return (
    <Section tone={tone}>
      <Container width="wide" className="text-center">
        <Reveal
          as="blockquote"
          className={cn(
            'mx-auto text-balance',
            variant === 'banner' ? 'type-banner' : 'measure-none type-hero',
            text,
          )}
        >
          {children}
        </Reveal>
        {attribution ? (
          <Reveal delay={0.15} className="mt-10">
            <cite className={cn('type-eyebrow not-italic', sub)}>{attribution}</cite>
          </Reveal>
        ) : null}
      </Container>
    </Section>
  )
}
