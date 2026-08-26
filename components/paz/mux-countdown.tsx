'use client'

import { useRef, useState } from 'react'
import MuxVideo from '@mux/mux-video-react'
import { Reveal } from '@/components/paz/reveal'

function formatTime(seconds: number) {
  const total = Math.max(0, Math.ceil(seconds))
  return `${Math.floor(total / 60)}:${String(total % 60).padStart(2, '0')}`
}

export function MuxCountdown({ playbackId }: { playbackId: string }) {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const [duration, setDuration] = useState(0)
  const [remaining, setRemaining] = useState(0)

  return (
    <section className="bg-bone px-6 py-[12vh] text-ink md:px-10 md:py-[14vh]" aria-label="Video retreat film">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 text-center md:gap-10">
        <Reveal>
          <p className="font-display text-[clamp(4rem,12vw,10rem)] leading-none tracking-[-0.05em] tabular-nums" aria-live="polite">
            {formatTime(remaining || duration)}
          </p>
          <span className="sr-only">time remaining in the film</span>
        </Reveal>
        <Reveal delay={0.1} className="relative aspect-video w-full overflow-hidden rounded-sm bg-ink">
          <MuxVideo
            ref={videoRef}
            className="absolute inset-0 h-full w-full object-cover"
            playbackId={playbackId}
            muted
            playsInline
            preload="metadata"
            controls
            onLoadedMetadata={(event) => {
              const nextDuration = event.currentTarget.duration
              setDuration(nextDuration)
              setRemaining(nextDuration)
            }}
            onTimeUpdate={(event) => setRemaining(Math.max(0, event.currentTarget.duration - event.currentTarget.currentTime))}
          />
        </Reveal>
      </div>
    </section>
  )
}
