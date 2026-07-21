'use client'

import type { ComponentPropsWithoutRef, ElementType } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import {
  DURATION,
  REVEAL_VIEWPORT,
  revealVariants,
  staggerVariants,
  transition,
} from '@/lib/motion'

type RevealProps = {
  as?: ElementType
  /** seconds, applied once the element enters */
  delay?: number
  /** duration token; defaults to the slow, cinematic tempo */
  duration?: number
  className?: string
} & Omit<ComponentPropsWithoutRef<'div'>, 'ref'>

/**
 * The one reveal used everywhere: a quiet fade and short lift as content
 * enters the viewport, once. Honours prefers-reduced-motion by rendering
 * content already at rest.
 */
export function Reveal({
  as = 'div',
  delay = 0,
  duration = DURATION.slow,
  className,
  children,
  ...rest
}: RevealProps) {
  const reduce = useReducedMotion()
  const MotionTag = motion[as as keyof typeof motion] as typeof motion.div

  if (reduce) {
    const Tag = as as ElementType
    return (
      <Tag className={className} {...rest}>
        {children}
      </Tag>
    )
  }

  return (
    <MotionTag
      className={className}
      variants={revealVariants}
      initial="hidden"
      whileInView="visible"
      viewport={REVEAL_VIEWPORT}
      transition={transition(duration, delay)}
      {...rest}
    >
      {children}
    </MotionTag>
  )
}

type RevealGroupProps = {
  as?: ElementType
  className?: string
} & Omit<ComponentPropsWithoutRef<'div'>, 'ref'>

/**
 * Reveals a small set of children in gentle sequence. Wrap each child in
 * <Reveal.Item /> (or any element carrying the reveal variants).
 */
export function RevealGroup({
  as = 'div',
  className,
  children,
  ...rest
}: RevealGroupProps) {
  const reduce = useReducedMotion()
  const MotionTag = motion[as as keyof typeof motion] as typeof motion.div

  if (reduce) {
    const Tag = as as ElementType
    return (
      <Tag className={className} {...rest}>
        {children}
      </Tag>
    )
  }

  return (
    <MotionTag
      className={className}
      variants={staggerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={REVEAL_VIEWPORT}
      {...rest}
    >
      {children}
    </MotionTag>
  )
}

/** A single member of a RevealGroup. */
export function RevealItem({
  as = 'div',
  className,
  children,
  ...rest
}: RevealGroupProps) {
  const reduce = useReducedMotion()
  const MotionTag = motion[as as keyof typeof motion] as typeof motion.div

  if (reduce) {
    const Tag = as as ElementType
    return (
      <Tag className={className} {...rest}>
        {children}
      </Tag>
    )
  }

  return (
    <MotionTag
      className={className}
      variants={revealVariants}
      transition={transition(DURATION.base)}
      {...rest}
    >
      {children}
    </MotionTag>
  )
}
