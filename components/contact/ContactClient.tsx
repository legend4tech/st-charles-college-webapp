"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react"

const infoCards = [
  { icon: MapPin, title: "Address", lines: ["P.M.B 1718, Onitsha", "Anambra State, Nigeria"] },
  { icon: Phone, title: "Phone", lines: ["+234 907 002 3282"] },
  { icon: Mail, title: "Email", lines: ["info@scconitsha.com", "scc.onitsha@gmail.com"] },
  { icon: Clock, title: "Office Hours", lines: ["Mon – Fri: 8:00 AM – 4:00 PM", "Saturday: 9:00 AM – 1:00 PM"] },
]

export default function ContactClient() {
  const [sent, setSent] = useState(false)
  const formRef = useRef(null)
  const mapRef = useRef(null)
  const formInView = useInView(formRef, { once: true, margin: "-80px" })
  const mapInView = useInView(mapRef, { once: true, margin: "-80px" })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-dark pb-16 pt-24 text-primary-foreground">
        <div className="absolute inset-0 opacity-[0.05]"
          style={{ backgroundImage: "linear-gradient(hsl(0 0% 100%/.2) 1px,transparent 1px),linear-gradient(90deg,hsl(0 0% 100%/.2) 1px,transparent 1px)", backgroundSize: "80px 80px" }} />
        <div className="absolute top-1/2 left-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 animate-float-slow rounded-full bg-primary/10 blur-[120px]" />
        <div className="relative z-10 container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-6 bg-primary-foreground/40" />
              <span className="font-mono-custom text-[11px] tracking-[0.2em] text-primary-foreground/50 uppercase">We're Here to Help</span>
            </div>
            <h1 className="font-display text-6xl font-bold italic leading-[0.95] text-primary-foreground md:text-8xl">
              Get in<br />
              <span className="not-italic font-heading font-semibold text-primary-foreground/50">Touch</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-primary-foreground/55 leading-relaxed">
              Whether you're a prospective parent, a current student, or an old boy — we'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Info cards */}
      <section className="bg-background py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {infoCards.map((card, i) => (
              <motion.div key={card.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative overflow-hidden rounded-3xl border border-border bg-card p-8 text-center transition-all duration-300 hover:border-primary/25 hover:shadow-elevated hover:-translate-y-2">
                <div className="absolute top-0 right-0 h-24 w-24 rounded-full bg-primary/5 blur-[40px] group-hover:bg-primary/10 transition-colors" />
                <div className="relative z-10">
                  <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-green glow-green transition-transform duration-300 group-hover:scale-110">
                    <card.icon className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <h3 className="mb-3 font-heading text-lg font-bold text-foreground">{card.title}</h3>
                  {card.lines.map(line => (
                    <p key={line} className="text-sm text-muted-foreground">{line}</p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Map */}
      <section className="relative bg-muted/40 py-24">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-primary/5 blur-[150px]" />
        <div className="relative z-10 container mx-auto px-4">
          <div className="grid gap-10 lg:grid-cols-2">
            {/* Form */}
            <motion.div ref={formRef} initial={{ opacity: 0, x: -30 }} animate={formInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="rounded-3xl border border-border bg-card p-10 shadow-card">
              <h2 className="mb-2 font-heading text-2xl font-bold text-foreground">Send us a message</h2>
              <p className="mb-10 text-sm text-muted-foreground">Fill out the form and our team will get back to you within 24 hours.</p>

              {sent ? (
                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center gap-4 py-12 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent">
                    <CheckCircle className="h-8 w-8 text-primary" />
                  </div>
                  <div className="font-heading text-xl font-bold text-foreground">Message Sent!</div>
                  <p className="max-w-xs text-sm text-muted-foreground">Thank you for reaching out. We'll respond to your message within one business day.</p>
                  <button onClick={() => setSent(false)} className="mt-2 text-sm font-semibold text-primary hover:underline">Send another message</button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-xs font-semibold text-foreground">Full Name</label>
                      <input type="text" required placeholder="Your full name"
                        className="w-full rounded-xl border border-border bg-muted px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all focus:shadow-card" />
                    </div>
                    <div>
                      <label className="mb-2 block text-xs font-semibold text-foreground">Email Address</label>
                      <input type="email" required placeholder="your@email.com"
                        className="w-full rounded-xl border border-border bg-muted px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all focus:shadow-card" />
                    </div>
                  </div>
                  <div>
                    <label className="mb-2 block text-xs font-semibold text-foreground">Phone Number</label>
                    <input type="tel" placeholder="+234 ..."
                      className="w-full rounded-xl border border-border bg-muted px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all focus:shadow-card" />
                  </div>
                  <div>
                    <label className="mb-2 block text-xs font-semibold text-foreground">Subject</label>
                    <select className="w-full rounded-xl border border-border bg-muted px-4 py-3.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all focus:shadow-card">
                      <option>Admissions Enquiry</option>
                      <option>Academic Information</option>
                      <option>Alumni Relations</option>
                      <option>Donations & Projects</option>
                      <option>General Enquiry</option>
                    </select>
                  </div>
                  <div>
                    <label className="mb-2 block text-xs font-semibold text-foreground">Message</label>
                    <textarea required rows={5} placeholder="Write your message here..."
                      className="w-full resize-none rounded-xl border border-border bg-muted px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all focus:shadow-card" />
                  </div>
                  <button type="submit"
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-green px-6 py-4 font-heading font-semibold text-primary-foreground glow-green transition-all duration-300 hover:scale-[1.02] hover:shadow-elevated">
                    Send Message <Send size={16} />
                  </button>
                </form>
              )}
            </motion.div>

            {/* Map */}
            <motion.div ref={mapRef} initial={{ opacity: 0, x: 30 }} animate={mapInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7 }} className="flex flex-col gap-8">
              <div className="min-h-[400px] flex-1 overflow-hidden rounded-3xl border border-border shadow-dramatic">
                <iframe
                  title="St. Charles' College Onitsha location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.0!2d6.7897!3d6.1452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1043840000000001%3A0x0!2sOnitsha%2C%20Anambra!5e0!3m2!1sen!2sng!4v1"
                  width="100%" height="100%" style={{ border: 0, minHeight: 400 }}
                  allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
              </div>

              {/* Quick contact tiles */}
              <div className="grid grid-cols-2 gap-5">
                <a href="tel:+2349070023282"
                  className="group flex flex-col items-center gap-2 rounded-2xl border border-border bg-card p-6 text-center transition-all duration-300 hover:border-primary/25 hover:shadow-elevated hover:-translate-y-1">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-green glow-green transition-transform group-hover:scale-110">
                    <Phone size={18} className="text-primary-foreground" />
                  </div>
                  <span className="font-heading text-sm font-semibold text-foreground">Call Us</span>
                  <span className="text-xs text-muted-foreground">+234 907 002 3282</span>
                </a>
                <a href="mailto:info@scconitsha.com"
                  className="group flex flex-col items-center gap-2 rounded-2xl border border-border bg-card p-6 text-center transition-all duration-300 hover:border-primary/25 hover:shadow-elevated hover:-translate-y-1">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-green glow-green transition-transform group-hover:scale-110">
                    <Mail size={18} className="text-primary-foreground" />
                  </div>
                  <span className="font-heading text-sm font-semibold text-foreground">Email Us</span>
                  <span className="text-xs text-muted-foreground">info@scconitsha.com</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Directions */}
      <section className="bg-background py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl rounded-3xl border border-border bg-card p-10 md:p-12 shadow-card">
            <h2 className="mb-8 font-heading text-2xl font-bold text-foreground">How to Find Us</h2>
            <div className="grid gap-8 md:grid-cols-3">
              {[
                { method: "By Road", desc: "Located along the Onitsha main road. Coming from Enugu or Asaba, enter Onitsha from the Upper Iweka axis and follow signs towards the Catholic Archdiocese." },
                { method: "By Air", desc: "The nearest airport is Asaba International Airport (ABB), approximately 30 minutes drive via the Niger Bridge. Cab and bus services are readily available." },
                { method: "Landmarks", desc: "Near the Onitsha Archdiocese Cathedral and the Onitsha Main Market. Any local taxi driver will know St. Charles' College." },
              ].map(d => (
                <div key={d.method}>
                  <div className="mb-3 font-heading font-bold text-foreground">{d.method}</div>
                  <p className="text-sm leading-relaxed text-muted-foreground">{d.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
