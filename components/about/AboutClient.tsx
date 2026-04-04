"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { BookOpen, Users, Heart, Award, ArrowRight, Quote } from "lucide-react"

const timelineEras = [
  {
    period: "1928 – 1986",
    era: "Teacher Training College Era",
    color: "bg-gradient-green",
    events: [
      {
        year: "1928",
        text: "Founded by His Grace Most Rev. Dr. Charles Heerey, then Archbishop of Onitsha Archdiocese, as a Teacher Training College for men. Named after St. Charles Borromeo.",
      },
      {
        year: "1938",
        text: "Administration transferred from the Holy Ghost Fathers (CSSP) to the Franciscan Brothers, who continued the school's academic mission.",
      },
      {
        year: "1960s",
        text: "The college becomes one of the premier teacher-training institutions in the Eastern Region of Nigeria, supplying schools across what is today Southeast and parts of South-South Nigeria.",
      },
      {
        year: "1970",
        text: "Following the end of the Nigerian-Biafran War, the East Central State Government forcibly took over all mission schools, including St. Charles' College.",
      },
      {
        year: "1983",
        text: "After years of relentless advocacy by the Catholic Church, proprietorship was officially restored to the Onitsha Archdiocese — rekindling the school's founding mission.",
      },
    ],
  },
  {
    period: "1986 – 2010",
    era: "Dual Secondary School Era",
    color: "bg-gradient-red",
    events: [
      {
        year: "1986",
        text: "The teacher training programme is phased out in Anambra State. St. Charles' College transitions into a conventional Secondary School.",
      },
      {
        year: "1986",
        text: "A Special Science School arm is also established, running alongside the conventional school under one management — nurturing both humanities and STEM talents.",
      },
      {
        year: "2009",
        text: "Rev Fr Vitus Mbamalu becomes the pioneer Manager/Principal of the unified management era, setting a new administrative direction for the college.",
      },
    ],
  },
  {
    period: "2010 – Present",
    era: "Unified Secondary School Era",
    color: "bg-gradient-gold",
    events: [
      {
        year: "2010",
        text: "Both the conventional and science school arms are merged into a single, unified secondary school — St. Charles' College as it exists today.",
      },
      {
        year: "2017",
        text: "Students win the Wole Soyinka International Cultural Exchange Project (WSICE), 1st prize — a testament to the school's cultural and intellectual excellence.",
      },
      {
        year: "2019",
        text: "Win the Anambra State Schools Business Plan Competition (1st place) and the Governor's Debate Championship (3rd place).",
      },
      {
        year: "2025",
        text: "Record a 98% WAEC pass rate, with 45 students scoring straight A grades. Consistently ranked among the top schools in Anambra State.",
      },
    ],
  },
]

const principals = [
  {
    name: "Rev Fr Richard Daly (CSSP)",
    period: "1928–1932",
    role: "Pioneer Principal",
  },
  {
    name: "Rev Fr Patrick Doyle (CSSP)",
    period: "1932–1936",
    role: "Principal",
  },
  {
    name: "Rev Fr Michael Flanagan (CSSP)",
    period: "1937–1938",
    role: "Principal",
  },
  {
    name: "Rev Bro Fridolin",
    period: "1938–1940",
    role: "Principal (Franciscan Brothers)",
  },
  {
    name: "Sir Frederick N. Okafor",
    period: "1970–1972",
    role: "Principal (Post-Civil War)",
  },
  { name: "Sir B.I.A. Okafor", period: "1976–1984", role: "Principal" },
  {
    name: "Chief Augustine F. Ikemelu",
    period: "1985–1986",
    role: "Last Principal, TCC Era",
  },
  {
    name: "Rev Fr Vitus Mbamalu",
    period: "2009–2017",
    role: "Pioneer Manager/Principal",
  },
  {
    name: "Rev Fr Emmanuel Emenu",
    period: "2017–Present",
    role: "Manager/Principal",
  },
]

