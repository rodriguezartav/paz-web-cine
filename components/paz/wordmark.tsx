import Image from 'next/image'
import { cn } from '@/lib/utils'

type WordmarkProps = {
  className?: string
  /** size of the mark */
  size?: 'sm' | 'lg'
  /**
   * the mark is drawn in bone. on light surfaces pass 'ink' and it is
   * darkened in place, so a single asset serves the whole site.
   */
  tone?: 'bone' | 'ink'
  subdued?: boolean
}

/** the drawn "paz salvaje" mark — one asset, used everywhere */
export function Wordmark({ className, size = 'sm', tone = 'bone', subdued = false }: WordmarkProps) {
  return (
    <span
      className={cn(
        'inline-block',
        size === 'lg' ? 'w-[9.5rem] md:w-[13rem]' : 'w-[3.75rem]',
        tone === 'ink' && '[filter:brightness(0)_saturate(0)] opacity-[0.82]',
        subdued && 'opacity-70',
        className,
      )}
    >
      <Image
        src="/images/brand/paz-salvaje.png"
        alt="paz salvaje"
        width={589}
        height={561}
        priority={size === 'lg'}
        sizes={size === 'lg' ? '(max-width: 767px) 152px, 208px' : '60px'}
        className="h-auto w-full"
      />
    </span>
  )
}
