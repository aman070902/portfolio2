"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

export function AchievementSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(contentRef, { once: true, margin: "-100px" })

  return (
    <section
      ref={sectionRef}
      id="achievement"
      className="relative py-32 md:py-48 px-6 md:px-12 lg:px-24"
    >
      <motion.div
        ref={contentRef}
        initial={{ opacity: 0, y: 60, scale: 0.98 }}
        animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
        transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
        className="max-w-4xl mx-auto"
      >
        {/* Section header */}
        <span className="font-mono text-xs tracking-[0.3em] text-accent uppercase block mb-4">
          04 / Achievement
        </span>

        {/* Main achievement card */}
        <div className="relative border border-accent/30 bg-gradient-to-br from-accent/5 via-card/30 to-transparent p-10 md:p-16">
          {/* Decorative corner */}
          <div className="absolute top-0 right-0 w-24 h-24 border-t border-r border-accent/20" />
          <div className="absolute bottom-0 left-0 w-24 h-24 border-b border-l border-accent/20" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block px-4 py-1 font-mono text-xs tracking-wider text-background bg-accent mb-6">
              FIRST RUNNER-UP
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-[family-name:var(--font-display)] text-[clamp(2rem,6vw,4rem)] leading-[1] tracking-wide text-foreground mb-6"
          >
            WASHU HACKATHON
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-4"
          >
            <h3 className="font-mono text-lg text-accent">PerfectBuy</h3>
            <p className="text-muted-foreground leading-relaxed max-w-2xl">
              A Chrome extension for price prediction and purchase timing with{" "}
              <span className="text-foreground font-medium">90%+ prediction confidence</span> using
              TypeScript and LLaMA 3.1.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            {["TypeScript", "LLaMA 3.1", "Chrome Extension", "ML"].map((tech, i) => (
              <span
                key={i}
                className="px-3 py-1 font-mono text-xs border border-accent/30 text-accent/80"
              >
                {tech}
              </span>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
