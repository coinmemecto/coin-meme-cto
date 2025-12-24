import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '$CoinMeme CTO | A Memecoin That Evolved Without Permission',
  description: 'Community-driven memecoin experiment. No dev. No promises. Just direction.',
  keywords: 'memecoin, crypto, solana, community, CTO, coinmeme',
  openGraph: {
    title: '$CoinMeme CTO',
    description: 'A memecoin that evolved without permission',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '$CoinMeme CTO',
    description: 'A memecoin that evolved without permission',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
