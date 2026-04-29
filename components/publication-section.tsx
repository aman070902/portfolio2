"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

export function PublicationSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(contentRef, { once: true, margin: "-100px" })

  return (
    <section
      ref={sectionRef}
      id="publication"
      className="relative py-32 md:py-48 px-6 md:px-12 lg:px-24"
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
          05 / Publication
        </span>
        <h2 className="font-[family-name:var(--font-display)] text-[clamp(2rem,6vw,4rem)] leading-[0.95] tracking-wide text-foreground mb-16">
          RESEARCH
        </h2>

        {/* Publication card */}
        <motion.a
          href="https://doi.org/10.1109/ICSPCRE62303.2024.10675260"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="group block border border-border/50 bg-card/20 p-8 md:p-10 hover:border-accent/40 transition-all duration-500"
        >
          <div className="flex items-start justify-between gap-4 mb-6">
            <span className="font-mono text-xs tracking-wider text-muted-foreground/60 uppercase">
              IEEE ICSPCRE 2024
            </span>
            <svg
              className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </div>

          <h3 className="font-[family-name:var(--font-display)] text-xl md:text-2xl tracking-wide text-foreground mb-4 group-hover:text-accent transition-colors duration-300">
            ML-AgriCare
          </h3>

          <p className="text-muted-foreground leading-relaxed">
            Enhancing Crop Yield Through Machine Learning-Based Crop Predictor, Fertilizer
            Recommender, and Plant Disease Detector
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {["Machine Learning", "Agriculture", "Prediction", "IEEE"].map((tag, i) => (
              <span
                key={i}
                className="px-2 py-1 font-mono text-[10px] border border-border/40 text-muted-foreground/70 uppercase tracking-wider"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.a>
      </motion.div>
    </section>
  )
}
