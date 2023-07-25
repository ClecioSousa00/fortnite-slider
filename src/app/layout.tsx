import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  weight: ['500', '600'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Fortnite',
  description: 'Slider de alguns personagens do jogo Fortnite',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} font-sans text-white bg-black`}>
        {children}
      </body>
    </html>
  )
}
