"use client"

import type { ReactNode } from "react"
import { useEffect, useRef, useState } from "react"
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion"

import { cn } from "@/lib/utils"

type ScrollSpotlightSectionProps = {
  id: string
  eyebrow?: string
  title: string
  description?: string
  children: ReactNode
  className?: string
  contentClassName?: string
}

type ParallaxSectionProps = {
  children: ReactNode
  className?: string
  intensity?: number
}

type RevealTextProps = {
  children: ReactNode
  className?: string
  delay?: number
}

type AnimatedCardProps = {
  children: ReactNode
  className?: string
  delay?: number
}

type RevealSectionProps = {
  id: string
  children: ReactNode
  className?: string
  contentClassName?: string
}

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)")
    const update = () => setIsMobile(mediaQuery.matches)

    update()
    mediaQuery.addEventListener("change", update)

    return () => mediaQuery.removeEventListener("change", update)
  }, [])

  return isMobile
}

export function RevealText({ children, className, delay = 0 }: RevealTextProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

export function AnimatedCard({ children, className, delay = 0 }: AnimatedCardProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 40, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6, scale: 1.01 }}
    >
      {children}
    </motion.div>
  )
}

export function ParallaxSection({ children, className, intensity = 50 }: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const reduceMotion = useReducedMotion()
  const isMobile = useIsMobile()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    reduceMotion || isMobile ? [12, 0, -12] : [intensity, 0, -intensity],
  )

  return (
    <motion.div ref={ref} className={className} style={{ y }}>
      {children}
    </motion.div>
  )
}

export function ScrollStory({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("relative", className)}>{children}</div>
}

export function RevealSection({ id, children, className, contentClassName }: RevealSectionProps) {
  const ref = useRef<HTMLElement>(null)
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 85%", "end 15%"],
  })

  const progress = useSpring(scrollYProgress, {
    stiffness: reduceMotion ? 220 : 140,
    damping: reduceMotion ? 34 : 26,
    mass: 0.45,
  })

  const exitOpacity = useTransform(progress, [0, 0.5, 1], [0, 1, 0.35])
  const exitY = useTransform(progress, [0, 0.5, 1], [80, 0, -40])
  const exitScale = useTransform(progress, [0, 0.5, 1], [0.97, 1, 0.98])
  const spotlightOpacity = useTransform(progress, [0, 0.5, 1], [0.08, 0.24, 0.1])
  const borderColor = useTransform(progress, [0, 0.5, 1], [
    "rgba(184,115,51,0.24)",
    "rgba(184,115,51,0.52)",
    "rgba(184,115,51,0.28)",
  ])
  const panelShadow = useTransform(progress, [0, 0.5, 1], [
    "0 12px 42px rgba(0,0,0,0.20)",
    "0 26px 90px rgba(184,115,51,0.10), inset 0 1px 0 rgba(224,161,90,0.10)",
    "0 12px 42px rgba(0,0,0,0.20)",
  ])

  return (
    <section id={id} ref={ref} className={cn("relative flex min-h-screen items-center py-16 md:py-24", className)}>
      <div className="relative w-full">
        <motion.div
          className="pointer-events-none absolute inset-x-[8%] inset-y-[10%] rounded-[3rem]"
          style={{
            opacity: spotlightOpacity,
            background:
              "radial-gradient(circle at 50% 45%, rgba(224,161,90,0.20) 0%, rgba(208,138,69,0.10) 24%, rgba(184,115,51,0.04) 44%, transparent 72%)",
          }}
        />
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 80, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ amount: 0.45, once: false }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          style={{ opacity: exitOpacity, y: exitY, scale: exitScale }}
        >
          <div className="relative container mx-auto w-full px-4 md:px-6">
            <motion.div
              className={cn(
                "relative overflow-hidden rounded-[2rem] border border-[#B87333]/25 bg-[linear-gradient(180deg,rgba(0,0,0,0.48),rgba(0,0,0,0.68)),linear-gradient(180deg,rgba(5,21,29,0.78),rgba(6,26,30,0.62))] px-5 py-10 shadow-2xl backdrop-blur-xl sm:px-8 md:px-10 md:py-14",
                contentClassName,
              )}
              style={{
                borderColor,
                boxShadow: panelShadow,
              }}
            >
              {children}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export function ScrollSpotlightSection({
  id,
  eyebrow,
  title,
  description,
  children,
  className,
  contentClassName,
}: ScrollSpotlightSectionProps) {
  return (
    <RevealSection id={id} className={className} contentClassName={contentClassName}>
      {(eyebrow || title || description) && (
        <div className="mx-auto mb-10 max-w-3xl text-center">
          {eyebrow ? (
            <RevealText className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-[#D08A45]/70">
              {eyebrow}
            </RevealText>
          ) : null}
          <RevealText className="mb-4">
            <h2 className="copper-gradient-text text-3xl font-bold tracking-tight sm:text-4xl lg:text-6xl">
              {title}
            </h2>
          </RevealText>
          {description ? (
            <RevealText className="mx-auto max-w-2xl text-sm leading-7 text-[#D8B089]/78 sm:text-base" delay={0.08}>
              {description}
            </RevealText>
          ) : null}
        </div>
      )}
      {children}
    </RevealSection>
  )
}

export const SpotlightSection = ScrollSpotlightSection
