import Image from 'next/image'

import { Reveal } from './reveal'

/**
 * ConditionsCollage — the promise of the place held inside three frames:
 * a tall portrait on one side, two landscapes stacked on the other, the
 * sentence carried between them. Mirrors LandCollage in structure but
 * reverses its weight, so the two passages read as a call and an answer.
 * On small screens the words come first and the images fall in beneath.
 */
export function ConditionsCollage() {
  return (
    <section aria-label="the conditions" className="bg-bone text-ink">
      <div className="mx-auto grid w-full max-w-5xl grid-cols-2 items-center gap-6 px-6 pb-[16vh] pt-[4vh] md:grid-cols-[1fr_1.6fr_1fr] md:gap-12 md:px-10 md:pb-[20vh]">
        <Reveal
          as="p"
          className="col-span-2 row-start-1 text-balance font-display text-[clamp(1.125rem,2.55vw,1.875rem)] leading-[1.2] md:col-span-1 md:col-start-2 md:row-span-2 md:row-start-1 md:self-center md:text-center"
        >
          here, a set of conditions comes together to make something that, as far as we know, is the
          last of its kind.
        </Reveal>

        <Reveal
          delay={0.1}
          className="relative col-span-2 row-start-2 min-h-[46vh] w-full overflow-hidden rounded-sm md:col-span-1 md:col-start-1 md:row-span-2 md:row-start-1 md:min-h-0 md:self-stretch"
        >
          <Image
            src="/images/dropbox/tidal-morning.webp"
            alt="A woman resting on a daybed beneath the palms of a rainforest clearing."
            fill
            sizes="(max-width: 767px) 90vw, 250px"
            className="object-cover"
          />
        </Reveal>

        <Reveal
          delay={0.2}
          className="relative col-start-1 row-start-3 aspect-[4/3] w-full overflow-hidden rounded-sm md:col-start-3 md:row-start-1 md:aspect-square"
        >
          <Image
            src="/images/dropbox/wildlife-canopy.webp"
            alt="A surfer dropping into the face of a clean turquoise wave."
            fill
            sizes="(max-width: 767px) 44vw, 220px"
            className="object-cover"
          />
        </Reveal>

        <Reveal
          delay={0.3}
          className="relative col-start-2 row-start-3 aspect-[4/3] w-full overflow-hidden rounded-sm md:col-start-3 md:row-start-2 md:aspect-square"
        >
          <Image
            src="/images/dropbox/wildlife-tidepool.webp"
            alt="A family carrying surfboards down a shaded jungle path toward the sea."
            fill
            sizes="(max-width: 767px) 44vw, 220px"
            className="object-cover"
          />
        </Reveal>
      </div>
    </section>
  )
}
