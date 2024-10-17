import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { Inter, Playfair_Display } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import { cn } from '@/lib/utils'

import Providers from '@/components/providers'
import Header from '@/components/header'
import Footer from '@/components/footer'

import './prosemirror.css'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })
const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif'
})

export const metadata: Metadata = {
  title: 'Serif',
  description: 'Blogging Platform',
  icons: {
    icon: '/Serif.png'
  },
  openGraph: {
    title: 'Serif',
    description: 'Blogging Platform.',
    url: 'https://serif-seven.vercel.app',
    images: [
      {
        url: 'https://serif-seven.vercel.app/Serif.png',
        width: 1200,
        height: 630,
        alt: 'Blogging Platform',

      }
    ]

  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider>
      <html lang='en' className='scroll-smooth' suppressHydrationWarning={true}>
        <body
          className={cn(
            'flex min-h-screen flex-col',
            inter.variable,
            playfair.variable
          )}
        >
          <Providers>
            <Header />
            <main className='grow flex mt-[65px]'>{children}</main>
            <Footer />
          </Providers>
        </body>
      </html>
    </ClerkProvider>
  )
}
