import type { Metadata } from "next"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import ProjectsClient from "@/components/projects/ProjectsClient"

export const metadata: Metadata = {
  title: "Projects",
  description: "Explore the transformative projects and development initiatives at St. Charles' College, Onitsha.",
}

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <ProjectsClient />
      <Footer />
    </div>
  )
}
