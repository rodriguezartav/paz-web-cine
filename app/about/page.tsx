import type { Metadata } from 'next'
import {
  Navigation,
  Hero,
  EditorialChapter,
  CinematicChapter,
  SiteFooter,
} from '@/components/paz'

export const metadata: Metadata = {
  title: 'Paz Corcovado — a return to humanity',
  description:
    'The philosophy of Paz Corcovado: two acres of primary rainforest on Costa Rica’s Osa Peninsula, where nature sets the rhythm and the body remembers how to live.',
}

/**
 * About — the founding film. Composed entirely from the Paz design system:
 * a hero threshold, editorial rests, and cinematic photographic scenes, paced
 * as a single slow descent. No bespoke layout lives here; every part is a
 * library component supplied with this page's words.
 */
export default function AboutPage() {
  return (
    <main className="bg-background">
      <Navigation />

      <Hero
        image="/images/hero-jungle-ocean.png"
        imageAlt="A view from inside the rainforest looking out over a calm, misty ocean at dawn on the Osa Peninsula"
        eyebrow="Osa Peninsula"
        meta="[ d24 m12 y25 ]"
        tagline="not an escape, but a return to humanity."
        cue="scroll to descend"
      />

      <EditorialChapter
        chapter="I ~ the recognition"
        eyebrow="from the neck up"
        lead={
          <>
            in distraction and pursuit, we lose our humanity{'\u2014'}becoming{' '}
            <span className="italic">strangers</span> to our bodies.
          </>
        }
      >
        <p>
          people arrive disconnected, living almost entirely from the neck up. Paz was
          born as an idea: a recognition that the mind, left in command, replaces
          experience with thought and feeling with analysis.
        </p>
        <p>this is for those whose bodies pay the price of lives unlived.</p>
      </EditorialChapter>

      <CinematicChapter
        image="/images/sloth-cecropia.png"
        imageAlt="A three-toed sloth hanging still from a cecropia branch against a pale overcast sky"
        chapter="II ~ the sloth"
        caption={
          <>
            a sloth doesn{'\u2019'}t question being a sloth. it doesn{'\u2019'}t optimize
            its sloth life, or wonder if there{'\u2019'}s more to slothiness.
          </>
        }
      />

      <EditorialChapter chapter="II ~ the sloth" eyebrow="Corcovado National Park">
        <p>
          Roberto locked eyes with a sloth one day on the beach, and sat watching it hang
          from a cecropia branch, completely still, being a sloth. in that time, he stopped
          being the narrator of his life{'\u2014'}not planning, not regretting, not
          comparing. he was just there.
        </p>
        <p>
          nature didn{'\u2019'}t teach him anything. it created the conditions where he
          couldn{'\u2019'}t stay numb. where he was forced to feel.
        </p>
      </EditorialChapter>

      <CinematicChapter
        image="/images/cold-water-dawn.png"
        imageAlt="A person submerged to the chest in cold dark mountain water at dawn"
        chapter="III ~ interruption"
        caption={
          <>cold water at dawn. the breath your system holds when it can{'\u2019'}t escape.</>
        }
      />

      <EditorialChapter
        chapter="III ~ interruption"
        eyebrow="the natural state"
        lead={<>discomfort isn{'\u2019'}t danger. it{'\u2019'}s just information.</>}
      >
        <p>
          your body was designed to handle change. heat that makes you dizzy. cold that
          numbs your fingers. these aren{'\u2019'}t problems to solve{'\u2014'}they{'\u2019'}re
          conditions your nervous system is built to meet.
        </p>
        <p>
          when ice water shocks your chest into panic, you find calm inside it. when
          warmth returns after cold, you feel proof that resilience is something you
          already have.
        </p>
      </EditorialChapter>

      <CinematicChapter
        image="/images/hands-earth.png"
        imageAlt="Weathered hands working dark wet rainforest earth"
        chapter="IV ~ participation"
        caption={<>the land asks for our hands. participation, not consumption.</>}
      />

      <CinematicChapter
        image="/images/fire-circle-night.png"
        imageAlt="An open fire circle under a night sky at the edge of the rainforest"
        chapter="IV ~ the elements"
        align="center"
        caption={
          <>
            into cold water when your system needs interruption. by fire when your body
            needs to soften and release. into silence when what appears is internal.
          </>
        }
      />

      <EditorialChapter chapter="V ~ the land" eyebrow="two acres">
        <p>
          Paz Corcovado sits on two acres of primary rainforest, surrounded by the most
          biodiverse canopy on earth. you fall asleep to the sound of waves breaking close
          enough to hear from your bed.
        </p>
        <p>
          the wellness center grew from the land instead of being built on top of it. the
          sweat lodge and cold plunge are fed by mountain water. the fire circle sits under
          open sky. screened walls let the forest move through while you sleep.
        </p>
        <p className="text-ink/70">
          the beds are simple, the meals are shared, and everything here is designed for
          presence over comfort.
        </p>
      </EditorialChapter>

      <CinematicChapter
        image="/images/surf-wave.png"
        imageAlt="A lone surfer riding a small clean wave along a wild jungle coastline"
        chapter="V ~ waves"
        caption={<>daily surf. ocean immersion. flow through water and air.</>}
      />

      <CinematicChapter
        image="/images/screened-cabin.png"
        imageAlt="A simple screened rainforest bedroom at dawn with plain linen and forest beyond"
        chapter="V ~ roots"
        align="start"
        caption={<>earth sauna. cold and hot water. grounding through earth and fire.</>}
      />

      <EditorialChapter
        chapter="VI ~ this is for"
        eyebrow="searching everywhere but the body"
        lead={<>for people who{'\u2019'}ve lost themselves in pursuit.</>}
      >
        <p>
          transformation tourists jumping from method to method. cerebral captives stuck in
          endless analysis. the credentialed empty who{'\u2019'}ve succeeded at everything
          except being alive.
        </p>
        <p>
          you don{'\u2019'}t need to transform. stop transforming long enough to see
          what{'\u2019'}s here. you don{'\u2019'}t need to find purpose. stop looking, and
          feel what you already are.
        </p>
      </EditorialChapter>

      <CinematicChapter
        image="/images/figure-shore.png"
        imageAlt="A person crouched at the edge of a grey dawn sea, a misty jungle headland behind"
        variant="banner"
        align="center"
        caption="come back to life"
        note={
          <>
            a spiritually focused center. your path belongs only to you. if you travel here
            with someone, apply separately.
          </>
        }
        cta={{ label: 'request to arrive', href: '#apply' }}
      />

      <SiteFooter />
    </main>
  )
}
