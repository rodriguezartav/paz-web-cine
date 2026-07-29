import type { Metadata } from 'next'
import {
  Navigation,
  Hero,
  Reveal,
  CinematicChapter,
  ConditionsChapter,
  FullscreenVideo,
  LandCollage,
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
          image="/images/dropbox/empty-wave.webp"
          imageAlt="A lone surfer walking an empty Pacific beach beneath overhanging palms."
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
          poster="/images/dropbox/supporting-shell.webp"
          posterAlt="A turquoise Pacific break framed by the branches of a coastal tree."
          chapter="ii ~ a place that still belongs to nature"
          caption="this is paz in corcovado"
          align="end"
        />

        <LandCollage />

        <WayWeLiveChapter />

        <CinematicChapter
          image="/images/dropbox/closing-waterfall.webp"
          imageAlt="A person standing beneath a rainforest waterfall, surrounded by dark stone and water."
          variant="banner"
          caption="come back to life"
          note="you have not reached the end of anything. you have only started walking."
          presentation="clearing"
          imageScale="full"
          cta={{ label: 'continue the descent', href: '/about' }}
        />

        <div className="flex min-h-svh items-end justify-center bg-ink px-6 pb-10 pt-[20vh] text-center md:px-12 md:pb-14">
          <Reveal
            as="p"
            className="max-w-[30ch] text-balance font-display text-[1.75rem] uppercase leading-[1.35] tracking-[0.15em] text-bone md:text-[2rem]"
          >
            raw nature that changes you from within, without words.
          </Reveal>
        </div>
      </main>
    </>
  )
}
