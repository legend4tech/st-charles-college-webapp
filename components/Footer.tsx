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
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "linear-gradient(hsl(0 0% 100%/.2) 1px,transparent 1px),linear-gradient(90deg,hsl(0 0% 100%/.2) 1px,transparent 1px)", backgroundSize: "64px 64px" }} />
        <div className="absolute top-0 left-1/3 h-72 w-72 rounded-full bg-primary/5 blur-[120px]" />

        <div className="relative z-10 container mx-auto px-4 pt-16 pb-10">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-4">
              <Link href="/" className="mb-6 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-green glow-green">
                  <span className="font-display text-lg font-bold italic text-primary-foreground">SC</span>
                </div>
                <div>
                  <div className="font-heading text-base font-semibold">St. Charles&apos; College</div>
                  <div className="font-mono-custom text-[10px] tracking-widest text-primary-foreground/40 uppercase">Onitsha, Anambra State</div>
                </div>
              </Link>
              <p className="mb-5 max-w-xs text-sm leading-relaxed text-primary-foreground/40">
                The &ldquo;Varsity on the Niger&rdquo; — nurturing academic excellence, discipline, and spiritual growth since 1928.
              </p>
              <div className="font-display text-xl italic text-primary-foreground/20 font-medium">&ldquo;Floreat in Aeternum&rdquo;</div>
            </div>

            <div className="md:col-span-2">
              <h4 className="mb-4 font-mono-custom text-[10px] tracking-widest text-primary-foreground/30 uppercase">Pages</h4>
              <nav className="flex flex-col gap-2.5">
                {[["About Us","/about"],["Academics","/academics"],["Admissions","/admissions"],["News","/news"],["Gallery","/gallery"],["Projects","/projects"],["Contact","/contact"]].map(([label,href]) => (
                  <Link key={href} href={href} className="text-sm text-primary-foreground/35 hover:text-primary-foreground/70 transition-all hover:translate-x-0.5">{label}</Link>
                ))}
              </nav>
            </div>

            <div className="md:col-span-3">
              <h4 className="mb-4 font-mono-custom text-[10px] tracking-widest text-primary-foreground/30 uppercase">Contact</h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin size={13} className="mt-0.5 shrink-0 text-primary-foreground/25" />
                  <p className="text-sm text-primary-foreground/35">P.M.B 1718, Onitsha<br />Anambra State, Nigeria</p>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={13} className="shrink-0 text-primary-foreground/25" />
                  <a href="tel:+2349070023282" className="text-sm text-primary-foreground/35 hover:text-primary-foreground/60 transition-colors">+234 907 002 3282</a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={13} className="shrink-0 text-primary-foreground/25" />
                  <a href="mailto:info@scconitsha.com" className="text-sm text-primary-foreground/35 hover:text-primary-foreground/60 transition-colors">info@scconitsha.com</a>
                </div>
              </div>
            </div>

            <div className="md:col-span-3">
              <h4 className="mb-4 font-mono-custom text-[10px] tracking-widest text-primary-foreground/30 uppercase">Portals</h4>
              <div className="flex flex-col gap-2">
                <Link href="https://scc.istudent.com.ng/admission/" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-xl border border-primary-foreground/10 px-4 py-2.5 text-sm text-primary-foreground/40 hover:text-primary-foreground/70 hover:border-primary-foreground/20 transition-all">
                  Apply for Admission <ExternalLink size={11} className="ml-auto" />
                </Link>
                <Link href="https://scc.istudentng.com/" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-xl border border-primary-foreground/10 px-4 py-2.5 text-sm text-primary-foreground/40 hover:text-primary-foreground/70 hover:border-primary-foreground/20 transition-all">
                  Student Results Portal <ExternalLink size={11} className="ml-auto" />
                </Link>
              </div>
              <div className="mt-6 flex gap-4">
                {["Knowledge","Discipline","Leadership"].map(v => (
                  <span key={v} className="font-mono-custom text-[9px] tracking-widest text-primary-foreground/15 uppercase">{v}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-primary-foreground/8 pt-8 md:flex-row">
            <p className="font-mono-custom text-[11px] text-primary-foreground/20">© {new Date().getFullYear()} St. Charles&apos; College, Onitsha. All rights reserved.</p>
            <p className="flex items-center gap-1.5 font-mono-custom text-[11px] text-primary-foreground/15">
              Crafted with <Heart size={11} className="text-secondary/50" /> for Charleans everywhere
            </p>
          </div>
        </div>
      </footer>

      <AnimatePresence>
        {showTop && (
          <motion.button initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.5 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed right-6 bottom-6 z-40 flex h-11 w-11 items-center justify-center rounded-2xl text-primary-foreground bg-gradient-green glow-green shadow-elevated hover:scale-110 transition-transform"
            aria-label="Scroll to top">
            <ArrowUp size={18} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  )
}
