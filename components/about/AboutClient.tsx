"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  BookOpen,
  Users,
  Heart,
  Award,
  ArrowRight,
  Quote,
  Star,
} from "lucide-react"

const timelineEras = [
  {
    period: "1928 – 1986",
    era: "Teacher Training College Era",
    color: "bg-gradient-green",
    events: [
      {
        year: "1928",
        text: "Founded by His Grace Most Rev. Dr. Charles Heerey, CSSP, then Archbishop of Onitsha Archdiocese, as a Teacher Training College for men. Named after St. Charles Borromeo, the great 16th-century reformer and Archbishop of Milan.",
      },
      {
        year: "1938",
        text: "Administration transferred from the Holy Ghost Fathers (CSSP) to the Franciscan Brothers, who continued the school's academic mission with renewed vigour.",
      },
      {
        year: "1960s",
        text: "The college becomes one of the premier teacher-training institutions in the Eastern Region of Nigeria, supplying qualified teachers to schools across what is today Southeast and parts of South-South Nigeria.",
      },
      {
        year: "1970",
        text: "Following the end of the Nigerian-Biafran War, the East Central State Government forcibly took over all mission schools, including St. Charles' College — a devastating blow to the Catholic Church's educational apostolate.",
      },
      {
        year: "1983",
        text: "After years of relentless advocacy by the Catholic Church, proprietorship was officially restored to the Onitsha Archdiocese — rekindling the school's founding mission and Catholic identity.",
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
        text: "The teacher training programme is phased out in Anambra State. St. Charles' College transitions into a conventional Secondary School, adapting to new educational demands while retaining its core values.",
      },
      {
        year: "1986",
        text: "A Special Science School arm is also established, running alongside the conventional school under one management — nurturing both humanities and STEM talents among Charleans.",
      },
      {
        year: "2009",
        text: "Rev Fr Vitus Mbamalu becomes the pioneer Manager/Principal of the unified management era, setting a new administrative direction for the college and laying groundwork for future excellence.",
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
        text: "Both the conventional and science school arms are merged into a single, unified secondary school — St. Charles' College as it exists today, stronger and more focused than ever.",
      },
      {
        year: "2017",
        text: "Students win the Wole Soyinka International Cultural Exchange Project (WSICE), 1st prize — a testament to the school's cultural and intellectual excellence on the national stage.",
      },
      {
        year: "2019",
        text: "Win the Anambra State Schools Business Plan Competition (1st place) and the Governor's Debate Championship (3rd place), demonstrating versatility across disciplines.",
      },
      {
        year: "2025",
        text: "Record a 98% WAEC pass rate, with 45 students scoring straight A grades. Consistently ranked among the top schools in Anambra State — a living testament to nearly a century of excellence.",
      },
    ],
  },
]

// img: path to photo in /assets/principals/ — leave null if no photo available
const principals = [
  {
    name: "Rev Bro Fridolin",
    period: "1938–1940",
    role: "Principal (Franciscan Brothers)",
    img: "/assets/rev_fridolin.png",
  },
  {
    name: "Sir Frederick N. Okafor",
    period: "1970–1972",
    role: "Principal (Post-Civil War)",
    img: null,
  },
  {
    name: "Sir B.I.A. Okafor",
    period: "1976–1984",
    role: "Principal",
    img: null,
  },
  {
    name: "Chief Augustine F. Ikemelu",
    period: "1985–1986",
    role: "Last Principal, TCC Era",
    img: null,
  },
  {
    name: "Rev Fr Vitus Mbamalu",
    period: "2009–2017",
    role: "Pioneer Manager/Principal (Unified Era)",
    img: "/assets/fr_mbamalu.png",
  },
  {
    name: "Rev Fr Dr Emmanuel Emenu",
    period: "2017–2024",
    role: "Manager/Principal",
    img: "/assets/fr_emenu.png",
  },
]

// Current leadership cards — update img paths to match your /assets/ filenames
const currentLeaders = [
  {
    name: "Most Rev. Valerian Okeke",
    role: "Proprietor / Archbishop of Onitsha",
    badge: "Proprietor",
    img: "/assets/bishop_valerian.png",
  },
  {
    name: "Rev. Fr. Gabriel Anochilionye",
    role: "Manager & Principal",
    badge: "Principal",
    img: "/assets/fr_gabriel.png",
  },
  {
    name: "Rev. Fr. Peter Nwansoh",
    role: "Deputy Manager & Chaplain",
    badge: "Deputy",
    img: "/assets/fr_peter.jpg",
  },
]

