import type React from "react"
import type { Metadata, Viewport } from "next"
import { DM_Sans, Fraunces } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Toaster } from "@/components/ui/sonner"
// Disable TypeScript check for global CSS import
// @ts-ignore
import "./globals.css"

// Load DM Sans and Fraunces fonts from Google Fonts
const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
})

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
})

export const metadata: Metadata = {
  title: "Maganti Group — IT Consulting & Staffing Solutions",
  description:
    "Premier technology consulting and talent acquisition services. We deliver excellence that drives digital transformation for businesses worldwide.",
  icons: {
    icon: [
      {
        url: "/MG-LOGO.png",
        type: "image/png",
      },
    ],
    apple: "/MG-LOGO.png",
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

// The main layout component that wraps all pages in the application
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    // suppressHydrationWarning prevents hydration mismatch warnings from next-themes.
    <html lang="en" suppressHydrationWarning>
      <body className={`${dmSans.variable} ${fraunces.variable} font-sans antialiased`} suppressHydrationWarning>
        {children}
        <Toaster position="top-right" />
        <Analytics />
      </body>
    </html>
  )
}
