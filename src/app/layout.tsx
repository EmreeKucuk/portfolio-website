import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { SmoothScroll } from '@/components/SmoothScroll'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Emre Küçük — Engineering Intelligent Systems',
  description: 'Building robust, scalable AI systems with precision engineering. Specializing in MLOps, Deep Learning, and NLP architectures.',
  keywords: ['MLOps', 'Machine Learning', 'AI Engineer', 'Deep Learning', 'NLP', 'Python', 'TensorFlow', 'Kubernetes'],
  authors: [{ name: 'Emre Küçük' }],
  creator: 'Emre Küçük',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://emrekucuk.dev',
    siteName: 'Emre Küçük',
    title: 'Emre Küçük — Engineering Intelligent Systems',
    description: 'Building robust, scalable AI systems with precision engineering.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Emre Küçük Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Emre Küçük — Engineering Intelligent Systems',
    description: 'Building robust, scalable AI systems with precision engineering.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  themeColor: '#0a0a0a',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <body className="antialiased">
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  )
}
