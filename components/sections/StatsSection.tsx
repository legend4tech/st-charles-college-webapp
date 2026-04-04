"use client"
import { motion, useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"

function AnimatedNumber({ target, suffix }: { target: number; suffix: string }) {
  const [display, setDisplay] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })
  useEffect(() => {
    if (!inView) return
    let v = 0
    const inc = target / (1800 / 16)
    const id = setInterval(() => { v += inc; if (v >= target) { setDisplay(target); clearInterval(id) } else setDisplay(Math.floor(v)) }, 16)
    return () => clearInterval(id)
  }, [inView, target])
  return <span ref={ref}>{display.toLocaleString()}{suffix}</span>
}

export function StatsSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })
  const stats = [
    { value: 96, suffix: "+", label: "Years of Excellence", sub: "Est. 1928" },
    { value: 5000, suffix: "+", label: "Alumni Worldwide", sub: "Across all sectors" },
    { value: 98, suffix: "%", label: "WAEC Pass Rate", sub: "Class of 2025" },
    { value: 50, suffix: "+", label: "Teaching Staff", sub: "Qualified educators" },
    { value: 3, suffix: "", label: "Historical Eras", sub: "TTC · Dual · Unified" },
    { value: 1, suffix: "st", label: "Wole Soyinka Prize", sub: "WSICE 2017" },
  ]
  return (
    <section ref={ref} className="bg-background py-14">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
          {stats.map((s, i) => (
            <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="group rounded-2xl border border-border bg-card p-5 text-center transition-all hover:border-primary/30 hover:shadow-card">
              <div className="font-display text-4xl font-bold text-gradient-brand md:text-5xl">
                <AnimatedNumber target={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-1.5 font-heading text-xs font-semibold text-foreground">{s.label}</div>
              <div className="mt-0.5 font-mono-custom text-[10px] text-muted-foreground">{s.sub}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
