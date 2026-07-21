import { cn } from '@/lib/utils'

/**
 * The brand's signature dualities, rendered with corner-bracket emphasis
 * on the "return" side — lifted directly from the brand guide margins.
 */
const PAIRS: Array<[string, string, boolean]> = [
  ['hot', 'cold', false],
  ['always more', 'exactly enough', true],
  ['busy', 'still', true],
  ['next', 'now', true],
  ['fire', 'water', false],
  ['progress', 'humanity', true],
  ['mind', 'body', true],
  ['ego', 'consciousness', true],
  ['doing', 'being', true],
]

export function Dualities({ className }: { className?: string }) {
  return (
    <ul
      className={cn('font-sans text-xs leading-loose text-ink/70', className)}
      aria-label="Paz values, as pairs"
    >
      {PAIRS.map(([left, right, bracketed]) => (
        <li key={left} className="flex items-baseline gap-2">
          <span>{left}</span>
          <span aria-hidden="true" className="text-ink/30">
            ~
          </span>
          {bracketed ? (
            <span className="text-ink">
              <span aria-hidden="true" className="pr-0.5 text-ink/40">
                [
              </span>
              {right}
              <span aria-hidden="true" className="pl-0.5 text-ink/40">
                ]
              </span>
            </span>
          ) : (
            <span>{right}</span>
          )}
        </li>
      ))}
    </ul>
  )
}
