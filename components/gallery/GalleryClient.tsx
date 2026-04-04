"use client"

import { motion, useInView, AnimatePresence } from "framer-motion"
import { useRef, useState } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

const categories = ["All", "Campus", "Events", "Academics", "Sports"]

const images = [
  { src: "/images/hero-school.jpg", category: "Campus", title: "Aerial Campus View", desc: "A panoramic view of the St. Charles' College grounds — a sprawling campus in the heart of Onitsha." },
  { src: "/images/hero-assembly.jpg", category: "Events", title: "Morning Assembly", desc: "Students gathered for the daily morning assembly — a tradition that builds order and community." },
  { src: "/images/gallery-culture.jpg", category: "Events", title: "Cultural Day", desc: "Students showcasing Nigeria's rich cultural diversity during the annual Cultural Day celebrations." },
  { src: "/images/academics.jpg", category: "Academics", title: "Science Laboratory", desc: "Students conducting experiments in the fully-equipped science laboratory." },
  { src: "/images/gallery-library.jpg", category: "Academics", title: "The Library", desc: "SCC's extensive library — thousands of volumes supporting learning across every subject." },
  { src: "/images/hero-classroom.jpg", category: "Academics", title: "Smart Classroom", desc: "Modern, well-resourced classrooms designed for focused, effective learning." },
  { src: "/images/hero-sports.jpg", category: "Sports", title: "Inter-House Sports", desc: "The annual inter-house sports competition — one of the most anticipated events in the school calendar." },
  { src: "/images/spiritual.jpg", category: "Campus", title: "School Chapel", desc: "The Chapel of St. Charles Borromeo — the spiritual heart of the college." },
  { src: "/images/admissions.jpg", category: "Events", title: "Graduation Ceremony", desc: "Proud graduates and their families celebrating the culmination of years of hard work." },
  { src: "/images/project-building.jpg", category: "Campus", title: "New Auditorium", desc: "The newly commissioned 1,200-seat multipurpose auditorium — a landmark addition to the campus." },
  { src: "/images/project-tech.jpg", category: "Academics", title: "Robotics Lab", desc: "Students working on robotics projects in the STEM Innovation Hub." },
  { src: "/images/project-green.jpg", category: "Campus", title: "Green Campus Initiative", desc: "Tree-planting and landscaping as part of SCC's commitment to environmental sustainability." },
]

export default function GalleryClient() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [lightbox, setLightbox] = useState<number | null>(null)
  const gridRef = useRef(null)
  const gridInView = useInView(gridRef, { once: true, margin: "-80px" })

  const filtered = activeCategory === "All" ? images : images.filter(img => img.category === activeCategory)

  const openLightbox = (src: string) => {
    const idx = images.findIndex(img => img.src === src)
    if (idx !== -1) setLightbox(idx)
  }

  const prev = () => setLightbox(l => l !== null ? (l - 1 + images.length) % images.length : null)
  const next = () => setLightbox(l => l !== null ? (l + 1) % images.length : null)

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-dark pb-16 pt-24 text-primary-foreground">
        <div className="absolute inset-0 opacity-[0.05]"
          style={{ backgroundImage: "linear-gradient(hsl(0 0% 100%/.2) 1px,transparent 1px),linear-gradient(90deg,hsl(0 0% 100%/.2) 1px,transparent 1px)", backgroundSize: "80px 80px" }} />
        <div className="absolute top-1/4 left-1/3 h-64 w-64 animate-float rounded-full bg-primary/15 blur-[100px]" />
        <div className="relative z-10 container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-6 bg-primary-foreground/40" />
              <span className="font-mono-custom text-[11px] tracking-[0.2em] text-primary-foreground/50 uppercase">Moments in Time</span>
            </div>
            <h1 className="font-display text-6xl font-bold italic leading-[0.95] text-primary-foreground md:text-8xl">
              Our<br />
              <span className="not-italic font-heading font-semibold text-primary-foreground/50">Gallery</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-primary-foreground/55 leading-relaxed">
              Moments that define the Charlean experience — captured in time.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Grid */}
      <section ref={gridRef} className="bg-background py-16">
        <div className="container mx-auto px-4">
          {/* Filters */}
          <motion.div initial={{ opacity: 0, y: 16 }} animate={gridInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}
            className="mb-10 flex flex-wrap justify-center gap-2">
            {categories.map(cat => (
              <button key={cat} onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${activeCategory === cat ? "bg-primary text-primary-foreground shadow-card" : "border border-border bg-card text-muted-foreground hover:border-primary/40"}`}>
                {cat}
              </button>
            ))}
          </motion.div>

          <motion.div layout className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
            <AnimatePresence mode="popLayout">
              {filtered.map((img, i) => (
                <motion.div key={img.title} layout
                  initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.85 }}
                  transition={{ duration: 0.35, delay: i * 0.04 }}
                  className={`group relative cursor-pointer overflow-hidden rounded-2xl ${i === 0 && activeCategory === "All" ? "md:col-span-2 md:row-span-2" : ""}`}
                  onClick={() => openLightbox(img.src)}>
                  <div className={`relative w-full ${i === 0 && activeCategory === "All" ? "h-full min-h-[280px]" : "h-48 md:h-56"}`}>
                    <Image src={img.src} alt={img.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes={i === 0 ? "(max-width:768px) 100vw, 50vw" : "(max-width:768px) 50vw, 25vw"} />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="absolute bottom-0 left-0 right-0 translate-y-full p-4 transition-transform duration-300 group-hover:translate-y-0">
                    <span className="rounded-full px-2 py-1 text-[10px] text-primary-foreground glass">{img.category}</span>
                    <h3 className="mt-2 font-heading text-sm font-semibold text-primary-foreground">{img.title}</h3>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/95 p-4 backdrop-blur-md"
            onClick={() => setLightbox(null)}>
            <button className="absolute top-6 right-6 flex h-10 w-10 items-center justify-center rounded-full text-primary-foreground/60 hover:text-primary-foreground glass transition-colors"
              onClick={() => setLightbox(null)} aria-label="Close">
              <X size={20} />
            </button>
            <button className="absolute left-4 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full text-primary-foreground/60 hover:text-primary-foreground glass transition-colors"
              onClick={e => { e.stopPropagation(); prev() }} aria-label="Previous">
              <ChevronLeft size={20} />
            </button>
            <button className="absolute right-4 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full text-primary-foreground/60 hover:text-primary-foreground glass transition-colors"
              onClick={e => { e.stopPropagation(); next() }} aria-label="Next">
              <ChevronRight size={20} />
            </button>
            <motion.div initial={{ scale: 0.85, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.85, opacity: 0 }}
              className="relative h-[78vh] max-h-[85vh] w-[88vw] max-w-5xl"
              onClick={e => e.stopPropagation()}>
              <Image src={images[lightbox].src} alt={images[lightbox].title} fill className="rounded-2xl object-contain" sizes="90vw" />
            </motion.div>
            <div className="absolute bottom-8 text-center">
              <h3 className="font-heading text-lg font-semibold text-primary-foreground">{images[lightbox].title}</h3>
              <p className="mt-1 text-sm text-primary-foreground/50">{images[lightbox].desc}</p>
              <div className="mt-2 font-mono-custom text-[10px] text-primary-foreground/25">{lightbox + 1} / {images.length}</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
