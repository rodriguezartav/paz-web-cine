/**
 * Paz Corcovado — design system.
 *
 * The smallest set of parts that can express the whole experience. Every
 * page is composed from these; none should need to be redesigned.
 *
 *   Layout      Container · Section · SectionDivider
 *   Motion      Reveal · RevealGroup · RevealItem   (tokens in lib/motion)
 *   Identity    Wordmark · Dualities
 *   Chrome      Navigation · SiteFooter
 *   Chapters    Hero · EditorialChapter · CinematicChapter
 *               ImageEssay · FullscreenVideo · QuietQuote · BookingCard
 *
 * Surfaces are bone (light) or ink (dark). Type uses the fluid scale
 * (.type-hero / .type-lead / .type-body / .type-eyebrow / .type-banner).
 * Nothing here decorates — the interface frames the place and recedes.
 */

export { Container, Section, SectionDivider } from './layout'
export { Reveal, RevealGroup, RevealItem } from './reveal'
export { Wordmark } from './wordmark'
export { Dualities } from './dualities'
export { Navigation } from './navigation'
export { SiteFooter } from './site-footer'
export { Hero } from './hero'
export { EditorialChapter } from './editorial-chapter'
export { CinematicChapter } from './cinematic-chapter'
export { ImageEssay } from './image-essay'
export type { EssayPlate } from './image-essay'
export { FullscreenVideo } from './fullscreen-video'
export { QuietQuote } from './quiet-quote'
export { BookingCard } from './booking-card'
export { WayWeLiveChapter } from './way-we-live-chapter'
export { ConditionsChapter } from './conditions-chapter'
