"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import Image from "next/image"
import {
  Calendar,
  ArrowRight,
  Award,
  TrendingUp,
  Megaphone,
  Users,
  BookOpen,
  Star,
} from "lucide-react"

const allNews = [
  {
    date: "November 2025",
    tag: "Facilities",
    icon: TrendingUp,
    featured: true,
    title:
      "New Legacy Building Commissioned to Mark 2025/2026 Academic Session",
    excerpt:
      "St. Charles' College commissioned a new legacy building, marking a significant infrastructure milestone as the college enters its second century of academic excellence.",
    body: "The commissioning of the new Legacy Building represents one of the most significant infrastructure developments at St. Charles' College in recent years. The project, completed in 2025, was celebrated by the school community including the alumni association. The building adds much-needed classroom and facility space to accommodate the growing student population. The commissioning ceremony was attended by school management, staff, students, and representatives from the Onitsha Archdiocese. The development underscores the college's commitment to providing world-class learning environments for its students.",
  },
  {
    date: "December 2025",
    tag: "Events",
    icon: Star,
    featured: false,
    title: "Archdiocesan Schools Competition: SCC Students Shine",
    excerpt:
      "St. Charles' College students delivered outstanding performances at the prestigious Onitsha Archdiocesan secondary schools competition, showcasing talent across academics, music, and sports.",
    body: "Students from St. Charles' College participated alongside peers from other reputable schools in the Onitsha Archdiocese at a major inter-schools competition. The college fielded strong teams across multiple categories including the orchestra and solo music competitions, as well as academic quizzes and sporting events. The performance further cemented SCC's reputation as one of the leading secondary schools in the Archdiocese.",
  },
  {
    date: "July 2025",
    tag: "Academics",
    icon: BookOpen,
    featured: false,
    title: "SS2 Students Begin Mandatory WAEC Prep Extension Classes",
    excerpt:
      "St. Charles' College launched mandatory extension classes for all SS2 students starting July 29, 2025, to begin early preparation for the 2026 WAEC examinations.",
    body: "The college administration announced that all SS2 students would commence mandatory extension classes as part of the school's proactive approach to WAEC preparation. The initiative, announced by the Principal, reflects the college's commitment to ensuring students are thoroughly prepared well in advance of their final examinations. The extension classes cover core WAEC subjects and form a crucial part of the school's academic calendar for the 2025/2026 session.",
  },
  {
    date: "December 2025",
    tag: "Achievement",
    icon: Award,
    featured: false,
    title:
      "St. Charles' College Celebrates Strong WAEC Performance for 2024/2025 Session",
    excerpt:
      "The college recorded impressive results in the 2025 WASSCE examinations, continuing its tradition of academic excellence as one of Anambra State's premier secondary schools.",
    body: "St. Charles' College celebrated the release of the 2025 WAEC results, with students performing strongly across core subjects including English Language, Mathematics, and the sciences. The college's consistent emphasis on early WAEC preparation — including the SS2 extension classes programme — has contributed to sustained academic performance. The school maintains its position as one of the notable secondary schools in Anambra State, second in age only to Dennis Memorial Grammar School (DMGS) in Onitsha.",
  },
  {
    date: "June 2025",
    tag: "Events",
    icon: Users,
    featured: false,
    title: "PTA Meeting Held: Parents and Teachers Strengthen Partnership",
    excerpt:
      "The school hosted its Parents-Teachers Association meeting on June 11, 2025, fostering collaboration between parents, teachers, and school management on student welfare and academic progress.",
    body: "The PTA meeting brought together parents, guardians, teaching staff, and school leadership to discuss the academic progress of students, infrastructure developments, and plans for the remainder of the 2024/2025 academic session. The meeting reinforced the strong partnership between the school and parents that has long been a hallmark of the St. Charles' College community. The school officially closed for the third term and 2024/2025 session on July 20, 2025.",
  },
  {
    date: "November 2025",
    tag: "Alumni",
    icon: Users,
    featured: false,
    title: "Old Boys Strengthen Bonds with SCC Through Ongoing Support",
    excerpt:
      "The St. Charles' College alumni community continues to play a vital role in the school's development, contributing to infrastructure projects and mentoring current students.",
    body: "The SCC Old Boys association has remained actively engaged with the school's growth and development. Alumni from various graduation decades have contributed to recent projects, including the new Legacy Building and other infrastructure improvements. The alumni association's involvement in school events and development initiatives exemplifies the enduring bond between past and present members of the Charlean community.",
  },
  {
    date: "2025/2026 Session",
    tag: "Academics",
    icon: BookOpen,
    featured: false,
    title: "Robotics and Chinese Language Programmes Continue to Thrive",
    excerpt:
      "Building on its innovative curriculum, SCC's robotics club and Mandarin Chinese language programme remain popular among students, setting it apart from peer institutions.",
    body: "St. Charles' College continues to distinguish itself through innovative programmes including its robotics club and Mandarin Chinese language instruction. These initiatives complement the school's strong foundation in core academic subjects and extracurricular activities such as inter-house sports, music, and quiz competitions. The college's forward-looking approach to education ensures that Charleans are prepared for opportunities in an increasingly interconnected world.",
  },
  {
    date: "February 2026",
    tag: "Events",
    icon: Megaphone,
    featured: false,
    title: "Entrance Forms Now Open for 2026/2027 Academic Year",
    excerpt:
      "St. Charles' College has announced that entrance forms for the 2026/2027 academic session are now on sale. Interested parents and guardians can obtain forms from the school's admissions portal.",
    body: "The college management officially opened the sale of entrance forms for the 2026/2027 academic year. Prospective students can apply through the official admissions portal at scc.istudent.com.ng/admission. The entrance examination will assess candidates in English Language, Mathematics, and General Knowledge. Successful candidates will be invited to sit the examination at the college campus in Onitsha. The college continues to attract strong interest from families seeking a reputable Catholic secondary school education in Anambra State.",
  },
]