const values = [
  {
    icon: BookOpen,
    title: "Academic Excellence",
    desc: "Rigorous, broad-based curriculum that prepares students for WAEC, NECO, JAMB and university life — consistently producing top performers in Anambra State and beyond.",
    color: "bg-gradient-green",
  },
  {
    icon: Heart,
    title: "Spiritual Growth",
    desc: "Rooted in Catholic tradition and dedicated to St. Charles Borromeo, the college nurtures faith, moral integrity, and a deep sense of purpose in every student.",
    color: "bg-gradient-red",
  },
  {
    icon: Users,
    title: "Leadership Formation",
    desc: "Beyond academics, SCC builds confident, responsible leaders — men who will serve with humility and lead with wisdom in every sphere of life.",
    color: "bg-gradient-green",
  },
  {
    icon: Award,
    title: "Discipline & Order",
    desc: "A culture of respect, punctuality, and personal accountability that has defined Charleans for nearly a century and remains our most recognisable hallmark.",
    color: "bg-gradient-red",
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

/** Returns the best single initial for the avatar fallback */
function getInitial(name: string) {
  return (
    name
      .split(" ")
      .find(
        (w) =>
          w.length > 2 &&
          !["Rev", "Fr", "Sir", "Bro", "Chief", "Most"].includes(w)
      )?.[0] ?? name[0]
  )
}

export default function AboutClient() {
  const heroRef = useRef(null)
  const patronSaintRef = useRef(null)
  const founderRef = useRef(null)
  const historyRef = useRef(null)
  const missionRef = useRef(null)
  const valuesRef = useRef(null)
  const adminRef = useRef(null)
  const anthemRef = useRef(null)

  const patronSaintInView = useInView(patronSaintRef, {
    once: true,
    margin: "-80px",
  })
  const founderInView = useInView(founderRef, { once: true, margin: "-80px" })
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
        className="relative flex min-h-[65vh] items-end overflow-hidden pt-24 pb-20 bg-gradient-dark"
      >
        <div className="absolute inset-0 opacity-20">
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
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(hsl(0 0% 100%/.2) 1px,transparent 1px),linear-gradient(90deg,hsl(0 0% 100%/.2) 1px,transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
        <div className="absolute top-1/3 right-1/4 h-80 w-80 animate-float rounded-full bg-primary/12 blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/3 h-64 w-64 animate-float-slow rounded-full bg-secondary/10 blur-[100px]" />

        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-primary-foreground/50" />
              <span className="font-mono-custom text-[11px] tracking-[0.25em] text-primary-foreground/60 uppercase">
                Est. 1928 · Onitsha, Anambra
              </span>
            </div>
            <h1 className="font-display text-6xl leading-[0.95] font-bold text-balance text-primary-foreground italic md:text-[7rem]">
              Our Story,
              <br />
              <span className="font-heading font-semibold text-primary-foreground/55 not-italic">
                Our Legacy
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/60">
              Nearly a century of shaping Nigeria&apos;s finest minds. Discover
              the history, mission, and values that define the Varsity on the
              Niger.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Patron Saint Section */}
      <section
        id="patron-saint"
        ref={patronSaintRef}
        className="relative overflow-hidden bg-muted/40 py-32"
      >
        <div className="absolute top-0 right-0 h-[600px] w-[600px] rounded-full bg-accent/20 blur-[180px]" />
        <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-primary/10 blur-[140px]" />

        <div className="relative z-10 container mx-auto px-4">
          <div className="grid items-center gap-16 lg:grid-cols-[1fr_1.3fr]">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={patronSaintInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.9 }}
              className="relative"
            >
              <div className="group relative h-[680px] overflow-hidden rounded-3xl shadow-dramatic">
                <Image
                  src="/assets/st-charles.jpg"
                  alt="St. Charles Borromeo - Patron Saint of St. Charles' College"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width:1024px) 100vw, 45vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 via-transparent to-transparent opacity-40" />
              </div>
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -right-6 bottom-20 rounded-2xl p-5 text-primary-foreground glow-gold shadow-dramatic bg-gradient-gold md:right-10"
              >
                <div className="font-display text-2xl font-medium italic">
                  Feast: Nov 4
                </div>
                <div className="mt-1 font-mono-custom text-[9px] tracking-widest text-primary-foreground/70 uppercase">
                  Patron of Bishops & Catechists
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={patronSaintInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.15 }}
              className="lg:pl-6"
            >
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-8 bg-secondary" />
                <span className="font-mono-custom text-[11px] tracking-[0.25em] text-secondary uppercase">
                  Our Patron Saint
                </span>
              </div>
              <h2 className="mb-8 font-display text-5xl leading-[1.05] font-bold text-balance text-foreground italic md:text-6xl">
                St. Charles
                <br />
                <span className="text-gradient-gold font-heading font-semibold not-italic">
                  Borromeo
                </span>
              </h2>
              <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
                <p>
                  Born on October 2, 1538, in the castle of Arona on Lake
                  Maggiore, Italy, Charles Borromeo rose to become one of the
                  most influential figures of the Catholic Counter-Reformation.
                  Appointed cardinal and Archbishop of Milan at just 22 years
                  old, he dedicated his life to spiritual renewal, educational
                  reform, and pastoral care.
                </p>
                <p>
                  He was a tireless advocate for Catholic education, founding
                  seminaries and schools across his diocese. During the plague
                  of 1576, he personally cared for the sick and dying,
                  demonstrating extraordinary courage and compassion. His
                  commitment to learning and moral leadership made him a model
                  for bishops and educators worldwide.
                </p>
                <p>
                  Canonized in 1610, St. Charles Borromeo is the patron saint of
                  bishops, catechists, seminarians, and spiritual leaders. His
                  feast day is celebrated on November 4th.
                </p>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={patronSaintInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mt-10 rounded-2xl border border-border bg-card p-6"
              >
                <Quote size={24} className="mb-3 text-primary/40" />
                <p className="font-display text-xl text-foreground italic">
                  &ldquo;In the prayer of the heart, the soul speaks with God
                  from the depths of its own nothingness.&rdquo;
                </p>
                <div className="mt-3 font-mono-custom text-[10px] tracking-widest text-muted-foreground uppercase">
                  — St. Charles Borromeo
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={patronSaintInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="mt-6 grid grid-cols-3 gap-4"
              >
                {[
                  { label: "Patron of", value: "Bishops & Catechists" },
                  { label: "Feast Day", value: "November 4" },
                  { label: "Canonized", value: "1610" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-xl border border-border bg-card p-4 text-center"
                  >
                    <div className="font-heading text-xs font-bold text-foreground">
                      {item.value}
                    </div>
                    <div className="mt-1 font-mono-custom text-[9px] tracking-widest text-muted-foreground uppercase">
                      {item.label}
                    </div>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section
        id="founder"
        ref={founderRef}
        className="relative overflow-hidden bg-background py-32"
      >
        <div className="absolute top-1/4 left-0 h-96 w-96 rounded-full bg-primary/10 blur-[140px]" />
        <div className="bg-gold/10 absolute right-0 bottom-0 h-80 w-80 rounded-full blur-[120px]" />

        <div className="relative z-10 container mx-auto px-4">
          <div className="grid items-center gap-16 lg:grid-cols-[1.3fr_1fr]">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={founderInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.9 }}
              className="lg:pr-6"
            >
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-8 bg-primary" />
                <span className="font-mono-custom text-[11px] tracking-[0.25em] text-primary uppercase">
                  Our Founder
                </span>
              </div>
              <h2 className="mb-8 font-display text-5xl leading-[1.05] font-bold text-balance text-foreground italic md:text-6xl">
                Archbishop
                <br />
                <span className="text-gradient-brand font-heading font-semibold not-italic">
                  Charles Heerey
                </span>
              </h2>
              <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
                <p>
                  Born on November 29, 1890, in County Mayo, Ireland, Charles
                  Heerey joined the Congregation of the Holy Ghost Fathers
                  (Spiritans) and arrived in Nigeria in 1920. He began his
                  missionary work in Onitsha, where his deep humility, cultural
                  sensitivity, and devotion to the spiritual and social
                  development of the Igbo people would leave an indelible mark.
                </p>
                <p>
                  Appointed Archbishop of Onitsha on April 18, 1938, Heerey
                  became one of the most influential Catholic leaders in West
                  Africa. He championed the establishment of schools, hospitals,
                  and churches across the archdiocese, believing firmly that
                  education was the key to human flourishing.
                </p>
                <p>
                  In 1928, he founded St. Charles Training College — named after
                  his patron saint — as a teacher training institution for men.
                  This visionary act laid the foundation for what would become
                  one of Nigeria&apos;s most prestigious secondary schools,
                  producing generations of leaders, scholars, and men of faith.
                </p>
                <p>
                  Archbishop Heerey died on February 6, 1967, but his legacy
                  lives on in every Charlean who walks through the gates of the
                  college he founded. The school anthem itself honours him:
                  <em className="text-foreground">
                    {" "}
                    &ldquo;Praise be great Heerey of famed memory.&rdquo;
                  </em>
                </p>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={founderInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mt-10 grid grid-cols-3 gap-4"
              >
                {[
                  { label: "Born", value: "Nov 29, 1890" },
                  { label: "Archbishop", value: "1938 – 1967" },
                  { label: "Founded SCC", value: "1928" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-xl border border-border bg-card p-4 text-center"
                  >
                    <div className="font-heading text-xs font-bold text-foreground">
                      {item.value}
                    </div>
                    <div className="mt-1 font-mono-custom text-[9px] tracking-widest text-muted-foreground uppercase">
                      {item.label}
                    </div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={founderInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.15 }}
              className="relative"
            >
              <div className="group relative h-[640px] overflow-hidden rounded-3xl shadow-dramatic">
                <Image
                  src="/assets/heerey.png"
                  alt="Archbishop Charles Heerey - Founder of St. Charles' College"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width:1024px) 100vw, 45vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 via-transparent to-transparent opacity-40" />
              </div>
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-20 -left-6 rounded-2xl p-5 text-primary-foreground glow-green shadow-dramatic bg-gradient-green md:-left-10"
              >
                <div className="font-display text-2xl font-medium italic">
                  1928
                </div>
                <div className="mt-1 font-mono-custom text-[9px] tracking-widest text-primary-foreground/70 uppercase">
                  Year SCC Founded
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* History */}
      <section id="history" ref={historyRef} className="bg-muted/40 py-32">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={historyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-20 text-center"
          >
            <div className="mb-5 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-secondary" />
              <span className="font-mono-custom text-[11px] tracking-[0.25em] text-secondary uppercase">
                Our History
              </span>
              <span className="h-px w-8 bg-secondary" />
            </div>
            <h2 className="font-display text-4xl font-bold text-balance text-foreground italic md:text-6xl">
              Three Eras of{" "}
              <span className="text-gradient-brand font-heading font-semibold not-italic">
                Excellence
              </span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
              From a teacher training institution to one of Nigeria&apos;s
              finest secondary schools — the journey of St. Charles&apos;
              College spans nearly 100 years of resilience, faith, and
              distinction.
            </p>
          </motion.div>

          <div className="space-y-20">
            {timelineEras.map((era, eraIdx) => (
              <motion.div
                key={era.era}
                initial={{ opacity: 0, y: 30 }}
                animate={historyInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: eraIdx * 0.15 }}
              >
                <div className="mb-8 flex items-center gap-5">
                  <div
                    className={`rounded-2xl px-6 py-3 text-primary-foreground shadow-lg ${era.color}`}
                  >
                    <div className="font-mono-custom text-[10px] tracking-widest uppercase opacity-70">
                      {era.period}
                    </div>
                    <div className="font-heading text-lg font-semibold">
                      {era.era}
                    </div>
                  </div>
                  <div className="h-px flex-1 bg-border" />
                </div>
                <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                  {era.events.map((ev, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ y: -4 }}
                      className="relative overflow-hidden rounded-3xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-elevated"
                    >
                      <div className="absolute top-0 right-0 h-32 w-32 rounded-full bg-primary/5 blur-[60px]" />
                      <div className="relative z-10">
                        <div className="mb-3 font-mono-custom text-lg font-bold text-primary">
                          {ev.year}
                        </div>
                        <p className="text-sm leading-relaxed text-muted-foreground">
                          {ev.text}
                        </p>
                      </div>
                    </motion.div>
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
        className="relative overflow-hidden bg-background py-32"
      >
        <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-accent/30 blur-[150px]" />
        <div className="absolute bottom-0 left-1/4 h-80 w-80 rounded-full bg-primary/10 blur-[120px]" />
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={missionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-20 text-center"
          >
            <div className="mb-5 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-secondary" />
              <span className="font-mono-custom text-[11px] tracking-[0.25em] text-secondary uppercase">
                Mission & Vision
              </span>
              <span className="h-px w-8 bg-secondary" />
            </div>
            <h2 className="font-display text-4xl font-bold text-balance text-foreground italic md:text-6xl">
              Why We{" "}
              <span className="text-gradient-brand font-heading font-semibold not-italic">
                Exist
              </span>
            </h2>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={missionInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card p-10 shadow-card"
            >
              <div className="absolute top-0 right-0 h-48 w-48 rounded-full bg-primary/5 blur-[80px]" />
              <div className="relative z-10">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl glow-green transition-transform bg-gradient-green group-hover:scale-110">
                  <span className="font-display text-2xl font-bold text-primary-foreground italic">
                    M
                  </span>
                </div>
                <h3 className="mb-4 font-heading text-2xl font-bold text-foreground">
                  Our Mission
                </h3>
                <p className="leading-relaxed text-muted-foreground">
                  To provide holistic, value-based education rooted in Catholic
                  tradition. We are committed to nurturing intellectual
                  excellence, moral integrity, spiritual growth, and leadership
                  in young minds — producing graduates who are well-equipped for
                  university, for careers, and for life.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={missionInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card p-10 shadow-card"
            >
              <div className="absolute top-0 right-0 h-48 w-48 rounded-full bg-secondary/5 blur-[80px]" />
              <div className="relative z-10">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl glow-red transition-transform bg-gradient-red group-hover:scale-110">
                  <span className="font-display text-2xl font-bold text-primary-foreground italic">
                    V
                  </span>
                </div>
                <h3 className="mb-4 font-heading text-2xl font-bold text-foreground">
                  Our Vision
                </h3>
                <p className="leading-relaxed text-muted-foreground">
                  To be a beacon of academic excellence and moral leadership,
                  raising generations of young people who are intellectually
                  sound, spiritually mature, and socially responsible. We
                  envision a future shaped by students who lead with wisdom,
                  serve with humility, and uphold the values of truth and
                  justice.
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={missionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative mt-12 overflow-hidden rounded-3xl p-12 text-primary-foreground shadow-dramatic bg-gradient-dark md:p-16"
          >
            <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-primary/10 blur-[100px]" />
            <div className="absolute bottom-0 left-0 h-48 w-48 rounded-full bg-secondary/8 blur-[80px]" />
            <div className="relative z-10 text-center">
              <Quote
                size={36}
                className="mx-auto mb-5 text-primary-foreground/20"
              />
              <div className="font-display text-4xl font-bold text-primary-foreground italic md:text-6xl">
                Floreat in Aeternum
              </div>
              <div className="mt-3 font-mono-custom text-sm tracking-[0.3em] text-primary-foreground/50 uppercase">
                Flourishing Forever — The School Motto
              </div>
              <div className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-primary-foreground/55">
                Our motto encapsulates everything we stand for: that the spirit
                of excellence kindled here at St. Charles&apos; College will
                flourish not just in school, but forever — in every Charlean,
                everywhere.
              </div>
            </div>
            <div className="relative z-10 mt-10 grid grid-cols-3 gap-6 border-t border-primary-foreground/10 pt-10">
              {["Knowledge", "Discipline", "Leadership"].map((v) => (
                <div key={v} className="text-center">
                  <div className="font-heading text-xl font-bold text-primary-foreground">
                    {v}
                  </div>
                  <div className="mt-1.5 font-mono-custom text-[10px] tracking-widest text-primary-foreground/35 uppercase">
                    Core Pillar
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section id="values" ref={valuesRef} className="bg-muted/40 py-32">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-20 text-center"
          >
            <div className="mb-5 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-secondary" />
              <span className="font-mono-custom text-[11px] tracking-[0.25em] text-secondary uppercase">
                What We Stand For
              </span>
              <span className="h-px w-8 bg-secondary" />
            </div>
            <h2 className="font-display text-4xl font-bold text-balance text-foreground italic md:text-6xl">
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
                whileHover={{ y: -8 }}
                className="group relative overflow-hidden rounded-3xl border border-border bg-card p-8 transition-all hover:border-primary/30 hover:shadow-elevated"
              >
                <div className="absolute top-0 right-0 h-32 w-32 rounded-full bg-primary/5 blur-[60px]" />
                <div className="relative z-10">
                  <div
                    className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl ${v.color} transition-transform group-hover:scale-110`}
                  >
                    <v.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="mb-3 font-heading text-lg font-bold text-foreground">
                    {v.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {v.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Administration */}
      <section
        id="administration"
        ref={adminRef}
        className="bg-background py-32"
      >
        <div className="container mx-auto px-4">
          {/* ── Past Principals ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={adminInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-20 text-center"
          >
            <div className="mb-5 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-secondary" />
              <span className="font-mono-custom text-[11px] tracking-[0.25em] text-secondary uppercase">
                Leadership
              </span>
              <span className="h-px w-8 bg-secondary" />
            </div>
            <h2 className="font-display text-4xl font-bold text-balance text-foreground italic md:text-6xl">
              Past{" "}
              <span className="text-gradient-brand font-heading font-semibold not-italic">
                Principals
              </span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base text-muted-foreground">
              The visionary leaders who shaped St. Charles&apos; College across
              nearly a century of educational service.
            </p>
          </motion.div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {principals.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 20 }}
                animate={adminInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                whileHover={{ y: -4 }}
                className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 transition-all hover:border-primary/30 hover:shadow-elevated"
              >
                {/* Avatar — shows photo if available, falls back to initial */}
                <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-xl border border-border bg-muted">
                  {p.img && (
                    <Image
                      src={p.img}
                      alt={p.name}
                      fill
                      className="object-cover object-top"
                      sizes="56px"
                    />
                  )}
                </div>

                <div className="min-w-0">
                  <div className="font-heading text-sm leading-snug font-semibold text-foreground">
                    {p.name}
                  </div>
                  <div className="mt-1 font-mono-custom text-[10px] tracking-wide text-primary">
                    {p.period}
                  </div>
                  <div className="mt-0.5 text-xs text-muted-foreground">
                    {p.role}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* ── Current Leadership ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={adminInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-24"
          >
            {/* Section header */}
            <div className="mb-12 text-center">
              <div className="mb-4 flex items-center justify-center gap-3">
                <span className="h-px w-8 bg-secondary" />
                <span className="font-mono-custom text-[11px] tracking-[0.25em] text-secondary uppercase">
                  Meet Our Visionary Leaders
                </span>
                <span className="h-px w-8 bg-secondary" />
              </div>
              <h2 className="font-display text-4xl font-bold text-balance text-foreground italic md:text-6xl">
                Our{" "}
                <span className="text-gradient-brand font-heading font-semibold not-italic">
                  Leadership
                </span>
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-base text-muted-foreground">
                Meet the individuals whose dedication, leadership, and
                commitment to excellence continue to shape the future of St.
                Charles&apos; College Onitsha.
              </p>
            </div>

            {/* Leader cards */}
            <div className="flex flex-wrap justify-center gap-6">
              {currentLeaders.map((leader, i) => (
                <motion.div
                  key={leader.name}
                  initial={{ opacity: 0, y: 24 }}
                  animate={adminInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                  whileHover={{ y: -6 }}
                  className="group flex w-full flex-col items-center rounded-3xl border border-border bg-card p-7 text-center transition-all hover:border-primary/30 hover:shadow-elevated sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)]"
                >
                  {/* Photo */}
                  <div className="relative mb-5 h-40 w-32 overflow-hidden rounded-2xl border border-border bg-muted shadow-sm">
                    <Image
                      src={leader.img}
                      alt={leader.name}
                      fill
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      sizes="128px"
                    />
                    {/* Subtle gradient at base of image */}
                    <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>

                  {/* Name */}
                  <div className="font-heading text-sm leading-snug font-semibold text-primary">
                    {leader.name}
                  </div>

                  {/* Role */}
                  <div className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                    {leader.role}
                  </div>

                  {/* Badge */}
                  <span className="mt-4 inline-block rounded-lg bg-accent px-3 py-1 font-mono-custom text-[9px] tracking-widest text-accent-foreground uppercase">
                    {leader.badge}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* School Anthem */}
      <section
        id="anthem"
        ref={anthemRef}
        className="relative overflow-hidden py-32 text-primary-foreground bg-gradient-dark"
      >
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(hsl(0 0% 100%/.2) 1px,transparent 1px),linear-gradient(90deg,hsl(0 0% 100%/.2) 1px,transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute top-1/4 right-1/4 h-80 w-80 animate-pulse-glow rounded-full bg-primary/12 blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/4 h-64 w-64 animate-float rounded-full bg-secondary/10 blur-[100px]" />

        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={anthemInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-14 text-center"
          >
            <div className="mb-5 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-primary-foreground/30" />
              <span className="font-mono-custom text-[11px] tracking-[0.25em] text-primary-foreground/45 uppercase">
                School Anthem
              </span>
              <span className="h-px w-8 bg-primary-foreground/30" />
            </div>
            <h2 className="font-display text-4xl font-bold text-balance text-primary-foreground italic md:text-6xl">
              Song of{" "}
              <span className="text-gradient-gold font-heading font-semibold not-italic">
                the Charleans
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={anthemInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mx-auto max-w-3xl rounded-3xl p-12 text-center shadow-dramatic glass-dark md:p-16"
          >
            <div className="space-y-2 font-heading text-base leading-loose text-primary-foreground/75 md:text-lg">
              {anthemLines.map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  animate={anthemInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.35, delay: 0.4 + i * 0.04 }}
                  className={
                    line === ""
                      ? "h-5"
                      : line.toLowerCase().includes("floreat") ||
                          line.toLowerCase().includes("heerey") ||
                          line.toLowerCase().includes("charles")
                        ? "font-semibold text-primary-foreground"
                        : ""
                  }
                >
                  {line}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Alumni */}
      <section className="bg-muted/40 py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={adminInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="h-px w-6 bg-primary" />
              <span className="font-mono-custom text-[11px] tracking-[0.2em] text-primary uppercase">
                Distinguished Old Boys
              </span>
              <span className="h-px w-6 bg-primary" />
            </div>
            <h2 className="font-display text-4xl font-bold text-foreground italic md:text-6xl">
              Men Who{" "}
              <span className="text-gradient-brand font-heading font-semibold not-italic">
                Made History
              </span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              High court judges, senior advocates, bishops, professors,
              engineers, and statesmen — the Charlean legacy extends far beyond
              the campus walls.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={adminInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-6"
          >
            {[
              "Judges & Legal Icons",
              "Bishops & Clergy",
              "Professors & Academics",
              "Engineers & Technologists",
              "Statesmen & Leaders",
              "Medical Professionals",
            ].map((field, i) => (
              <motion.div
                key={field}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={adminInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + i * 0.08 }}
                whileHover={{ scale: 1.05, y: -4 }}
                className="rounded-2xl border border-border bg-card px-8 py-5 text-center shadow-card transition-all hover:border-primary/30 hover:shadow-elevated"
              >
                <Star className="text-gold mx-auto mb-2 h-5 w-5" />
                <div className="font-heading text-sm font-semibold text-foreground">
                  {field}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-background py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={adminInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-3xl p-12 text-primary-foreground shadow-dramatic bg-gradient-dark md:p-16"
          >
            <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-primary/10 blur-[100px]" />
            <div className="absolute bottom-0 left-0 h-48 w-48 rounded-full bg-secondary/8 blur-[80px]" />
            <div className="relative z-10 mx-auto max-w-3xl text-center">
              <h2 className="mb-5 font-display text-3xl font-bold text-primary-foreground italic md:text-5xl">
                Be Part of Our Story
              </h2>
              <p className="mb-8 text-base leading-relaxed text-primary-foreground/55">
                Whether you are a prospective student, a proud old boy, or a
                well-wisher — the Charlean story continues with you. Join us in
                carrying forward the torch of excellence, discipline, and faith.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/admissions"
                  className="group inline-flex items-center gap-2 rounded-2xl bg-secondary px-9 py-4.5 font-heading font-semibold text-secondary-foreground transition-all hover:scale-105 hover:shadow-lg"
                >
                  Apply for Admission
                  <ArrowRight
                    size={17}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>
                <Link
                  href="/contact"
                  className="rounded-2xl px-9 py-4.5 font-heading font-medium text-primary-foreground/80 glass transition-all hover:scale-105 hover:text-primary-foreground"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
