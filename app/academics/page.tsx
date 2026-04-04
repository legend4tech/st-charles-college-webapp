import type { Metadata } from "next"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import AcademicsClient from "@/components/academics/AcademicsClient"

export const metadata: Metadata = {
  title: "Academics",
  description: "Explore the world-class curriculum, examination preparation, clubs, and co-curricular activities at St. Charles' College, Onitsha.",
}

export default function AcademicsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <AcademicsClient />
      <Footer />
    </div>
  )
}
