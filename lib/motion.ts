import type { Transition, Variants } from 'motion/react'

/**
 * Paz motion language.
 *
 * One easing. Three tempos. Motion may reveal, guide, or connect —
 * it never entertains. Distance is small; time is generous. Every
 * component draws from these tokens so the whole site breathes alike.
 */

/** Expo-out. Fast to arrive, long to settle — the feeling of coming to rest. */
export const EASE_CINEMATIC = [0.16, 1, 0.3, 1] as const

export const DURATION = {
  quick: 0.6,
  base: 1.0,
  slow: 1.4,
} as const

/** The distance content travels as it settles into place (px). Deliberately small. */
export const TRAVEL = 28

export const transition = (
  duration: number = DURATION.slow,
  delay = 0,
): Transition => ({
  duration,
  delay,
  ease: EASE_CINEMATIC,
})

/** The single reveal: a quiet fade and a short lift. */
export const revealVariants: Variants = {
  hidden: { opacity: 0, y: TRAVEL },
  visible: { opacity: 1, y: 0 },
}

/** Container that lets a small group of children settle in sequence. */
export const staggerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
}

/** How reveals watch the viewport — enter once, a little before fully in view. */
export const REVEAL_VIEWPORT = { once: true, amount: 0.2, margin: '0px 0px -8% 0px' } as const