const values = [
  {
    icon: BookOpen,
    title: "Academic Excellence",
    desc: "Rigorous, broad-based curriculum that prepares students for WAEC, NECO, JAMB and university life — consistently producing top performers in Anambra State.",
    color: "bg-primary",
  },
  {
    icon: Heart,
    title: "Spiritual Growth",
    desc: "Rooted in Catholic tradition and dedicated to St. Charles Borromeo, the college nurtures faith, moral integrity, and a deep sense of purpose in every student.",
    color: "bg-secondary",
  },
  {
    icon: Users,
    title: "Leadership Formation",
    desc: "Beyond academics, SCC builds confident, responsible leaders — men who will serve with humility and lead with wisdom in every sphere of life.",
    color: "bg-primary",
  },
  {
    icon: Award,
    title: "Discipline & Order",
    desc: "A culture of respect, punctuality, and personal accountability that has defined Charleans for nearly a century and remains our most recognisable hallmark.",
    color: "bg-secondary",
  },
]

const anthemLines = [
  "A song for SCC, Great SCC,",
  "Varsity College, Great, moulder of men;",
  "Hail! Fond memories, hail, all hail St. Charles,",
  "Flowering Light ever bright and shining.",
  "",
  "May your fountain forever spring and flow,",
  "That you and yours may flourish evermore.",
  "",
  "Hallowed be the Father, Lord of Heaven",
  "Blessed be the Holy Charles, Our patron Saint;",
  "Praise be great Heerey of famed memory,",
  "Salute, masters and mates, gone and living,",
  "",
  "May your fountain forever spring and flow,",
  "That you and yours may flourish evermore.",
]

