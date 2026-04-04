import type { Metadata } from "next"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import ContactClient from "@/components/contact/ContactClient"

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with St. Charles' College, Onitsha. Find our address, phone number, email, and office hours.",
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <ContactClient />
      <Footer />
    </div>
  )
}
