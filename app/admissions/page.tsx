import type { Metadata } from "next"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import AdmissionsClient from "@/components/admissions/AdmissionsClient"

export const metadata: Metadata = {
  title: "Admissions",
  description: "Apply to St. Charles' College, Onitsha. Learn about our admissions process, requirements, and how to begin your Charlean journey.",
}

export default function AdmissionsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <AdmissionsClient />
      <Footer />
    </div>
  )
}
