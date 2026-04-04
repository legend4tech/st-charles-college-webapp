"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Calendar, ArrowRight, Award, TrendingUp, Megaphone, Users, BookOpen, Star } from "lucide-react"

const allNews = [
  {
    date: "March 2026", tag: "Achievement", icon: Award, featured: true,
    title: "SCC Students Excel at National Science Olympiad",
    excerpt: "Our students brought home 3 gold medals and 5 silver medals from the 2026 National Science Competition held in Abuja, cementing SCC's reputation as a powerhouse of scientific talent.",
    body: "The National Science Olympiad brought together the brightest young scientific minds from across Nigeria. St. Charles' College fielded a team of twelve students across Physics, Chemistry, and Biology categories. The team, coached by the head of the science department, trained intensively for four months prior to the competition. Their gold medals in Physics and Biology were particularly celebrated, as these categories are among the most competitive nationally.",
  },
  {
    date: "February 2026", tag: "Facilities", icon: TrendingUp, featured: false,
    title: "New ICT Laboratory with 60 Workstations Commissioned",
    excerpt: "A state-of-the-art computer laboratory commissioned by His Grace the Archbishop of Onitsha, equipped with high-speed internet and modern workstations for every student.",
    body: "The new ICT laboratory represents a major milestone in the college's digital transformation journey. With 60 individual workstations, dedicated server infrastructure, and fibre-optic internet connectivity, the lab will serve students from JSS 1 through SS 3. The facility also houses the college's growing robotics programme.",
  },
  {
    date: "January 2026", tag: "Sports", icon: Megaphone, featured: false,
    title: "Inter-House Sports 2026: House St. Patrick Emerges Champions",
    excerpt: "Thrilling events across track, field, and team sports made this year's inter-house competition the most memorable in recent history.",
    body: "The 2026 Inter-House Sports Competition was declared open by the Principal, Rev Fr Emmanuel Emenu. Four houses — St. Patrick, St. Joseph, St. Michael, and St. Gabriel — competed over three days of athletics, football, volleyball, and traditional sports. St. Patrick House emerged overall champions, though all four houses gave exceptional performances.",
  },
  {
    date: "December 2025", tag: "Events", icon: Star, featured: false,
    title: "Annual Prize-Giving Day & Christmas Carol 2025",
    excerpt: "Students showcased extraordinary talent in music, drama, and academics at the annual ceremony attended by parents, alumni, and dignitaries.",
    body: "The 2025 Prize-Giving Day was a celebration of the year's outstanding achievements. Top students in each class were honoured, with the overall best student receiving the Principal's Award for Academic Excellence. The evening carol service featured the school choir performing traditional and contemporary sacred music.",
  },
  {
    date: "November 2025", tag: "Alumni", icon: Users, featured: false,
    title: "Alumni Homecoming 2025: Over 500 Old Boys Return",
    excerpt: "Old boys from across Nigeria and the diaspora returned to Onitsha for the annual homecoming, pledging significant support for the school's development fund.",
    body: "The annual alumni homecoming is one of the most emotionally charged events in the SCC calendar. Alumni from the 1970s, 80s, 90s, and 2000s filled the halls and grounds, sharing memories and renewing bonds forged in schooldays. A fundraising drive during the event raised contributions towards the new science block.",
  },
  {
    date: "October 2025", tag: "Achievement", icon: Award, featured: false,
    title: "WAEC Results 2025: 98% Pass Rate, 45 Students Score Straight A's",
    excerpt: "St. Charles' College recorded a 98% pass rate in the 2025 WAEC examinations — among the highest in Anambra State — with 45 students earning distinction across all subjects.",
    body: "The 2025 WAEC results are the finest in the college's secondary school era. Of the 280 candidates who sat the examination, 274 passed with at least five credits including English and Mathematics. The college attributes this performance to the extension classes programme introduced for SS2 students and the dedicated mentoring provided by subject teachers.",
  },
  {
    date: "September 2025", tag: "Academics", icon: BookOpen, featured: false,
    title: "Chinese Language Programme Expands to All Classes",
    excerpt: "Building on the success of the pilot programme, Mandarin Chinese lessons are now available to all students from JSS 1 through SS 3.",
    body: "The Chinese language programme, which began as an elective for senior students, has proven enormously popular. Following high demand, the college has expanded the programme to all year groups. Students learn basic Mandarin conversation, reading, and cultural appreciation — skills that increasingly relevant in Nigeria's growing trade relationship with China.",
  },
  {
    date: "August 2025", tag: "Facilities", icon: TrendingUp, featured: false,
    title: "Renovation of School Chapel Completed",
    excerpt: "The historic school chapel, dedicated to St. Charles Borromeo, has been beautifully renovated and rededicated in a ceremony led by the Archbishop.",
    body: "The chapel renovation was funded through donations from the PTA and alumni association. The work included new pews, a restored altar, improved acoustics, and new stained glass windows depicting the life of St. Charles Borromeo. The Archbishop of Onitsha presided over the rededication Mass, attended by students, staff, parents, and distinguished alumni.",
  },
]

