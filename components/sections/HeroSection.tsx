"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ChevronDown } from "lucide-react"

const slides = [
  {
    img: "/assets/assembly-ground.jpeg",
    eyebrow: "Est. 1928 · Onitsha, Anambra",
    title: "The Varsity",
    subtitle: "on the Niger",
    desc: "For nearly a century, we have shaped Nigeria's finest minds — leaders, scholars, and men of faith.",
  },
  {
    img: "/assets/prefects.jpg",
    eyebrow: "Character · Integrity · Order",
    title: "Discipline",
    subtitle: "& Formation",
    desc: "A tradition of excellence rooted in Catholic values and a culture of moral accountability.",
  },
  {
    img: "/assets/academic_excellece.jpg",
    eyebrow: "WAEC · NECO · JAMB",
    title: "Academic",
    subtitle: "Excellence",
    desc: "World-class curriculum preparing every student for university and for life beyond.",
  },
  {
    img: "/assets/culture.jpg",
    eyebrow: "Culture · Brotherhood · Sport",
    title: "Beyond the",
    subtitle: "Classroom",
    desc: "At SCC, a Charlean is shaped not just in the lecture hall, but on the field, the stage, and in every corner of campus life. Through inter-house athletics, cultural festivals, drama, music, and the bonds forged in the dormitory — we build men who are whole. Sport teaches discipline and resilience; culture teaches identity and pride. Together, they complete the Charlean formation.",
  },
]

const SLIDE_DURATION = 5000 // ms per slide

export default function HeroSection() {
  const [current, setCurrent] = useState(0)
  const [progress, setProgress] = useState(0)
  // Track direction so exit animation matches
  const [direction, setDirection] = useState(1)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const startTimeRef = useRef<number>(Date.now())

  const goTo = useCallback(
    (index: number) => {
      setDirection(index > current ? 1 : -1)
      setCurrent(index)
      setProgress(0)
      startTimeRef.current = Date.now()
    },
    [current]
  )

  const next = useCallback(() => {
    const nextIdx = (current + 1) % slides.length
    setDirection(1)
    setCurrent(nextIdx)
    setProgress(0)
    startTimeRef.current = Date.now()
  }, [current])

  // Single RAF-based progress ticker — no setInterval fighting AnimatePresence
  useEffect(() => {
    startTimeRef.current = Date.now()
    let rafId: number

    const tick = () => {
      const elapsed = Date.now() - startTimeRef.current
      const pct = Math.min((elapsed / SLIDE_DURATION) * 100, 100)
      setProgress(pct)
      if (pct < 100) {
        rafId = requestAnimationFrame(tick)
      } else {
        next()
      }
    }

    rafId = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafId)
  }, [current, next])

  const slide = slides[current]
  const isLast = current === slides.length - 1

  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col overflow-hidden"
    >
      {/* ── Background images ── */}
      {/* Render ALL slides stacked; only the current one is visible.
          Using opacity transitions on each avoids the double-render jank
          that AnimatePresence mode="sync" causes with crossfades. */}
      {slides.map((s, i) => (
        <div
          key={s.img}
          className="absolute inset-0 transition-opacity duration-[1400ms] ease-in-out"
          style={{
            opacity: i === current ? 1 : 0,
            zIndex: i === current ? 1 : 0,
          }}
          aria-hidden={i !== current}
        >
          <Image
            src={s.img}
            alt="St. Charles' College"
            fill
            className="object-cover"
            priority={i === 0}
            sizes="100vw"
          />
        </div>
      ))}

      {/* ── Overlays ── */}
      {/* Bottom-up vignette so text is always readable */}
      <div className="absolute inset-0 z-[2] bg-gradient-to-t from-black/60 via-black/20 to-black/10" />
      {/* Brand colour tint — much lighter than before */}
      <div className="absolute inset-0 z-[3] bg-gradient-hero" />

      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 z-[4] opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(0 0% 100%/.25) 1px,transparent 1px),linear-gradient(90deg,hsl(0 0% 100%/.25) 1px,transparent 1px)",
          backgroundSize: "100px 100px",
        }}
      />

      {/* Floating orbs */}
      <div className="absolute top-1/4 right-[12%] z-[4] h-80 w-80 animate-float rounded-full bg-primary/10 blur-[120px]" />
      <div
        className="animate-float-slow absolute bottom-1/3 left-[8%] z-[4] h-96 w-96 rounded-full bg-secondary/8 blur-[140px]"
        style={{ animationDelay: "4s" }}
      />

      {/* Vertical rule */}
      <div className="absolute top-0 bottom-0 left-[4.5rem] z-[4] hidden w-px bg-gradient-to-b from-transparent via-primary-foreground/12 to-transparent lg:block" />

      {/* ── Content ── */}
      <div className="relative z-[5] flex flex-1 items-center">
        <div className="container mx-auto px-6 py-24">
          <div className="max-w-4xl">
            {/* Eyebrow */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`eyebrow-${current}`}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 16 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="mb-6 flex items-center gap-3"
              >
                <span className="h-px w-8 bg-primary-foreground/40" />
                <span className="font-mono-custom text-[11px] tracking-[0.2em] text-primary-foreground/55 uppercase">
                  {slide.eyebrow}
                </span>
              </motion.div>
            </AnimatePresence>

            {/* Heading + desc */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`content-${current}`}
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <h1 className="font-display text-7xl leading-[0.92] font-bold tracking-tight text-primary-foreground md:text-[8.5rem]">
                  {slide.title}
                  <br />
                  <span className="text-primary-foreground/50 italic">
                    {slide.subtitle}
                  </span>
                </h1>

                <p
                  className={`mt-8 leading-relaxed text-primary-foreground/70 ${
                    isLast
                      ? "max-w-2xl text-base md:text-lg"
                      : "max-w-lg text-lg"
                  }`}
                >
                  {slide.desc}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Link
                href="https://scc.istudent.com.ng/admission/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl bg-secondary px-8 py-4 font-heading font-semibold text-secondary-foreground transition-all hover:scale-105 hover:opacity-90"
              >
                Apply for Admission →
              </Link>
              <Link
                href="/about"
                className="rounded-2xl px-8 py-4 font-heading font-medium text-primary-foreground/80 glass transition-all hover:scale-105 hover:text-primary-foreground"
              >
                Explore Our Legacy
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ── Slide controls ── */}
      <div className="relative z-[5] container mx-auto flex items-end justify-between px-6 pb-10">
        <div className="flex items-center gap-5">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className="group flex flex-col items-start gap-1.5"
              aria-label={`Go to slide ${i + 1}`}
            >
              <span
                className={`font-mono-custom text-[10px] tracking-widest transition-colors duration-300 ${
                  i === current
                    ? "text-primary-foreground/70"
                    : "text-primary-foreground/20 group-hover:text-primary-foreground/40"
                }`}
              >
                0{i + 1}
              </span>
              <div className="h-0.5 w-10 overflow-hidden rounded-full bg-primary-foreground/15">
                <div
                  className="h-full rounded-full bg-primary-foreground"
                  style={{
                    width:
                      i === current
                        ? `${progress}%`
                        : i < current
                          ? "100%"
                          : "0%",
                    transition: i === current ? "none" : "width 0.3s ease",
                  }}
                />
              </div>
            </button>
          ))}
        </div>

        {/* Scroll hint */}
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="font-mono-custom text-[9px] tracking-[0.3em] text-primary-foreground/25 uppercase">
            Scroll
          </span>
          <ChevronDown size={16} className="text-primary-foreground/25" />
        </motion.div>
      </div>
    </section>
  )
}
