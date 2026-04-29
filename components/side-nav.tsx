"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

const navItems = [
  { id: "hero", label: "Home" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "achievement", label: "Achievement" },
  { id: "publication", label: "Publication" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
]

export function SideNav() {
  const [activeSection, setActiveSection] = useState("hero")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.3 },
    )

    navItems.forEach(({ id }) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav className="fixed left-0 top-0 z-50 h-screen w-16 md:w-20 hidden md:flex flex-col justify-center border-r border-border/20 bg-background/60 backdrop-blur-md">
      <div className="flex flex-col gap-5 px-4">
        {navItems.map(({ id, label }, index) => (
          <motion.button
            key={id}
            onClick={() => scrollToSection(id)}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className="group relative flex items-center gap-3"
          >
            <span
              className={cn(
                "h-1.5 w-1.5 rounded-full transition-all duration-500",
                activeSection === id
                  ? "bg-accent scale-150"
                  : "bg-muted-foreground/30 group-hover:bg-foreground/60 group-hover:scale-125",
              )}
            />
            <span
              className={cn(
                "absolute left-6 font-mono text-[9px] uppercase tracking-[0.15em] opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:left-8 whitespace-nowrap",
                activeSection === id ? "text-accent" : "text-muted-foreground",
              )}
            >
              {label}
            </span>
          </motion.button>
        ))}
      </div>

      {/* Progress line */}
      <div className="absolute left-1/2 top-8 bottom-8 w-px bg-border/20">
        <motion.div
          className="w-full bg-accent/50"
          style={{
            height: `${(navItems.findIndex((item) => item.id === activeSection) + 1) / navItems.length * 100}%`,
          }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
      </div>
    </nav>
  )
}
