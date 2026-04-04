"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Building2, Laptop, TreePine, BookOpen, ArrowUpRight, Heart, CheckCircle } from "lucide-react"

const projects = [
  {
    img: "/images/project-building.jpg",
    icon: Building2,
    title: "New Multipurpose Auditorium",
    status: "Completed",
    year: "2025",
    tag: "Infrastructure",
    desc: "A state-of-the-art 1,200-seat auditorium for assemblies, concerts, prize-giving days, and major school events. Features modern acoustics, air conditioning, tiered seating, and a fully equipped stage with professional lighting and sound systems.",
    highlights: ["1,200 seat capacity", "Professional acoustics & lighting", "Air-conditioned throughout", "Accessible design for all users"],
    color: "bg-gradient-green",
  },
  {
    img: "/images/project-tech.jpg",
    icon: Laptop,
    title: "STEM Innovation Hub",
    status: "In Progress",
    year: "2026",
    tag: "Technology",
    desc: "A dedicated STEM centre housing robotics workstations, coding stations, 3D printing capabilities, and digital fabrication tools. Designed to give every Charlean hands-on experience with the technologies shaping the 21st century economy.",
    highlights: ["60-station robotics lab", "Dedicated coding terminals", "3D printing & fabrication", "Internet of Things (IoT) track"],
    color: "bg-gradient-red",
  },
  {
    img: "/images/project-green.jpg",
    icon: TreePine,
    title: "Green Campus Initiative",
    status: "Ongoing",
    year: "2024–",
    tag: "Environment",
    desc: "A comprehensive sustainability programme encompassing tree-planting, solar panel installation, water conservation systems, and a campus-wide waste management and recycling scheme — positioning SCC as a model eco-friendly institution.",
    highlights: ["500+ trees planted", "Solar panel installation underway", "Rainwater harvesting system", "Campus recycling programme"],
    color: "bg-gradient-gold",
  },
  {
    img: "/images/academics.jpg",
    icon: BookOpen,
    title: "New Science Block",
    status: "Planned",
    year: "2027",
    tag: "Infrastructure",
    desc: "A purpose-built four-storey science block to house state-of-the-art Physics, Chemistry, and Biology laboratories. Will include preparation rooms, a science museum, and dedicated teacher offices — fully funded through alumni donations.",
    highlights: ["4-storey dedicated science block", "3 fully-equipped labs per floor", "Science museum & display space", "Funded by alumni association"],
    color: "bg-gradient-green",
  },
]

const statusColors: Record<string, string> = {
  Completed: "bg-primary/10 text-primary",
  "In Progress": "bg-secondary/10 text-secondary",
  Ongoing: "bg-accent text-accent-foreground",
  Planned: "bg-muted text-muted-foreground",
}

