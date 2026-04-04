import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import HeroSection from "@/components/sections/HeroSection"
import HomeAboutPreview from "@/components/sections/HomeAboutPreview"
import AwardsMarquee from "@/components/sections/AwardsMarquee"
import HomeAcademicsPreview from "@/components/sections/HomeAcademicsPreview"
import HomeNewsPreview from "@/components/sections/HomeNewsPreview"
import HomeCTA from "@/components/sections/HomeCTA"
import { StatsSection } from "@/components/sections/StatsSection"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <HomeAboutPreview />
      <AwardsMarquee />
      <HomeAcademicsPreview />
      <HomeNewsPreview />
      <HomeCTA />
      <Footer />
    </div>
  )
}
