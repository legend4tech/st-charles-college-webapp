"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronRight, Sun, Moon } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useTheme } from "next-themes"
import { getCurrentCopyrightYear } from "@/lib/utils/date"

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Academics", href: "/academics" },
  { label: "Admissions", href: "/admissions" },
  { label: "News", href: "/news" },
  { label: "Gallery", href: "/gallery" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
  { label: "Check Results", href: "https://scc.istudentng.com/" },
]

function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // Use requestAnimationFrame to defer setState and avoid synchronous update warning
    const frame = requestAnimationFrame(() => {
      setMounted(true)
    })
    return () => cancelAnimationFrame(frame)
  }, [])

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
  const pathname = usePathname()
  const prevPathnameRef = useRef(pathname)
  const currentYear = getCurrentCopyrightYear()

  // Handle scroll effect
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Close drawer on pathname change - using ref to track previous value
  useEffect(() => {
    if (prevPathnameRef.current !== pathname) {
      // Use requestAnimationFrame to defer setState
      const frame = requestAnimationFrame(() => {
        setIsOpen(false)
      })
      prevPathnameRef.current = pathname
      return () => cancelAnimationFrame(frame)
    }
  }, [pathname])

  // Prevent body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  const isActive = useCallback(
    (href: string) => pathname === href || pathname.startsWith(href + "/"),
    [pathname]
  )

  const closeDrawer = useCallback(() => {
    setIsOpen(false)
  }, [])

  const openDrawer = useCallback(() => {
    setIsOpen(true)
  }, [])

  return (
    <>
      <nav
        className={`sticky top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-border/60 bg-background/80 shadow-lg backdrop-blur-xl"
            : "border-b border-border/20 bg-background/95 backdrop-blur-md"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between gap-4 px-4 py-3">
          {/* LEFT — School logo */}
          <Link href="/" className="group shrink-0">
            <div className="relative h-12 w-12 transition-transform duration-300 group-hover:scale-105 md:h-14 md:w-14">
              <Image
                src="/assets/scc_logo1.png"
                alt="St. Charles' College Onitsha"
                fill
                className="rounded-lg object-contain"
                sizes="56px"
              />
            </div>
          </Link>

          {/* CENTER — School name and details */}
          <div className="hidden flex-1 flex-col items-center lg:flex">
            <div className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
              Archdiocese of Onitsha
            </div>
            <div className="font-heading text-xl font-bold text-foreground md:text-2xl">
              ST. CHARLES&apos; COLLEGE
            </div>
            <div className="text-xs text-muted-foreground">
              P.M.B 1718, Onitsha, Anambra State
            </div>
            <div className="font-mono-custom text-[10px] tracking-wide text-primary italic">
              Motto: &quot;Floreat in Aeternum&quot;
            </div>
          </div>

          {/* Mobile — School name (smaller) */}
          <div className="flex flex-1 flex-col items-center lg:hidden">
            <div className="font-heading text-sm font-bold text-foreground sm:text-base">
              ST. CHARLES&apos; COLLEGE
            </div>
            <div className="text-[9px] text-muted-foreground sm:text-[10px]">
              Onitsha · Est. 1928
            </div>
          </div>

          {/* RIGHT — Archdiocese logo + theme toggle + menu */}
          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            <ThemeToggle />

            <div className="relative hidden h-12 w-12 sm:block md:h-14 md:w-14">
              <Image
                src="/assets/archdiocese_of_onitsha_logo.png"
                alt="Archdiocese of Onitsha"
                fill
                className="object-contain"
                sizes="56px"
              />
            </div>

            {/* Mobile toggle */}
            <button
              onClick={openDrawer}
              className="rounded-xl p-2 text-foreground hover:bg-muted xl:hidden"
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>

        {/* Desktop nav links — second row */}
        <div className="hidden border-t border-border/30 bg-muted/30 xl:block">
          <div className="container mx-auto flex items-center justify-center gap-1 px-4 py-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-xl px-4 py-2 text-sm font-medium transition-all duration-200 ${
                  isActive(link.href)
                    ? "bg-accent/70 font-semibold text-primary"
                    : "text-foreground/70 hover:bg-muted/70 hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="https://scc.istudent.com.ng/admission/"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 rounded-xl px-5 py-2 text-sm font-semibold text-secondary-foreground shadow-md transition-all bg-gradient-red hover:scale-105 hover:opacity-95 hover:shadow-lg"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Side Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={closeDrawer}
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm xl:hidden"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 z-50 h-full w-80 max-w-[85vw] bg-background shadow-2xl xl:hidden"
            >
              <div className="flex h-full flex-col">
                {/* Drawer Header */}
                <div className="flex items-center justify-between border-b border-border p-4">
                  <div className="flex items-center gap-3">
                    <div className="relative h-10 w-10">
                      <Image
                        src="/assets/scc_logo1.png"
                        alt="St. Charles' College"
                        fill
                        className="object-contain"
                        sizes="40px"
                      />
                    </div>
                    <div>
                      <div className="font-heading text-sm font-bold text-foreground">
                        SCC Onitsha
                      </div>
                      <div className="text-[10px] text-muted-foreground">
                        Floreat in Aeternum
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={closeDrawer}
                    className="rounded-xl p-2 text-foreground/60 hover:bg-muted hover:text-foreground"
                    aria-label="Close menu"
                  >
                    <X size={20} />
                  </button>
                </div>

                {/* Nav Links */}
                <div className="flex-1 overflow-y-auto p-4">
                  <div className="space-y-1">
                    {navLinks.map((link, index) => (
                      <motion.div
                        key={link.href}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <Link
                          href={link.href}
                          onClick={closeDrawer}
                          className={`flex items-center justify-between rounded-xl px-4 py-3.5 text-sm font-medium transition-all ${
                            isActive(link.href)
                              ? "bg-primary/10 text-primary"
                              : "text-foreground/80 hover:bg-muted hover:text-foreground"
                          }`}
                        >
                          {link.label}
                          <ChevronRight
                            size={16}
                            className="text-muted-foreground"
                          />
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Drawer Footer */}
                <div className="border-t border-border p-4">
                  <Link
                    href="https://scc.istudent.com.ng/admission/"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeDrawer}
                    className="flex w-full items-center justify-center rounded-xl px-5 py-3.5 text-sm font-semibold text-secondary-foreground shadow-md bg-gradient-red"
                  >
                    Apply Now
                  </Link>

                  <div className="mt-4 flex items-center justify-center gap-3">
                    <div className="relative h-8 w-8">
                      <Image
                        src="/assets/scc_logo1.png"
                        alt="SCC"
                        fill
                        className="object-contain opacity-50"
                        sizes="32px"
                      />
                    </div>
                    <div className="relative h-8 w-8">
                      <Image
                        src="/assets/archdiocese_of_onitsha_logo.png"
                        alt="Archdiocese"
                        fill
                        className="object-contain opacity-50"
                        sizes="32px"
                      />
                    </div>
                  </div>
                  <p className="mt-2 text-center text-[10px] text-muted-foreground">
                    © {currentYear} St. Charles&apos; College, Onitsha
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
