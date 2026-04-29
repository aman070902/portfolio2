"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const links = [
  { label: "Email", href: "mailto:verma.aman0907@gmail.com", value: "verma.aman0907@gmail.com" },
  { label: "GitHub", href: "https://github.com/aman070902", value: "github.com/aman070902" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/amanverma070902", value: "linkedin.com/in/amanverma070902" },
  { label: "Portfolio", href: "https://amanverma07.vercel.app", value: "amanverma07.vercel.app" },
]

export function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(contentRef, { once: true, margin: "-100px" })

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative py-32 md:py-48 px-6 md:px-12 lg:px-24 border-t border-border/30"
    >
      <motion.div
        ref={contentRef}
        initial={{ opacity: 0, y: 60 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
        className="max-w-4xl mx-auto"
      >
        {/* Section header */}
        <span className="font-mono text-xs tracking-[0.3em] text-accent uppercase block mb-4">
          07 / Contact
        </span>
        <h2 className="font-[family-name:var(--font-display)] text-[clamp(2.5rem,8vw,6rem)] leading-[0.95] tracking-wide text-foreground mb-8">
          LET&apos;S
          <br />
          <span className="text-muted-foreground/40">CONNECT</span>
        </h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-muted-foreground text-lg leading-relaxed max-w-xl mb-16"
        >
          Currently open to software engineering opportunities. Let&apos;s build something great together.
        </motion.p>

        {/* Links grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {links.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              target={link.href.startsWith("mailto") ? undefined : "_blank"}
              rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.3 + index * 0.1,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="group flex items-center justify-between border border-border/50 bg-card/20 p-6 hover:border-accent/50 hover:bg-accent/5 transition-all duration-500"
            >
              <div>
                <span className="font-mono text-xs tracking-wider text-muted-foreground/60 uppercase block mb-1">
                  {link.label}
                </span>
                <span className="text-foreground group-hover:text-accent transition-colors duration-300">
                  {link.value}
                </span>
              </div>
              <svg
                className="w-5 h-5 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M7 17L17 7M17 7H7M17 7v10"
                />
              </svg>
            </motion.a>
          ))}
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-24 pt-8 border-t border-border/30 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
        >
          <span className="font-mono text-xs text-muted-foreground/60 tracking-wider">
            &copy; {new Date().getFullYear()} AMAN VERMA
          </span>
          <span className="font-mono text-xs text-muted-foreground/40 tracking-wider">
            DESIGNED & BUILT WITH PRECISION
          </span>
        </motion.div>
      </motion.div>
    </section>
  )
}
