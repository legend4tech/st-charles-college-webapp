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
    <section className="relative overflow-hidden bg-muted/40 py-28" ref={ref}>
      <div className="absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-accent/30 blur-[180px]" />
      <div className="relative z-10 container mx-auto px-4">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9 }}
            className="relative"
          >
            <div className="relative h-[560px] overflow-hidden rounded-3xl shadow-elevated">
              <Image
                src="/assets/schoolimage.jpg"
                alt="St. Charles' College"
                fill
                className="object-cover"
                sizes="(max-width:1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent" />
            </div>
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-4 -bottom-6 rounded-3xl p-6 text-primary-foreground shadow-elevated bg-gradient-dark md:right-10"
            >
              <div className="font-display text-5xl font-bold italic">1928</div>
              <div className="font-mono-custom mt-1 text-[11px] tracking-widest text-primary-foreground/50 uppercase">
                Year Founded
              </div>
            </motion.div>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2.5,
              }}
              className="absolute -top-4 left-4 rounded-2xl p-4 text-primary-foreground shadow-elevated bg-gradient-green md:left-10"
            >
              <div className="font-display text-sm italic">
                &ldquo;Floreat in Aeternum&rdquo;
              </div>
              <div className="font-mono-custom mt-1 text-[9px] tracking-widest text-primary-foreground/60 uppercase">
                Flourishing Forever
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.15 }}
          >
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-6 bg-secondary" />
              <span className="font-mono-custom text-[11px] tracking-[0.2em] text-secondary uppercase">
                About Us
              </span>
            </div>
            <h2 className="font-display mb-6 text-5xl leading-[1.05] font-bold text-foreground italic md:text-6xl">
              A Legacy That
              <br />
              <span className="text-gradient-brand font-heading font-semibold not-italic">
                Spans Centuries
              </span>
            </h2>
            <p className="mb-5 leading-relaxed text-muted-foreground">
              St. Charles&apos; College, Onitsha — the{" "}
              <em className="text-foreground">
                &ldquo;Varsity on the Niger&rdquo;
              </em>{" "}
              — is one of southeastern Nigeria&apos;s most storied institutions.
              Founded in 1928 by Archbishop Charles Heerey and dedicated to St.
              Charles Borromeo, the college has shaped generations of
              Nigeria&apos;s finest minds.
            </p>
            <p className="mb-8 leading-relaxed text-muted-foreground">
              From high court judges and senior advocates to bishops,
              professors, engineers and statesmen — every Charlean carries
              forward the torch of excellence, discipline, and faith.
            </p>

            <div className="mb-8 space-y-2.5">
              {milestones.map((m, i) => (
                <motion.div
                  key={m.year}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                  className="flex items-start gap-4 rounded-2xl border border-border bg-card p-4 transition-all hover:border-primary/25 hover:shadow-card"
                >
                  <span className="font-mono-custom shrink-0 text-xs font-bold text-primary/70">
                    {m.year}
                  </span>
                  <p className="text-sm text-muted-foreground">{m.text}</p>
                </motion.div>
              ))}
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 font-heading font-semibold text-primary transition-all hover:gap-3"
            >
              Read Our Full Story <ArrowRight size={17} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
