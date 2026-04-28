"use client"

import { useEffect } from "react"
import { motion } from "framer-motion"
import { ExternalLink, Github, Linkedin, Mail, Phone } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

import ContactForm from "./components/contact-form"
import MobileNav from "./components/mobile-nav"
import ProjectCard from "./components/project-card"
import TechStack from "./components/tech-stack"
import { AnimatedCard, ParallaxSection, RevealSection, RevealText, SpotlightSection } from "./components/story-motion"

const navItems = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
]

const socialLinks = [
  { href: "https://github.com/aman070902", icon: Github, label: "GitHub", external: true },
  { href: "https://linkedin.com/in/amanverma070902", icon: Linkedin, label: "LinkedIn", external: true },
  { href: "tel:+13143192389", icon: Phone, label: "Phone", external: false },
  { href: "mailto:aman.v@wustl.edu", icon: Mail, label: "Email", external: false },
]

const experienceItems = [
  {
    title: "Software Engineer",
    company: "WashU Satellite",
    period: "Sep 2025-Present",
    location: "St. Louis, MO",
    points: [
      "Built Python and Go software for CubeSat systems, improving service stability and cutting debugging time by 25%+.",
      "Designed a magnetorquer planner that increased ADCS testing speed by 15%+ through tighter control validation.",
      "Strengthened repeatable validation workflows, reducing rerun effort across development cycles by 28%+.",
    ],
  },
  {
    title: "Teaching Assistant",
    company: "McKelvey School of Engineering",
    period: "Aug 2025-Present",
    location: "St. Louis, MO",
    points: [
      "Guided 200+ students through programming, debugging, testing, and software design across mobile and cloud courses.",
      "Hosted labs involving iOS, AWS, Git, and CI/CD while helping students improve code quality by 15%+.",
    ],
  },
  {
    title: "Software Developer Intern",
    company: "Ignite Performance",
    period: "Jun 2025-Feb 2026",
    location: "St. Louis, MO",
    points: [
      "Built the flagship fitness platform with Next.js, Node.js, MongoDB, and AWS EC2, helping ship an MVP in 8 weeks.",
      "Implemented timezone-aware habit tracking that raised 7-day completion by 19% and weekly retention by 14%.",
      "Created secure backend flows with JWT auth, payments, dashboards, and caching, cutting latency by 60%.",
    ],
  },
  {
    title: "Backend Developer (Part-time)",
    company: "EchoSync",
    period: "Feb 2025-Apr 2025",
    location: "St. Louis, MO",
    points: [
      "Built EchoSync's MVP backend in C# and .NET for auth, user intake, and event participation across core flows.",
      "Processed live music preference inputs and connected backend workflows to clustering for stronger recommendations.",
      "Worked with the founding team to ship usable MVP features in under 3 months for demos and early validation.",
    ],
  },
]

const projects = [
  {
    title: "Poker Analytics Pipeline",
    description:
      "Led a real-time poker analytics pipeline with Python, Kafka, Spark Streaming, Airflow, Redis, Postgres, and Snowflake on 21M+ records.",
    image: "/micro-tutoring-platform-with-video-chat-interface.jpg",
    tags: ["Python", "Kafka", "Spark", "Airflow", "Redis", "Postgres", "Snowflake"],
    link: "https://github.com/aman070902",
  },
  {
    title: "OpsPilot",
    description:
      "Built an internal ops copilot with Python, FastAPI, PostgreSQL, and OpenAI APIs to classify, route, and summarize tickets.",
    image: "/ai-voice-assistant-interface-with-phone-integratio.png",
    tags: ["Python", "FastAPI", "PostgreSQL", "OpenAI API"],
    link: "https://github.com/aman070902",
  },
  {
    title: "MindMemos",
    description:
      "Created an AI journaling platform with Angular, Node.js/Express, AWS Lambda, DynamoDB, S3, and a voice-first Apple Watch experience.",
    image: "/mental-health-journaling-app-with-chat-support-int.jpg",
    tags: ["Angular", "Node.js", "AWS Lambda", "DynamoDB", "Swift", "Azure Speech"],
    link: "https://youtu.be/jdHkCyzQpm0",
  },
  {
    title: "MicroTutor",
    description:
      "Built a tutoring platform with React, Node.js/Express, PostgreSQL, and WebRTC, then deployed the stack with Docker and Kubernetes.",
    image: "/micro-tutoring-platform-with-video-chat-interface.jpg",
    tags: ["React", "Node.js", "PostgreSQL", "Docker", "Kubernetes", "WebRTC"],
    link: "https://34.10.159.172/",
  },
  {
    title: "VoltPath",
    description:
      "AI-powered EV route navigator with real-time station, traffic, and weather signals, delivering about 150ms median latency.",
    image: "/electric-vehicle-charging-station-map-interface.png",
    tags: ["Next.js", "FastAPI", "Kafka", "PostgreSQL", "GCP", "Grafana"],
    link: "https://github.com/aman070902/VoltPath",
  },
  {
    title: "AI Call Agent",
    description:
      "AI voice agent for local business discovery using Gemini API, Twilio, and real-time STT/TTS with sub-125ms responses.",
    image: "/ai-voice-assistant-interface-with-phone-integratio.png",
    tags: ["Gemini API", "Twilio", "Python", "STT/TTS", "ngrok"],
    link: "https://github.com/aman070902/ai-voice-agent",
  },
]

