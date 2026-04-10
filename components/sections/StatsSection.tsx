"use client"
import { motion, useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import { getCurrentAcademicYear } from "@/lib/utils/date"

function AnimatedNumber({
  target,
  suffix,
}: {
  target: number
  suffix: string
}) {
  const [display, setDisplay] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })
  useEffect(() => {
    if (!inView) return
    let v = 0
    const inc = target / (1800 / 16)
    const id = setInterval(() => {
      v += inc
      if (v >= target) {
        setDisplay(target)
        clearInterval(id)
      } else setDisplay(Math.floor(v))
    }, 16)
    return () => clearInterval(id)
  }, [inView, target])
  return (
    <span ref={ref}>
      {display.toLocaleString()}
      {suffix}
    </span>
  )
}

export function StatsSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })
  const currentAcademicYear = getCurrentAcademicYear()
  const stats = [
    { value: 96, suffix: "+", label: "Years of Excellence", sub: "Est. 1928" },
    {
      value: 5000,
      suffix: "+",
      label: "Alumni Worldwide",
      sub: "Across all sectors",
    },
    {
      value: 98,
      suffix: "%",
      label: "WAEC Pass Rate",
      sub: `Class of ${new Date().getFullYear()}`,
    },
    {
      value: 50,
      suffix: "+",
      label: "Teaching Staff",
      sub: "Qualified educators",
    },
    {
      value: 3,
      suffix: "",
      label: "Historical Eras",
      sub: "TTC · Dual · Unified",
    },
    { value: 1, suffix: "st", label: "Wole Soyinka Prize", sub: "WSICE 2017" },
  ]
  return (
    <section ref={ref} className="relative overflow-hidden bg-background py-20">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 opacity-50 bg-gradient-subtle" />
      <div className="absolute top-0 left-1/4 h-72 w-72 rounded-full bg-accent/20 blur-[120px]" />
      <div className="absolute right-1/4 bottom-0 h-64 w-64 rounded-full bg-primary/10 blur-[100px]" />

      <div className="relative z-10 container mx-auto px-4">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 text-center transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-elevated"
            >
              {/* Subtle gradient overlay on hover */}
              <div className="absolute inset-0 opacity-0 transition-opacity bg-gradient-subtle group-hover:opacity-100" />

              <div className="relative z-10">
                <div className="text-gradient-brand font-display text-4xl font-bold md:text-5xl">
                  <AnimatedNumber target={s.value} suffix={s.suffix} />
                </div>
                <div className="mt-2 font-heading text-xs font-semibold text-foreground">
                  {s.label}
                </div>
                <div className="mt-1 font-mono-custom text-[10px] text-muted-foreground">
                  {s.sub}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
