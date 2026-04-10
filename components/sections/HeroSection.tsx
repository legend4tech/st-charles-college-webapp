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
      <div className="absolute inset-0 z-[2] bg-gradient-to-t from-black/85 via-black/45 to-black/30" />
      {/* Brand colour tint — much lighter than before */}
      <div className="absolute inset-0 z-[3] bg-gradient-hero" />

      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 z-[4] opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(0 0% 100%/.25) 1px,transparent 1px),linear-gradient(90deg,hsl(0 0% 100%/.25) 1px,transparent 1px)",
          backgroundSize: "100px 100px",
        }}
      />

      {/* Floating orbs - enhanced */}
      <div className="absolute top-1/4 right-[12%] z-[4] h-96 w-96 animate-float rounded-full bg-primary/12 blur-[140px]" />
      <div
        className="absolute bottom-1/3 left-[8%] z-[4] h-[28rem] w-[28rem] animate-float-slow rounded-full bg-secondary/10 blur-[160px]"
        style={{ animationDelay: "4s" }}
      />
      <div
        className="bg-gold/8 absolute top-2/3 right-1/4 z-[4] h-64 w-64 animate-float rounded-full blur-[120px]"
        style={{ animationDelay: "2s" }}
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
                <span className="h-px w-8 bg-primary-foreground/60" />
                <span className="font-mono-custom text-[11px] tracking-[0.2em] text-primary-foreground/80 uppercase">
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
                <h1 className="font-display text-7xl leading-[0.92] font-bold tracking-tight text-balance text-primary-foreground md:text-[8.5rem]">
                  {slide.title}
                  <br />
                  <span className="text-primary-foreground/75 italic">
                    {slide.subtitle}
                  </span>
                </h1>

                <p
                  className={`mt-8 leading-relaxed text-balance text-primary-foreground/90 ${
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
              className="mt-12 flex flex-wrap items-center gap-5"
            >
              <Link
                href="https://scc.istudent.com.ng/admission/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-2xl bg-secondary px-9 py-4.5 font-heading font-semibold text-secondary-foreground shadow-lg transition-all hover:-translate-y-0.5 hover:scale-105 hover:shadow-xl"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Apply for Admission
                  <svg
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-secondary to-secondary/90 opacity-0 transition-opacity group-hover:opacity-100" />
              </Link>
              <Link
                href="/about"
                className="group rounded-2xl px-9 py-4.5 font-heading font-medium text-primary-foreground/85 glass transition-all hover:-translate-y-0.5 hover:scale-105 hover:text-primary-foreground hover:shadow-lg"
              >
                <span className="flex items-center gap-2">
                  Explore Our Legacy
                  <svg
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ── Slide controls ── */}
      <div className="relative z-[5] container mx-auto flex items-end justify-between px-6 pb-12">
        <div className="flex items-center gap-6">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className="group flex flex-col items-start gap-2 transition-all hover:opacity-80"
              aria-label={`Go to slide ${i + 1}`}
            >
              <span
                className={`font-mono-custom text-[11px] tracking-widest transition-all duration-300 ${
                  i === current
                    ? "font-bold text-primary-foreground/90"
                    : "text-primary-foreground/60 group-hover:text-primary-foreground/80"
                }`}
              >
                0{i + 1}
              </span>
              <div className="h-1 w-14 overflow-hidden rounded-full bg-primary-foreground/10 backdrop-blur-sm">
                <div
                  className="h-full rounded-full bg-primary-foreground/70"
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
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2.5"
        >
          <span className="font-mono-custom text-[10px] tracking-[0.3em] text-primary-foreground/70 uppercase">
            Scroll
          </span>
          <div className="flex h-8 w-5 items-start justify-center rounded-full border border-primary-foreground/50">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary-foreground/40"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
