import Image from 'next/image'
import { cn } from '@/lib/utils'

type WordmarkProps = {
  className?: string
  /** size of the mark */
  size?: 'sm' | 'lg'
  /**
   * the drawn mark on its own, or the circular badge that carries the mark
   * over its own cream disc and landscape arc.
   */
  variant?: 'mark' | 'badge'
  /**
   * the mark is drawn in bone. on light surfaces pass 'ink' and it is
   * darkened in place, so a single asset serves the whole site.
   * ignored by the badge, which brings its own ground.
   */
  tone?: 'bone' | 'ink'
  subdued?: boolean
}

const ASSETS = {
  mark: { src: '/images/brand/paz-salvaje.png', width: 589, height: 561 },
  badge: { src: '/images/brand/paz-salvaje-badge.png', width: 1024, height: 1024 },
} as const

const WIDTHS = {
  mark: { sm: 'w-[3.75rem]', lg: 'w-[9.5rem] md:w-[13rem]' },
  badge: { sm: 'w-[3.25rem]', lg: 'w-[7rem] md:w-[9rem]' },
} as const

const SIZES = {
  mark: { sm: '60px', lg: '(max-width: 767px) 152px, 208px' },
  badge: { sm: '52px', lg: '(max-width: 767px) 112px, 144px' },
} as const

/** the drawn "paz salvaje" mark — one asset, used everywhere */
export function Wordmark({
  className,
  size = 'sm',
  variant = 'mark',
  tone = 'bone',
  subdued = false,
}: WordmarkProps) {
  const asset = ASSETS[variant]

  return (
    <span
      className={cn(
        'inline-block',
        WIDTHS[variant][size],
        variant === 'badge' && 'rounded-full',
        variant === 'mark' && tone === 'ink' && '[filter:brightness(0)_saturate(0)] opacity-[0.82]',
        subdued && 'opacity-70',
        className,
      )}
    >
      <Image
        src={asset.src}
        alt="paz salvaje"
        width={asset.width}
        height={asset.height}
        priority={size === 'lg'}
        sizes={SIZES[variant][size]}
        className={cn('h-auto w-full', variant === 'badge' && 'rounded-full')}
      />
    </span>
  )
}
