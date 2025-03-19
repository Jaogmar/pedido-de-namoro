import type { Metadata } from 'next'
import './globals.css'
import type { Viewport } from "next"

export const metadata: Metadata = {
  title: 'Nossos Momentos',
  description: 'com amor por joão gabriel',
  generator: 'v0.dev',
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
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
