import { Inter } from 'next/font/google'
import { Playfair_Display } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })

export const metadata = {
  title: 'AURA BEAUTY CARE LEARNING HUB | BEAUTY CARE (NAIL CARE) SERVICES NC II',
  description: 'Free public-access online learning platform for Beauty Care (Nail Care) Services NC II. Learn the skills, master the art, build your future.',
  keywords: 'TESDA, Beauty Care, Nail Care, NC II, Learning Hub, Aura Training, Online Education, Philippines',
  author: 'AURA TRAINING AND ASSESSMENT CENTER INC.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-aura-white text-aura-dark font-sans antialiased">
        {children}
      </body>
    </html>
  )
}