export default function Page() {
  useEffect(() => {
    window.scrollTo(0, 0)

    const handleBeforeUnload = () => {
      window.scrollTo(0, 0)
    }

    window.addEventListener("beforeunload", handleBeforeUnload)

    const hideV0Attribution = () => {
      const selectors = [
        '[data-testid*="v0"]',
        '[class*="v0"]',
        '[id*="v0"]',
        'div:contains("Built with v0")',
        'div:contains("built with v0")',
        '[aria-label*="v0"]',
        'div[style*="position: fixed"][style*="bottom"]',
        'div[style*="position: absolute"][style*="bottom"]',
      ]

      selectors.forEach((selector) => {
        try {
          const elements = document.querySelectorAll(selector)
          elements.forEach((element) => {
            const text = element.textContent?.toLowerCase() || ""
            if (text.includes("built with v0") || text.includes("v0")) {
              element.style.display = "none"
              element.remove()
            }
          })
        } catch {
          // Ignore selector errors.
        }
      })
    }

    hideV0Attribution()
    const interval = setInterval(hideV0Attribution, 1000)

    const observer = new MutationObserver(hideV0Attribution)
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload)
      clearInterval(interval)
      observer.disconnect()
    }
  }, [])

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <div className="pointer-events-none fixed inset-0 -z-20 bg-[radial-gradient(circle_at_top,rgba(6,48,58,0.58),transparent_42%),linear-gradient(180deg,#03121B_0%,#05161C_38%,#071B14_100%)]" />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_50%_8%,rgba(224,161,90,0.12),transparent_25%),radial-gradient(circle_at_20%_30%,rgba(10,65,58,0.22),transparent_38%),radial-gradient(circle_at_80%_70%,rgba(184,115,51,0.10),transparent_26%)]" />

      <motion.header
        className="sticky top-0 z-50 w-full border-b border-[#B87333]/20 bg-[#04131B]/70 backdrop-blur-2xl supports-[backdrop-filter]:bg-[#04131B]/55"
        initial={{ opacity: 0, y: -18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="container flex h-14 items-center justify-between px-4 md:px-6">
          <Link className="font-semibold tracking-[0.2em] text-[#D08A45]" href="#hero">
            Aman Verma
          </Link>

          <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-6 md:flex">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm text-[#D8B089]/72 transition-colors hover:text-[#E0A15A]">
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <MobileNav />
            <Button
              asChild
              variant="outline"
              className="hidden border-[#B87333]/50 bg-transparent text-[#D08A45] hover:bg-[#B87333]/10 hover:text-[#E0A15A] sm:inline-flex"
            >
              <Link href="https://drive.google.com/file/d/1m6aYlB1Al5FhzggvqSsu646bKIIvs_UV/view?usp=sharing" target="_blank">
                Resume
              </Link>
            </Button>
          </div>
        </div>
      </motion.header>

      <main className="relative pb-10">
        <section id="hero" className="relative flex min-h-screen items-center py-16 md:py-24">
          <div className="pointer-events-none absolute inset-x-[8%] inset-y-[10%] rounded-[3rem] bg-[radial-gradient(circle_at_50%_42%,rgba(224,161,90,0.18),rgba(208,138,69,0.08)_28%,transparent_70%)]" />
          <motion.div
            className="relative container mx-auto w-full px-4 md:px-6"
            initial={{ opacity: 0, y: 40, scale: 0.985 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative rounded-[2rem] border border-[#B87333]/28 bg-[linear-gradient(180deg,rgba(5,21,29,0.84),rgba(6,26,30,0.68))] px-5 py-10 shadow-2xl backdrop-blur-xl sm:px-8 md:px-14 md:py-20">
              <div className="mx-auto mb-10 max-w-3xl text-center">
                <RevealText className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-[#D08A45]/70">
                  Cinematic Scroll Story
                </RevealText>
                <RevealText className="mb-4">
                  <h2 className="copper-gradient-text text-3xl font-bold tracking-tight sm:text-4xl lg:text-6xl">Aman Verma</h2>
                </RevealText>
                <RevealText className="mx-auto max-w-2xl text-sm leading-7 text-[#D8B089]/78 sm:text-base" delay={0.08}>
                  Software engineer and cloud-focused builder creating scalable systems, intelligent products, and polished developer experiences.
                </RevealText>
              </div>
              <ParallaxSection className="space-y-10" intensity={36}>
                <div className="mx-auto max-w-4xl text-center">
                  <RevealText className="mb-6 text-lg font-medium text-[#E0A15A] sm:text-2xl">
                    Computer Science Professional
                  </RevealText>
                  <RevealText className="mx-auto max-w-3xl text-sm leading-7 text-[#D8B089]/75 sm:text-lg" delay={0.12}>
                    I design and ship products across software engineering, cloud platforms, AI workflows, and data systems,
                    blending academic depth with startup execution.
                  </RevealText>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-3">
                  {socialLinks.map((social, index) => (
                    <AnimatedCard key={social.label} delay={index * 0.06}>
                      <Button
                        asChild
                        variant="outline"
                        size="icon"
                        className="h-12 w-12 rounded-full border-[#B87333]/45 bg-[#061A1E]/45 text-[#D08A45] shadow-[0_0_24px_rgba(184,115,51,0.14)] hover:bg-[#B87333]/15 hover:text-[#E0A15A]"
                      >
                        {social.external ? (
                          <Link href={social.href} target="_blank" aria-label={social.label}>
                            <social.icon className="h-5 w-5" />
                          </Link>
                        ) : (
                          <a href={social.href} aria-label={social.label}>
                            <social.icon className="h-5 w-5" />
                          </a>
                        )}
                      </Button>
                    </AnimatedCard>
                  ))}
                </div>

                <div className="grid gap-4 md:grid-cols-3">
                  {[
                    { label: "Now", value: "WashU Satellite + TA" },
                    { label: "Focus", value: "Cloud, backend, AI systems" },
                    { label: "Style", value: "Fast, reliable, product-minded" },
                  ].map((item, index) => (
                    <AnimatedCard key={item.label} delay={0.15 + index * 0.08}>
                      <Card className="glass-card h-full rounded-2xl border-[#B87333]/25 px-5 py-6 text-center shadow-[0_18px_40px_rgba(0,0,0,0.35)]">
                        <p className="mb-2 text-xs uppercase tracking-[0.28em] text-[#D08A45]/70">{item.label}</p>
                        <p className="text-base font-semibold text-[#F0C79A]">{item.value}</p>
                      </Card>
                    </AnimatedCard>
                  ))}
                </div>
              </ParallaxSection>
            </div>
          </motion.div>
        </section>
        <RevealSection
          id="about"
        >
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <RevealText className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-[#D08A45]/70">01 / About</RevealText>
            <RevealText className="mb-4">
              <h2 className="copper-gradient-text text-3xl font-bold tracking-tight sm:text-4xl lg:text-6xl">A technical operator with product instincts.</h2>
            </RevealText>
            <RevealText className="mx-auto max-w-2xl text-sm leading-7 text-[#D8B089]/78 sm:text-base" delay={0.08}>
              I like work that feels ambitious but useful: systems that scale cleanly, interfaces that feel sharp, and engineering that turns complexity into momentum.
            </RevealText>
          </div>
          <ParallaxSection className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]" intensity={28}>
            <div className="space-y-5">
              {[
                "My background spans cloud systems, data infrastructure, full-stack products, teaching, and research-driven problem solving.",
                "That mix lets me move between architecture, implementation, and communication while still caring about shipping something people actually enjoy using.",
                "I am especially interested in premium product execution: thoughtful details, strong foundations, and experiences that feel deliberate end to end.",
              ].map((paragraph, index) => (
                <RevealText key={paragraph} className="text-sm leading-7 text-[#D8B089]/78 sm:text-base" delay={index * 0.08}>
                  {paragraph}
                </RevealText>
              ))}
            </div>

            <div className="grid gap-4">
              <AnimatedCard>
                <Card className="glass-card rounded-2xl border-[#B87333]/25 p-6">
                  <p className="mb-3 text-xs uppercase tracking-[0.25em] text-[#D08A45]/70">Leadership</p>
                  <h3 className="mb-2 text-xl font-semibold text-[#F0C79A]">Facility Lead</h3>
                  <p className="text-sm text-[#D8B089]/72">WashU Recreation Center • Sep 2024-Present</p>
                  <p className="mt-3 text-sm leading-7 text-[#D8B089]/75">
                    Manage team operations, improve day-to-day facility flow, and help staff work more effectively under pressure.
                  </p>
                </Card>
              </AnimatedCard>

              <AnimatedCard delay={0.08}>
                <Card className="glass-card rounded-2xl border-[#B87333]/25 p-6">
                  <p className="mb-3 text-xs uppercase tracking-[0.25em] text-[#D08A45]/70">Publication</p>
                  <h3 className="mb-2 text-lg font-semibold text-[#F0C79A]">
                    ML-AgriCare: Crop Predictor, Fertilizer Recommender, and Plant Disease Detector
                  </h3>
                  <p className="text-sm text-[#D8B089]/72">IEEE ICSPCRE, 2024</p>
                  <Link
                    href="https://doi.org/10.1109/ICSPCRE62303.2024.10675260"
                    target="_blank"
                    className="mt-4 inline-flex items-center gap-2 text-sm text-[#D08A45] transition-colors hover:text-[#E0A15A]"
                  >
                    View publication <ExternalLink className="h-4 w-4" />
                  </Link>
                </Card>
              </AnimatedCard>
            </div>
          </ParallaxSection>
        </RevealSection>

        <RevealSection
          id="experience"
        >
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <RevealText className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-[#D08A45]/70">02 / Experience</RevealText>
            <RevealText className="mb-4">
              <h2 className="copper-gradient-text text-3xl font-bold tracking-tight sm:text-4xl lg:text-6xl">Shipping in startups, research, and the classroom.</h2>
            </RevealText>
            <RevealText className="mx-auto max-w-2xl text-sm leading-7 text-[#D8B089]/78 sm:text-base" delay={0.08}>
              The story here is range with discipline: backend systems, cloud delivery, real products, and teaching that sharpened how I communicate engineering.
            </RevealText>
          </div>
          <ParallaxSection className="mx-auto max-w-5xl" intensity={30}>
            <div className="space-y-5">
              {experienceItems.map((item, index) => (
                <AnimatedCard key={item.title} delay={index * 0.07}>
                  <Card className="glass-card rounded-[1.75rem] border-[#B87333]/25 p-6 md:p-7">
                    <div className="mb-4 flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                      <div>
                        <h3 className="text-xl font-semibold text-[#F0C79A] md:text-2xl">{item.title}</h3>
                        <p className="mt-1 text-sm text-[#D08A45]">{item.company}</p>
                      </div>
                      <div className="text-sm text-[#D8B089]/70 md:text-right">
                        <p>{item.period}</p>
                        <p>{item.location}</p>
                      </div>
                    </div>
                    <ul className="space-y-3 text-sm leading-7 text-[#D8B089]/78">
                      {item.points.map((point) => (
                        <li key={point} className="flex gap-3">
                          <span className="mt-2 h-2 w-2 rounded-full bg-[#D08A45] shadow-[0_0_14px_rgba(208,138,69,0.75)]" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                </AnimatedCard>
              ))}
            </div>
          </ParallaxSection>
        </RevealSection>

        <RevealSection
          id="projects"
          contentClassName="md:px-8"
        >
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <RevealText className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-[#D08A45]/70">03 / Projects</RevealText>
            <RevealText className="mb-4">
              <h2 className="copper-gradient-text text-3xl font-bold tracking-tight sm:text-4xl lg:text-6xl">Built to feel fast, intelligent, and production-minded.</h2>
            </RevealText>
            <RevealText className="mx-auto max-w-2xl text-sm leading-7 text-[#D8B089]/78 sm:text-base" delay={0.08}>
              Selected work across AI, real-time systems, analytics, and full-stack product delivery.
            </RevealText>
          </div>
          <ParallaxSection className="grid gap-5 lg:grid-cols-2 xl:grid-cols-3" intensity={24}>
            {projects.map((project, index) => (
              <AnimatedCard key={project.title} delay={index * 0.05}>
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  link={project.link}
                  tags={project.tags}
                />
              </AnimatedCard>
            ))}
          </ParallaxSection>
        </RevealSection>

        <RevealSection
          id="skills"
        >
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <RevealText className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-[#D08A45]/70">04 / Skills</RevealText>
            <RevealText className="mb-4">
              <h2 className="copper-gradient-text text-3xl font-bold tracking-tight sm:text-4xl lg:text-6xl">Technical depth with broad delivery range.</h2>
            </RevealText>
            <RevealText className="mx-auto max-w-2xl text-sm leading-7 text-[#D8B089]/78 sm:text-base" delay={0.08}>
              The stack shifts by problem, but the through-line stays the same: reliable systems, thoughtful architecture, and product quality that holds up in production.
            </RevealText>
          </div>
          <ParallaxSection className="space-y-8" intensity={22}>
            <div className="grid gap-4 md:grid-cols-3">
              {[
                {
                  title: "Backend + Cloud",
                  copy: "Python, Go, Node.js, FastAPI, AWS, Docker, Kubernetes, CI/CD, and data systems built for reliability.",
                },
                {
                  title: "Product Engineering",
                  copy: "Next.js, React, Angular, TypeScript, APIs, auth, dashboards, and full-stack delivery from idea to polished UX.",
                },
                {
                  title: "AI + Data",
                  copy: "Streaming pipelines, model integrations, analytics, automation, and AI-assisted workflows with measurable impact.",
                },
              ].map((item, index) => (
                <AnimatedCard key={item.title} delay={index * 0.08}>
                  <Card className="glass-card h-full rounded-2xl border-[#B87333]/25 p-6">
                    <h3 className="mb-3 text-xl font-semibold text-[#F0C79A]">{item.title}</h3>
                    <p className="text-sm leading-7 text-[#D8B089]/76">{item.copy}</p>
                  </Card>
                </AnimatedCard>
              ))}
            </div>

            <AnimatedCard delay={0.12}>
              <div className="rounded-[1.75rem] border border-[#B87333]/25 bg-[linear-gradient(180deg,rgba(6,26,30,0.72),rgba(6,26,30,0.50))] p-2 shadow-[0_24px_60px_rgba(0,0,0,0.35)]">
                <TechStack />
              </div>
            </AnimatedCard>
          </ParallaxSection>
        </RevealSection>

        <RevealSection
          id="education"
        >
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <RevealText className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-[#D08A45]/70">05 / Education + Achievements</RevealText>
            <RevealText className="mb-4">
              <h2 className="copper-gradient-text text-3xl font-bold tracking-tight sm:text-4xl lg:text-6xl">Strong academic grounding, then real-world proof.</h2>
            </RevealText>
            <RevealText className="mx-auto max-w-2xl text-sm leading-7 text-[#D8B089]/78 sm:text-base" delay={0.08}>
              Graduate study, published research, and builder-focused milestones shape how I approach systems with both rigor and velocity.
            </RevealText>
          </div>
          <ParallaxSection className="grid gap-5 lg:grid-cols-3" intensity={24}>
            <AnimatedCard>
              <Card className="glass-card h-full rounded-2xl border-[#B87333]/25 p-6">
                <p className="mb-3 text-xs uppercase tracking-[0.25em] text-[#D08A45]/70">Education</p>
                <h3 className="text-xl font-semibold text-[#F0C79A]">Washington University in St. Louis</h3>
                <p className="mt-2 text-sm text-[#D08A45]">M.S. in Computer Science</p>
                <p className="mt-3 text-sm leading-7 text-[#D8B089]/75">
                  Expected May 2026 • St. Louis, MO
                  <br />
                  GPA: 3.48 / 4.00
                </p>
                <Link href="https://washu.edu" target="_blank" className="mt-4 inline-flex items-center gap-2 text-sm text-[#D08A45] hover:text-[#E0A15A]">
                  Visit school <ExternalLink className="h-4 w-4" />
                </Link>
              </Card>
            </AnimatedCard>

            <AnimatedCard delay={0.06}>
              <Card className="glass-card h-full rounded-2xl border-[#B87333]/25 p-6">
                <p className="mb-3 text-xs uppercase tracking-[0.25em] text-[#D08A45]/70">Education</p>
                <h3 className="text-xl font-semibold text-[#F0C79A]">SRM Institute of Science and Technology</h3>
                <p className="mt-2 text-sm text-[#D08A45]">B.Tech. in Computer Science and Engineering</p>
                <p className="mt-3 text-sm leading-7 text-[#D8B089]/75">
                  Aug 2020-May 2024 • Chennai, India
                  <br />
                  GPA: 9.14 / 10.00
                </p>
                <Link
                  href="https://www.srmist.edu.in"
                  target="_blank"
                  className="mt-4 inline-flex items-center gap-2 text-sm text-[#D08A45] hover:text-[#E0A15A]"
                >
                  Visit school <ExternalLink className="h-4 w-4" />
                </Link>
              </Card>
            </AnimatedCard>

            <AnimatedCard delay={0.12}>
              <Card className="glass-card h-full rounded-2xl border-[#B87333]/25 p-6">
                <p className="mb-3 text-xs uppercase tracking-[0.25em] text-[#D08A45]/70">Achievement</p>
                <h3 className="text-xl font-semibold text-[#F0C79A]">PerfectBuy Chrome Extension</h3>
                <p className="mt-2 text-sm text-[#D08A45]">First Runner-Up • WashU Hackathon • 350+ participants</p>
                <ul className="mt-4 space-y-3 text-sm leading-7 text-[#D8B089]/75">
                  <li>Privacy-first purchase timing assistant with event-aware price forecasting.</li>
                  <li>TypeScript + LLaMA 3.1 workflow with 90%+ prediction confidence.</li>
                  <li>Built for premium Amazon electronics purchase recommendations.</li>
                </ul>
                <Link
                  href="https://www.linkedin.com/feed/update/urn:li:activity:7389401992252649472/"
                  target="_blank"
                  className="mt-4 inline-flex items-center gap-2 text-sm text-[#D08A45] hover:text-[#E0A15A]"
                >
                  Learn more <ExternalLink className="h-4 w-4" />
                </Link>
              </Card>
            </AnimatedCard>
          </ParallaxSection>
        </RevealSection>

        <RevealSection
          id="contact"
          className="pb-0"
        >
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <RevealText className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-[#D08A45]/70">06 / Contact</RevealText>
            <RevealText className="mb-4">
              <h2 className="copper-gradient-text text-3xl font-bold tracking-tight sm:text-4xl lg:text-6xl">Let the next chapter come into focus.</h2>
            </RevealText>
            <RevealText className="mx-auto max-w-2xl text-sm leading-7 text-[#D8B089]/78 sm:text-base" delay={0.08}>
              If you are building something ambitious in software, cloud, AI, or product engineering, I would love to talk.
            </RevealText>
          </div>
          <ParallaxSection className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]" intensity={18}>
            <AnimatedCard>
              <Card className="glass-card rounded-[1.75rem] border-[#B87333]/25 p-6 md:p-8">
                <h3 className="mb-4 text-2xl font-semibold text-[#F0C79A]">Reach out directly</h3>
                <div className="space-y-4 text-sm leading-7 text-[#D8B089]/76">
                  <p>Email: <a className="text-[#D08A45] hover:text-[#E0A15A]" href="mailto:aman.v@wustl.edu">aman.v@wustl.edu</a></p>
                  <p>Phone: <a className="text-[#D08A45] hover:text-[#E0A15A]" href="tel:+13143192389">+1 (314) 319-2389</a></p>
                  <p>Based in St. Louis, open to software engineering, platform, cloud, and product-focused opportunities.</p>
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  {socialLinks.slice(0, 2).map((social) => (
                    <Button
                      key={social.label}
                      asChild
                      variant="outline"
                      className="border-[#B87333]/45 bg-transparent text-[#D08A45] hover:bg-[#B87333]/12 hover:text-[#E0A15A]"
                    >
                      <Link href={social.href} target="_blank">
                        <social.icon className="mr-2 h-4 w-4" />
                        {social.label}
                      </Link>
                    </Button>
                  ))}
                </div>
              </Card>
            </AnimatedCard>

            <AnimatedCard delay={0.08}>
              <ContactForm />
            </AnimatedCard>
          </ParallaxSection>
        </RevealSection>
      </main>

      <motion.footer
        className="relative z-10 border-t border-[#B87333]/20 bg-[#04131B]/65"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div className="container flex flex-col gap-2 px-4 py-5 text-xs text-[#D08A45]/60 sm:flex-row sm:items-center sm:justify-between md:px-6">
          <p>© 2025 Aman Verma. All rights reserved.</p>
          <p>Designed as a spotlight-driven portfolio story.</p>
        </div>
      </motion.footer>
    </div>
  )
}
