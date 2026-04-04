"use client"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Calendar, ArrowRight } from "lucide-react"
import Link from "next/link"

const news = [
  { date: "March 2026", tag: "Achievement", title: "SCC Students Excel at National Science Olympiad", excerpt: "Our students brought home 3 gold medals and 5 silver medals from the 2026 National Science Competition held in Abuja." },
  { date: "February 2026", tag: "Facilities", title: "New ICT Laboratory with 60 Workstations Commissioned", excerpt: "A state-of-the-art computer laboratory commissioned by His Grace the Archbishop of Onitsha." },
  { date: "January 2026", tag: "Sports", title: "Inter-House Sports 2026: St. Patrick Emerges Champions", excerpt: "Thrilling events across track, field, and team sports in the most competitive edition yet." },
]

const tagColors: Record<string, string> = {
  Achievement: "bg-accent text-accent-foreground",
  Facilities: "bg-secondary/10 text-secondary",
  Sports: "bg-primary/10 text-primary",
}

export default function HomeNewsPreview() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })
  return (
    <section className="bg-muted/40 py-24" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
          className="mb-12 flex items-end justify-between">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-6 bg-secondary" />
              <span className="font-mono-custom text-[11px] tracking-[0.2em] text-secondary uppercase">News & Updates</span>
            </div>
            <h2 className="font-display text-4xl font-bold italic text-foreground md:text-5xl">
              Latest <span className="not-italic font-heading font-semibold text-gradient-brand">Headlines</span>
            </h2>
          </div>
          <Link href="/news" className="hidden items-center gap-2 font-heading text-sm font-semibold text-primary transition-all hover:gap-3 sm:flex">
            All News <ArrowRight size={15} />
          </Link>
        </motion.div>
        <div className="grid gap-4 md:grid-cols-3">
          {news.map((item, i) => (
            <motion.article key={item.title} initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              className="group flex cursor-pointer flex-col rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/25 hover:shadow-elevated hover:-translate-y-1">
              <div className="mb-4 flex items-center justify-between">
                <span className={`rounded-full px-3 py-1 text-[11px] font-semibold ${tagColors[item.tag]}`}>{item.tag}</span>
                <span className="flex items-center gap-1 font-mono-custom text-[10px] text-muted-foreground"><Calendar size={10} /> {item.date}</span>
              </div>
              <h3 className="mb-3 font-heading font-semibold leading-snug text-foreground transition-colors group-hover:text-primary">{item.title}</h3>
              <p className="flex-1 text-sm leading-relaxed text-muted-foreground">{item.excerpt}</p>
              <div className="mt-5 flex items-center gap-1.5 text-sm font-semibold text-primary opacity-0 transition-all group-hover:opacity-100">
                Read more <ArrowRight size={14} />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
