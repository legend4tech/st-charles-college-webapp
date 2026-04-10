"use client"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function HomeAboutPreview() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })
  const milestones = [
    {
      year: "1928",
      text: "Founded by Archbishop Charles Heerey as a Teacher Training College.",
    },
    {
      year: "1970",
      text: "State government took over all schools following the Biafran War.",
    },
    {
      year: "1983",
      text: "Proprietorship restored to the Catholic Church after years of advocacy.",
    },
    {
      year: "2010",
      text: "Merged into a single unified secondary school — the present era begins.",
    },
  ]
  return (
    <section className="relative overflow-hidden bg-muted/40 py-32" ref={ref}>
      {/* Enhanced decorative elements */}
      <div className="absolute top-0 right-0 h-[600px] w-[600px] rounded-full bg-accent/25 blur-[200px]" />
      <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-primary/10 blur-[150px]" />
      <div className="bg-gold/15 absolute top-1/2 left-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 animate-pulse-glow rounded-full blur-[80px]" />

      <div className="relative z-10 container mx-auto px-4">
        <div className="grid items-center gap-20 lg:grid-cols-[1.2fr_1fr]">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9 }}
            className="relative"
          >
            {/* Enhanced image container */}
            <div className="group relative h-[600px] overflow-hidden rounded-3xl shadow-elevated">
              <Image
                src="/assets/schoolimage.jpg"
                alt="St. Charles' College"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width:1024px) 100vw, 60vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent opacity-80 transition-opacity group-hover:opacity-95" />

              {/* Subtle border glow */}
              <div className="absolute inset-0 rounded-3xl border border-white/10" />
            </div>

            {/* Enhanced floating badges */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-6 -bottom-8 rounded-3xl p-7 text-primary-foreground shadow-dramatic glass-dark bg-gradient-dark md:right-12"
            >
              <div className="font-display text-6xl font-bold italic">1928</div>
              <div className="mt-2 font-mono-custom text-[11px] tracking-widest text-primary-foreground/85 uppercase">
                Year Founded
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2.5,
              }}
              className="absolute -top-6 left-6 rounded-2xl p-5 text-primary-foreground glow-green shadow-dramatic bg-gradient-green md:left-12"
            >
              <div className="font-display text-base font-medium italic">
                &ldquo;Floreat in Aeternum&rdquo;
              </div>
              <div className="mt-1.5 font-mono-custom text-[10px] tracking-widest text-primary-foreground/90 uppercase">
                Flourishing Forever
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="lg:pl-8"
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-secondary" />
              <span className="font-mono-custom text-[11px] tracking-[0.25em] text-secondary uppercase">
                About Us
              </span>
            </div>
            <h2 className="mb-8 font-display text-5xl leading-[1.05] font-bold text-balance text-foreground italic md:text-6xl">
              A Legacy That
              <br />
              <span className="text-gradient-brand font-heading font-semibold not-italic">
                Spans Centuries
              </span>
            </h2>
            <p className="mb-6 text-base leading-relaxed text-muted-foreground">
              St. Charles&apos; College, Onitsha — the{" "}
              <em className="font-semibold text-foreground">
                &ldquo;Varsity on the Niger&rdquo;
              </em>{" "}
              — is one of southeastern Nigeria&apos;s most storied institutions.
              Founded in 1928 by Archbishop Charles Heerey and dedicated to St.
              Charles Borromeo, the college has shaped generations of
              Nigeria&apos;s finest minds.
            </p>
            <p className="mb-10 text-base leading-relaxed text-muted-foreground">
              From high court judges and senior advocates to bishops,
              professors, engineers and statesmen — every Charlean carries
              forward the torch of excellence, discipline, and faith.
            </p>

            <div className="mb-10 space-y-3">
              {milestones.map((m, i) => (
                <motion.div
                  key={m.year}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                  className="group flex items-start gap-4 rounded-2xl border border-border bg-card p-5 transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-card"
                >
                  <span className="shrink-0 font-mono-custom text-sm font-bold text-primary/80">
                    {m.year}
                  </span>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {m.text}
                  </p>
                </motion.div>
              ))}
            </div>

            <Link
              href="/about"
              className="group inline-flex items-center gap-2.5 font-heading font-semibold text-primary transition-all hover:gap-4"
            >
              Read Our Full Story
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
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
