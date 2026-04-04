import type { Metadata } from "next"
import { DM_Sans, Cormorant_Garamond, Space_Mono } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-heading", display: "swap", weight: ["300","400","500","600"] })
const cormorant = Cormorant_Garamond({ subsets: ["latin"], variable: "--font-display", display: "swap", weight: ["400","500","600","700"], style: ["normal","italic"] })
const spaceMono = Space_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap", weight: ["400","700"] })

export const metadata: Metadata = {
  title: { default: "St. Charles' College, Onitsha — The Varsity on the Niger", template: "%s | St. Charles' College, Onitsha" },
  description: "St. Charles' College, Onitsha — one of Nigeria's most prestigious institutions. Excellence in Academics, Discipline, and Leadership since 1928.",
  keywords: ["St. Charles College","SCC Onitsha","Anambra","secondary school","Catholic school","Nigeria","Varsity on the Niger"],
  openGraph: { title: "St. Charles' College, Onitsha", description: "The Varsity on the Niger — nurturing academic excellence, discipline, and spiritual growth since 1928.", type: "website" },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${dmSans.variable} ${cormorant.variable} ${spaceMono.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
