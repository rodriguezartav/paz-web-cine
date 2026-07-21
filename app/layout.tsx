import type { Metadata, Viewport } from 'next'
import localFont from 'next/font/local'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const polymath = localFont({
  src: '../public/fonts/Polymath-Regular.woff2',
  variable: '--font-polymath',
  display: 'swap',
  weight: '400',
})

const polymathDisplay = localFont({
  src: [
    { path: '../public/fonts/PolymathDisp-Regular.woff2', weight: '400', style: 'normal' },
    { path: '../public/fonts/PolymathDisp-Medium.woff', weight: '500', style: 'normal' },
    { path: '../public/fonts/PolymathDisp-Italic.woff', weight: '400', style: 'italic' },
    { path: '../public/fonts/PolymathDisp-MediumIt.woff', weight: '500', style: 'italic' },
  ],
  variable: '--font-polymath-display',
  display: 'swap',
})

const swear = localFont({
  src: '../public/fonts/SwearBanner-BoldCilati.woff2',
  variable: '--font-swear',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Paz Corcovado — come back to life',
  description:
    'Two acres of primary rainforest on Costa Rica’s Osa Peninsula, where nature sets the rhythm and the body remembers how to live. Not an escape. A return to humanity.',
  generator: 'v0.app',
  openGraph: {
    title: 'Paz Corcovado — come back to life',
    description:
      'A return to humanity. Two acres of rainforest where nature sets the rhythm.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#ede5d5',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${polymath.variable} ${polymathDisplay.variable} ${swear.variable} bg-background`}
    >
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
