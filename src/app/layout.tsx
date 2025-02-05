import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import Providers from '@/components/providers'
import { cn } from '@/lib/utils'
import Header from '@/components/header'
import Footer from '@/components/footer'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Chidiebere Onyegbuchulem portfolio',
  description: 'Chidiebere Onyegbuchulem personal portfolio built with Nextjs'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={cn(
          'flex min-h-screen flex-col font-sans antialiased',
          geistSans.variable,
          geistMono.variable
        )}
      >
        <Providers>
          <Header />
          <main className='mx-auto mb-24 mt-40 w-full max-w-3xl grow'>
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
