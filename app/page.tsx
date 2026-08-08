import type { Metadata } from 'next'
import Image from 'next/image'
import { MapPin } from 'lucide-react'
import {
  Navigation,
  Hero,
  Reveal,
  CinematicChapter,
  ConditionsChapter,
  FullscreenVideo,
  LandCollage,
  ConditionsCollage,
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

        {/* The retreat named, once, in the first quiet after the image. */}
        <section className="bg-bone text-ink">
          <div className="mx-auto flex w-full max-w-4xl flex-col items-center px-6 pb-[14vh] pt-[18vh] text-center md:px-10 md:pb-[16vh] md:pt-[20vh]">
            {/* The place, named quietly and pinned to the map. */}
            <Reveal>
              <a
                href="https://www.google.com/maps/place/Osa+Peninsula,+Costa+Rica/@8.5449,-83.4487,10z"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-ink/20 px-4 py-2 font-display text-[0.8125rem] uppercase tracking-[0.16em] text-ink/75 transition-colors hover:border-ink/45 hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink/50"
              >
                <MapPin aria-hidden="true" className="size-4 shrink-0" />
                Osa Peninsula, Costa Rica
                <span className="sr-only">— open this location on Google Maps</span>
              </a>
            </Reveal>

            <Reveal
              as="h2"
              delay={0.1}
              className="mx-auto mt-10 max-w-3xl text-balance text-center font-display text-[clamp(1.125rem,2.55vw,1.875rem)] leading-[1.2] md:mt-12"
            >
              paz ~ a surf retreat on costa rica&apos;s wildest coast, made to find the strength for
              the change you&apos;re ready to make.
            </Reveal>

            <Reveal
              delay={0.2}
              className="relative mt-[9vh] aspect-[4/3] w-full overflow-hidden rounded-sm md:mt-[10vh]"
            >
              <div className="grain absolute inset-0">
                <Image
                  src="/images/dropbox/aerial-coast.webp"
                  alt="An aerial view of turquoise Pacific water breaking along a sand spit where the rainforest meets the sea."
                  fill
                  sizes="(max-width: 767px) 88vw, 56rem"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
        </section>

        {/* The conditions, set between three frames of the place. */}
        <ConditionsCollage />

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
