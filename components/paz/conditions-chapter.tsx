'use client'

import Image from 'next/image'
import { motion, useReducedMotion } from 'motion/react'
import { Reveal } from '@/components/paz/reveal'
import { EASE_CINEMATIC } from '@/lib/motion'

function ImmersiveCondition({
  image,
  imageAlt,
  children,
  calm = false,
}: {
  image: string
  imageAlt: string
  children: React.ReactNode
  calm?: boolean
}) {
  return (
    <div className="bg-bone px-[4vw] py-[6vh] md:px-[5vw] md:py-[7vh]">
      <div className="grain relative h-[84svh] min-h-[520px] w-full overflow-hidden rounded-sm text-bone md:h-[82svh]">
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes="(max-width: 767px) 92vw, 90vw"
          className="object-cover"
        />
        <div
          className={`absolute inset-0 ${
            calm ? 'bg-ink/20' : 'bg-gradient-to-t from-ink/55 via-ink/10 to-transparent'
          }`}
          aria-hidden="true"
        />
        <div className="relative flex h-full items-center justify-center px-6 py-24 md:px-12">
          <Reveal as="p" className="type-lead max-w-4xl text-center text-balance text-bone">
            {children}
          </Reveal>
        </div>
      </div>
    </div>
  )
}

export function ConditionsChapter() {
  const reduceMotion = useReducedMotion()

  return (
    <section aria-label="the conditions" className="bg-bone text-ink">
      <div className="flex min-h-svh items-center justify-center bg-ink px-6 py-24 text-bone md:px-12">
        <Reveal as="p" className="type-hero mx-auto max-w-4xl text-center text-balance">
          here, a set of conditions comes together to make something that, as far as we know, is
          the last of its kind.
        </Reveal>
      </div>

      <div className="mx-auto grid min-h-svh max-w-6xl items-center gap-16 px-6 py-[22vh] md:grid-cols-[1fr_0.82fr] md:gap-20 md:px-10">
        <Reveal as="p" className="type-lead max-w-2xl text-balance">
          far enough from the world, and quiet enough that there is nothing left to follow but the
          tides, the sun, the birds.
        </Reveal>
        <Reveal delay={0.1} className="relative aspect-[4/3] w-full overflow-hidden">
          <div className="grain absolute inset-0">
            <Image
              src="/images/tidal-morning.png"
              alt="Shorebirds moving along an empty Costa Rican beach at low tide beneath soft morning light."
              fill
              sizes="(max-width: 767px) 100vw, 45vw"
              className="object-cover"
            />
          </div>
        </Reveal>
      </div>

      <ImmersiveCondition
        image="/images/lineup-waiting.png"
        imageAlt="A lone surfer sitting still on a board far out on a glassy, empty ocean at dawn, a forested headland behind."
      >
        waves, and no one waiting for a turn ~ you surf more in a morning than most do in a week.
      </ImmersiveCondition>

      <div className="mx-auto grid min-h-svh max-w-6xl items-center gap-16 px-6 py-[22vh] md:grid-cols-[0.82fr_1fr] md:gap-20 md:px-10">
        <Reveal delay={0.1} className="relative order-2 aspect-[4/3] w-full overflow-hidden md:order-1">
          <div className="grain absolute inset-0">
            <Image
              src="/images/family-fire-table.png"
              alt="A local Costa Rican family gathered naturally around a fire and shared table at dusk."
              fill
              sizes="(max-width: 767px) 100vw, 45vw"
              className="object-cover"
            />
          </div>
        </Reveal>
        <Reveal as="p" className="type-lead order-1 max-w-2xl text-balance md:order-2">
          join a costa rican home, lived the old unhurried way ~ tied to the land in ways english
          has no words for.
        </Reveal>
      </div>

      <ImmersiveCondition
        image="/images/canopy-rain.png"
        imageAlt="Rain moving through a dense rainforest canopy, large wet leaves catching soft grey light."
        calm
      >
        you don&apos;t visit. you live inside ~ so much wildlife that it takes your whole body a few
        days to adjust: the sound of it, the presence of it, the shock of nature still being what
        it was.
      </ImmersiveCondition>

      <div className="bg-bone px-6 text-ink md:px-12">
        <div className="mx-auto flex min-h-svh max-w-2xl items-center justify-center py-[24vh] text-center">
          <motion.p
            className="type-body text-balance"
            initial={reduceMotion ? false : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.65 }}
            transition={{ duration: reduceMotion ? 0 : 1.8, ease: EASE_CINEMATIC }}
          >
            somewhere, this still exists.
          </motion.p>
        </div>

        <div className="mx-auto flex min-h-svh max-w-2xl items-center justify-center py-[24vh] text-center">
          <motion.div
            className="type-body text-balance"
            initial={reduceMotion ? false : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: reduceMotion ? 0 : 1.8, ease: EASE_CINEMATIC }}
          >
            <p>
              we didn&apos;t create any of this, and run no programs. we only open the door, and let
              nature do the rest.
            </p>
            <p className="mt-5">
              then one afternoon ~ a wave you didn&apos;t expect to make, or an animal that stops and
              looks back ~ and something in you lights up in a way it hasn&apos;t in years.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
