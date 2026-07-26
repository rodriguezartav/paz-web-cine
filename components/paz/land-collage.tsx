import Image from 'next/image'

import { Reveal } from './reveal'

/**
 * LandCollage — a single passage held between three photographs: two squares
 * stacked on one side, a tall frame on the other. On small screens the words
 * come first, then the images fall in beneath them.
 */
export function LandCollage() {
  return (
    <section aria-label="the old way" className="bg-bone text-ink">
      <div className="mx-auto grid min-h-svh w-full max-w-5xl grid-cols-2 items-center gap-6 px-6 pb-[18vh] pt-[22vh] md:grid-cols-[1fr_1.7fr_1fr] md:gap-12 md:px-10 md:pb-[22vh]">
        <Reveal className="col-span-2 row-start-1 flex flex-col gap-5 md:col-span-1 md:col-start-2 md:row-span-2 md:row-start-1 md:gap-6 md:self-center md:text-center">
          <h2 className="type-lead text-balance">
            this is an invitation to an authentic nature-led experience
          </h2>
          <p className="text-pretty font-display text-[1.0625rem] leading-[1.55] md:text-[1.125rem]">
            lived on costa rican land, the authentic old way ~ unhurried. tied to life in ways
            english has no words for.
          </p>
        </Reveal>

        <Reveal
          delay={0.1}
          className="relative col-start-1 row-start-2 aspect-square w-full overflow-hidden rounded-sm md:row-start-1 md:-translate-y-6"
        >
          <Image
            src="/images/dropbox/DSCF8980.webp"
            alt="A person playing a wooden flute beside a rainforest waterfall."
            fill
            sizes="(max-width: 767px) 44vw, 220px"
            className="object-cover"
          />
        </Reveal>

        <Reveal
          delay={0.2}
          className="relative col-start-1 row-start-3 aspect-square w-full overflow-hidden rounded-sm md:row-start-2 md:translate-y-6"
        >
          <Image
            src="/images/dropbox/DSCF9144.webp"
            alt="Hands working with wet earth on the rainforest floor."
            fill
            sizes="(max-width: 767px) 44vw, 220px"
            className="object-cover"
          />
        </Reveal>

        <Reveal
          delay={0.3}
          className="relative col-start-2 row-span-2 row-start-2 min-h-[40vh] w-full self-stretch overflow-hidden rounded-sm md:col-start-3 md:row-span-2 md:row-start-1 md:aspect-[2/3] md:min-h-0 md:self-center"
        >
          <Image
            src="/images/dropbox/DSCF9161.webp"
            alt="People bathing beneath a narrow waterfall in the rainforest."
            fill
            sizes="(max-width: 767px) 44vw, 250px"
            className="object-cover"
          />
        </Reveal>
      </div>
    </section>
  )
}
