import { Reveal } from '@/components/paz/reveal'

/**
 * TaglineStatement — the retreat named in full, held alone on its own quiet
 * screen. The first thing after the image, and the only thing on it: no
 * ornament, no image, nothing to look at but the sentence. Bone ground, the
 * display face, and a full viewport of air so the scroll has to rest here.
 */
export function TaglineStatement() {
  return (
    <section className="flex min-h-svh items-center justify-center bg-bone px-6 py-[18vh] text-ink md:px-10">
      <Reveal
        as="h2"
        className="mx-auto max-w-4xl text-balance text-center font-display text-[clamp(1.5rem,3.2vw,2.375rem)] leading-[1.24] tracking-[-0.01em]"
      >
        paz salvaje ~ a surf retreat guided by nature on costa rica&apos;s wildest coast, made to
        find the strength for the change you&apos;re ready to make.
      </Reveal>
    </section>
  )
}
