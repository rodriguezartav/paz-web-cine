'use client'

import { useEffect, useRef, useState } from 'react'
import type { ElementType, ReactNode } from 'react'

type RevealProps = {
  children: ReactNode
  as?: ElementType
  className?: string
  /** delay in ms, applied only once visible */
  delay?: number
}

/**
 * A quiet, single-shot scroll reveal. Fades and lifts content into place
 * once, then leaves it alone. Respects prefers-reduced-motion via CSS.
 */
export function Reveal({ children, as, className = '', delay = 0 }: RevealProps) {
  const Tag = (as ?? 'div') as ElementType
  const ref = useRef<HTMLElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
            observer.disconnect()
          }
        })
      },
      { threshold: 0.18, rootMargin: '0px 0px -8% 0px' },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  )
}
