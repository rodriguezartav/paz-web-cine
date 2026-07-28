'use client'

import Image from 'next/image'
import { motion, useReducedMotion } from 'motion/react'
import { Reveal } from '@/components/paz/reveal'
import { SpaChapter } from '@/components/paz/spa-chapter'
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
  above = false,
  overlay,
}: {
  image: string
  imageAlt: string
  children: React.ReactNode
  calm?: boolean
  /** On mobile, sit the copy at the top of the frame instead of centring it. */
  topOnMobile?: boolean
  /** Sets the copy on the bone surface above the frame, leaving the photograph clean. */
  above?: boolean
  /** A line set inside the photograph, in a narrow column against its left edge. */
  overlay?: React.ReactNode
}) {
  return (
    <div className="bg-bone px-[4vw] py-[6vh] md:px-[5vw] md:py-[7vh]">
      {above && (
        <Reveal
          as="p"
          className="type-lead mx-auto max-w-4xl text-balance pb-[7vh] text-center text-ink md:pb-[8vh]"
        >
          {children}
        </Reveal>
      )}
      <div className="grain relative h-[84svh] min-h-[520px] w-full overflow-hidden rounded-sm text-bone md:h-[82svh]">
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes="(max-width: 767px) 92vw, 90vw"
          className="object-cover"
        />
        {!above && (
          <>
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
              <Reveal as="p" className="type-lead max-w-4xl text-balance text-center text-bone">
                {children}
              </Reveal>
            </div>
          </>
        )}
        {overlay && (
          <div className="relative flex h-full items-end px-6 pb-12 md:items-center md:justify-start md:px-12 md:pb-0">
            <Reveal
              as="p"
              className="type-lead max-w-md text-pretty text-bone [text-shadow:0_1px_3px_color-mix(in_oklab,var(--color-ink)_70%,transparent),0_2px_20px_color-mix(in_oklab,var(--color-ink)_55%,transparent)] md:w-[30%] md:max-w-none"
            >
              {overlay}
            </Reveal>
          </div>
        )}
      </div>
    </div>
  )
}

