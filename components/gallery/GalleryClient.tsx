"use client"

import { motion, useInView, AnimatePresence } from "framer-motion"
import { useRef, useState } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

const categories = ["All", "Campus", "Events", "Academics", "Sports"]

const images = [
  {
    src: "/assets/arena-view.jpeg",
    category: "Campus",
    title: "Aerial Campus View",
    desc: "A panoramic view of the St. Charles' College grounds — a sprawling campus in the heart of Onitsha.",
  },
  {
    src: "/assets/assembly-ground.jpeg",
    category: "Events",
    title: "Morning Assembly",
    desc: "Students gathered for the daily morning assembly — a tradition that builds order and community.",
  },
  {
    src: "/assets/culture.jpg",
    category: "Events",
    title: "Cultural Day",
    desc: "Students showcasing Nigeria's rich cultural diversity during the annual Cultural Day celebrations.",
  },
  {
    src: "/assets/coding-class.jpg",
    category: "Academics",
    title: "Computer Laboratory",
    desc: "Students developing digital skills in the modern computer laboratory.",
  },

  {
    src: "/assets/students_with_certificates.jpg",
    category: "Academics",
    title: "Certificate Presentation",
    desc: "Students receiving certificates of achievement in recognition of their academic excellence.",
  },
  {
    src: "/assets/competition_won.jpg",
    category: "Academics",
    title: "Competition Winners",
    desc: "Our students proudly displaying their trophy and medals from an academic competition.",
  },
  {
    src: "/assets/band-boys.jpg",
    category: "Campus",
    title: "School Band",
    desc: "Our talented marching band members, ready to perform at school events and competitions.",
  },
  {
    src: "/assets/chapel.jpg",
    category: "Campus",
    title: "School Chapel",
    desc: "The Chapel of St. Charles Borromeo — the spiritual heart of the college.",
  },
  {
    src: "/assets/send_off.jpg",
    category: "Events",
    title: "Send-Off Ceremony",
    desc: "Proud graduates and their families celebrating the culmination of years of hard work.",
  },
  {
    src: "/assets/hostel.jpg",
    category: "Campus",
    title: "Hostel Renovation",
    desc: "Recently renovated student hostel facilities providing comfortable and modern accommodation.",
  },
  {
    src: "/assets/coding-class.jpg",
    category: "Academics",
    title: "Robotics Lab",
    desc: "Students working on robotics projects in the STEM Innovation Hub.",
  },
  {
    src: "/assets/music.jpg",
    category: "Campus",
    title: "Music Department",
    desc: "Students exploring their musical talents in the well-equipped music E.nvironment",
  },
]

