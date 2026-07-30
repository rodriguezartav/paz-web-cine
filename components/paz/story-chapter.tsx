'use client'

import Image from 'next/image'
import { Reveal } from '@/components/paz/reveal'

/**
 * The Voice — the turn from wordless landscape into someone speaking.
 *
 * Seven beats told in first person, walked downhill in one continuous
 * vertical descent. Words are always primary; the photographs are the view
 * the voice speaks over — soft, muted, offset, never full-bleed. Real
 * silence (15–20vh of empty bone) sits between the beats, and the two
 * quietest lines stand entirely alone.
 */

/** A line of the story. Narrow measure, centred, display face on bone. */
function Beat({
  children,
  opening = false,
  delay = 0,
}: {
  children: React.ReactNode
  /** The first line — the voice beginning, set a touch larger. */
  opening?: boolean
  delay?: number
}) {
  return (
    <Reveal
      as="p"
      delay={delay}
      className={`mx-auto max-w-[24ch] text-balance text-center font-display leading-[1.18] text-ink md:max-w-[30ch] ${
        opening
          ? 'text-[clamp(1.75rem,4.4vw,3rem)]'
          : 'text-[clamp(1.5rem,3.4vw,2.5rem)]'
      }`}
    >
      {children}
    </Reveal>
  )
}

/**
 * A quiet plate between beats — atmospheric, muted, gently offset from the
 * column so it reads as a glance sideways rather than an illustration.
 */
function StoryPlate({
  src,
  alt,
  ratio = 'aspect-[16/10]',
  align = 'left',
}: {
  src: string
  alt: string
  ratio?: string
  align?: 'left' | 'right'
}) {
  return (
    <Reveal
      delay={0.05}
      className={`relative w-[86%] max-w-3xl overflow-hidden rounded-sm md:w-[66%] ${
        align === 'left' ? 'mr-auto md:ml-[6%]' : 'ml-auto md:mr-[6%]'
      } ${ratio}`}
    >
      <div className="grain absolute inset-0">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 767px) 86vw, 66vw"
          className="object-cover opacity-[0.92] saturate-[0.82]"
        />
      </div>
      {/* a wash of bone so the photograph stays behind the voice */}
      <div className="absolute inset-0 bg-bone/15 mix-blend-luminosity" aria-hidden="true" />
    </Reveal>
  )
}

export function StoryChapter() {
  return (
    <section
      aria-label="a letter from roberto"
      className="bg-bone text-ink"
    >
      {/* the held breath between the hero and the first words */}
      <div className="flex flex-col gap-[16vh] px-6 pb-[18vh] pt-[26vh] md:gap-[18vh] md:px-10 md:pb-[20vh] md:pt-[28vh]">
        {/* i — the voice begins, alone */}
        <Beat opening>let me tell you about a place the world forgot to change.</Beat>

        {/* ii — spoken over the coast */}
        <Beat>
          it&apos;s my home ~ the most alive rainforest on earth, where you meet more wildlife than
          you knew still existed.
        </Beat>
        {/* TODO: replace with the wide rainforest-meeting-sea frame */}
        <StoryPlate
          src="/images/dropbox/aerial-coast.webp"
          alt="Turquoise Pacific water breaking along a sand spit where the rainforest runs down to the sea."
          align="left"
        />

        {/* iii — the centre. nothing beside it. */}
        <div className="py-[6vh] md:py-[8vh]">
          <Beat>this place gave me back to myself.</Beat>
        </div>

        {/* iv — twenty years, told over a lone surfer */}
        <Beat>
          i&apos;ve spent twenty years here ~ surfing, going quiet, learning what the ocean and the
          forest do to a person who stays long enough to find out.
        </Beat>
        {/* TODO: replace with the lone-surfer frame */}
        <StoryPlate
          src="/images/dropbox/DSCF8103.webp"
          alt="A lone surfer walking the empty sand with his board beneath the coastal trees."
          ratio="aspect-[3/2]"
          align="right"
        />

        {/* v — the leap */}
        <Beat>
          i made a place, far from the world, for people ready to take the leap ~ and let nature do
          the changing.
        </Beat>
        {/* TODO: replace with the threshold frame */}
        <StoryPlate
          src="/images/dropbox/live-threshold.webp"
          alt="An open threshold at the edge of the forest, looking out into green light."
          ratio="aspect-[4/3]"
          align="left"
        />

        {/* vi — the differentiator. alone, with room. */}
        <div className="py-[6vh] md:py-[8vh]">
          <Beat>
            we don&apos;t teach the way of a book. here, the wildness does it ~ the most alive place
            there is, reminding you who you are.
          </Beat>
        </div>

        {/* vii — what is offered, over the fire */}
        <Beat>
          what i offer is simpler than it sounds: the waves, the fire, the long talks, and a safe,
          honest place to be ~ while you find your way back to yourself.
        </Beat>
        {/* TODO: replace with the warm fireside frame */}
        <StoryPlate
          src="/images/dropbox/family-fire.webp"
          alt="People gathered around a fire and long tables under the palms after dark."
          ratio="aspect-[3/2]"
          align="right"
        />
      </div>
    </section>
  )
}
