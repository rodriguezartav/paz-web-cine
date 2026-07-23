'use client'

import Image from 'next/image'
import { Reveal } from '@/components/paz/reveal'

export function ConditionsChapter() {
  return (
    <section aria-label="the conditions" className="bg-bone text-ink">
      <div className="flex min-h-svh items-center justify-center bg-ink px-6 py-24 text-bone md:px-12">
        <Reveal as="p" className="type-hero mx-auto max-w-4xl text-center text-balance">
          here, a set of conditions comes together to make something that, as far as we know, is
          the last of its kind.
        </Reveal>
      </div>

      <div className="mx-auto grid min-h-svh max-w-6xl items-center gap-14 px-6 py-[20vh] md:grid-cols-[1fr_0.82fr] md:gap-20 md:px-10">
        <Reveal as="p" className="type-lead max-w-2xl text-balance">
          you don&apos;t visit. you live inside ~ so much wildlife that it takes your whole body a few
          days to adjust: the sound of it, the presence of it, the shock of nature still being what
          it was.
        </Reveal>
        <Reveal delay={0.1} className="relative aspect-[4/3] w-full overflow-hidden">
          <div className="grain absolute inset-0">
            <Image
              src="/images/canopy-rain.png"
              alt="Rain moving through a dense rainforest canopy, large wet leaves catching soft grey light."
              fill
              sizes="(max-width: 767px) 100vw, 45vw"
              className="object-cover"
            />
          </div>
        </Reveal>
      </div>

      <div className="pt-[22vh]">
        <div className="grain relative h-[78svh] min-h-[520px] w-full overflow-hidden">
          <Image
            src="/images/lineup-waiting.png"
            alt="A lone surfer sitting still on a board far out on a glassy, empty ocean at dawn, a forested headland behind."
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="flex min-h-[65svh] items-center px-6 py-[20vh] md:px-12">
          <Reveal as="p" className="type-lead max-w-3xl text-balance">
            waves, and no one waiting for a turn ~ you surf more in a morning than most do in a
            week.
          </Reveal>
        </div>
      </div>

      <div className="pt-[22vh]">
        <div className="grain relative h-[78svh] min-h-[520px] w-full overflow-hidden">
          <Image
            src="/images/mist-forest.png"
            alt="Mist drifting slowly through tall primary rainforest at dawn, layers of trees fading into soft grey fog."
            fill
            sizes="100vw"
            className="object-cover sepia-[0.12]"
          />
        </div>
        <div className="flex min-h-[65svh] items-center justify-end px-6 py-[20vh] md:px-12">
          <Reveal as="p" className="type-lead max-w-3xl text-balance md:text-right">
            join a costa rican home, lived the old unhurried way ~ tied to the land in ways english
            has no words for.
          </Reveal>
        </div>
      </div>

      <div className="bg-ink px-6 text-bone md:px-12">
        <div className="mx-auto flex min-h-svh max-w-5xl items-center justify-center py-28 text-center">
          <Reveal as="p" className="type-hero text-balance">
            somewhere, this still exists.
          </Reveal>
        </div>
        <div className="mx-auto flex min-h-svh max-w-5xl items-center justify-center py-28 text-center">
          <Reveal as="p" duration={1.6} className="type-hero text-balance">
            we didn&apos;t create any of this, and run no programs. we only open the door, and let
            nature do the rest.
          </Reveal>
        </div>
        <div className="mx-auto flex min-h-[120svh] max-w-5xl items-center justify-center py-28 text-center">
          <Reveal as="p" duration={1.8} className="type-hero text-balance">
            then one afternoon ~ a wave you didn&apos;t expect to make, or an animal that stops and
            looks back ~ and something in you lights up in a way it hasn&apos;t in years.
          </Reveal>
        </div>
      </div>
    </section>
  )
}
