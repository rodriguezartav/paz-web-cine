'use client'

import Image from 'next/image'
import { motion, useReducedMotion } from 'motion/react'
import { Reveal } from '@/components/paz/reveal'
import { EASE_CINEMATIC } from '@/lib/motion'

const wildlifeImages = [
  { src: '/images/dropbox/wildlife-bird.webp', alt: 'A narrow cascade descending through dense rainforest.', shape: 'aspect-square' },
  { src: '/images/dropbox/wildlife-butterfly.webp', alt: 'An earthen shelter surrounded by rainforest.', shape: 'aspect-[2/3]' },
  { src: '/images/dropbox/wildlife-monkey.webp', alt: 'A rainforest animal crossing a quiet forest track.', shape: 'aspect-square' },
  { src: '/images/dropbox/wildlife-flower.webp', alt: 'A home kitchen opening directly onto the rainforest.', shape: 'aspect-square' },
  { src: '/images/dropbox/wildlife-tidepool.webp', alt: 'Still water and stones along the tropical shore.', shape: 'aspect-[3/2]' },
  { src: '/images/dropbox/wildlife-lizard.webp', alt: 'People walking a sunlit trail through dense forest.', shape: 'aspect-square' },
  { src: '/images/dropbox/wildlife-canopy.webp', alt: 'A figure walking beneath the rainforest canopy.', shape: 'aspect-[2/3]' },
  { src: '/images/dropbox/wildlife-moth.webp', alt: 'A pale moth resting against a dark natural surface.', shape: 'aspect-square' },
  { src: '/images/dropbox/wildlife-leaves.webp', alt: 'A turquoise Pacific wave seen beneath coastal branches.', shape: 'aspect-[3/2]' },
  { src: '/images/dropbox/wildlife-shell.webp', alt: 'A shell found along the Corcovado coast.', shape: 'aspect-square' },
]

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
      <div className="bg-ink px-6 text-bone md:px-12">
        <div className="mx-auto flex min-h-svh max-w-3xl items-center justify-center py-[24vh] text-center">
          <div className="relative w-full">
            <motion.p
              className="mx-auto max-w-[52ch] text-balance font-display text-[1.25rem] leading-[1.8] tracking-[0.01em] md:text-[1.375rem]"
              initial={reduceMotion ? false : { opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.7 }}
              transition={{ duration: reduceMotion ? 0 : 1.8, ease: EASE_CINEMATIC }}
            >
              you&apos;re not looking for more. you&apos;re looking for something real enough to meet you.
            </motion.p>

            <div className="absolute inset-x-0 top-[calc(100%+150px)] flex justify-evenly">
              <div className="relative aspect-square w-[24%] overflow-hidden rounded-sm">
                <Image
                  src="/images/dropbox/DSCF8925.JPG"
                  alt=""
                  fill
                  sizes="(max-width: 767px) 24vw, 185px"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square w-[24%] overflow-hidden rounded-sm">
                <Image
                  src="/images/dropbox/supporting-flower.webp"
                  alt="A quiet portrait made in soft coastal light."
                  fill
                  sizes="(max-width: 767px) 24vw, 185px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto flex min-h-svh max-w-[52ch] items-center justify-center py-[24vh] text-center">
          <motion.p
            className="text-balance font-display text-[1.25rem] leading-[1.8] tracking-[0.01em] md:text-[1.375rem]"
            initial={reduceMotion ? false : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: reduceMotion ? 0 : 1.8, ease: EASE_CINEMATIC }}
          >
            here, conditions come together to make something that, as far as we know, is the last
            of its kind.
          </motion.p>
        </div>

        <div className="mx-auto flex min-h-svh items-center justify-center py-[20vh] text-center">
          <motion.p
            className="max-w-[30ch] text-balance font-display text-[1.75rem] uppercase leading-[1.35] tracking-[0.15em] text-bone md:text-[2rem]"
            initial={reduceMotion ? false : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.78 }}
            transition={{ duration: reduceMotion ? 0 : 2.8, ease: EASE_CINEMATIC }}
          >
            raw nature that changes you from within, without words.
          </motion.p>
        </div>
      </div>

      <div className="mx-auto grid min-h-svh max-w-6xl items-center gap-16 px-6 py-[22vh] md:grid-cols-[1fr_0.82fr] md:gap-20 md:px-10">
        <Reveal as="p" className="type-lead max-w-2xl text-balance">
          far enough from the world, and quiet enough that there is nothing left to follow but the
          tides, the sun, the birds.
        </Reveal>
        <Reveal delay={0.1} className="relative aspect-[4/3] w-full overflow-hidden">
          <div className="grain absolute inset-0">
            <Image
              src="/images/dropbox/hero-coast.webp"
              alt="A solitary figure standing among driftwood on a wild Pacific shoreline."
              fill
              sizes="(max-width: 767px) 100vw, 45vw"
              className="object-cover"
            />
          </div>
        </Reveal>
      </div>

      <ImmersiveCondition
        image="/images/dropbox/supporting-shell.webp"
        imageAlt="An empty turquoise Pacific wave framed by the branches of a coastal tree."
      >
        waves, and no one waiting for a turn ~ you surf more in a morning than most do in a week.
      </ImmersiveCondition>

      <div className="mx-auto grid min-h-svh max-w-6xl items-center gap-16 px-6 py-[22vh] md:grid-cols-[0.82fr_1fr] md:gap-20 md:px-10">
        <Reveal delay={0.1} className="relative order-2 aspect-[4/3] w-full overflow-hidden md:order-1">
          <div className="grain absolute inset-0">
            <Image
              src="/images/dropbox/kitchen3.webp"
              alt="Two people sharing a candid moment while preparing food in a warmly lit Costa Rican kitchen."
              fill
              sizes="(max-width: 767px) 100vw, 45vw"
              className="object-cover"
            />
          </div>
        </Reveal>
        <Reveal as="p" className="type-lead order-1 max-w-2xl text-balance md:order-2">
          a costa rican home, lived the old unhurried way ~ tied to the land in ways english has no
          words for.
        </Reveal>
      </div>

      <ImmersiveCondition
        image="/images/dropbox/DSCF9683.JPG"
        imageAlt="Wildlife observed in the dense rainforest around Paz."
        calm
      >
        you don&apos;t visit. you live inside ~ so much wildlife that it takes your whole body a few
        days to adjust:
      </ImmersiveCondition>

      <div className="flex min-h-[36svh] items-center justify-center bg-bone px-6 py-[10.5vh] text-center text-ink md:px-12">
        <Reveal
          as="p"
          className="max-w-[42ch] text-balance font-display text-[1.25rem] leading-[1.7] md:text-[1.375rem]"
        >
          the sound of it, the presence of it, the shock of nature still being what it was.
        </Reveal>
      </div>

      <div className="bg-bone px-[4vw] pb-[18vh] pt-0 md:px-[5vw] md:pb-[22vh]">
        <div className="columns-2 gap-2.5 md:columns-3 lg:columns-4">
          {wildlifeImages.map((image, index) => (
            <motion.div
              key={image.src}
              className={`grain relative mb-2.5 break-inside-avoid overflow-hidden rounded-sm ${image.shape}`}
              initial={reduceMotion ? false : { opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: reduceMotion ? 0 : 1.2,
                delay: reduceMotion ? 0 : index * 0.07,
                ease: EASE_CINEMATIC,
              }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                loading="lazy"
                sizes="(max-width: 767px) 46vw, (max-width: 1023px) 30vw, 22vw"
                className="object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>

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

        <div className="mx-auto flex min-h-svh max-w-[52ch] flex-col items-center justify-center py-[28vh] text-center font-display text-[1.25rem] leading-[1.8] tracking-[0.01em] md:text-[1.375rem]">
          <motion.p
            className="text-balance"
            initial={reduceMotion ? false : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.65 }}
            transition={{ duration: reduceMotion ? 0 : 1.8, ease: EASE_CINEMATIC }}
          >
            we didn&apos;t create any of this, and run no programs. we only open the door, and let
            nature do the rest.
          </motion.p>
          <motion.p
            className="mt-[9vh] text-balance"
            initial={reduceMotion ? false : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.65 }}
            transition={{ duration: reduceMotion ? 0 : 1.8, ease: EASE_CINEMATIC }}
          >
            then one afternoon ~ a wave you didn&apos;t expect to make, or an animal that stops and
            looks back ~ and something in you lights up in a way it hasn&apos;t in years.
          </motion.p>
        </div>
      </div>
    </section>
  )
}