export function ConditionsChapter() {
  const reduceMotion = useReducedMotion()

  return (
    <section aria-label="the conditions" className="bg-bone text-ink">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 pb-[6vh] pt-[24vh] md:flex-row md:items-center md:gap-14 md:px-10">
        <Reveal as="p" className="type-lead max-w-2xl text-balance md:w-[38%] md:shrink-0">
          far enough from the world that there is nothing left to follow but the tides, the sun and
          the birds.
        </Reveal>
        <Reveal
          delay={0.1}
          className="relative aspect-[4/3] w-full overflow-hidden md:aspect-[4/3] md:flex-1"
        >
          <div className="grain absolute inset-0">
            <Image
              src="/images/dropbox/aerial-coast.webp"
              alt="An aerial view of turquoise Pacific water breaking along a sand spit where the rainforest meets the sea."
              fill
              sizes="(max-width: 767px) 100vw, 60vw"
              className="object-cover"
            />
          </div>
        </Reveal>
      </div>

      <div className="mx-auto grid w-full max-w-5xl grid-cols-2 items-center gap-6 px-6 pb-[18vh] md:grid-cols-[1fr_1.7fr_1fr] md:gap-12 md:px-10 md:pb-[22vh] md:pt-0">
        <Reveal className="relative col-start-1 row-start-1 aspect-square w-full overflow-hidden rounded-sm md:-translate-y-6">
          <Image
            src="/images/dropbox/DSCF7733.webp"
            alt="A lone surfer sitting out on flat blue water below a forested headland."
            fill
            sizes="(max-width: 767px) 44vw, 220px"
            className="object-cover"
          />
        </Reveal>

        <Reveal
          delay={0.1}
          className="col-span-2 row-start-2 flex flex-col gap-5 text-balance font-display text-[1.0625rem] leading-relaxed tracking-[0.01em] md:col-span-1 md:col-start-2 md:row-span-2 md:row-start-1 md:self-center md:text-center md:text-[1.125rem]"
        >
          <p>
            something remarkable happens when you truly step away from the world into raw, untamed
            nature.
          </p>
          <p>
            without any effort the body changes, the mind eases, the nervous system finally gets some
            rest.
          </p>
        </Reveal>

        <Reveal
          delay={0.2}
          className="relative col-start-1 row-start-3 aspect-square w-full overflow-hidden rounded-sm md:row-start-2 md:translate-y-6"
        >
          <Image
            src="/images/dropbox/DSCF8617.webp"
            alt="A figure silhouetted beneath the palms watching a wave peel at dusk."
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
            src="/images/dropbox/DSCF8662.webp"
            alt="A surfer walking into the shorebreak at first light, framed by dark leaves."
            fill
            sizes="(max-width: 767px) 44vw, 250px"
            className="object-cover"
          />
        </Reveal>
      </div>

      <ImmersiveCondition
        image="/images/dropbox/supporting-shell.webp"
        imageAlt="An empty turquoise Pacific wave framed by the branches of a coastal tree."
        above
        overlay="catch more waves in a morning than most do in a week ~ in the longest rides of your life."
      >
        waves, and no one waiting for a turn ~ long mellow rides to finally surf like you dream.
      </ImmersiveCondition>

      <div className="mx-auto grid w-full max-w-5xl items-center gap-6 px-6 py-[18vh] md:grid-cols-[1.15fr_0.85fr_1fr] md:gap-10 md:px-10 md:py-[22vh]">
        <Reveal className="relative aspect-[3/2] w-full overflow-hidden rounded-sm md:col-start-1 md:row-span-2 md:row-start-1 md:aspect-[4/5] md:self-center">
          <Image
            src="/images/dropbox/DSCF8103.webp"
            alt="Someone carrying a surfboard across empty sand toward the water."
            fill
            sizes="(max-width: 767px) 88vw, 340px"
            className="object-cover"
          />
        </Reveal>

        <Reveal
          delay={0.1}
          className="flex flex-col gap-5 md:col-start-2 md:row-span-2 md:row-start-1 md:self-center md:text-center"
        >
          <p className="text-balance font-display text-[1.0625rem] leading-relaxed tracking-[0.01em] md:text-[1.125rem]">
            grab a board any time of the day and jump out to sea ~ the spot is right out front.
          </p>
          <p className="text-balance font-display text-[1.0625rem] leading-relaxed tracking-[0.01em] md:text-[1.125rem]">
            our founder roberto shows you the spots, with local partners for lessons.
          </p>
        </Reveal>

        <Reveal
          delay={0.2}
          className="relative aspect-[3/2] w-full overflow-hidden rounded-sm md:col-start-3 md:row-start-1 md:aspect-[16/10] md:-translate-y-4"
        >
          <Image
            src="/images/dropbox/DSCF8063.webp"
            alt="A surfer deep in the face of a turquoise wave."
            fill
            sizes="(max-width: 767px) 88vw, 300px"
            className="object-cover"
          />
        </Reveal>

        <Reveal
          delay={0.3}
          className="relative aspect-[3/2] w-full overflow-hidden rounded-sm md:col-start-3 md:row-start-2 md:aspect-[16/10] md:translate-y-4"
        >
          <Image
            src="/images/dropbox/DSCF8045.webp"
            alt="A surfer riding a clean wave below a jungle headland."
            fill
            sizes="(max-width: 767px) 88vw, 300px"
            className="object-cover"
          />
        </Reveal>
      </div>

      <SpaChapter />

      <div className="bg-bone px-6 pb-[6vh] pt-[10vh] text-ink md:px-12 md:pb-[7vh] md:pt-[12vh]">
        <Reveal as="p" className="type-lead mx-auto max-w-3xl text-balance text-center">
          he built a lodge at his home within the rainforest, for people to stay.
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

      <div className="flex min-h-[36svh] flex-col items-center justify-center gap-8 bg-bone px-6 py-[10.5vh] text-center text-ink md:gap-10 md:px-12">
        <Reveal
          as="p"
          className="max-w-[42ch] text-balance font-display text-[1.25rem] leading-[1.7] md:text-[1.375rem]"
        >
          the sound of it, the presence of it, the shock of nature still being what it was.
        </Reveal>
        <Reveal
          as="p"
          delay={0.15}
          className="max-w-[42ch] text-balance font-display text-[1.25rem] leading-[1.7] md:text-[1.375rem]"
        >
          there is something spiritual about this place that changes you from within, without words.
        </Reveal>
      </div>

      <div className="bg-bone px-[4vw] pb-0 pt-[4vh] md:px-[5vw]">
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
        <div className="mx-auto flex max-w-[52ch] flex-col items-center justify-center pb-[22vh] pt-[14vh] text-center font-display text-[1.25rem] leading-[1.8] tracking-[0.01em] md:pb-[24vh] md:pt-[16vh] md:text-[1.375rem]">
          <motion.p
            className="text-balance"
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
