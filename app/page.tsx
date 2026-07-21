import { Opening } from '@/components/scenes/opening'
import { Closing } from '@/components/scenes/closing'
import { FilmStill, Passage } from '@/components/scenes/primitives'

export default function Page() {
  return (
    <main className="bg-background">
      <Opening />

      {/* Chapter I — the recognition */}
      <Passage
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
      </Passage>

      <FilmStill
        src="/images/sloth-cecropia.png"
        alt="A three-toed sloth hanging still from a cecropia branch against a pale overcast sky"
        chapter="II ~ the sloth"
        caption={
          <>
            a sloth doesn{'\u2019'}t question being a sloth. it doesn{'\u2019'}t optimize
            its sloth life, or wonder if there{'\u2019'}s more to slothiness.
          </>
        }
      />

      {/* Chapter II — Roberto */}
      <Passage chapter="II ~ the sloth" eyebrow="Corcovado National Park">
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
      </Passage>

      <FilmStill
        src="/images/cold-water-dawn.png"
        alt="A person submerged to the chest in cold dark mountain water at dawn"
        chapter="III ~ interruption"
        caption={
          <>cold water at dawn. the breath your system holds when it can{'\u2019'}t escape.</>
        }
      />

      {/* Chapter III — how it works */}
      <Passage
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
      </Passage>

      <FilmStill
        src="/images/hands-earth.png"
        alt="Weathered hands working dark wet rainforest earth"
        chapter="IV ~ participation"
        caption={<>the land asks for our hands. participation, not consumption.</>}
      />

      <FilmStill
        src="/images/fire-circle-night.png"
        alt="An open fire circle under a night sky at the edge of the rainforest"
        chapter="IV ~ the elements"
        align="center"
        caption={
          <>
            into cold water when your system needs interruption. by fire when your body
            needs to soften and release. into silence when what appears is internal.
          </>
        }
      />

      {/* Chapter IV — the land */}
      <Passage chapter="V ~ the land" eyebrow="two acres">
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
      </Passage>

      <FilmStill
        src="/images/surf-wave.png"
        alt="A lone surfer riding a small clean wave along a wild jungle coastline"
        chapter="V ~ waves"
        caption={<>daily surf. ocean immersion. flow through water and air.</>}
      />

      <FilmStill
        src="/images/screened-cabin.png"
        alt="A simple screened rainforest bedroom at dawn with plain linen and forest beyond"
        chapter="V ~ roots"
        align="end"
        caption={<>earth sauna. cold and hot water. grounding through earth and fire.</>}
      />

      {/* Chapter V — who it's for */}
      <Passage
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
      </Passage>

      <Closing />
    </main>
  )
}
