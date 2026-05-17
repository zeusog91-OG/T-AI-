import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TranscriptAI - Speak to the World',
  description: 'Break language barriers instantly. Real-time AI translation for text, voice, documents and meetings. Supporting 100+ languages.',
  keywords: 'AI translation, voice translation, document translation, meeting translation, real-time translation',
  openGraph: {
    title: 'TranscriptAI - Speak to the World',
    description: 'Break language barriers instantly with AI-powered translation',
    url: 'https://transcriptai.io',
    siteName: 'TranscriptAI',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TranscriptAI - Speak to the World',
    description: 'Break language barriers instantly with AI-powered translation',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.className} bg-white dark:bg-gray-950 transition-colors duration-300`}>
        {children}
      </body>
    </html>
  )
}
