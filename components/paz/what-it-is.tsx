import { Reveal } from '@/components/paz/reveal'

/**
 * WhatItIs — the level-with-the-reader moment. After the ceremony of the
 * tagline, three plain-spoken beats explain the place in ordinary words.
 * Left-aligned against the page's centred rhythm so it reads as someone
 * talking rather than something declared, with a full breath between beats.
 */
const BEATS = [
  'our place sits between two wild things: the most alive rainforest on earth at your back, and the ocean right off the beach ~ walk out and you\u2019re in it.',
  'surf the wave out front, swim, paddle, fish, or just float, whenever you feel like it. no schedule ~ you move with the rhythm of nature.',
  'that\u2019s really the whole idea: step away from the world, live close to the water and the forest, and let it give you back the strength for the change you came ready to make.',
]

export function WhatItIs() {
  return (
    <section className="bg-bone px-6 pb-[20vh] pt-[6vh] text-ink md:px-10">
      <div className="mx-auto flex max-w-2xl flex-col">
        <Reveal as="p" className="type-eyebrow text-ink/45">
          what it is
        </Reveal>

        <div className="mt-[9vh] flex flex-col gap-[9vh] md:mt-[10vh] md:gap-[10vh]">
          {BEATS.map((beat, index) => (
            <Reveal
              key={beat}
              as="p"
              delay={index === 0 ? 0.05 : 0}
              className="text-pretty font-display text-[clamp(1.1875rem,2vw,1.625rem)] leading-[1.45]"
            >
              {beat}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
