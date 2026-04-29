import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Space_Mono, Bebas_Neue } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { SmoothScroll } from "@/components/smooth-scroll"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})
const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-space-mono",
})
const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
})

export const metadata: Metadata = {
  title: "Aman Verma | Software Engineer",
  description:
    "Software Engineer specializing in Backend, Cloud, and Systems. Building scalable systems, real-time platforms, and production-ready software.",
  keywords: ["Software Engineer", "Backend Developer", "Cloud", "Systems", "Full Stack", "Python", "Go", "TypeScript"],
  authors: [{ name: "Aman Verma" }],
  openGraph: {
    title: "Aman Verma | Software Engineer",
    description: "Building scalable systems, real-time platforms, and production-ready software.",
    type: "website",
  },
}

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark bg-background">
      <body
        className={`${inter.variable} ${spaceMono.variable} ${bebasNeue.variable} font-sans antialiased overflow-x-hidden`}
      >
        <div className="noise-overlay" aria-hidden="true" />
        <SmoothScroll>{children}</SmoothScroll>
        <Analytics />
      </body>
    </html>
  )
}