export default function AboutClient() {
  const heroRef = useRef(null)
  const historyRef = useRef(null)
  const missionRef = useRef(null)
  const valuesRef = useRef(null)
  const adminRef = useRef(null)
  const anthemRef = useRef(null)

  const historyInView = useInView(historyRef, { once: true, margin: "-80px" })
  const missionInView = useInView(missionRef, { once: true, margin: "-80px" })
  const valuesInView = useInView(valuesRef, { once: true, margin: "-80px" })
  const adminInView = useInView(adminRef, { once: true, margin: "-80px" })
  const anthemInView = useInView(anthemRef, { once: true, margin: "-80px" })

  return (
    <>
      {/* Hero */}
      <section
        ref={heroRef}
        className="relative flex min-h-[60vh] items-end overflow-hidden pt-24 pb-16 bg-gradient-dark"
      >
        <div className="absolute inset-0 opacity-25">
          <Image
            src="/assets/priest_students.jpg"
            alt="St. Charles' College"
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
        <div className="absolute top-1/3 right-1/4 h-64 w-64 animate-float rounded-full bg-primary/15 blur-[100px]" />

        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-6 bg-primary-foreground/40" />
              <span className="font-mono-custom text-[11px] tracking-[0.2em] text-primary-foreground/50 uppercase">
                Est. 1928
              </span>
            </div>
            <h1 className="font-display text-6xl leading-[0.95] font-bold text-primary-foreground italic md:text-8xl">
              Our Story,
              <br />
              <span className="font-heading font-semibold text-primary-foreground/50 not-italic">
                Our Legacy
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/55">
              Nearly a century of shaping Nigeria&apos;s finest minds. Discover
              the history, mission, and values that define the Varsity on the
              Niger.
            </p>
          </motion.div>
        </div>
      </section>

      {/* History */}
      <section id="history" ref={historyRef} className="bg-background py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={historyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="h-px w-6 bg-secondary" />
              <span className="font-mono-custom text-[11px] tracking-[0.2em] text-secondary uppercase">
                Our History
              </span>
              <span className="h-px w-6 bg-secondary" />
            </div>
            <h2 className="font-display text-4xl font-bold text-foreground italic md:text-6xl">
              Three Eras of{" "}
              <span className="text-gradient-brand font-heading font-semibold not-italic">
                Excellence
              </span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              From a teacher training institution to one of Nigeria&apos;s
              finest secondary schools — the journey of St. Charles&apos;
              College spans nearly 100 years.
            </p>
          </motion.div>

          <div className="space-y-16">
            {timelineEras.map((era, eraIdx) => (
              <motion.div
                key={era.era}
                initial={{ opacity: 0, y: 30 }}
                animate={historyInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: eraIdx * 0.15 }}
              >
                <div className="mb-6 flex items-center gap-4">
                  <div
                    className={`rounded-2xl px-5 py-2.5 text-primary-foreground ${era.color}`}
                  >
                    <div className="font-mono-custom text-[10px] tracking-widest uppercase opacity-70">
                      {era.period}
                    </div>
                    <div className="font-heading font-semibold">{era.era}</div>
                  </div>
                  <div className="h-px flex-1 bg-border" />
                </div>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {era.events.map((ev, i) => (
                    <div
                      key={i}
                      className="rounded-2xl border border-border bg-card p-5 transition-all hover:border-primary/25 hover:shadow-card"
                    >
                      <div className="mb-2 font-mono-custom text-sm font-bold text-primary">
                        {ev.year}
                      </div>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {ev.text}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section
        id="mission"
        ref={missionRef}
        className="relative overflow-hidden bg-muted/40 py-24"
      >
        <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-accent/40 blur-[150px]" />
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={missionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="h-px w-6 bg-secondary" />
              <span className="font-mono-custom text-[11px] tracking-[0.2em] text-secondary uppercase">
                Mission & Vision
              </span>
              <span className="h-px w-6 bg-secondary" />
            </div>
            <h2 className="font-display text-4xl font-bold text-foreground italic md:text-6xl">
              Why We{" "}
              <span className="text-gradient-brand font-heading font-semibold not-italic">
                Exist
              </span>
            </h2>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={missionInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="rounded-3xl border border-border bg-card p-8 shadow-card"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl glow-green bg-gradient-green">
                <span className="font-display text-xl font-bold text-primary-foreground italic">
                  M
                </span>
              </div>
              <h3 className="mb-3 font-heading text-xl font-bold text-foreground">
                Our Mission
              </h3>
              <p className="leading-relaxed text-muted-foreground">
                To provide holistic, value-based education rooted in Catholic
                tradition. We are committed to nurturing intellectual
                excellence, moral integrity, spiritual growth, and leadership in
                young minds — producing graduates who are well-equipped for
                university, for careers, and for life.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={missionInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="rounded-3xl border border-border bg-card p-8 shadow-card"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl glow-red bg-gradient-red">
                <span className="font-display text-xl font-bold text-primary-foreground italic">
                  V
                </span>
              </div>
              <h3 className="mb-3 font-heading text-xl font-bold text-foreground">
                Our Vision
              </h3>
              <p className="leading-relaxed text-muted-foreground">
                To be a beacon of academic excellence and moral leadership,
                raising generations of young people who are intellectually
                sound, spiritually mature, and socially responsible. We envision
                a future shaped by students who lead with wisdom, serve with
                humility, and uphold the values of truth and justice.
              </p>
            </motion.div>
          </div>

          {/* Motto & Core Principles */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={missionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative mt-8 overflow-hidden rounded-3xl p-10 text-primary-foreground bg-gradient-dark"
          >
            <div className="absolute top-0 right-0 h-48 w-48 rounded-full bg-primary/10 blur-[80px]" />
            <div className="relative z-10 text-center">
              <Quote
                size={32}
                className="mx-auto mb-4 text-primary-foreground/20"
              />
              <div className="font-display text-4xl font-bold text-primary-foreground italic md:text-5xl">
                Floreat in Aeternum
              </div>
              <div className="mt-2 font-mono-custom text-sm tracking-[0.3em] text-primary-foreground/40 uppercase">
                Flourishing Forever — The School Motto
              </div>
              <div className="mx-auto mt-6 max-w-xl leading-relaxed text-primary-foreground/50">
                Our motto encapsulates everything we stand for: that the spirit
                of excellence kindled here at St. Charles&apos; College will
                flourish not just in school, but forever — in every Charlean,
                everywhere.
              </div>
            </div>
            <div className="relative z-10 mt-8 grid grid-cols-3 gap-4 border-t border-primary-foreground/10 pt-8">
              {["Knowledge", "Discipline", "Leadership"].map((v) => (
                <div key={v} className="text-center">
                  <div className="font-heading text-lg font-bold text-primary-foreground">
                    {v}
                  </div>
                  <div className="mt-1 font-mono-custom text-[10px] tracking-widest text-primary-foreground/30 uppercase">
                    Core Pillar
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section id="values" ref={valuesRef} className="bg-background py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="h-px w-6 bg-secondary" />
              <span className="font-mono-custom text-[11px] tracking-[0.2em] text-secondary uppercase">
                What We Stand For
              </span>
              <span className="h-px w-6 bg-secondary" />
            </div>
            <h2 className="font-display text-4xl font-bold text-foreground italic md:text-6xl">
              Our Core{" "}
              <span className="text-gradient-brand font-heading font-semibold not-italic">
                Values
              </span>
            </h2>
          </motion.div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 24 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group rounded-3xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/25 hover:shadow-elevated"
              >
                <div
                  className={`mb-4 flex h-12 w-12 items-center justify-center rounded-2xl ${v.color}`}
                >
                  <v.icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <h3 className="mb-3 font-heading font-bold text-foreground">
                  {v.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {v.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Administration */}
      <section id="administration" ref={adminRef} className="bg-muted/40 py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={adminInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="h-px w-6 bg-secondary" />
              <span className="font-mono-custom text-[11px] tracking-[0.2em] text-secondary uppercase">
                Leadership
              </span>
              <span className="h-px w-6 bg-secondary" />
            </div>
            <h2 className="font-display text-4xl font-bold text-foreground italic md:text-6xl">
              Past{" "}
              <span className="text-gradient-brand font-heading font-semibold not-italic">
                Principals
              </span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              The visionary leaders who shaped St. Charles&apos; College across
              nearly a century of educational service.
            </p>
          </motion.div>

          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {principals.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 20 }}
                animate={adminInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 transition-all hover:border-primary/25 hover:shadow-card"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl font-display text-sm font-bold text-primary-foreground italic bg-gradient-green">
                  {p.name
                    .split(" ")
                    .find(
                      (w) =>
                        w.length > 2 &&
                        !["Rev", "Fr", "Sir", "Bro", "Chief"].includes(w)
                    )?.[0] ?? p.name[0]}
                </div>
                <div>
                  <div className="font-heading text-sm font-semibold text-foreground">
                    {p.name}
                  </div>
                  <div className="mt-0.5 font-mono-custom text-[10px] tracking-wide text-primary">
                    {p.period}
                  </div>
                  <div className="mt-0.5 text-xs text-muted-foreground">
                    {p.role}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Current leadership highlight */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={adminInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8 rounded-3xl border border-primary/20 bg-accent p-8 text-center"
          >
            <div className="mb-2 font-mono-custom text-[10px] tracking-widest text-accent-foreground/60 uppercase">
              Current Leadership
            </div>
            <h3 className="font-heading text-2xl font-bold text-accent-foreground">
              Rev Fr Emmanuel Emenu
            </h3>
            <p className="mt-2 text-accent-foreground/70">
              Manager / Principal · 2017 – Present
            </p>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-accent-foreground/60">
              Under his leadership, St. Charles&apos; College has continued to
              uphold the highest standards of academic excellence and moral
              formation, achieving numerous regional and national distinctions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* School Anthem */}
      <section
        id="anthem"
        ref={anthemRef}
        className="relative overflow-hidden py-24 text-primary-foreground bg-gradient-dark"
      >
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(hsl(0 0% 100%/.2) 1px,transparent 1px),linear-gradient(90deg,hsl(0 0% 100%/.2) 1px,transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute top-1/4 right-1/4 h-64 w-64 animate-pulse-glow rounded-full bg-primary/10 blur-[100px]" />
        <div className="absolute bottom-1/4 left-1/4 h-48 w-48 animate-float rounded-full bg-secondary/8 blur-[80px]" />

        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={anthemInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="h-px w-6 bg-primary-foreground/30" />
              <span className="font-mono-custom text-[11px] tracking-[0.2em] text-primary-foreground/40 uppercase">
                School Anthem
              </span>
              <span className="h-px w-6 bg-primary-foreground/30" />
            </div>
            <h2 className="font-display text-4xl font-bold text-primary-foreground italic md:text-6xl">
              Song of{" "}
              <span className="text-gradient-gold font-heading font-semibold not-italic">
                St. Charles
              </span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-primary-foreground/45">
              A song of pride, memory, and eternal legacy — sung by Charleans
              across generations.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={anthemInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mx-auto max-w-2xl rounded-3xl border border-primary-foreground/10 bg-primary-foreground/5 p-10 backdrop-blur-sm"
          >
            <Quote size={28} className="mb-6 text-primary-foreground/20" />
            <div className="space-y-1">
              {anthemLines.map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={anthemInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.05 }}
                >
                  {line === "" ? (
                    <div className="h-4" />
                  ) : (
                    <p className="font-display text-lg text-primary-foreground/80 italic md:text-xl">
                      {line}
                    </p>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Notable Alumni */}
      <section className="bg-background py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-8 flex items-center justify-center gap-3">
            <span className="h-px w-6 bg-secondary" />
            <span className="font-mono-custom text-[11px] tracking-[0.2em] text-secondary uppercase">
              Alumni
            </span>
            <span className="h-px w-6 bg-secondary" />
          </div>
          <h2 className="mb-4 font-display text-4xl font-bold text-foreground italic md:text-5xl">
            Our{" "}
            <span className="text-gradient-brand font-heading font-semibold not-italic">
              Distinguished Alumni
            </span>
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-muted-foreground">
            St. Charles&apos; College alumni have risen to the highest positions
            across every field — a testament to the power of a Charlean
            education.
          </p>
          <div className="grid gap-3 text-left sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                field: "Law & Judiciary",
                desc: "High court judges, senior advocates, and commissioners for justice across Nigeria.",
              },
              {
                field: "Politics & Government",
                desc: "State commissioners, legislators, and senior civil servants shaping Nigerian policy.",
              },
              {
                field: "The Church",
                desc: "Priests, deacons, and men of faith continuing the college's Catholic tradition.",
              },
              {
                field: "Academia & Medicine",
                desc: "University professors, medical doctors, and research scientists at home and abroad.",
              },
              {
                field: "Engineering & Tech",
                desc: "Engineers, architects, and technology professionals building modern Nigeria.",
              },
              {
                field: "Business & Finance",
                desc: "CEOs, bankers, and entrepreneurs leading Nigeria's economic development.",
              },
              {
                field: "Military & Security",
                desc: "Officers who have served Nigeria with honour and distinction.",
              },
              {
                field: "International Affairs",
                desc: "Charleans in the diaspora and international organisations making global impact.",
              },
            ].map((a, i) => (
              <div
                key={a.field}
                className="rounded-2xl border border-border bg-card p-5 transition-all hover:border-primary/25 hover:shadow-card"
              >
                <div className="mb-2 font-heading text-sm font-bold text-foreground">
                  {a.field}
                </div>
                <p className="text-xs leading-relaxed text-muted-foreground">
                  {a.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
