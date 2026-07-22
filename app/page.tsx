import type { Metadata } from 'next'
import {
  Navigation,
  Hero,
  CinematicChapter,
  EditorialChapter,
  ImageEssay,
  SectionDivider,
  SiteFooter,
} from '@/components/paz'

export const metadata: Metadata = {
  title: 'Paz Corcovado',
  description:
    'Where the last of the primary rainforest meets the Pacific. A protected coastline in Corcovado — remote, wild, and quiet enough to hear yourself again.',
}

/**
 * The Opening Sequence — the first movement of the journey, composed entirely
 * from the design system. This is not a homepage; it is a threshold. The
 * scroll is a path, each movement reveals a single truth, and every ending
 * opens another question rather than concluding.
 *
 *   i   — the last of its kind          (wonder)
 *   ii  — a place that still belongs to nature   (curiosity)
 *   iii — the conditions                (recognition)
 */
export default function HomePage() {
  return (
    <>
      <Navigation enquireHref="/about" enquireLabel="continue" />

      <main className="bg-background text-foreground">
        {/* ── Threshold ─────────────────────────────────────────────── */}
        {/* The extraordinary shown, not described. The place is not yet named. */}
        <Hero
          image="/images/opening-coastline.png"
          imageAlt="A wild, undeveloped coastline at dawn where primary rainforest runs down to an empty grey-sand beach, hills wrapped in low mist above a calm Pacific."
          title="the week you've been promising yourself"
          cue="keep walking"
        />

        <EditorialChapter lead="here, a set of conditions comes together to make something that, as far as we know, is the last of its kind." />

        {/* ── Movement One — The Last of Its Kind ───────────────────── */}
        {/* Truth: an untouched place still exists. Trust imagery; almost no text. */}
        <CinematicChapter
          image="/images/canopy-rain.png"
          imageAlt="Rain moving through a dense rainforest canopy, large wet leaves catching soft grey light."
          caption="you don't visit the wildlife here. you live inside it ~ awake around you, day and night."
          align="end"
        />

        <CinematicChapter
          image="/images/lineup-waiting.png"
          imageAlt="A lone surfer sitting still on a board far out on a glassy, empty ocean at dawn, a forested headland behind."
          caption="one wave, and no one waiting for a turn. walk down anytime, grab a board ~ and surf more in a morning than most do in a week."
          align="start"
        />

        {/* A held breath — the scroll is not rewarded. Only the forest, and silence. */}
        <CinematicChapter
          image="/images/mist-forest.png"
          imageAlt="Mist drifting slowly through tall primary rainforest at dawn, layers of trees fading into soft grey fog."
        />

        <EditorialChapter lead="somewhere, this still exists.">
          <p>
            no resort strip. no coast road worth the name. only a shoreline the
            last century never quite found its way to — and never got around to
            changing.
          </p>
        </EditorialChapter>

        {/* ── Movement Two — A Place That Still Belongs to Nature ────── */}
        {/* Truth: it is Corcovado. Answer "where is this?" with reality, not a map. */}
        <CinematicChapter
          image="/images/hero-jungle-ocean.png"
          imageAlt="Dense green rainforest framing a pale, misty Pacific at first light, seen from within the trees."
          chapter="ii ~ a place that still belongs to nature"
          caption="this is corcovado."
          align="end"
        />

        <ImageEssay
          intro="national geographic once called it the most biologically intense place on earth. it was not a slogan. it was a measurement."
          plates={[
            {
              src: '/images/macaws.png',
              alt: 'A pair of scarlet macaws perched close together on a bare branch against a soft overcast sky.',
              caption:
                'scarlet macaws, nearly gone from this coast a generation ago, nest here again in pairs.',
              place: 'left',
            },
            {
              src: '/images/sloth-cecropia.png',
              alt: 'A three-toed sloth hanging still from a cecropia branch high in the rainforest canopy.',
              caption:
                'close to half of costa rica’s species live within a day’s walk of the water.',
              place: 'right',
            },
            {
              src: '/images/surf-wave.png',
              alt: 'A lone surfer riding a small clean wave along a wild, jungle-backed coastline under overcast light.',
              caption:
                'the wave breaks inside a protected reserve. most mornings, it goes unridden.',
              place: 'left',
            },
          ]}
        />

        <SectionDivider mark="~" tone="ink" />

        <EditorialChapter lead="the land is protected. the access was never sold.">
          <p>
            there are no ticket gates here, and no crowds to funnel through
            them. what keeps people away is simply distance — and distance, it
            turns out, is what has kept the place alive.
          </p>
        </EditorialChapter>

        {/* ── Movement Three — The Conditions ───────────────────────── */}
        {/* Truth: nature sets the schedule. Present conditions; explain nothing. */}
        <CinematicChapter
          image="/images/figure-shore.png"
          imageAlt="A person crouched low at the edge of the ocean on a wild grey-sand beach at dawn, a misty headland behind."
          chapter="iii ~ the conditions"
          caption="here, the day is not something you plan."
          align="end"
        />

        <EditorialChapter lead="nature keeps the schedule.">
          <p>morning begins with light, not an alarm.</p>
          <p>the day follows the tide.</p>
          <p>meals are shared at one long table.</p>
          <p>phones lose their signal, and then their hold.</p>
          <p>movement takes the place of entertainment.</p>
          <p>and slowly, the silence comes back.</p>
        </EditorialChapter>

        <CinematicChapter
          image="/images/shared-table.png"
          imageAlt="A long, plain wooden table set for a shared meal under an open-air rainforest structure in soft morning light."
          caption="almost everything here is shared — the table, the water, the weather."
          align="start"
        />

        {/* ── Horizon — not a conclusion ────────────────────────────── */}
        {/* The recognition, then a door left open. The walk has only begun. */}
        <CinematicChapter
          image="/images/cold-water-dawn.png"
          imageAlt="A person submerged to the chest in cold, dark, still water at dawn, breath held, mist on the surface."
          variant="banner"
          caption="come back to life"
          note="you have not reached the end of anything. you have only started walking."
          cta={{ label: 'continue the descent', href: '/about' }}
        />

        <SiteFooter />
      </main>
    </>
  )
}
