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
    text: "nobody's guiding you. we just take you ~ to the waterfall when it's running, the beach when the light's right, the wave when it turns on. and after that, you go back on your own, whenever you want.",
    // TODO: replace with the final waterfall, creek, or forest-walk photograph.
    image: '/images/forest-waterfall-walk.png',
    imageAlt: 'A narrow rainforest path leading toward a small waterfall and creek.',
    side: 'left',
  },
  {
    text: "and when the fire's lit in the cave dug into the earth, the last wall ~ the one inside you ~ tends to come down too.",
    // TODO: replace with the final cave-sauna film photograph.
    image: '/images/earthen-cave-sauna.png',
    imageAlt: 'A dark earthen cave sauna lit softly by firelight.',
    side: 'right',
  },
]

/**
 * One intimate, continuous passage. Text carries the chapter; photographs
 * remain secondary, tucked into its rhythm like images in a field journal.
 */
export function WayWeLiveChapter() {
  return (
    <Section className="overflow-hidden">
      <Container width="measure" className="flex flex-col gap-40 md:gap-48">
        <Reveal>
          <p className="type-lead max-w-xl text-balance text-sage">
            what opens people here isn&apos;t anything we built ~ it&apos;s the way we live.
          </p>
        </Reveal>

        {passages.map((passage, index) => (
          <div key={passage.text} className="flex flex-col gap-20 md:gap-24">
            <Reveal
              className={cn(
                index % 2 === 0
                  ? 'w-[72%] md:w-[86%]'
                  : 'w-[62%] md:w-[72%]',
                passage.side === 'right' ? 'self-end' : 'self-start',
              )}
            >
              <figure className="film-grain overflow-hidden rounded-sm">
                <div className="relative aspect-[4/3] md:aspect-[16/9]">
                  <Image
                    src={passage.image}
                    alt={passage.imageAlt}
                    fill
                    sizes="(max-width: 767px) 55vw, (max-width: 1023px) 52rem, 58rem"
                    className="object-cover"
                  />
                </div>
              </figure>
            </Reveal>
            <Reveal>
              <p className="type-body max-w-xl text-pretty text-ink">{passage.text}</p>
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
