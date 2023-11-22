import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SM Projects',
  description: 'Check all of my projects',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='scroll-smooth'>
      <body className={inter.className}>
        <Navigation />
        {children}</body>
    </html>
  )
}
