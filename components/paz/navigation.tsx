'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { EASE_CINEMATIC } from '@/lib/motion'
import { Wordmark } from '@/components/paz/wordmark'

/**
 * Navigation — deliberately absent. It shows nothing over the opening frame,
 * then arrives once the visitor has begun to descend, sitting on a soft bone
 * backdrop so it stays legible over any photograph. It carries only two
 * things: the way home, and the way to enquire. No menus, no weight.
 */
export function Navigation({
  enquireHref = '#apply',
  enquireLabel = 'enquire',
}: {
  enquireHref?: string
  enquireLabel?: string
}) {
  const reduce = useReducedMotion()
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      // appear only after the first frame has been left behind
      setShown(window.scrollY > window.innerHeight * 0.85)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <AnimatePresence>
      {shown ? (
        <motion.div
          key="nav"
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduce ? { opacity: 0 } : { opacity: 0, y: -12 }}
          transition={{ duration: 0.6, ease: EASE_CINEMATIC }}
          className="fixed inset-x-0 top-0 z-50"
        >
          <nav
            aria-label="Primary"
            className="flex items-center justify-between border-b border-ink/10 bg-background/80 px-6 py-3 backdrop-blur-md md:px-10"
          >
            <Link href="/" aria-label="Paz Corcovado — home" className="text-ink">
              <Wordmark size="sm" />
            </Link>
            <a
              href={enquireHref}
              className="border-b border-ink/40 pb-0.5 font-sans text-xs uppercase tracking-[0.24em] text-ink transition-colors hover:border-ink"
            >
              {enquireLabel}
            </a>
          </nav>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
