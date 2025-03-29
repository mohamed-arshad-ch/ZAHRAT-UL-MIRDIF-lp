import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ZAHRAT UL MIRDIF | UAE Business Setup & Government Services',
  description: 'Comprehensive UAE professional services: Business setup, PRO, visas, DHA/MOH/DOH licensing, golden visas, medical exams, legal translation, insurance, and more – all under one roof with ZAHRAT UL MIRDIF.',
  keywords: 'UAE business setup, PRO services Dubai, DHA licensing, MOH license, DOH approval, visa services, golden visa UAE, medical insurance UAE, company formation Dubai, trade license, notary Dubai, Tasheel, Amer, Tadbeer, corporate tax UAE',
  openGraph: {
    title: 'ZAHRAT UL MIRDIF | UAE Business Setup & Government Services',
    description: 'From company formation to medical licensing, visa processing, and corporate tax services – discover full-spectrum professional solutions tailored for UAE business success.',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'ZAHRAT UL MIRDIF UAE Government and Business Services'
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ZAHRAT UL MIRDIF | One-Stop UAE Business Services',
    description: 'Explore full-range business and PRO services in Dubai and across the UAE. Fast, compliant, and reliable solutions tailored to your needs.',
  },
  robots: {
    index: true,
    follow: true,
  },
  generator: 'mcodevbytes.in',
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
