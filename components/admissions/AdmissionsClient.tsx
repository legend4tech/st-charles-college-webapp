"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { ClipboardList, UserCheck, CreditCard, GraduationCap, CheckCircle, ArrowRight, ExternalLink } from "lucide-react"

const steps = [
  {
    icon: ClipboardList, step: "01", title: "Complete Online Application",
    desc: "Visit our student portal and fill out the admission form with accurate personal and academic details. Upload required documents including primary school leaving certificate and birth certificate.",
    color: "bg-gradient-green",
  },
  {
    icon: UserCheck, step: "02", title: "Sit the Entrance Examination",
    desc: "Qualify candidates are invited to sit the entrance examination at the college campus in Onitsha. The exam covers English Language, Mathematics, and General Knowledge.",
    color: "bg-gradient-red",
  },
  {
    icon: CreditCard, step: "03", title: "Pay Fees & Register",
    desc: "Successful candidates receive an offer of admission. Complete the acceptance by paying the required school fees and completing registration formalities at the college office.",
    color: "bg-gradient-green",
  },
  {
    icon: GraduationCap, step: "04", title: "Welcome to St. Charles' College",
    desc: "Attend the orientation programme for new students. Collect your school uniform, timetable, and begin your journey as a proud Charlean — a member of the Varsity on the Niger.",
    color: "bg-gradient-red",
  },
]

const requirements = [
  "Completed primary school education (Primary 6)",
  "Primary School Leaving Certificate or equivalent",
  "Birth certificate or declaration of age",
  "Two recent passport-sized photographs",
  "Completed application form from the portal",
  "Parent/guardian identification document",
  "Previous school report cards (last two terms)",
  "Evidence of fee payment",
]

const faqs = [
  { q: "When do admissions open?", a: "Admissions for each academic session typically open between November and February. Check the school portal or contact the admissions office for the exact date for the current cycle." },
  { q: "Is St. Charles' College a boarding school?", a: "Yes, St. Charles' College is primarily a boys' boarding secondary school, offering full boarding facilities with structured supervision, meals, and dormitory accommodation." },
  { q: "What is the school's religion?", a: "St. Charles' College is a Catholic institution under the Onitsha Archdiocese. Students of all faiths are welcome, and Christian Religious Studies is part of the curriculum." },
  { q: "What is the medium of instruction?", a: "All subjects are taught in English, the official language of instruction. French, Igbo, and Mandarin Chinese are offered as additional language subjects." },
  { q: "How competitive is the entrance exam?", a: "The entrance examination is competitive. We recommend students prepare thoroughly in Mathematics, English Language, and General Knowledge. Preparatory materials may be obtained from the school office." },
  { q: "Can I check my result online?", a: "Yes. Students can check their academic results on the official student portal at scc.istudentng.com using their login credentials." },
]

