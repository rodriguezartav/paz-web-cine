'use client'

import Image from 'next/image'
import { motion, useReducedMotion } from 'motion/react'
import { Reveal } from '@/components/paz/reveal'
import { EASE_CINEMATIC } from '@/lib/motion'

const wildlifeImages = [
  { src: '/images/dropbox/DSCF6251.webp', alt: 'A monkey high among the rainforest branches.', shape: 'aspect-square' },
  { src: '/images/dropbox/DSCF7046.webp', alt: 'A black and white butterfly resting with its wings open.', shape: 'aspect-[2/3]' },
  { src: '/images/dropbox/DSCF7963.webp', alt: 'A scarlet macaw perched among glossy green leaves.', shape: 'aspect-square' },
  { src: '/images/dropbox/DSCF6258.webp', alt: 'A red heliconia glowing beneath the forest canopy.', shape: 'aspect-square' },
  { src: '/images/dropbox/DSCF7782.webp', alt: 'An immense rainforest tree rising from buttress roots.', shape: 'aspect-[3/2]' },
  { src: '/images/dropbox/DSCF9210.webp', alt: 'A small wild animal crossing a quiet rainforest path.', shape: 'aspect-square' },
  { src: '/images/dropbox/DSCF7790.webp', alt: 'Ancient buttress roots disappearing into dense rainforest.', shape: 'aspect-[2/3]' },
  { src: '/images/dropbox/DSCF7975.webp', alt: 'Two scarlet macaws framed by tropical foliage.', shape: 'aspect-square' },
  { src: '/images/dropbox/DSCF8650.webp', alt: 'A shorebird standing among stones at the waterline.', shape: 'aspect-[3/2]' },
  { src: '/images/dropbox/DSCF6253.webp', alt: 'A large seashell found along the wild Pacific coast.', shape: 'aspect-square' },
]

function ImmersiveCondition({
  image,
  imageAlt,
  children,
  calm = false,
  topOnMobile = false,
}: {
  image: string
  imageAlt: string
  children: React.ReactNode
  calm?: boolean
  /** On mobile, sit the copy at the top of the frame instead of centring it. */
  topOnMobile?: boolean
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
            calm
              ? 'bg-ink/20'
              : topOnMobile
                ? 'bg-gradient-to-b from-ink/60 via-ink/10 to-transparent md:bg-gradient-to-t md:from-ink/55'
                : 'bg-gradient-to-t from-ink/55 via-ink/10 to-transparent'
          }`}
          aria-hidden="true"
        />
        <div
          className={`relative flex h-full justify-center px-6 md:items-center md:px-12 md:py-24 ${
            topOnMobile ? 'items-start pb-24 pt-12' : 'items-center py-24'
          }`}
        >
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
        <div className="mx-auto flex min-h-svh max-w-[52ch] items-center justify-center py-[24vh] text-center">
          <div className="relative w-full">
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

            <div className="absolute bottom-[calc(100%+90px)] left-0 aspect-square w-[42%] overflow-hidden rounded-sm border border-bone md:w-[22%]">
              <Image
                src="/images/dropbox/DSCF8925.JPG"
                alt=""
                fill
                sizes="(max-width: 767px) 42vw, 170px"
                className="object-cover"
              />
            </div>

            <div className="absolute right-0 top-[calc(100%+90px)] aspect-square w-[42%] overflow-hidden rounded-sm border border-bone md:w-[22%]">
              <Image
                src="/images/dropbox/DSCF9851.webp"
                alt="A small white seashell resting on weathered wood."
                fill
                sizes="(max-width: 767px) 42vw, 170px"
                className="object-cover"
              />
            </div>
          </div>
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

      <div className="mx-auto grid w-full max-w-3xl grid-cols-2 items-center gap-6 px-6 pb-[18vh] md:grid-cols-[1fr_1.4fr_1fr] md:gap-10 md:px-0 md:pb-[22vh]">
        <Reveal className="relative col-start-1 row-start-1 aspect-square w-full overflow-hidden rounded-sm md:-translate-y-8">
          <Image
            src="/images/dropbox/DSCF7733.webp"
            alt="A lone surfer sitting out on flat blue water below a forested headland."
            fill
            sizes="(max-width: 767px) 44vw, 200px"
            className="object-cover"
          />
        </Reveal>

        <Reveal
          delay={0.12}
          className="relative col-start-2 row-span-2 row-start-1 aspect-[2/3] w-full overflow-hidden rounded-sm md:self-center"
        >
          <Image
            src="/images/dropbox/DSCF8662.webp"
            alt="A surfer walking into the shorebreak at first light, framed by dark leaves."
            fill
            sizes="(max-width: 767px) 44vw, 280px"
            className="object-cover"
          />
        </Reveal>

        <Reveal
          delay={0.24}
          className="relative col-start-1 row-start-2 aspect-square w-full overflow-hidden rounded-sm md:col-start-3 md:row-start-1 md:translate-y-8"
        >
          <Image
            src="/images/dropbox/DSCF8617.webp"
            alt="A figure silhouetted beneath the palms watching a wave peel at dusk."
            fill
            sizes="(max-width: 767px) 44vw, 200px"
            className="object-cover"
          />
        </Reveal>
      </div>

      <ImmersiveCondition
        image="/images/dropbox/supporting-shell.webp"
        imageAlt="An empty turquoise Pacific wave framed by the branches of a coastal tree."
        topOnMobile
      >
        waves, and no one waiting for a turn ~ you surf more in a morning than most do in a week.
      </ImmersiveCondition>

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

      <div className="bg-bone text-ink">
        <div className="mx-auto grid min-h-svh w-full max-w-5xl grid-cols-2 items-center gap-6 px-6 pb-[18vh] pt-[22vh] md:grid-cols-[1fr_1.7fr_1fr] md:gap-12 md:px-10 md:pb-[22vh]">
          <Reveal className="relative col-start-1 row-start-1 aspect-square w-full overflow-hidden rounded-sm md:-translate-y-6">
            <Image
              src="/images/dropbox/DSCF8980.webp"
              alt="A person playing a wooden flute beside a rainforest waterfall."
              fill
              sizes="(max-width: 767px) 44vw, 220px"
              className="object-cover"
            />
          </Reveal>

          <Reveal
            as="p"
            delay={0.1}
            className="type-lead col-span-2 row-start-2 text-balance md:col-span-1 md:col-start-2 md:row-span-2 md:row-start-1 md:self-center md:text-center"
          >
            a costa rican home, lived the old unhurried way ~ tied to the land in ways english has no
            words for.
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
            className="relative col-start-2 row-start-1 aspect-[2/3] w-full overflow-hidden rounded-sm md:col-start-3 md:row-span-2 md:row-start-1 md:self-center"
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
