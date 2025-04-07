import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Parth Singh',
  description: 'Created with love',
  generator: 'Parth Singh',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
