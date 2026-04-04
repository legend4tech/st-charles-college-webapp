"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronDown, Sun, Moon } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useTheme } from "next-themes"

const navLinks = [
  {
    label: "About",
    href: "/about",
    children: [
      { label: "Our History", href: "/about#history" },
      { label: "Mission & Vision", href: "/about#mission" },
      { label: "Administration", href: "/about#administration" },
      { label: "School Anthem", href: "/about#anthem" },
    ],
  },
  {
    label: "Academics",
    href: "/academics",
    children: [
      { label: "Curriculum", href: "/academics#curriculum" },
      { label: "Exam Preparation", href: "/academics#exams" },
      { label: "Clubs & Activities", href: "/academics#activities" },
    ],
  },
  { label: "Admissions", href: "/admissions" },
  { label: "News", href: "/news" },
  { label: "Gallery", href: "/gallery" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
]

function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])
  if (!mounted) return <div className="h-9 w-9" />

  const isDark = resolvedTheme === "dark"

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle theme"
      className="relative flex h-9 w-9 items-center justify-center rounded-xl text-foreground/60 transition-all hover:bg-muted hover:text-foreground"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={isDark ? "moon" : "sun"}
          initial={{ opacity: 0, rotate: -30, scale: 0.7 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          exit={{ opacity: 0, rotate: 30, scale: 0.7 }}
          transition={{ duration: 0.2 }}
        >
          {isDark ? <Moon size={17} /> : <Sun size={17} />}
        </motion.div>
      </AnimatePresence>
    </button>
  )
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
    setActiveDropdown(null)
  }, [pathname])

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + "/")

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-border/60 bg-background/80 shadow-lg backdrop-blur-xl"
          : "border-b border-border/20 bg-background/95 backdrop-blur-md"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between gap-4 px-4 py-3">
        {/* LEFT — Archdiocese of Onitsha logo */}
        <div className="hidden shrink-0 items-center lg:flex">
          <div className="relative h-11 w-11 overflow-hidden rounded-full border border-border/60 bg-muted/40 p-0.5 transition-all hover:border-primary/30">
            <Image
              src="/images/archdiocese-logo.png"
              alt="Archdiocese of Onitsha"
              fill
              className="object-contain p-1"
              sizes="44px"
            />
          </div>
        </div>

        {/* CENTER-LEFT — School logo + name */}
        <Link href="/" className="group flex items-center gap-3.5">
          <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border-2 border-primary/25 bg-muted/40 shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:border-primary/60 group-hover:shadow-md">
            <Image
              src="/images/scc-logo.png"
              alt="St. Charles' College Onitsha"
              fill
              className="object-contain p-1"
              sizes="48px"
            />
          </div>
          <div className="hidden sm:block">
            <div className="font-heading text-sm leading-tight font-bold text-foreground">
              St. Charles&apos; College
            </div>
            <div className="font-mono-custom text-[10px] tracking-widest text-muted-foreground uppercase">
              Onitsha · Est. 1928
            </div>
          </div>
        </Link>

        {/* Desktop nav links */}
        <div className="hidden flex-1 items-center justify-center gap-1 xl:flex">
          {navLinks.map((link) => (
            <div
              key={link.href}
              className="relative"
              onMouseEnter={() =>
                link.children && setActiveDropdown(link.label)
              }
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href={link.href}
                className={`flex items-center gap-1 rounded-xl px-4 py-2.5 text-sm font-medium transition-all duration-200 ${
                  isActive(link.href)
                    ? "bg-accent/70 text-primary font-semibold"
                    : "text-foreground/70 hover:bg-muted/70 hover:text-foreground"
                }`}
              >
                {link.label}
                {link.children && (
                  <ChevronDown
                    size={13}
                    className={`transition-transform duration-200 ${
                      activeDropdown === link.label ? "rotate-180" : ""
                    }`}
                  />
                )}
              </Link>

              <AnimatePresence>
                {link.children && activeDropdown === link.label && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.18 }}
                    className="absolute top-full left-0 mt-2 w-52 overflow-hidden rounded-2xl border border-border bg-card shadow-elevated"
                  >
                    <div className="p-1.5">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="flex items-center gap-2 rounded-xl px-3 py-2.5 text-sm text-foreground/65 transition-colors hover:bg-muted hover:text-foreground"
                        >
                          <span className="h-1 w-1 rounded-full bg-primary/50" />
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* RIGHT — theme toggle + apply + Archdiocese logo (right side) */}
        <div className="flex shrink-0 items-center gap-2.5">
          <ThemeToggle />

          <Link
            href="https://scc.istudent.com.ng/admission/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-xl px-6 py-2.5 text-sm font-semibold text-secondary-foreground transition-all bg-gradient-red shadow-md hover:scale-105 hover:shadow-lg hover:opacity-95 sm:block"
          >
            Apply Now
          </Link>

          {/* Archdiocese logo on the far right — desktop */}
          <div className="hidden shrink-0 items-center lg:flex">
            <div className="relative ml-1 h-11 w-11 overflow-hidden rounded-full border border-border/60 bg-muted/40 p-0.5 transition-all hover:border-primary/30">
              <Image
                src="/images/archdiocese-logo.png"
                alt="Archdiocese of Onitsha"
                fill
                className="object-contain p-1"
                sizes="44px"
              />
            </div>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-xl p-2.5 text-foreground hover:bg-muted xl:hidden"
            aria-label="Toggle menu"
          >
            <motion.div
              animate={isOpen ? { rotate: 90 } : { rotate: 0 }}
              transition={{ duration: 0.2 }}
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </motion.div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden border-t border-border bg-background xl:hidden"
          >
            <div className="container mx-auto flex flex-col gap-1 px-4 py-4">
              {/* Mobile logos row */}
              <div className="mb-3 flex items-center justify-center gap-4 border-b border-border pb-4">
                <div className="relative h-10 w-10 overflow-hidden rounded-full border border-border/60 bg-muted/40">
                  <Image
                    src="/images/archdiocese-logo.png"
                    alt="Archdiocese of Onitsha"
                    fill
                    className="object-contain p-1"
                    sizes="40px"
                  />
                </div>
                <div className="text-center">
                  <div className="font-heading text-xs font-semibold text-foreground">
                    St. Charles&apos; College, Onitsha
                  </div>
                  <div className="font-mono-custom text-[9px] tracking-widest text-muted-foreground uppercase">
                    Est. 1928 · Floreat in Aeternum
                  </div>
                </div>
                <div className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-primary/20 bg-muted/40">
                  <Image
                    src="/images/scc-logo.png"
                    alt="St. Charles' College"
                    fill
                    className="object-contain p-0.5"
                    sizes="40px"
                  />
                </div>
              </div>

              {navLinks.map((link) => (
                <div key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                      isActive(link.href)
                        ? "bg-accent text-primary"
                        : "text-foreground hover:bg-muted"
                    }`}
                  >
                    {link.label}
                  </Link>
                  {link.children && (
                    <div className="mt-0.5 ml-4 space-y-0.5 pb-1">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setIsOpen(false)}
                          className="flex items-center gap-2 rounded-lg px-4 py-2 text-xs text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                        >
                          <span className="h-1 w-1 rounded-full bg-border" />
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <Link
                href="https://scc.istudent.com.ng/admission/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="mt-3 rounded-xl px-5 py-3 text-center text-sm font-semibold text-secondary-foreground bg-gradient-red"
              >
                Apply Now →
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
