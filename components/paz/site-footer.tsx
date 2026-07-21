import { Wordmark } from '@/components/paz/wordmark'
import { Dualities } from '@/components/paz/dualities'

/**
 * SiteFooter — the ground the experience rests on. Ink surface, the wordmark,
 * a single line of place, one point of contact, and the brand's dualities set
 * quietly to one side. No link farm, no columns of menus — the footer closes
 * the scroll rather than opening new noise.
 */
export function SiteFooter({
  address = 'two acres of primary rainforest, Osa Peninsula, Costa Rica. surrounded by the most biodiverse canopy on earth.',
  email = 'arrive@pazcorcovado.com',
  meta = '[ progress ~ humanity ]',
  colophon = '[ d24 m12 y25 ]',
}: {
  address?: string
  email?: string
  meta?: string
  colophon?: string
}) {
  return (
    <footer className="bg-ink px-6 py-24 text-bone md:py-32">
      <div className="mx-auto flex max-w-5xl flex-col gap-16 md:flex-row md:items-end md:justify-between">
        <div className="max-w-sm">
          <Wordmark className="text-bone [&_*]:text-bone" />
          <p className="mt-8 font-sans text-sm leading-relaxed text-bone/70">{address}</p>
          <a
            href={`mailto:${email}`}
            className="mt-8 inline-block border-b border-bone/40 pb-1 font-sans text-sm lowercase tracking-[0.08em] text-bone/90 transition-colors hover:border-bone"
          >
            {email}
          </a>
        </div>

        <Dualities className="text-bone/60 [&_*]:text-bone/60 md:text-right md:[&_li]:justify-end" />
      </div>

      <div className="mx-auto mt-20 flex max-w-5xl items-center justify-between border-t border-bone/15 pt-8 font-sans text-xs lowercase tracking-[0.14em] text-bone/40">
        <span>{meta}</span>
        <span>{colophon}</span>
      </div>
    </footer>
  )
}