const tags = [
  "All",
  "Achievement",
  "Facilities",
  "Sports",
  "Events",
  "Alumni",
  "Academics",
]

const tagColors: Record<string, string> = {
  Achievement: "bg-accent text-accent-foreground border-accent-foreground/20",
  Facilities: "bg-secondary/10 text-secondary border-secondary/20",
  Sports: "bg-primary/10 text-primary border-primary/20",
  Events: "bg-secondary/10 text-secondary border-secondary/20",
  Alumni: "bg-accent text-accent-foreground border-accent-foreground/20",
  Academics: "bg-primary/10 text-primary border-primary/20",
}

export default function NewsClient() {
  const [activeTag, setActiveTag] = useState("All")
  const listRef = useRef(null)
  const listInView = useInView(listRef, { once: true, margin: "-80px" })

  const filtered =
    activeTag === "All" ? allNews : allNews.filter((n) => n.tag === activeTag)
  const featured = filtered.find((n) => n.featured) ?? filtered[0]
  const rest = filtered.filter((n) => n !== featured)

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[55vh] items-end overflow-hidden pt-24 pb-16 bg-gradient-dark">
        <div className="absolute inset-0 opacity-25">
          <Image
            src="/assets/schoolimage.jpg"
            alt="News & Updates"
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
              <span className="h-px w-6 bg-primary-foreground/60" />
              <span className="font-mono-custom text-[11px] tracking-[0.2em] text-primary-foreground/80 uppercase">
                Stay Informed
              </span>
            </div>
            <h1 className="font-display text-6xl leading-[0.95] font-bold text-primary-foreground italic md:text-8xl">
              News &<br />
              <span className="font-heading font-semibold text-primary-foreground/75 not-italic">
                Updates
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-primary-foreground/85">
              Achievements, events, facilities, and stories from the Varsity on
              the Niger.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter + news */}
      <section ref={listRef} className="bg-background py-24">
        <div className="container mx-auto px-4">
          {/* Tags */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={listInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="mb-12 flex flex-wrap gap-3"
          >
            {tags.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className={`rounded-full px-6 py-2.5 text-sm font-medium transition-all duration-300 ${activeTag === tag ? "scale-105 bg-primary text-primary-foreground shadow-elevated" : "border border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-foreground hover:shadow-card"}`}
              >
                {tag}
              </button>
            ))}
          </motion.div>

          {featured && (
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={listInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="mb-10 grid gap-8 lg:grid-cols-5"
            >
              {/* Featured big card */}
              <article className="group relative overflow-hidden rounded-3xl p-10 text-primary-foreground shadow-dramatic bg-gradient-dark md:p-12 lg:col-span-3">
                <div className="absolute inset-0 opacity-10 bg-gradient-subtle" />
                <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-primary/10 blur-[100px] transition-colors duration-500 group-hover:bg-primary/20" />
                <div className="absolute bottom-0 left-0 h-48 w-48 rounded-full bg-secondary/8 blur-[80px]" />
                <div className="relative z-10">
                  <div className="mb-8 flex items-center gap-3">
                    <span className="rounded-full bg-primary/30 px-4 py-1.5 text-xs font-semibold backdrop-blur-sm">
                      {featured.tag}
                    </span>
                    <span className="flex items-center gap-1 font-mono-custom text-[10px] text-primary-foreground/70">
                      <Calendar size={10} /> {featured.date}
                    </span>
                  </div>
                  <h2 className="mb-5 font-display text-3xl leading-tight font-bold text-balance italic md:text-4xl">
                    {featured.title}
                  </h2>
                  <p className="mb-6 text-base leading-relaxed text-primary-foreground/85">
                    {featured.excerpt}
                  </p>
                  <p className="text-sm leading-relaxed text-primary-foreground/70">
                    {featured.body}
                  </p>
                </div>
              </article>

              {/* Side cards */}
              <div className="flex flex-col gap-5 lg:col-span-2">
                {rest.slice(0, 3).map((item, i) => (
                  <motion.article
                    key={item.title}
                    initial={{ opacity: 0, x: 20 }}
                    animate={listInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
                    className="group flex cursor-default items-start gap-4 rounded-2xl border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/25 hover:shadow-elevated"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent transition-all duration-300 group-hover:scale-110 group-hover:text-primary-foreground group-hover:bg-gradient-green">
                      <item.icon className="h-5 w-5 transition-colors" />
                    </div>
                    <div className="min-w-0">
                      <div className="mb-1.5 flex items-center gap-2">
                        <span
                          className={`rounded-full border px-2.5 py-0.5 text-[10px] font-semibold ${tagColors[item.tag]}`}
                        >
                          {item.tag}
                        </span>
                        <span className="font-mono-custom text-[10px] text-muted-foreground">
                          {item.date}
                        </span>
                      </div>
                      <h3 className="line-clamp-2 font-heading text-sm leading-tight font-semibold text-foreground transition-colors group-hover:text-primary">
                        {item.title}
                      </h3>
                    </div>
                  </motion.article>
                ))}
              </div>
            </motion.div>
          )}

          {/* All remaining */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {(featured ? rest.slice(3) : rest).map((item, i) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={listInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="group relative flex cursor-default flex-col overflow-hidden rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-elevated"
              >
                <div className="absolute top-0 right-0 h-24 w-24 rounded-full bg-primary/5 blur-[40px] transition-colors group-hover:bg-primary/10" />
                <div className="relative z-10 flex flex-1 flex-col">
                  <div className="mb-5 flex items-center justify-between">
                    <span
                      className={`rounded-full border px-3 py-1 text-[11px] font-semibold ${tagColors[item.tag]}`}
                    >
                      {item.tag}
                    </span>
                    <span className="flex items-center gap-1 font-mono-custom text-[10px] text-muted-foreground">
                      <Calendar size={10} /> {item.date}
                    </span>
                  </div>
                  <h3 className="mb-3 font-heading leading-snug font-semibold text-foreground transition-colors group-hover:text-primary">
                    {item.title}
                  </h3>
                  <p className="line-clamp-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {item.excerpt}
                  </p>
                  <div className="mt-5 flex -translate-x-1 items-center gap-1.5 text-sm font-semibold text-primary opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                    Read more <ArrowRight size={13} />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="py-20 text-center text-muted-foreground">
              No news in this category yet.
            </div>
          )}
        </div>
      </section>
    </>
  )
}
