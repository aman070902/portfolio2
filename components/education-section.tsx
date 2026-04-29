"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const education = [
  {
    school: "Washington University in St. Louis",
    degree: "Master of Science in Computer Science",
    gpa: "3.48 / 4.00",
    period: "Expected May 2026",
  },
  {
    school: "SRM IST, Chennai, India",
    degree: "Bachelors in Computer Science and Engineering",
    gpa: "9.14 / 10.00",
    period: "May 2024",
  },
]

function EducationCard({
  edu,
  index,
}: {
  edu: (typeof education)[0]
  index: number
}) {
  const cardRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(cardRef, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.8,
        delay: index * 0.15,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className="group border border-border/50 bg-card/20 p-8 hover:border-accent/30 transition-colors duration-500"
    >
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h3 className="font-[family-name:var(--font-display)] text-xl md:text-2xl tracking-wide text-foreground mb-2">
            {edu.school}
          </h3>
          <p className="font-mono text-sm text-accent">{edu.degree}</p>
        </div>
        <div className="md:text-right">
          <span className="font-mono text-sm text-foreground block">{edu.gpa}</span>
          <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
            {edu.period}
          </span>
        </div>
      </div>
    </motion.div>
  )
}

export function EducationSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" })

  return (
    <section
      ref={sectionRef}
      id="education"
      className="relative py-32 md:py-48 px-6 md:px-12 lg:px-24"
    >
      <motion.div
        ref={headerRef}
        initial={{ opacity: 0, y: 40 }}
        animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        className="max-w-4xl mx-auto"
      >
        {/* Section header */}
        <span className="font-mono text-xs tracking-[0.3em] text-accent uppercase block mb-4">
          06 / Education
        </span>
        <h2 className="font-[family-name:var(--font-display)] text-[clamp(2rem,6vw,4rem)] leading-[0.95] tracking-wide text-foreground mb-16">
          ACADEMIC
          <br />
          <span className="text-muted-foreground/40">BACKGROUND</span>
        </h2>

        {/* Education cards */}
        <div className="space-y-6">
          {education.map((edu, index) => (
            <EducationCard key={index} edu={edu} index={index} />
          ))}
        </div>
      </motion.div>
    </section>
  )
}
