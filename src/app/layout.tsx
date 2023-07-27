import './globals.css'
import type { Metadata } from 'next'
import { Inter, Anton } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
})
const anton = Anton({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-anton',
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
    <html lang="pt-BR" className={`${inter.variable} ${anton.variable} `}>
      <body className={`font-sans text-white bg-black`}>{children}</body>
    </html>
  )
}
