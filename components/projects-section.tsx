"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const projects = [
  {
    title: "Poker Analytics Pipeline",
    subtitle: "Real-Time Data Pipeline & Performance Dashboard",
    tech: ["Python", "Kafka", "Spark Streaming", "Airflow", "Redis", "PostgreSQL", "Snowflake", "KMeans"],
    description: "Built a real-time poker analytics system using Python, Kafka, Spark Streaming, Airflow, Redis, PostgreSQL, and Snowflake across 21M+ records. Added 6-handed simulations, idempotent pipelines, and KMeans profiling for low-latency dashboards and live player analysis.",
    link: null,
  },
  {
    title: "MindMemos",
    subtitle: "AI-Powered Journaling & Wellness Platform",
    tech: ["Angular", "Node.js", "Express", "AWS Lambda", "DynamoDB", "S3", "OpenAI", "Swift", "Azure Speech"],
    description: "Created an AI journaling platform with Angular, Node.js/Express, AWS Lambda, DynamoDB, S3, and OpenAI backend workflows. Built a voice and gesture-based Apple Watch experience using Swift and Azure Speech for fast, touch-free wellness interaction.",
    link: "https://youtu.be/jdHkCyzQpm0",
  },
  {
    title: "MicroTutor",
    subtitle: "AI-Powered Micro-Tutoring Platform",
    tech: ["React", "Node.js", "Express", "PostgreSQL", "WebRTC", "Docker", "Kubernetes", "Ollama"],
    description: "Built a tutoring platform with React, Node.js/Express, PostgreSQL, and WebRTC for live sessions, ratings, and tutor discovery. Deployed frontend, backend, database, and Ollama services with Docker and Kubernetes.",
    link: "http://microtutor2.duckdns.org",
  },
  {
    title: "HelpBeacon",
    subtitle: "Location-Based Community Assistance Platform",
    tech: ["Java", "Spring Boot", "Next.js", "TypeScript", "JPA", "REST APIs", "SQL"],
    description: "Constructed a web platform with Java, Spring Boot, Next.js, TypeScript, JPA, and REST APIs for nearby help requests. Added structured request states, location workflows, and scalable backend logic to improve reliability and user visibility with SQL.",
    link: null,
  },
  {
    title: "Concurrent File Server",
    subtitle: "Rust-Based Networked Script Processing Tool",
    tech: ["Rust", "Threads", "Arc", "Mutex", "TcpListener", "AtomicBool", "TCP"],
    description: "Built a Rust-based multithreaded file server using threads, Arc, Mutex, TcpListener, and AtomicBool for parallel file processing. Implemented fork-join concurrency, a TCP test client, and hybrid local/network I/O flows to improve reliability.",
    link: null,
  },
  {
    title: "InventorySync",
    subtitle: "Warehouse Management Dashboard",
    tech: ["C#", ".NET", "SQL", "REST APIs"],
    description: "Constructed a C# and .NET backend for inventory tracking, order updates, and stock movement through RESTful services. Connected SQL storage, authentication, and reporting workflows to support fast search and low-latency updates.",
    link: null,
  },
]

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0]
  index: number
}) {
  const cardRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(cardRef, { once: true, margin: "-100px" })

  const CardWrapper = project.link ? "a" : "div"
  const cardProps = project.link
    ? { href: project.link, target: "_blank", rel: "noopener noreferrer" }
    : {}

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 60, scale: 0.98 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{
        duration: 0.9,
        delay: index * 0.2,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className="group relative"
    >
      {/* Glow effect */}
      <div className="absolute -inset-px bg-gradient-to-br from-accent/10 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      
      <CardWrapper
        {...cardProps}
        className="relative block h-full border border-border/50 bg-card/20 backdrop-blur-sm p-8 md:p-10 hover:border-accent/40 transition-all duration-500"
      >
        {/* Project number */}
        <span className="absolute top-6 right-6 font-mono text-6xl md:text-8xl font-bold text-foreground/[0.03] leading-none">
          0{index + 1}
        </span>
        
        {/* Header */}
        <div className="relative z-10 mb-6">
          <h3 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl tracking-wide text-foreground mb-2">
            {project.title}
          </h3>
          <p className="font-mono text-sm text-accent">{project.subtitle}</p>
        </div>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{
                duration: 0.4,
                delay: index * 0.2 + i * 0.05 + 0.4,
              }}
              className="px-3 py-1 font-mono text-xs border border-border/50 text-muted-foreground hover:border-accent/50 hover:text-accent transition-colors duration-300"
            >
              {tech}
            </motion.span>
          ))}
        </div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{
            duration: 0.6,
            delay: index * 0.2 + 0.5,
          }}
          className="text-sm leading-relaxed text-muted-foreground mb-6"
        >
          {project.description}
        </motion.p>

        {/* Link indicator */}
        <div className="flex items-center gap-2 mt-auto">
          {project.link ? (
            <span className="font-mono text-xs text-accent group-hover:underline underline-offset-4 flex items-center gap-2">
              View Project
              <svg
                className="w-3 h-3 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </span>
          ) : (
            <span className="font-mono text-xs text-muted-foreground/50">
              Coming Soon
            </span>
          )}
        </div>
      </CardWrapper>
    </motion.div>
  )
}

export function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" })

  return (
    <section
      ref={sectionRef}
      id="projects"
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
          02 / Projects
        </span>
        <h2 className="font-[family-name:var(--font-display)] text-[clamp(2.5rem,8vw,6rem)] leading-[0.95] tracking-wide text-foreground">
          SELECTED
          <br />
          <span className="text-muted-foreground/40">WORK</span>
        </h2>
      </motion.div>

      {/* Projects grid */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </section>
  )
}
