"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { SplitFlapText, SplitFlapAudioProvider, SplitFlapMuteToggle } from "./split-flap-text"

gsap.registerPlugin(ScrollTrigger)

export function HeroSection() {
  return (
    <SplitFlapAudioProvider>
      <HeroContent />
    </SplitFlapAudioProvider>
  )
}

function HeroContent() {
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current || !contentRef.current || !gridRef.current) return

    const ctx = gsap.context(() => {
      // Parallax effect - content fades out and comes back when scrolling up
      gsap.fromTo(
        contentRef.current,
        { y: 0, opacity: 1 },
        {
          y: -100,
          opacity: 0,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "50% top",
            scrub: true,
          },
        }
      )

      // Grid moves slower for parallax depth
      gsap.fromTo(
        gridRef.current,
        { y: 0 },
        {
          y: -30,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  }

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background grid with parallax */}
      <div
        ref={gridRef}
        className="absolute inset-0 grid-bg opacity-20"
        aria-hidden="true"
      />

      {/* Floating tech particles - very subtle */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <motion.div
          className="absolute top-[20%] left-[10%] w-2 h-2 bg-accent/20 rounded-full"
          animate={{ y: [0, -20, 0], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-[40%] right-[15%] w-1 h-1 bg-accent/30 rounded-full"
          animate={{ y: [0, -15, 0], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.div
          className="absolute bottom-[30%] left-[20%] w-1.5 h-1.5 bg-accent/15 rounded-full"
          animate={{ y: [0, -25, 0], opacity: [0.15, 0.3, 0.15] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        <motion.div
          className="absolute top-[60%] right-[25%] w-1 h-1 bg-foreground/10 rounded-full"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />
      </div>

      {/* Main content */}
      <motion.div
        ref={contentRef}
        className="relative z-10 text-center px-6 max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Name - split flap animation */}
        <motion.div variants={itemVariants}>
          <h1 className="sr-only">AMAN VERMA</h1>
          <div className="flex flex-col items-center gap-2 md:gap-4">
            <SplitFlapText text="AMAN" speed={45} />
            <SplitFlapText text="VERMA" speed={45} />
          </div>
        </motion.div>

        {/* Sound toggle */}
        <motion.div variants={itemVariants} className="mt-4">
          <SplitFlapMuteToggle />
        </motion.div>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="mt-6 font-mono text-sm md:text-base tracking-[0.3em] text-accent uppercase"
        >
          Software Engineer &bull; Backend &bull; Cloud &bull; Systems
        </motion.p>

        {/* Intro line */}
        <motion.p
          variants={itemVariants}
          className="mt-12 max-w-2xl mx-auto font-sans text-lg md:text-xl text-muted-foreground leading-relaxed"
        >
          I build scalable systems, real-time platforms, and production-ready software.
        </motion.p>

        {/* CTA */}
        <motion.div variants={itemVariants} className="mt-16 flex items-center justify-center gap-8">
          <a
            href="#experience"
            className="group inline-flex items-center gap-3 border border-accent/50 px-8 py-4 font-mono text-xs uppercase tracking-[0.2em] text-accent hover:bg-accent hover:text-background transition-all duration-500"
          >
            View Experience
            <svg
              className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="#projects"
            className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors duration-300"
          >
            Projects
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <motion.div
          className="w-6 h-10 border border-muted-foreground/30 rounded-full flex justify-center"
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-2 bg-accent rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
