"use client"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import {
  FlaskConical,
  Calculator,
  Globe,
  Laptop,
  BookText,
  Music,
  ArrowRight,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const subjects = [
  {
    icon: FlaskConical,
    name: "Sciences",
    items: "Physics · Chemistry · Biology",
    color: "text-primary",
  },
  {
    icon: Calculator,
    name: "Mathematics",
    items: "Further Maths · Statistics",
    color: "text-secondary",
  },
  {
    icon: Globe,
    name: "Humanities",
    items: "History · Government · CRS",
    color: "text-primary",
  },
  {
    icon: Laptop,
    name: "Technology",
    items: "Computer Sci · ICT · Robotics",
    color: "text-secondary",
  },
  {
    icon: BookText,
    name: "Languages",
    items: "English · Igbo · French · Chinese",
    color: "text-primary",
  },
  {
    icon: Music,
    name: "Arts & Culture",
    items: "Music · Fine Art · Drama",
    color: "text-secondary",
  },
]

export default function HomeAcademicsPreview() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })
  return (
    <section className="relative overflow-hidden bg-background py-28" ref={ref}>
      <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-secondary/5 blur-[150px]" />
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-6 bg-secondary" />
              <span className="font-mono-custom text-[11px] tracking-[0.2em] text-secondary uppercase">
                Academics
              </span>
            </div>
            <h2 className="mb-5 font-display text-5xl leading-[1.05] font-bold text-foreground italic md:text-6xl">
              World-Class
              <br />
              <span className="text-gradient-brand font-heading font-semibold not-italic">
                Curriculum
              </span>
            </h2>
            <p className="mb-8 leading-relaxed text-muted-foreground">
              Our comprehensive curriculum covers sciences, humanities,
              technology, and the arts — preparing students to excel in WAEC,
              NECO, and JAMB, and to thrive in any field they choose.
            </p>
            <div className="mb-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {subjects.map((s, i) => (
                <motion.div
                  key={s.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.06 }}
                  className="group rounded-2xl border border-border bg-card p-4 transition-all hover:border-primary/25 hover:shadow-card"
                >
                  <s.icon
                    className={`mb-2 h-5 w-5 ${s.color} transition-transform group-hover:scale-110`}
                  />
                  <div className="font-heading text-sm font-semibold text-foreground">
                    {s.name}
                  </div>
                  <div className="mt-0.5 text-[10px] text-muted-foreground">
                    {s.items}
                  </div>
                </motion.div>
              ))}
            </div>
            <Link
              href="/academics"
              className="inline-flex items-center gap-2 font-heading font-semibold text-primary transition-all hover:gap-3"
            >
              View Full Academics <ArrowRight size={17} />
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="relative"
          >
            <div className="relative h-[480px] overflow-hidden rounded-3xl shadow-elevated">
              <Image
                src="/assets/coding-class.jpg"
                alt="Students in the laboratory"
                fill
                className="object-cover"
                sizes="(max-width:1024px) 100vw, 50vw"
              />
            </div>
            <div className="absolute right-6 -bottom-5 left-6 flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-elevated">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl glow-green bg-gradient-green">
                <span className="font-display text-xl font-bold text-primary-foreground italic">
                  A+
                </span>
              </div>
              <div>
                <div className="font-heading text-sm font-semibold text-foreground">
                  Outstanding Results
                </div>
                <div className="text-xs text-muted-foreground">
                  98% WAEC pass rate · Class of {new Date().getFullYear()}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
