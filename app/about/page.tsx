import type { Metadata } from "next"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import AboutClient from "@/components/about/AboutClient"

export const metadata: Metadata = {
  title: "About Us",
  description: "Discover the rich history, mission, vision, values, administration, and school anthem of St. Charles' College, Onitsha — the Varsity on the Niger, founded in 1928.",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <AboutClient />
      <Footer />
    </div>
  )
}