export default function AdmissionsClient() {
  const stepsRef = useRef(null)
  const reqRef = useRef(null)
  const faqRef = useRef(null)

  const stepsInView = useInView(stepsRef, { once: true, margin: "-80px" })
  const reqInView = useInView(reqRef, { once: true, margin: "-80px" })
  const faqInView = useInView(faqRef, { once: true, margin: "-80px" })

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[55vh] items-end overflow-hidden bg-gradient-dark pb-16 pt-24">
        <div className="absolute inset-0 opacity-25">
          <Image src="/images/admissions.jpg" alt="Admissions" fill className="object-cover" sizes="100vw" priority />
        </div>
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute top-1/3 left-1/4 h-64 w-64 animate-float rounded-full bg-primary/15 blur-[100px]" />
        <div className="relative z-10 container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-6 bg-primary-foreground/40" />
              <span className="font-mono-custom text-[11px] tracking-[0.2em] text-primary-foreground/50 uppercase">Academic Session 2026/2027</span>
            </div>
            <h1 className="font-display text-6xl font-bold italic leading-[0.95] text-primary-foreground md:text-8xl">
              Begin Your<br />
              <span className="not-italic font-heading font-semibold text-primary-foreground/50">Journey Here</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-primary-foreground/55 leading-relaxed">
              Every great Charlean started here — with a single application. Join one of Nigeria's most prestigious secondary schools.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="https://scc.istudent.com.ng/admission/" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-2xl bg-secondary px-8 py-4 font-heading font-semibold text-secondary-foreground transition-all hover:scale-105 hover:opacity-90">
                Apply Online <ExternalLink size={16} />
              </Link>
              <a href="#steps" className="rounded-2xl px-8 py-4 font-heading font-medium text-primary-foreground/80 glass transition-all hover:text-primary-foreground hover:scale-105">
                How It Works
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Steps */}
      <section id="steps" ref={stepsRef} className="bg-background py-24">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={stepsInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="mb-16 text-center">
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="h-px w-6 bg-secondary" />
              <span className="font-mono-custom text-[11px] tracking-[0.2em] text-secondary uppercase">How to Apply</span>
              <span className="h-px w-6 bg-secondary" />
            </div>
            <h2 className="font-display text-4xl font-bold italic text-foreground md:text-6xl">
              The Admission <span className="not-italic font-heading font-semibold text-gradient-brand">Process</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Our admission process is straightforward, transparent, and merit-based. Four clear steps stand between you and becoming a Charlean.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2">
            {steps.map((s, i) => (
              <motion.div key={s.step} initial={{ opacity: 0, y: 24 }} animate={stepsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="group relative overflow-hidden rounded-3xl border border-border bg-card p-8 transition-all hover:border-primary/25 hover:shadow-elevated">
                <div className="absolute top-6 right-6 font-display text-7xl font-bold italic text-border/40 leading-none">{s.step}</div>
                <div className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl ${s.color} transition-all group-hover:scale-110`}>
                  <s.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="mb-3 font-heading text-xl font-bold text-foreground">{s.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0, y: 24 }} animate={stepsInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="https://scc.istudent.com.ng/admission/" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-2xl bg-secondary px-10 py-4 font-heading font-semibold text-secondary-foreground glow-red transition-all hover:scale-105 hover:opacity-90">
              Start Your Application <ArrowRight size={17} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Requirements */}
      <section ref={reqRef} className="bg-muted/40 py-24">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <motion.div initial={{ opacity: 0, x: -40 }} animate={reqInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8 }}>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-6 bg-secondary" />
                <span className="font-mono-custom text-[11px] tracking-[0.2em] text-secondary uppercase">Requirements</span>
              </div>
              <h2 className="mb-5 font-display text-4xl font-bold italic text-foreground md:text-5xl">
                What You <span className="not-italic font-heading font-semibold text-gradient-brand">Need</span>
              </h2>
              <p className="mb-8 leading-relaxed text-muted-foreground">
                To apply for admission into St. Charles' College, Onitsha, candidates must meet the following requirements and provide all necessary documentation.
              </p>
              <div className="space-y-3">
                {requirements.map((r, i) => (
                  <motion.div key={i} initial={{ opacity: 0, x: -15 }} animate={reqInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: i * 0.07 }}
                    className="flex items-center gap-3 rounded-xl border border-border bg-card p-3.5">
                    <CheckCircle size={17} className="shrink-0 text-primary" />
                    <span className="text-sm text-foreground">{r}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 40 }} animate={reqInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8, delay: 0.15 }}>
              <div className="relative h-[460px] overflow-hidden rounded-3xl shadow-elevated">
                <Image src="/images/admissions.jpg" alt="Students" fill className="object-cover" sizes="(max-width:1024px) 100vw, 50vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="rounded-2xl p-5 glass">
                    <div className="font-heading text-sm font-bold text-primary-foreground">Applications Now Open</div>
                    <div className="mt-1 text-xs text-primary-foreground/70">2026/2027 Academic Session — Limited spaces available</div>
                    <Link href="https://scc.istudent.com.ng/admission/" target="_blank" rel="noopener noreferrer"
                      className="mt-3 flex items-center gap-1.5 text-sm font-semibold text-primary-foreground hover:text-primary-foreground/80 transition-colors">
                      Apply now <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section ref={faqRef} className="bg-background py-24">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={faqInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="mb-16 text-center">
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="h-px w-6 bg-secondary" />
              <span className="font-mono-custom text-[11px] tracking-[0.2em] text-secondary uppercase">FAQs</span>
              <span className="h-px w-6 bg-secondary" />
            </div>
            <h2 className="font-display text-4xl font-bold italic text-foreground md:text-6xl">
              Common <span className="not-italic font-heading font-semibold text-gradient-brand">Questions</span>
            </h2>
          </motion.div>
          <div className="mx-auto max-w-3xl space-y-4">
            {faqs.map((f, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 16 }} animate={faqInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/25 hover:shadow-card">
                <div className="mb-2 font-heading font-semibold text-foreground">{f.q}</div>
                <p className="text-sm leading-relaxed text-muted-foreground">{f.a}</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">Still have questions? Contact the admissions office directly.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 font-heading font-semibold text-primary hover:gap-3 transition-all">
              Contact Us <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
