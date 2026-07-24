import Image from 'next/image'
import { Container, Section } from './layout'
import { Reveal } from './reveal'
import { cn } from '@/lib/utils'

type Passage = {
  text: string
  image: string
  imageAlt: string
  /** Optional second photograph, paired with the first as an upright diptych. */
  secondImage?: string
  secondImageAlt?: string
  side: 'left' | 'right'
}

const passages: Passage[] = [
  {
    text: "so this was never a business. it's our home ~ and we just leave the door open.",
    image: '/images/dropbox/DSCF9708.webp',
    imageAlt: 'An open screened living room looking directly into dense rainforest.',
    side: 'right',
  },
  {
    text: 'the forest walks in with you. it moves through the house while you sleep, and still you stay warm.',
    image: '/images/dropbox/DSCF9734.webp',
    imageAlt: 'A glass-walled room open to the rainforest, someone reading on a low daybed.',
    secondImage: '/images/dropbox/DSCF9878.webp',
    secondImageAlt: 'Someone resting on a bed beside a window that opens onto the palms at dusk.',
    side: 'left',
  },
  {
    text: "there are no guests at the table ~ only people who were strangers on monday, and aren't by friday.",
    image: '/images/dropbox/family-fire.webp',
    imageAlt: 'Friends gathered around a shared table and fire beneath the palms at night.',
    side: 'right',
  },
  {
    text: "nobody's guiding you. we just take you ~ to the waterfall when it's running, the beach when the light's right, the wave when it turns on. and after that, you go back on your own, whenever you want.",
    image: '/images/dropbox/DSCF9026.webp',
    imageAlt: 'Two people beside a tall rainforest waterfall falling into a dark pool.',
    side: 'left',
  },
  {
    text: "and when the fire's lit in the cave dug into the earth, the last wall ~ the one inside you ~ tends to come down too.",
    image: '/images/dropbox/DSCF9588.webp',
    imageAlt: 'People resting outside a domed earthen cave sauna in the rainforest.',
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
                passage.secondImage
                  ? 'w-[88%] md:w-[80%]'
                  : index % 2 === 0
                    ? 'w-[72%] md:w-[86%]'
                    : 'w-[62%] md:w-[72%]',
                passage.side === 'right' ? 'self-end' : 'self-start',
              )}
            >
              {passage.secondImage ? (
                <div className="flex items-start gap-4 md:gap-6">
                  <figure className="film-grain flex-1 overflow-hidden rounded-sm">
                    <div className="relative aspect-[3/4]">
                      <Image
                        src={passage.image}
                        alt={passage.imageAlt}
                        fill
                        sizes="(max-width: 767px) 42vw, 28rem"
                        className="object-cover"
                      />
                    </div>
                  </figure>
                  <figure className="film-grain mt-10 flex-1 overflow-hidden rounded-sm md:mt-16">
                    <div className="relative aspect-[3/4]">
                      <Image
                        src={passage.secondImage}
                        alt={passage.secondImageAlt ?? ''}
                        fill
                        sizes="(max-width: 767px) 42vw, 28rem"
                        className="object-cover"
                      />
                    </div>
                  </figure>
                </div>
              ) : (
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
              )}
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
