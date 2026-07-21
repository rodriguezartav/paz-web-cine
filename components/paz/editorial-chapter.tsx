import type { ReactNode } from 'react'
import { Container, Section } from '@/components/paz/layout'
import { Reveal } from '@/components/paz/reveal'

/**
 * EditorialChapter — a reading rest. Generous whitespace on bone, an optional
 * chapter marker and eyebrow on a hairline, a lead statement, then prose at a
 * comfortable measure. This is where the interface disappears entirely and
 * the writing becomes the whitespace.
 *
 * Pass the body copy as children so any page can supply its own words.
 */
export function EditorialChapter({
  chapter,
  eyebrow,
  lead,
  children,
}: {
  /** e.g. "I ~ the recognition" */
  chapter?: ReactNode
  /** small right-aligned label */
  eyebrow?: ReactNode
  /** the display-type statement that opens the chapter */
  lead?: ReactNode
  /** body prose */
  children?: ReactNode
}) {
  return (
    <Section>
      <Container width="measure" className="px-6">
        {(chapter || eyebrow) && (
          <Reveal className="mb-10 flex items-baseline justify-between border-b border-border pb-4">
            {chapter ? (
              <span className="type-eyebrow text-ink/60">{chapter}</span>
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
          <Reveal as="p" className="type-lead text-balance text-ink">
            {lead}
          </Reveal>
        ) : null}

        {children ? (
          <Reveal as="div" delay={0.1} className="mt-10 space-y-6 type-body text-ink/85">
            {children}
          </Reveal>
        ) : null}
      </Container>
    </Section>
  )
}
