"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  FlaskConical,
  Calculator,
  Globe,
  Laptop,
  BookText,
  Music,
  Trophy,
  ArrowRight,
  Users,
  Dumbbell,
  Code,
  Microscope,
} from "lucide-react"

const subjects = [
  {
    icon: FlaskConical,
    name: "Natural Sciences",
    color: "bg-gradient-green",
    courses: ["Physics", "Chemistry", "Biology", "Agricultural Science"],
    desc: "Our well-equipped laboratories allow students to explore scientific principles through hands-on experiments, building both knowledge and critical thinking skills.",
  },
  {
    icon: Calculator,
    name: "Mathematics",
    color: "bg-gradient-red",
    courses: ["Mathematics", "Further Mathematics", "Statistics"],
    desc: "A rigorous mathematics programme that challenges students to think analytically and problem-solve — essential for university success in any field.",
  },
  {
    icon: Globe,
    name: "Social Sciences & Humanities",
    color: "bg-gradient-green",
    courses: [
      "History",
      "Government",
      "Economics",
      "Christian Religious Studies",
      "Geography",
    ],
    desc: "Developing well-rounded thinkers who understand society, governance, culture and history — the foundations of effective leadership.",
  },
  {
    icon: Laptop,
    name: "Technology & ICT",
    color: "bg-gradient-red",
    courses: [
      "Computer Science",
      "Information Technology",
      "Robotics & Coding",
    ],
    desc: "Equipped with a 60-workstation ICT laboratory and a dedicated robotics programme, we prepare students for the digital economy of tomorrow.",
  },
  {
    icon: BookText,
    name: "Languages & Literature",
    color: "bg-gradient-green",
    courses: [
      "English Language",
      "Literature in English",
      "Igbo Language",
      "French",
      "Chinese (Mandarin)",
    ],
    desc: "Building strong communicators in multiple languages — including a pioneering Chinese (Mandarin) programme for global competitiveness.",
  },
  {
    icon: Music,
    name: "Arts & Culture",
    color: "bg-gradient-red",
    courses: ["Fine Art", "Music", "Drama & Theatre Arts", "Technical Drawing"],
    desc: "Cultivating creativity and cultural appreciation through fine art, music, drama, and technical design courses.",
  },
]

const exams = [
  {
    name: "WAEC",
    full: "West African Examinations Council",
    result: "98% Pass Rate (2025)",
    desc: "Our students consistently achieve outstanding results, with the class of 2025 recording a 98% pass rate and 45 students scoring straight A grades.",
    color: "bg-gradient-green",
  },
  {
    name: "NECO",
    full: "National Examinations Council",
    result: "Consistently High Performance",
    desc: "SCC students excel in NECO examinations, receiving dedicated preparation through structured revision, past question practice, and teacher mentoring.",
    color: "bg-gradient-red",
  },
  {
    name: "JAMB",
    full: "Joint Admissions and Matriculation Board",
    result: "High University Placement",
    desc: "Our UTME preparation programme ensures students are well-equipped for university entrance examinations across all faculties and fields of study.",
    color: "bg-gradient-gold",
  },
]

const activities = [
  {
    icon: Code,
    name: "Robotics & Coding Club",
    desc: "Students learn coding, engineering and critical thinking by building functional robots and digital solutions.",
  },
  {
    icon: Microscope,
    name: "Science Club",
    desc: "Competitive science quizzes and laboratory exploration to build academic confidence and intellectual curiosity.",
  },
  {
    icon: Trophy,
    name: "Debate & Quiz Society",
    desc: "Award-winning debaters. Winners of multiple regional and state championships, including the Governor's Debate 2019.",
  },
  {
    icon: Users,
    name: "Cultural & Drama Society",
    desc: "Students showcase literary and theatrical talent. Winners of the Wole Soyinka International Cultural Exchange 1st Prize, 2017.",
  },
  {
    icon: Dumbbell,
    name: "Sports & Athletics",
    desc: "Football, track and field, athletics, and inter-house sports competitions develop physical fitness, teamwork and competitive spirit.",
  },
  {
    icon: Globe,
    name: "Languages Club",
    desc: "French, Chinese Mandarin, and Igbo language clubs fostering global communication skills and cultural appreciation.",
  },
]