export default function GalleryClient() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [lightbox, setLightbox] = useState<number | null>(null)
  const gridRef = useRef(null)
  const gridInView = useInView(gridRef, { once: true, margin: "-80px" })

  const filtered =
    activeCategory === "All"
      ? images
      : images.filter((img) => img.category === activeCategory)

  const openLightbox = (src: string) => {
    const idx = images.findIndex((img) => img.src === src)
    if (idx !== -1) setLightbox(idx)
  }

  const prev = () =>
    setLightbox((l) =>
      l !== null ? (l - 1 + images.length) % images.length : null
    )
  const next = () =>
    setLightbox((l) => (l !== null ? (l + 1) % images.length : null))

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[55vh] items-end overflow-hidden pt-24 pb-16 bg-gradient-dark">
        <div className="absolute inset-0 opacity-25">
          <Image
            src="/assets/arena-view.jpeg"
            alt="Gallery"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-hero" />
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(hsl(0 0% 100%/.2) 1px,transparent 1px),linear-gradient(90deg,hsl(0 0% 100%/.2) 1px,transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
        <div className="absolute top-1/4 left-1/3 h-64 w-64 animate-float rounded-full bg-primary/15 blur-[100px]" />
        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-6 bg-primary-foreground/70" />
              <span className="font-mono-custom text-[11px] tracking-[0.2em] text-primary-foreground/85 uppercase">
                Moments in Time
              </span>
            </div>
            <h1 className="font-display text-6xl leading-[0.95] font-bold text-primary-foreground italic md:text-8xl">
              Our
              <br />
              <span className="font-heading font-semibold text-primary-foreground/75 not-italic">
                Gallery
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-primary-foreground/85">
              Moments that define the Charlean experience — captured in time.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Grid */}
      <section ref={gridRef} className="bg-background py-24">
        <div className="container mx-auto px-4">
          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={gridInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="mb-12 flex flex-wrap justify-center gap-3"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-6 py-2.5 text-sm font-medium transition-all duration-300 ${activeCategory === cat ? "scale-105 bg-primary text-primary-foreground shadow-elevated" : "border border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-foreground hover:shadow-card"}`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          <motion.div
            layout
            className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((img, i) => (
                <motion.div
                  key={img.title}
                  layout
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.85 }}
                  transition={{ duration: 0.35, delay: i * 0.04 }}
                  className={`group relative cursor-pointer overflow-hidden rounded-2xl shadow-card transition-shadow duration-300 hover:shadow-elevated ${i === 0 && activeCategory === "All" ? "md:col-span-2 md:row-span-2" : ""}`}
                  onClick={() => openLightbox(img.src)}
                >
                  <div
                    className={`relative w-full ${i === 0 && activeCategory === "All" ? "h-full min-h-[320px]" : "h-52 md:h-64"}`}
                  >
                    <Image
                      src={img.src}
                      alt={img.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes={
                        i === 0
                          ? "(max-width:768px) 100vw, 50vw"
                          : "(max-width:768px) 50vw, 25vw"
                      }
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="absolute right-0 bottom-0 left-0 translate-y-full p-5 transition-transform duration-500 group-hover:translate-y-0">
                    <span className="rounded-full bg-primary/30 px-3 py-1 text-[10px] font-medium text-primary-foreground backdrop-blur-sm">
                      {img.category}
                    </span>
                    <h3 className="mt-2 font-heading text-base font-semibold text-primary-foreground">
                      {img.title}
                    </h3>
                    <p className="mt-1 line-clamp-2 text-xs text-primary-foreground/60">
                      {img.desc}
                    </p>
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
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/95 p-4 backdrop-blur-md"
            onClick={() => setLightbox(null)}
          >
            <button
              className="absolute top-6 right-6 flex h-12 w-12 items-center justify-center rounded-full text-primary-foreground/85 glass transition-all hover:scale-110 hover:text-primary-foreground"
              onClick={() => setLightbox(null)}
              aria-label="Close"
            >
              <X size={22} />
            </button>
            <button
              className="absolute top-1/2 left-6 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full text-primary-foreground/85 glass transition-all hover:scale-110 hover:text-primary-foreground"
              onClick={(e) => {
                e.stopPropagation()
                prev()
              }}
              aria-label="Previous"
            >
              <ChevronLeft size={22} />
            </button>
            <button
              className="absolute top-1/2 right-6 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full text-primary-foreground/85 glass transition-all hover:scale-110 hover:text-primary-foreground"
              onClick={(e) => {
                e.stopPropagation()
                next()
              }}
              aria-label="Next"
            >
              <ChevronRight size={22} />
            </button>
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              className="relative h-[82vh] max-h-[90vh] w-[92vw] max-w-6xl overflow-hidden rounded-2xl shadow-dramatic"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[lightbox].src}
                alt={images[lightbox].title}
                fill
                className="object-contain"
                sizes="90vw"
              />
            </motion.div>
            <div className="absolute bottom-10 text-center">
              <h3 className="font-heading text-xl font-semibold text-primary-foreground">
                {images[lightbox].title}
              </h3>
              <p className="mx-auto mt-1 max-w-lg text-sm text-primary-foreground/50">
                {images[lightbox].desc}
              </p>
              <div className="mt-2 font-mono-custom text-[10px] text-primary-foreground/25">
                {lightbox + 1} / {images.length}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
