import type { Metadata, Viewport } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { SmoothScrollProvider } from '@/components/providers/smooth-scroll-provider'
import { siteConfig } from '@/lib/site-config'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} | Desarrollo Web Profesional`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | Desarrollo Web Profesional`,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Desarrollo Web Profesional`,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: "#0B0D12",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body suppressHydrationWarning className="bg-background font-sans text-foreground antialiased">
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
        <Analytics />
      </body>
    </html>
  )
}
