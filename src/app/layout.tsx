import clsx from 'clsx'

import '@/styles/tailwind.css'
import { type Metadata } from 'next'

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
      className={clsx('bg-cream h-full scroll-smooth antialiased')}
    >
      <body className="flex h-full flex-col">{children}</body>
    </html>
  )
}
