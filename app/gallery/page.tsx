import type { Metadata } from "next"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import GalleryClient from "@/components/gallery/GalleryClient"

export const metadata: Metadata = {
  title: "Gallery",
  description: "Explore photos from St. Charles' College, Onitsha — campus life, events, academics, and sports.",
}

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <GalleryClient />
      <Footer />
    </div>
  )
}
