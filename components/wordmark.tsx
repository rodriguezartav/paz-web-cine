import { cn } from '@/lib/utils'

type WordmarkProps = {
  className?: string
  /** size of the "pàz" wordmark, in rem via tailwind text sizes */
  size?: 'sm' | 'lg'
  subdued?: boolean
}

/**
 * The Paz Corcovado wordmark — a fluid cursive "pàz" set in the Swear
 * Banner display face, with CORCOVADO beneath in the Polymath display face.
 */
export function Wordmark({ className, size = 'sm', subdued = false }: WordmarkProps) {
  return (
    <span
      className={cn('inline-flex flex-col items-center leading-none', className)}
      aria-label="Paz Corcovado"
    >
      <span
        aria-hidden="true"
        className={cn(
          'font-banner lowercase',
          size === 'lg' ? 'text-6xl md:text-8xl' : 'text-2xl',
        )}
      >
        pàz
      </span>
      <span
        aria-hidden="true"
        className={cn(
          'font-display uppercase tracking-[0.28em]',
          size === 'lg' ? 'mt-2 text-xs md:text-sm' : 'text-[0.5rem]',
          subdued && 'opacity-70',
        )}
      >
        Corcovado
      </span>
    </span>
  )
}