export default function ProjectsClient() {
  const listRef = useRef(null)
  const ctaRef = useRef(null)
  const listInView = useInView(listRef, { once: true, margin: "-80px" })
  const ctaInView = useInView(ctaRef, { once: true, margin: "-80px" })

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-dark pb-16 pt-24 text-primary-foreground">
        <div className="absolute inset-0 opacity-[0.05]"
          style={{ backgroundImage: "linear-gradient(hsl(0 0% 100%/.2) 1px,transparent 1px),linear-gradient(90deg,hsl(0 0% 100%/.2) 1px,transparent 1px)", backgroundSize: "80px 80px" }} />
        <div className="absolute bottom-0 right-1/4 h-64 w-64 animate-float rounded-full bg-secondary/15 blur-[100px]" />
        <div className="relative z-10 container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-6 bg-primary-foreground/40" />
              <span className="font-mono-custom text-[11px] tracking-[0.2em] text-primary-foreground/50 uppercase">Development Projects</span>
            </div>
            <h1 className="font-display text-6xl font-bold italic leading-[0.95] text-primary-foreground md:text-8xl">
              Building the<br />
              <span className="not-italic font-heading font-semibold text-primary-foreground/50">Future</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-primary-foreground/55 leading-relaxed">
              Transformative projects that enhance learning, campus life, and our community impact — funded by the generosity of alumni, parents, and partners.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects list */}
      <section ref={listRef} className="bg-background py-24">
        <div className="container mx-auto px-4">
          <div className="space-y-10">
            {projects.map((p, i) => (
              <motion.div key={p.title} initial={{ opacity: 0, y: 32 }} animate={listInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="group overflow-hidden rounded-3xl border border-border bg-card transition-all hover:border-primary/20 hover:shadow-elevated">
                <div className={`grid ${i % 2 === 0 ? "lg:grid-cols-[1.4fr_1fr]" : "lg:grid-cols-[1fr_1.4fr]"}`}>
                  {/* Image */}
                  <div className={`relative h-64 overflow-hidden lg:h-auto ${i % 2 !== 0 ? "lg:order-2" : ""}`}>
                    <Image src={p.img} alt={p.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width:1024px) 100vw, 50vw" />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent" />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className={`rounded-full px-3 py-1 text-xs font-semibold ${statusColors[p.status]}`}>{p.status}</span>
                      <span className="rounded-full px-3 py-1 text-xs font-semibold text-primary-foreground glass">{p.year}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`flex flex-col justify-center p-8 md:p-10 ${i % 2 !== 0 ? "lg:order-1" : ""}`}>
                    <div className="mb-4 flex items-center gap-3">
                      <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${p.color}`}>
                        <p.icon className="h-5 w-5 text-primary-foreground" />
                      </div>
                      <span className="font-mono-custom text-[10px] tracking-widest text-muted-foreground uppercase">{p.tag}</span>
                    </div>
                    <h2 className="mb-3 font-heading text-2xl font-bold text-foreground md:text-3xl">{p.title}</h2>
                    <p className="mb-6 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                    <div className="space-y-2">
                      {p.highlights.map(h => (
                        <div key={h} className="flex items-center gap-2.5">
                          <CheckCircle size={15} className="shrink-0 text-primary" />
                          <span className="text-sm text-foreground/80">{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Support CTA */}
      <section ref={ctaRef} className="bg-muted/40 py-20">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={ctaInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-3xl bg-gradient-dark p-10 text-primary-foreground md:p-16">
            <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-primary/10 blur-[100px]" />
            <div className="absolute bottom-0 left-0 h-48 w-48 rounded-full bg-secondary/8 blur-[80px]" />
            <div className="relative z-10 grid items-center gap-10 md:grid-cols-2">
              <div>
                <Heart size={28} className="mb-4 text-secondary/70" />
                <h2 className="mb-3 font-display text-3xl font-bold italic text-primary-foreground md:text-4xl">
                  Support Our Vision
                </h2>
                <p className="max-w-md text-primary-foreground/50 leading-relaxed">
                  Every project at St. Charles' College is funded by the generous contributions of our alumni, parents, and well-wishers. Your support directly impacts the education and lives of hundreds of young Charleans each year.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  {["Donate to the Building Fund", "Sponsor a Scholarship", "Endow a Laboratory"].map(opt => (
                    <span key={opt} className="rounded-full border border-primary-foreground/15 px-4 py-1.5 text-sm text-primary-foreground/50">{opt}</span>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <Link href="/contact"
                  className="flex items-center justify-center gap-2 rounded-2xl bg-gradient-green px-8 py-4 font-heading font-semibold text-primary-foreground glow-green transition-all hover:scale-105">
                  Get Involved <ArrowUpRight size={17} />
                </Link>
                <Link href="/contact"
                  className="flex items-center justify-center gap-2 rounded-2xl px-8 py-4 font-heading font-medium text-primary-foreground/70 glass transition-all hover:text-primary-foreground hover:scale-105">
                  Contact the School Office
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