export default function AcademicsClient() {
  const heroRef = useRef(null)
  const curriculumRef = useRef(null)
  const examsRef = useRef(null)
  const activitiesRef = useRef(null)

  const curriculumInView = useInView(curriculumRef, {
    once: true,
    margin: "-80px",
  })
  const examsInView = useInView(examsRef, { once: true, margin: "-80px" })
  const activitiesInView = useInView(activitiesRef, {
    once: true,
    margin: "-80px",
  })

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[55vh] items-end overflow-hidden pt-24 pb-16 bg-gradient-dark">
        <div className="absolute inset-0 opacity-25">
          <Image
            src="/assets/students_in_classroom.jpg"
            alt="Academics"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-hero" />
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
                WAEC · NECO · JAMB
              </span>
            </div>
            <h1 className="font-display text-6xl leading-[0.95] font-bold text-primary-foreground italic md:text-8xl">
              Academic
              <br />
              <span className="font-heading font-semibold text-primary-foreground/50 not-italic">
                Excellence
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/55">
              A rigorous, broad-based curriculum designed to stretch every
              student to their potential — and beyond.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Curriculum */}
      <section
        id="curriculum"
        ref={curriculumRef}
        className="bg-background py-32"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={curriculumInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-20 text-center"
          >
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="h-px w-6 bg-secondary" />
              <span className="font-mono-custom text-[11px] tracking-[0.2em] text-secondary uppercase">
                Curriculum
              </span>
              <span className="h-px w-6 bg-secondary" />
            </div>
            <h2 className="font-display text-4xl font-bold text-balance text-foreground italic md:text-6xl">
              What We{" "}
              <span className="text-gradient-brand font-heading font-semibold not-italic">
                Teach
              </span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Six subject departments covering every field of human knowledge —
              from natural sciences to the arts, from technology to languages.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {subjects.map((s, i) => (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, y: 24 }}
                animate={curriculumInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative overflow-hidden rounded-3xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-2 hover:border-primary/25 hover:shadow-elevated"
              >
                <div className="absolute top-0 right-0 h-32 w-32 rounded-full bg-primary/5 blur-[50px] transition-colors group-hover:bg-primary/10" />
                <div className="relative z-10">
                  <div
                    className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl ${s.color} transition-transform duration-300 group-hover:scale-110`}
                  >
                    <s.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="mb-3 font-heading text-xl font-bold text-foreground">
                    {s.name}
                  </h3>
                  <p className="mb-5 text-sm leading-relaxed text-muted-foreground">
                    {s.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {s.courses.map((c) => (
                      <span
                        key={c}
                        className="rounded-full border border-border px-3 py-1 text-[11px] font-medium text-muted-foreground"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image break */}
      <div className="relative h-80 overflow-hidden">
        <Image
          src="/assets/students_in_classroom.jpg"
          alt="Students_in_Classroom"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-background/20 to-background/60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center font-display text-3xl leading-relaxed text-balance text-primary-foreground/80 italic md:text-5xl">
            &ldquo;Education is the most powerful weapon
            <br />
            you can use to change the world.&rdquo;
          </div>
        </div>
      </div>

      {/* Exams */}
      <section id="exams" ref={examsRef} className="bg-muted/40 py-32">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={examsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-20 text-center"
          >
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="h-px w-6 bg-secondary" />
              <span className="font-mono-custom text-[11px] tracking-[0.2em] text-secondary uppercase">
                Examinations
              </span>
              <span className="h-px w-6 bg-secondary" />
            </div>
            <h2 className="font-display text-4xl font-bold text-balance text-foreground italic md:text-6xl">
              Exam{" "}
              <span className="text-gradient-brand font-heading font-semibold not-italic">
                Preparation
              </span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Structured, intensive preparation for every major national
              examination — producing results that speak for themselves.
            </p>
          </motion.div>
          <div className="grid gap-8 md:grid-cols-3">
            {exams.map((e, i) => (
              <motion.div
                key={e.name}
                initial={{ opacity: 0, y: 24 }}
                animate={examsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="group relative overflow-hidden rounded-3xl border border-border bg-card p-9 transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated"
              >
                <div className="absolute top-0 right-0 h-24 w-24 rounded-full bg-primary/5 blur-[40px] transition-colors group-hover:bg-primary/10" />
                <div className="relative z-10">
                  <div
                    className={`mb-5 inline-flex items-center justify-center rounded-2xl px-6 py-3 ${e.color} text-primary-foreground transition-transform group-hover:scale-105`}
                  >
                    <span className="font-heading text-2xl font-bold">
                      {e.name}
                    </span>
                  </div>
                  <div className="mb-2 font-mono-custom text-[10px] tracking-widest text-muted-foreground uppercase">
                    {e.full}
                  </div>
                  <div className="mb-4 font-heading text-sm font-bold text-primary">
                    {e.result}
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {e.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Activities */}
      <section
        id="activities"
        ref={activitiesRef}
        className="bg-background py-32"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={activitiesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-20 text-center"
          >
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="h-px w-6 bg-secondary" />
              <span className="font-mono-custom text-[11px] tracking-[0.2em] text-secondary uppercase">
                Clubs & Activities
              </span>
              <span className="h-px w-6 bg-secondary" />
            </div>
            <h2 className="font-display text-4xl font-bold text-balance text-foreground italic md:text-6xl">
              Beyond the{" "}
              <span className="text-gradient-brand font-heading font-semibold not-italic">
                Classroom
              </span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              We believe in developing the complete person — through sport,
              culture, technology, and service.
            </p>
          </motion.div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {activities.map((a, i) => (
              <motion.div
                key={a.name}
                initial={{ opacity: 0, y: 20 }}
                animate={activitiesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="group flex items-start gap-4 rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-elevated"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-accent transition-all duration-300 group-hover:scale-110 group-hover:text-primary-foreground group-hover:bg-gradient-green">
                  <a.icon className="h-6 w-6 text-primary transition-colors duration-300 group-hover:text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-foreground">
                    {a.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {a.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={activitiesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 flex items-center justify-center"
          >
            <Link
              href="/admissions"
              className="inline-flex items-center gap-2 rounded-2xl px-10 py-4 font-heading font-semibold text-secondary-foreground shadow-dramatic transition-all bg-gradient-red hover:scale-105 hover:shadow-elevated"
            >
              Apply to Join SCC <ArrowRight size={17} />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
