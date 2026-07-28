import Image from 'next/image'
import { Reveal } from './reveal'
import { cn } from '@/lib/utils'

const supportFrames = [
  {
    src: '/images/dropbox/live-threshold.webp',
    alt: 'Someone with eyes closed and a hand over the heart, wrapped in cloth after the heat.',
  },
  {
    src: '/images/dropbox/wildlife-leaves.webp',
    alt: 'A hand held to the collarbone, breathing slowly beneath a wrap of cloth.',
  },
  {
    src: '/images/dropbox/supporting-flower.webp',
    alt: 'A quiet gaze away from the camera, shoulders wrapped in ochre cloth.',
  },
]

/**
 * The cave sauna — the training-centre statement, an upright triptych of the
 * same person moving through the heat, then a wide photograph and the closing
 * line. Sits on the bone surface, continuing the surf movement above it.
 */
export function SpaChapter() {
  return (
    <div className="bg-bone text-ink">
      <div className="measure mx-auto flex w-full flex-col gap-6 px-6 pb-16 md:gap-7 md:px-10 md:pb-20">
        <Reveal
          as="p"
          className="max-w-2xl text-pretty font-display text-[clamp(1.125rem,2.55vw,1.875rem)] leading-[1.2]"
        >
          our founder has studied natural presence meditation for 20 years, in the rainforest with the
          most life on earth.
        </Reveal>
        <Reveal
          as="p"
          delay={0.1}
          className="max-w-xl text-pretty font-display text-[1.0625rem] leading-[1.55] md:text-[1.125rem]"
        >
          our training center looks like a spa, and supports us physically, emotionally and
          spiritually.
        </Reveal>
      </div>

      <div className="measure mx-auto flex w-full flex-col px-6 pb-20 md:px-10 md:pb-24">
        <Reveal className="flex w-full items-start gap-3 md:gap-5">
          {supportFrames.map((frame, index) => (
            <figure
              key={frame.src}
              className={cn(
                'film-grain flex-1 overflow-hidden rounded-sm',
                index === 1 ? 'md:mt-10' : index === 2 ? 'md:mt-4' : '',
              )}
            >
              <div className="relative aspect-[3/4]">
                <Image
                  src={frame.src}
                  alt={frame.alt}
                  fill
                  loading="lazy"
                  sizes="(max-width: 767px) 31vw, 18rem"
                  className="object-cover"
                />
              </div>
            </figure>
          ))}
        </Reveal>
      </div>

      <Reveal className="px-[4vw] md:px-[5vw]">
        <figure className="film-grain overflow-hidden rounded-sm">
          <div className="relative aspect-[4/3] md:aspect-[16/9]">
            <Image
              src="/images/dropbox/DSCF9588.webp"
              alt="People resting outside a domed earthen cave sauna in the rainforest."
              fill
              loading="lazy"
              sizes="(max-width: 767px) 92vw, 90vw"
              className="object-cover"
            />
          </div>
        </figure>
      </Reveal>

      <div className="measure mx-auto flex w-full flex-col px-6 pt-20 md:px-10 md:pt-24">
        <Reveal
          as="p"
          className="max-w-xl text-pretty font-display text-[1.0625rem] leading-[1.55] md:text-[1.125rem]"
        >
          the cave sauna is a portal only available at paz. the womb of creation ~ in service of the
          spirit of the most mystical rainforest on earth.
        </Reveal>
      </div>
    </div>
  )
}
