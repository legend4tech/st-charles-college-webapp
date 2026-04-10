"use client"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Link from "next/link"
import Image from "next/image"

export default function HomeCTA() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })
  return (
    <section className="bg-background py-24" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-3xl text-primary-foreground bg-gradient-dark"
        >
          <div className="absolute inset-0 opacity-20">
            <Image
              src="/images/hero-assembly.jpg"
              alt=""
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-hero" />
          <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-primary/10 blur-[100px]" />
          <div className="relative z-10 grid items-center gap-10 px-8 py-16 md:grid-cols-2 md:px-16 md:py-20">
            <div>
              <span className="mb-4 inline-block font-mono-custom text-[11px] tracking-[0.2em] text-primary-foreground/80 uppercase">
                Admissions 2026
              </span>
              <h2 className="font-display text-4xl leading-tight font-bold text-primary-foreground italic md:text-5xl">
                Begin Your
                <br />
                <span className="text-gradient-gold font-heading font-semibold not-italic">
                  Charlean Journey
                </span>
              </h2>
              <p className="mt-4 max-w-md leading-relaxed text-primary-foreground/85">
                Join one of Nigeria&apos;s most prestigious institutions.
                Applications are now open for the 2026/2027 academic session.
                Seats are limited.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row md:flex-col lg:flex-row">
              <Link
                href="https://scc.istudent.com.ng/admission/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 rounded-2xl py-4 text-center font-heading font-semibold text-secondary-foreground transition-all bg-gradient-red hover:scale-105 hover:opacity-90"
              >
                Apply Now →
              </Link>
              <Link
                href="/admissions"
                className="flex-1 rounded-2xl py-4 text-center font-heading font-semibold text-primary-foreground glass transition-all hover:scale-105"
              >
                Learn More
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
