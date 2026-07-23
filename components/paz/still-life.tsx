'use client'

import Image from 'next/image'
import { Reveal } from './reveal'
import { cn } from '@/lib/utils'

type StillLifeProps = {
  src: string
  side?: 'left' | 'right'
  rotation?: '-3' | '-2' | '2' | '3'
  shape?: 'square' | 'portrait' | 'landscape'
  className?: string
}

const rotationClasses = {
  '-3': '-rotate-3',
  '-2': '-rotate-2',
  '2': 'rotate-2',
  '3': 'rotate-3',
}

const shapeClasses = {
  square: 'aspect-square',
  portrait: 'aspect-[4/5]',
  landscape: 'aspect-[5/4]',
}

/** A small, decorative found detail placed only in otherwise empty bone space. */
export function StillLife({
  src,
  side = 'left',
  rotation = '-2',
  shape = 'square',
  className,
}: StillLifeProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        'flex min-h-[22vh] items-center px-[8vw] md:min-h-[26vh] md:px-[10vw]',
        side === 'right' ? 'justify-end' : 'justify-start',
        className,
      )}
    >
      <Reveal
        className={cn(
          'film-grain relative w-[110px] overflow-hidden rounded-sm md:w-40',
          shapeClasses[shape],
          rotationClasses[rotation],
        )}
      >
        <Image src={src} alt="" fill loading="lazy" sizes="(max-width: 767px) 110px, 160px" className="object-cover" />
      </Reveal>
    </div>
  )
}
