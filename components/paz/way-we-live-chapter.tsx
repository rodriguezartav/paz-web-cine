import Image from 'next/image'
import { Container, Section } from './layout'
import { Reveal } from './reveal'
import { cn } from '@/lib/utils'

type Passage = {
  text: string
  image: string
  imageAlt: string
  side: 'left' | 'right'
}

const passages: Passage[] = [
  {
    text: "we're of this land ~ born to it, surfing it, living it simple, pura vida, the way we always have.",
    // TODO: replace with the family's own unposed water-side photograph.
    image: '/images/family-fire-table.png',
    imageAlt: 'A local family gathered naturally around a fire and shared table at dusk.',
    side: 'left',
  },
  {
    text: "so this was never a business. it's our home ~ and we just leave the door open.",
    // TODO: replace with the final lived-in threshold photograph.
    image: '/images/open-forest-threshold.png',
    imageAlt: 'A simple lived-in threshold opening from a wooden porch into the rainforest.',
    side: 'right',
  },
  {
    text: 'the forest walks in with you. it moves through the house while you sleep, and still you stay warm.',
    // TODO: replace with the final screened-house photograph.
    image: '/images/screened-cabin.png',
    imageAlt: 'The rainforest moving through the open screens of a simple bedroom at dawn.',
    side: 'left',
  },
  {
    text: "there are no guests at the table ~ only people who were strangers on monday, and aren't by friday.",
    // TODO: replace with a candid mid-meal photograph at the long table.
    image: '/images/shared-table.png',
    imageAlt: 'A long shared table beneath an open rainforest shelter after a meal.',
    side: 'right',
  },
  {
    text: "and when the fire's lit in the cave dug into the earth, the last wall ~ the one inside you ~ tends to come down too.",
    // TODO: replace with the final cave-sauna film photograph.
    image: '/images/earthen-cave-sauna.png',
    imageAlt: 'A dark earthen cave sauna lit softly by firelight.',
    side: 'left',
  },
]

/**
 * One intimate, continuous passage. Text carries the chapter; photographs
 * remain secondary, tucked into its rhythm like images in a field journal.
 */
export function WayWeLiveChapter() {
  return (
    <Section className="overflow-hidden">
      <Container width="measure" className="flex flex-col gap-24 md:gap-32">
        <Reveal>
          <p className="type-lead max-w-xl text-balance text-sage">
            what opens people here isn&apos;t anything we built ~ it&apos;s the way we live.
          </p>
        </Reveal>

        {passages.map((passage) => (
          <div key={passage.text} className="flex flex-col gap-8 md:gap-10">
            <Reveal>
              <p className="type-body max-w-xl text-pretty text-ink">{passage.text}</p>
            </Reveal>
            <Reveal
              className={cn(
                'w-[55%] md:w-[48%]',
                passage.side === 'right' ? 'self-end' : 'self-start',
              )}
            >
              <figure className="film-grain overflow-hidden rounded-sm">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={passage.image}
                    alt={passage.imageAlt}
                    fill
                    sizes="(max-width: 640px) 82vw, 26rem"
                    className="object-cover"
                  />
                </div>
              </figure>
            </Reveal>
          </div>
        ))}

        <Reveal className="py-10 text-center md:py-16">
          <p className="type-body mx-auto max-w-lg text-balance text-ink">
            we open it to a few at a time ~ with faith that it gives them what they need.
          </p>
        </Reveal>
      </Container>
    </Section>
  )
}