const tags = ["All", "Achievement", "Facilities", "Sports", "Events", "Alumni", "Academics"]

const tagColors: Record<string, string> = {
  Achievement: "bg-accent text-accent-foreground border-accent-foreground/20",
  Facilities: "bg-secondary/10 text-secondary border-secondary/20",
  Sports: "bg-primary/10 text-primary border-primary/20",
  Events: "bg-secondary/10 text-secondary border-secondary/20",
  Alumni: "bg-accent text-accent-foreground border-accent-foreground/20",
  Academics: "bg-primary/10 text-primary border-primary/20",
}

export default function NewsClient() {
  const [activeTag, setActiveTag] = useState("All")
  const listRef = useRef(null)
  const listInView = useInView(listRef, { once: true, margin: "-80px" })

  const filtered = activeTag === "All" ? allNews : allNews.filter(n => n.tag === activeTag)
  const featured = filtered.find(n => n.featured) ?? filtered[0]
  const rest = filtered.filter(n => n !== featured)

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-dark pb-16 pt-24 text-primary-foreground">
        <div className="absolute inset-0 opacity-[0.05]"
          style={{ backgroundImage: "linear-gradient(hsl(0 0% 100%/.2) 1px,transparent 1px),linear-gradient(90deg,hsl(0 0% 100%/.2) 1px,transparent 1px)", backgroundSize: "80px 80px" }} />
        <div className="absolute top-1/3 right-1/4 h-64 w-64 animate-float rounded-full bg-primary/15 blur-[100px]" />
        <div className="relative z-10 container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-6 bg-primary-foreground/40" />
              <span className="font-mono-custom text-[11px] tracking-[0.2em] text-primary-foreground/50 uppercase">Stay Informed</span>
            </div>
            <h1 className="font-display text-6xl font-bold italic leading-[0.95] text-primary-foreground md:text-8xl">
              News &<br />
              <span className="not-italic font-heading font-semibold text-primary-foreground/50">Updates</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-primary-foreground/55 leading-relaxed">
              Achievements, events, facilities, and stories from the Varsity on the Niger.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter + news */}
      <section ref={listRef} className="bg-background py-24">
        <div className="container mx-auto px-4">
          {/* Tags */}
          <motion.div initial={{ opacity: 0, y: 16 }} animate={listInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}
            className="mb-12 flex flex-wrap gap-3">
            {tags.map(tag => (
              <button key={tag} onClick={() => setActiveTag(tag)}
                className={`rounded-full px-6 py-2.5 text-sm font-medium transition-all duration-300 ${activeTag === tag ? "bg-primary text-primary-foreground shadow-elevated scale-105" : "border border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-foreground hover:shadow-card"}`}>
                {tag}
              </button>
            ))}
          </motion.div>

          {featured && (
            <motion.div initial={{ opacity: 0, y: 24 }} animate={listInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
              className="mb-10 grid gap-8 lg:grid-cols-5">
              {/* Featured big card */}
              <article className="group relative overflow-hidden rounded-3xl bg-gradient-dark p-10 text-primary-foreground shadow-dramatic lg:col-span-3 md:p-12">
                <div className="absolute inset-0 opacity-10 bg-gradient-subtle" />
                <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-primary/10 blur-[100px] transition-colors duration-500 group-hover:bg-primary/20" />
                <div className="absolute bottom-0 left-0 h-48 w-48 rounded-full bg-secondary/8 blur-[80px]" />
                <div className="relative z-10">
                  <div className="mb-8 flex items-center gap-3">
                    <span className="rounded-full px-4 py-1.5 text-xs font-semibold bg-primary/30 backdrop-blur-sm">{featured.tag}</span>
                    <span className="flex items-center gap-1 font-mono-custom text-[10px] text-primary-foreground/40">
                      <Calendar size={10} /> {featured.date}
                    </span>
                  </div>
                  <h2 className="mb-5 font-display text-3xl font-bold italic leading-tight md:text-4xl text-balance">{featured.title}</h2>
                  <p className="mb-6 text-base leading-relaxed text-primary-foreground/60">{featured.excerpt}</p>
                  <p className="text-sm leading-relaxed text-primary-foreground/40">{featured.body}</p>
                </div>
              </article>

              {/* Side cards */}
              <div className="flex flex-col gap-5 lg:col-span-2">
                {rest.slice(0, 3).map((item, i) => (
                  <motion.article key={item.title} initial={{ opacity: 0, x: 20 }} animate={listInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
                    className="group flex cursor-default items-start gap-4 rounded-2xl border border-border bg-card p-5 transition-all duration-300 hover:border-primary/25 hover:shadow-elevated hover:-translate-y-0.5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent transition-all duration-300 group-hover:bg-gradient-green group-hover:text-primary-foreground group-hover:scale-110">
                      <item.icon className="h-5 w-5 transition-colors" />
                    </div>
                    <div className="min-w-0">
                      <div className="mb-1.5 flex items-center gap-2">
                        <span className={`rounded-full border px-2.5 py-0.5 text-[10px] font-semibold ${tagColors[item.tag]}`}>{item.tag}</span>
                        <span className="font-mono-custom text-[10px] text-muted-foreground">{item.date}</span>
                      </div>
                      <h3 className="font-heading text-sm font-semibold leading-tight text-foreground transition-colors group-hover:text-primary line-clamp-2">{item.title}</h3>
                    </div>
                  </motion.article>
                ))}
              </div>
            </motion.div>
          )}

          {/* All remaining */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {(featured ? rest.slice(3) : rest).map((item, i) => (
              <motion.article key={item.title} initial={{ opacity: 0, y: 20 }} animate={listInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="group relative flex cursor-default flex-col overflow-hidden rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:border-primary/25 hover:shadow-elevated hover:-translate-y-1">
                <div className="absolute top-0 right-0 h-24 w-24 rounded-full bg-primary/5 blur-[40px] group-hover:bg-primary/10 transition-colors" />
                <div className="relative z-10 flex flex-col flex-1">
                  <div className="mb-5 flex items-center justify-between">
                    <span className={`rounded-full border px-3 py-1 text-[11px] font-semibold ${tagColors[item.tag]}`}>{item.tag}</span>
                    <span className="flex items-center gap-1 font-mono-custom text-[10px] text-muted-foreground"><Calendar size={10} /> {item.date}</span>
                  </div>
                  <h3 className="mb-3 font-heading font-semibold leading-snug text-foreground transition-colors group-hover:text-primary">{item.title}</h3>
                  <p className="flex-1 text-sm leading-relaxed text-muted-foreground line-clamp-3">{item.excerpt}</p>
                  <div className="mt-5 flex items-center gap-1.5 text-sm font-semibold text-primary opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 -translate-x-1">
                    Read more <ArrowRight size={13} />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="py-20 text-center text-muted-foreground">No news in this category yet.</div>
          )}
        </div>
      </section>
    </>
  )
}
