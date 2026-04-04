import type { Metadata } from "next"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import NewsClient from "@/components/news/NewsClient"

export const metadata: Metadata = {
  title: "News & Updates",
  description: "Stay informed about the latest news, events, and achievements at St. Charles' College, Onitsha.",
}

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <NewsClient />
      <Footer />
    </div>
  )
}
