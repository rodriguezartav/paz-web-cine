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
 * The cave sauna — the training-centre statement and an upright triptych, then
 * a wide photograph of the sauna carrying its title and portal line within the
 * frame. All on the bone surface.
 */
export function SpaChapter() {
  return (
    <div className="bg-bone text-ink">
      <div className="measure mx-auto flex w-full flex-col gap-6 px-6 pb-16 md:gap-7 md:px-10 md:pb-20">
        <Reveal
          as="p"
          className="max-w-2xl text-pretty font-display text-[clamp(1.125rem,2.55vw,1.875rem)] leading-[1.2]"
        >
          roberto has studied natural presence meditation for 20 years, here in the rainforest with the
          most life on earth.
        </Reveal>
      </div>

      <div className="mx-auto flex w-full max-w-5xl flex-col px-6 pb-20 md:px-10 md:pb-24">
        <Reveal className="flex w-full flex-wrap items-start gap-3 md:flex-nowrap md:gap-5">
          {supportFrames.map((frame, index) => (
            <figure
              key={frame.src}
              className={cn(
                'film-grain w-[calc((100%-1.5rem)/3)] overflow-hidden rounded-sm md:w-auto md:flex-1',
                index === 1 ? 'md:mt-10' : index === 2 ? 'md:order-4 md:mt-4' : '',
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

          <p className="w-full text-pretty pt-4 font-display text-[1.0625rem] leading-[1.55] md:order-3 md:w-[26%] md:flex-none md:self-center md:pt-0 md:text-base">
            our training center looks like a spa, uniquely created by asking this mystical rainforest
            for help easing the mind and returning to the body.
          </p>
        </Reveal>
      </div>

      <Reveal className="px-[4vw] pb-[10vh] md:px-[5vw] md:pb-[12vh]">
        <figure className="film-grain relative overflow-hidden rounded-sm text-bone">
          <div className="relative aspect-[4/3] md:aspect-[16/9]">
            <Image
              src="/images/dropbox/DSCF9588.webp"
              alt="People resting outside a domed earthen cave sauna in the rainforest."
              fill
              loading="lazy"
              sizes="(max-width: 767px) 92vw, 90vw"
              className="object-cover"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/25 to-transparent"
              aria-hidden="true"
            />
            <figcaption className="absolute inset-x-0 bottom-0 flex flex-col gap-4 px-6 pb-10 md:gap-5 md:px-12 md:pb-14">
              <h2 className="type-lead max-w-3xl text-balance">
                cave sauna: the womb of creation
              </h2>
              <p className="max-w-xl text-pretty font-display text-[1.0625rem] leading-[1.55] md:text-[1.125rem]">
                a portal unique to paz, in service of the most mystical rainforest on earth.
              </p>
            </figcaption>
          </div>
        </figure>
      </Reveal>
    </div>
  )
}
