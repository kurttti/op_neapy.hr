import type { ReactNode } from 'react'
import './globals.css'
import { Inter, Inter_Tight } from 'next/font/google'

/*
 * Load two complementary variable fonts from Google. `Inter` is used for
 * general body copy while `Inter Tight` provides a slightly condensed look
 * for headings. The `variable` option allows us to bind the font families
 * directly to CSS custom properties defined in `globals.css`.
 */
const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })
const interTight = Inter_Tight({ subsets: ['latin'], variable: '--font-heading' })

export const metadata = {
  title: 'Редизайн Blue Yard',
  description: 'Эфирная, ориентированная на будущее дизайн‑система, реализованная на Next.js и Tailwind.'
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${interTight.variable}`}> 
      <body>
        {children}
      </body>
    </html>
  )
}