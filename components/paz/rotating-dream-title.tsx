'use client'

import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { useEffect, useState } from 'react'

import { EASE_CINEMATIC } from '@/lib/motion'

const audiences = ["traveler’s", "surfer’s", "nature lover’s"]

export function RotatingDreamTitle() {
  const [index, setIndex] = useState(0)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    if (prefersReducedMotion) return

    const interval = window.setInterval(() => {
      setIndex((current) => (current + 1) % audiences.length)
    }, 2800)

    return () => window.clearInterval(interval)
  }, [prefersReducedMotion])

  return (
    <span className="block">
      <span>Every </span>
      <span className="relative inline-grid min-w-[7.8ch] align-baseline md:min-w-[8.2ch]">
        <AnimatePresence initial={false} mode="wait">
          <motion.span
            key={audiences[index]}
            className="col-start-1 row-start-1 inline-block"
            initial={prefersReducedMotion ? false : { opacity: 0, y: '0.3em' }}
            animate={{ opacity: 1, y: 0 }}
            exit={prefersReducedMotion ? undefined : { opacity: 0, y: '-0.22em' }}
            transition={{ duration: 0.7, ease: EASE_CINEMATIC }}
          >
            {audiences[index]}
          </motion.span>
        </AnimatePresence>
      </span>{' '}
      <span>dream</span>
      <span className="sr-only">: traveler’s, surfer’s, nature lover’s.</span>
    </span>
  )
}
