import type { Metadata } from 'next'
import {
  Navigation,
  Hero,
  Container,
  Reveal,
  Section,
  CinematicChapter,
  ConditionsChapter,
  FullscreenVideo,
  WayWeLiveChapter,
} from '@/components/paz'

const DESKTOP_VIDEO_PLAYBACK_ID = 'SkgfY9F8a33A1rGZIq0147z2KM3CLBm02gdje3aax44Tg'
const MOBILE_VIDEO_PLAYBACK_ID = 'd7oGXU3Mpz891zJ02aul7xiwezR1P2z02EJNbgJSgKMtA'

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

        {/* ── Movement One — The Last of Its Kind ───────────────────── */}
        <ConditionsChapter />

        {/* ── Movement Two — A Place That Still Belongs to Nature ────── */}
        {/* Truth: it is Corcovado. Answer "where is this?" with reality, not a map. */}
        <FullscreenVideo
          playbackId={DESKTOP_VIDEO_PLAYBACK_ID}
          mobilePlaybackId={MOBILE_VIDEO_PLAYBACK_ID}
          poster="/images/hero-jungle-ocean.png"
          posterAlt="Dense green rainforest framing a pale, misty Pacific at first light, seen from within the trees."
          chapter="ii ~ a place that still belongs to nature"
          caption="this is paz in corcovado"
          align="end"
        />

        <WayWeLiveChapter />

        <Section aria-label="roberto" className="overflow-hidden">
          <Container width="measure" className="flex flex-col">
            <div className="flex items-end pt-[28vh]">
              <Reveal>
                <p className="type-lead max-w-xl text-balance text-ink">
                  years ago, roberto came here with nothing left ~ and the land gave him back to
                  himself.
                </p>
              </Reveal>
            </div>

            <div className="flex items-start justify-end pb-[28vh] pt-8 md:pt-10">
              <Reveal delay={0.1} className="max-w-xl">
                <p className="type-body text-pretty text-ink/85">
                  that&apos;s the only reason the door is open. we can&apos;t hand you what happened to
                  him. we can only bring you to the same place, and let it do what it does.
                </p>
              </Reveal>
            </div>
          </Container>

        </Section>

        <CinematicChapter
          image="/images/cold-water-dawn.png"
          imageAlt="A person submerged to the chest in cold, dark, still water at dawn, breath held, mist on the surface."
          variant="banner"
          caption="come back to life"
          note="you have not reached the end of anything. you have only started walking."
          presentation="clearing"
          imageScale="full"
          cta={{ label: 'continue the descent', href: '/about' }}
        />

      </main>
    </>
  )
}
