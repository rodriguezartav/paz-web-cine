'use client'

import { useEffect, useRef, useState } from 'react'
import type { ReactNode } from 'react'
import Image from 'next/image'
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
  src,
  poster,
  posterAlt,
  chapter,
  caption,
  align = 'end',
}: {
  src: string
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

  useEffect(() => {
    if (active) videoRef.current?.play().catch(() => {})
  }, [active])

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
          <video
            ref={videoRef}
            className="absolute inset-0 h-full w-full object-cover"
            src={src}
            poster={poster}
            muted
            loop
            playsInline
            preload="none"
            aria-hidden="true"
          />
        ) : null}
      </div>

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-ink/45 via-transparent to-ink/20"
      />

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
