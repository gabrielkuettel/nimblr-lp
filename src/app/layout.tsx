import clsx from 'clsx'
import localFont from 'next/font/local'

import '@/styles/tailwind.css'
import { type Metadata } from 'next'

const rocaOne = localFont({
  src: '../fonts/rocaone-rg.woff2',
  variable: '--font-rocaOne',
})
const jokker = localFont({
  src: '../fonts/jokker-rg.woff2',
  variable: '--font-jokker',
})

export const metadata: Metadata = {
  title: {
    template: '%s - Nimblr',
    default: 'Nimblr - Insurance made simple.',
  },
  description:
    'Nimblr is building a brighter insurance future where everyone can get the policy they want for what they need.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={clsx(
        'bg-cream h-full scroll-smooth antialiased',
        `${rocaOne.variable} font-display`,
        `${jokker.variable} font-sans`,
      )}
    >
      <body className="flex h-full flex-col">{children}</body>
    </html>
  )
}
