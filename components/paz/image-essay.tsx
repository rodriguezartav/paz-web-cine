import Image from 'next/image'
import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { Container, Section } from '@/components/paz/layout'
import { Reveal } from '@/components/paz/reveal'

export type EssayPlate = {
  src: string
  alt: string
  caption?: ReactNode
  /** natural aspect ratio, w/h — defaults to a calm landscape */
  ratio?: number
  /** where the plate sits within the measure */
  place?: 'full' | 'left' | 'right' | 'inset'
}

const PLACE: Record<NonNullable<EssayPlate['place']>, string> = {
  full: 'w-full',
  left: 'w-full md:w-3/4 md:mr-auto',
  right: 'w-full md:w-3/4 md:ml-auto',
  inset: 'w-full md:w-2/3 md:mx-auto',
}

/**
 * ImageEssay — a quiet sequence of photographs read like a printed spread.
 * Plates vary in width and alignment so the page breathes; nothing is boxed
 * or carded. Each plate may carry a single line of caption set small and
 * off to one side.
 *
 * Photography leads: the only interface is whitespace and a hairline caption.
 */
export function ImageEssay({
  intro,
  plates,
}: {
  /** an optional opening line, set as a lead at the reading measure */
  intro?: ReactNode
  plates: EssayPlate[]
}) {
  return (
    <Section>
      <Container width="wide">
        {intro ? (
          <Reveal as="p" className="measure mb-16 type-lead text-balance text-ink md:mb-24">
            {intro}
          </Reveal>
        ) : null}

        <div className="flex flex-col gap-20 md:gap-32">
          {plates.map((plate, i) => {
            const place = plate.place ?? (i % 2 === 0 ? 'left' : 'right')
            const ratio = plate.ratio ?? 3 / 2
            return (
              <Reveal key={plate.src} className={cn('flex flex-col gap-4', PLACE[place])}>
                <div
                  className="grain relative w-full overflow-hidden"
                  style={{ aspectRatio: ratio }}
                >
                  <Image
                    src={plate.src}
                    alt={plate.alt}
                    fill
                    sizes="(min-width: 768px) 66vw, 100vw"
                    className="object-cover"
                  />
                </div>
                {plate.caption ? (
                  <p
                    className={cn(
                      'max-w-md font-sans text-sm leading-relaxed text-ink/55',
                      place === 'right' && 'md:ml-auto md:text-right',
                    )}
                  >
                    {plate.caption}
                  </p>
                ) : null}
              </Reveal>
            )
          })}
        </div>
      </Container>
    </Section>
  )
}
