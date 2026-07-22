'use client'

import { useEffect, useRef, useState } from 'react'
import type { ReactNode } from 'react'
import Image from 'next/image'
import MuxVideo from '@mux/mux-video-react'
import { Pause, Play } from 'lucide-react'
import { useReducedMotion } from 'motion/react'
import { cn } from '@/lib/utils'
import { Reveal } from '@/components/paz/reveal'

/**
 * FullscreenVideo — a full-frame moving image. It stays a still (the poster)
 * until it enters view, then loads and plays muted, looping, in-place. Under
 * prefers-reduced-motion it never plays: the poster carries the scene.
 *
 * The source is only attached once near the viewport, so nothing downloads
 * until it is almost needed.
 */
export function FullscreenVideo({
  playbackId,
  mobilePlaybackId,
  poster,
  posterAlt,
  chapter,
  caption,
  align = 'end',
}: {
  playbackId: string
  /** optional portrait playback selected on narrow viewports */
  mobilePlaybackId?: string
  /** a still frame shown before/while the video loads, and always under reduced-motion */
  poster: string
  posterAlt: string
  chapter?: ReactNode
  caption?: ReactNode
  align?: 'start' | 'center' | 'end'
}) {
  const reduce = useReducedMotion()
  const ref = useRef<HTMLDivElement | null>(null)
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const [active, setActive] = useState(false)
  const [mobile, setMobile] = useState(false)
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    const media = window.matchMedia('(max-width: 767px)')
    const update = () => setMobile(media.matches)
    update()
    media.addEventListener('change', update)
    return () => media.removeEventListener('change', update)
  }, [])

  useEffect(() => {
    if (reduce) return
    const node = ref.current
    if (!node) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(true)
            observer.disconnect()
          }
        })
      },
      { rootMargin: '200px 0px' },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [reduce])

  const togglePlayback = async () => {
    const video = videoRef.current
    if (!video) {
      setActive(true)
      setPlaying(true)
      return
    }

    if (video.paused) {
      await video.play().catch(() => {})
    } else {
      video.pause()
    }
  }

  useEffect(() => {
    if (!active || !playing) return
    videoRef.current?.play().catch(() => setPlaying(false))
  }, [active, playing])

  return (
    <section ref={ref} className="relative h-svh min-h-[560px] w-full overflow-hidden">
      <div className="grain absolute inset-0">
        <Image
          src={poster}
          alt={posterAlt}
          fill
          sizes="100vw"
          className="object-cover"
        />
        {!reduce && active ? (
          <MuxVideo
            ref={videoRef}
            className="absolute inset-0 h-full w-full object-cover"
            playbackId={mobile && mobilePlaybackId ? mobilePlaybackId : playbackId}
            poster={poster}
            muted
            loop
            playsInline
            preload="metadata"
            aria-hidden="true"
            onPlay={() => setPlaying(true)}
            onPause={() => setPlaying(false)}
          />
        ) : null}
      </div>

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-ink/45 via-transparent to-ink/20"
      />

      {!reduce && active ? (
        <button
          type="button"
          onClick={togglePlayback}
          className="absolute right-6 top-6 z-10 flex size-12 items-center justify-center rounded-full border border-bone/50 bg-ink/25 text-bone backdrop-blur-sm transition-colors duration-500 hover:bg-ink/45 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bone focus-visible:ring-offset-2 focus-visible:ring-offset-ink md:right-12 md:top-10 md:size-14"
          aria-label={playing ? 'Pause film' : 'Play film'}
        >
          {playing ? (
            <Pause aria-hidden="true" className="size-5" strokeWidth={1.5} />
          ) : (
            <Play aria-hidden="true" className="ml-0.5 size-5" strokeWidth={1.5} />
          )}
        </button>
      ) : null}

      <div
        className={cn(
          'relative flex h-full flex-col px-6 md:px-12',
          align === 'center' && 'items-center justify-center text-center',
          align === 'end' && 'justify-end pb-16 md:pb-20',
          align === 'start' && 'justify-start pt-24',
        )}
      >
        {chapter ? <span className="mb-4 type-eyebrow text-bone/70">{chapter}</span> : null}
        {caption ? (
          <Reveal
            as="p"
            className="max-w-2xl font-display text-2xl leading-snug text-balance text-bone md:text-4xl"
          >
            {caption}
          </Reveal>
        ) : null}
      </div>
    </section>
  )
}
