"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowUp, Heart, ExternalLink, Mail, Phone, MapPin } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  const [showTop, setShowTop] = useState(false)
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <>
      <footer className="relative overflow-hidden text-primary-foreground bg-gradient-dark">
        <div className="absolute inset-0 opacity-[0.035]"
          style={{ backgroundImage: "linear-gradient(hsl(0 0% 100%/.2) 1px,transparent 1px),linear-gradient(90deg,hsl(0 0% 100%/.2) 1px,transparent 1px)", backgroundSize: "64px 64px" }} />
        <div className="absolute top-0 left-1/3 h-96 w-96 rounded-full bg-primary/8 blur-[140px]" />
        <div className="absolute bottom-0 right-1/4 h-80 w-80 rounded-full bg-secondary/6 blur-[120px]" />

        <div className="relative z-10 container mx-auto px-4 pt-20 pb-12">
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-4">
              <Link href="/" className="group mb-6 flex items-center gap-3.5">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-green glow-green shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl">
                  <span className="font-display text-xl font-bold italic text-primary-foreground">SC</span>
                </div>
                <div>
                  <div className="font-heading text-lg font-bold">St. Charles&apos; College</div>
                  <div className="font-mono-custom text-[10px] tracking-widest text-primary-foreground/50 uppercase">Onitsha, Anambra State</div>
                </div>
              </Link>
              <p className="mb-6 max-w-sm text-sm leading-relaxed text-primary-foreground/50">
                The &ldquo;Varsity on the Niger&rdquo; — nurturing academic excellence, discipline, and spiritual growth since 1928.
              </p>
              <div className="font-display text-2xl italic text-primary-foreground/25 font-medium">&ldquo;Floreat in Aeternum&rdquo;</div>
            </div>

            <div className="md:col-span-2">
              <h4 className="mb-5 font-mono-custom text-[10px] tracking-widest text-primary-foreground/35 uppercase">Pages</h4>
              <nav className="flex flex-col gap-3">
                {[["About Us","/about"],["Academics","/academics"],["Admissions","/admissions"],["News","/news"],["Gallery","/gallery"],["Projects","/projects"],["Contact","/contact"]].map(([label,href]) => (
                  <Link key={href} href={href} className="text-sm text-primary-foreground/45 hover:text-primary-foreground/80 transition-all duration-200 hover:translate-x-1">{label}</Link>
                ))}
              </nav>
            </div>

            <div className="md:col-span-3">
              <h4 className="mb-5 font-mono-custom text-[10px] tracking-widest text-primary-foreground/35 uppercase">Contact</h4>
              <div className="space-y-3.5">
                <div className="flex items-start gap-3">
                  <MapPin size={14} className="mt-0.5 shrink-0 text-primary-foreground/30" />
                  <p className="text-sm text-primary-foreground/45">P.M.B 1718, Onitsha<br />Anambra State, Nigeria</p>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={14} className="shrink-0 text-primary-foreground/30" />
                  <a href="tel:+2349070023282" className="text-sm text-primary-foreground/45 hover:text-primary-foreground/70 transition-colors">+234 907 002 3282</a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={14} className="shrink-0 text-primary-foreground/30" />
                  <a href="mailto:info@scconitsha.com" className="text-sm text-primary-foreground/45 hover:text-primary-foreground/70 transition-colors">info@scconitsha.com</a>
                </div>
              </div>
            </div>

            <div className="md:col-span-3">
              <h4 className="mb-5 font-mono-custom text-[10px] tracking-widest text-primary-foreground/35 uppercase">Portals</h4>
              <div className="flex flex-col gap-3">
                <Link href="https://scc.istudent.com.ng/admission/" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2.5 rounded-xl border border-primary-foreground/12 px-4 py-3 text-sm text-primary-foreground/50 hover:text-primary-foreground/80 hover:border-primary-foreground/25 transition-all duration-200 hover:shadow-md">
                  Apply for Admission <ExternalLink size={12} className="ml-auto opacity-50" />
                </Link>
                <Link href="https://scc.istudentng.com/" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2.5 rounded-xl border border-primary-foreground/12 px-4 py-3 text-sm text-primary-foreground/50 hover:text-primary-foreground/80 hover:border-primary-foreground/25 transition-all duration-200 hover:shadow-md">
                  Student Results Portal <ExternalLink size={12} className="ml-auto opacity-50" />
                </Link>
              </div>
              <div className="mt-8 flex gap-5">
                {["Knowledge","Discipline","Leadership"].map(v => (
                  <span key={v} className="font-mono-custom text-[9px] tracking-widest text-primary-foreground/20 uppercase">{v}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-primary-foreground/10 pt-10 md:flex-row">
            <p className="font-mono-custom text-[11px] text-primary-foreground/25">© {new Date().getFullYear()} St. Charles&apos; College, Onitsha. All rights reserved.</p>
            <p className="flex items-center gap-1.5 font-mono-custom text-[11px] text-primary-foreground/20">
              Crafted with <Heart size={12} className="text-secondary/60" /> for Charleans everywhere
            </p>
          </div>
        </div>
      </footer>

      <AnimatePresence>
        {showTop && (
          <motion.button initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.5 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed right-6 bottom-6 z-40 flex h-12 w-12 items-center justify-center rounded-2xl text-primary-foreground bg-gradient-green glow-green shadow-elevated hover:scale-110 transition-transform"
            aria-label="Scroll to top">
            <ArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  )
}
