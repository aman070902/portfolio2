"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const experiences = [
  {
    role: "Software Engineer",
    company: "WashU Satellite",
    location: "St. Louis, MO",
    period: "Sep 2025 — Present",
    highlights: [
      "Built CubeSat software using Python and Go, improving service stability and cutting debugging time by 25%+",
      "Designed magnetorquer planner that increased ADCS testing speed by 15%+ through better control validation",
      "Strengthened testing reliability by supporting repeatable validation workflows, reducing rerun effort by 28%+",
    ],
  },
  {
    role: "Teaching Assistant",
    company: "McKelvey School of Engineering",
    location: "St. Louis, MO",
    period: "Aug 2025 — Present",
    highlights: [
      "Guided 200+ students through programming, debugging, testing, and software design across mobile and cloud courses",
      "Hosted labs involving iOS, AWS, Git, and CI/CD while helping students improve code quality by 15%+",
    ],
  },
  {
    role: "Software Developer Intern",
    company: "Ignite Performance",
    location: "St. Louis, MO",
    period: "Jun 2025 — Feb 2026",
    link: "https://igniteperform.com",
    highlights: [
      "Built flagship fitness platform with Next.js, Node.js, MongoDB, and AWS EC2 — shipped MVP in 8 weeks",
      "Implemented timezone-aware habit tracking that raised 7-day completion by 19% and weekly retention by 14%",
      "Fabricated secure backend workflows with JWT auth and payment integrations, reaching 99% payment success",
      "Created real-time dashboards with aggregation and caching, cutting latency by 60%",
    ],
  },
  {
    role: "Backend Developer",
    company: "EchoSync",
    location: "St. Louis, MO",
    period: "Feb 2025 — Apr 2025",
    link: "https://www.loom.com/share/8eb5c1ee5f2a4efda85c081601d43357",
    highlights: [
      "Coded MVP backend in C# and .NET for auth, user intake, and event participation across 3+ core flows",
      "Processed 20+ Spotify song inputs per event to support live genre preference analysis",
      "Connected backend workflows to clustering pipeline, improving recommendation accuracy by 12%",
      "Shipped usable MVP features in under 3 months for demos and early validation",
    ],
  },
]

function ExperienceCard({
  experience,
  index,
}: {
  experience: (typeof experiences)[0]
  index: number
}) {
  const cardRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(cardRef, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 60, scale: 0.98 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{
        duration: 0.9,
        delay: index * 0.15,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className="group relative"
    >
      {/* Spotlight effect on hover */}
      <div className="absolute -inset-px bg-gradient-to-r from-accent/0 via-accent/5 to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-none" />
      
      <div className="relative border border-border/50 bg-card/30 backdrop-blur-sm p-8 md:p-10 hover:border-accent/30 transition-colors duration-500">
        {/* Timeline indicator */}
        <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-accent/50 via-accent/20 to-transparent" />
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
          <div>
            <h3 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl tracking-wide text-foreground">
              {experience.role}
            </h3>
            <div className="flex items-center gap-2 mt-2">
              {experience.link ? (
                <a
                  href={experience.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-sm text-accent hover:underline underline-offset-4 transition-all"
                >
                  {experience.company}
                </a>
              ) : (
                <span className="font-mono text-sm text-accent">{experience.company}</span>
              )}
              <span className="text-muted-foreground/50">—</span>
              <span className="font-mono text-sm text-muted-foreground">{experience.location}</span>
            </div>
          </div>
          <span className="font-mono text-xs tracking-wider text-muted-foreground uppercase shrink-0">
            {experience.period}
          </span>
        </div>

        {/* Highlights */}
        <ul className="space-y-3">
          {experience.highlights.map((highlight, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: index * 0.15 + i * 0.1 + 0.3,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="flex items-start gap-3 text-muted-foreground leading-relaxed"
            >
              <span className="w-1 h-1 bg-accent rounded-full mt-2.5 shrink-0" />
              <span className="text-sm md:text-base">{highlight}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}

export function ExperienceSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" })

  return (
    <section
      ref={sectionRef}
      id="experience"
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
          01 / Experience
        </span>
        <h2 className="font-[family-name:var(--font-display)] text-[clamp(2.5rem,8vw,6rem)] leading-[0.95] tracking-wide text-foreground">
          WHERE I&apos;VE
          <br />
          <span className="text-muted-foreground/40">WORKED</span>
        </h2>
      </motion.div>

      {/* Experience cards */}
      <div className="max-w-4xl mx-auto space-y-8">
        {experiences.map((experience, index) => (
          <ExperienceCard key={index} experience={experience} index={index} />
        ))}
      </div>
    </section>
  )
}
