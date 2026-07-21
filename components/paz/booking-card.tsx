import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { Container, Section } from '@/components/paz/layout'
import { Reveal } from '@/components/paz/reveal'

/**
 * BookingCard — the invitation to arrive. Despite the name it is not a boxed
 * card: booking must remain available without ever dominating. It reads as a
 * quiet editorial passage — a line of intent, a single link, and the small
 * print that keeps expectations honest.
 *
 * The link is a text link, not a button, so it never competes with the place.
 */
export function BookingCard({
  eyebrow,
  statement,
  note,
  action = { label: 'request to arrive', href: '#apply' },
  tone = 'bone',
}: {
  eyebrow?: ReactNode
  /** the display-type invitation */
  statement: ReactNode
  /** honest small print beneath */
  note?: ReactNode
  action?: { label: string; href: string }
  tone?: 'bone' | 'ink'
}) {
  const text = tone === 'ink' ? 'text-bone' : 'text-ink'
  const sub = tone === 'ink' ? 'text-bone/60' : 'text-ink/55'
  const line = tone === 'ink' ? 'border-bone/50 hover:border-bone' : 'border-ink/40 hover:border-ink'

  return (
    <Section tone={tone} space="sm" id="apply">
      <Container width="measure" className="text-center">
        {eyebrow ? (
          <Reveal className={cn('mb-8 type-eyebrow', sub)}>{eyebrow}</Reveal>
        ) : null}
        <Reveal as="p" className={cn('type-lead text-balance', text)}>
          {statement}
        </Reveal>
        <Reveal delay={0.12}>
          <a
            href={action.href}
            className={cn(
              'mt-12 inline-flex items-center border-b pb-1 font-sans text-sm uppercase tracking-[0.24em] transition-colors',
              text,
              line,
            )}
          >
            {action.label}
          </a>
        </Reveal>
        {note ? (
          <Reveal delay={0.2}>
            <p className={cn('mx-auto mt-10 max-w-md font-sans text-sm leading-relaxed', sub)}>
              {note}
            </p>
          </Reveal>
        ) : null}
      </Container>
    </Section>
  )
}
