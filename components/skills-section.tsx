"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const skillCategories = [
  {
    title: "Languages",
    skills: ["C++", "C", "Python", "C#", "Java", "Go", "JavaScript", "TypeScript", "Rust", "SQL"],
  },
  {
    title: "Cloud & DevOps",
    skills: ["AWS", "Azure", "GCP", "Docker", "Kubernetes", "CI/CD", "Linux"],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MySQL", "MongoDB"],
  },
  {
    title: "Systems",
    skills: ["OOP", "Embedded Development", "Controller Validation", "System Testing", "Data Structures"],
  },
]

function SkillCategory({
  category,
  index,
}: {
  category: (typeof skillCategories)[0]
  index: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.8,
        delay: index * 0.15,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className="group"
    >
      <h3 className="font-mono text-xs tracking-[0.2em] text-accent uppercase mb-6">
        {category.title}
      </h3>
      <div className="flex flex-wrap gap-3">
        {category.skills.map((skill, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
            transition={{
              duration: 0.5,
              delay: index * 0.15 + i * 0.04 + 0.2,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            whileHover={{ scale: 1.05, y: -2 }}
            className="px-4 py-2 font-mono text-sm border border-border/60 text-muted-foreground bg-card/30 hover:border-accent/60 hover:text-accent hover:bg-accent/5 transition-all duration-300 cursor-default"
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  )
}

export function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" })

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative py-32 md:py-48 px-6 md:px-12 lg:px-24"
    >
      {/* Section header */}
      <motion.div
        ref={headerRef}
        initial={{ opacity: 0, y: 40 }}
        animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        className="mb-20 md:mb-28"
      >
        <span className="font-mono text-xs tracking-[0.3em] text-accent uppercase block mb-4">
          03 / Skills
        </span>
        <h2 className="font-[family-name:var(--font-display)] text-[clamp(2.5rem,8vw,6rem)] leading-[0.95] tracking-wide text-foreground">
          TECHNICAL
          <br />
          <span className="text-muted-foreground/40">ARSENAL</span>
        </h2>
      </motion.div>

      {/* Skills grid */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
        {skillCategories.map((category, index) => (
          <SkillCategory key={index} category={category} index={index} />
        ))}
      </div>
    </section>
  )
}
