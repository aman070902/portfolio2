"use client"

import { useEffect, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

const techLogos = [
  { name: "Python", slug: "python", className: "left-[6%] top-[10%] h-16 w-16", delay: 0, duration: 18, x: [0, 34, -18, 0], y: [0, -28, 22, 0], rotate: [0, 8, -6, 0] },
  { name: "JavaScript", slug: "javascript", className: "right-[7%] top-[12%] h-20 w-20", delay: 1.2, duration: 20, x: [0, -38, 18, 0], y: [0, 24, -30, 0], rotate: [0, -10, 7, 0] },
  { name: "TypeScript", slug: "typescript", className: "left-[14%] top-[34%] h-20 w-20", delay: 0.8, duration: 17, x: [0, 22, -26, 0], y: [0, -20, 28, 0], rotate: [0, 6, -8, 0] },
  { name: "React", slug: "react", className: "right-[13%] top-[38%] h-24 w-24", delay: 1.8, duration: 22, x: [0, -28, 36, 0], y: [0, -34, 18, 0], rotate: [0, 18, -14, 0] },
  { name: "Next.js", slug: "nextdotjs", className: "left-[7%] top-[62%] h-20 w-20", delay: 2.4, duration: 21, x: [0, 38, -14, 0], y: [0, 18, -28, 0], rotate: [0, -5, 8, 0] },
  { name: "Node.js", slug: "nodedotjs", className: "right-[8%] top-[66%] h-20 w-20", delay: 1.1, duration: 19, x: [0, -24, 32, 0], y: [0, -22, 24, 0], rotate: [0, 7, -7, 0] },
  { name: "Java", slug: "openjdk", className: "left-[32%] top-[22%] h-16 w-16", delay: 3, duration: 23, x: [0, 18, -34, 0], y: [0, 28, -18, 0], rotate: [0, -8, 5, 0] },
  { name: "AWS", slug: "amazonaws", className: "right-[30%] top-[26%] h-20 w-20", delay: 2.1, duration: 24, x: [0, -34, 20, 0], y: [0, -20, 32, 0], rotate: [0, 5, -9, 0] },
  { name: "Docker", slug: "docker", className: "left-[26%] top-[74%] h-16 w-16", delay: 1.6, duration: 18, x: [0, 24, -28, 0], y: [0, -26, 16, 0], rotate: [0, 6, -5, 0] },
  { name: "Kubernetes", slug: "kubernetes", className: "right-[28%] top-[78%] h-20 w-20", delay: 0.4, duration: 20, x: [0, -20, 28, 0], y: [0, 22, -20, 0], rotate: [0, -7, 9, 0] },
  { name: "PostgreSQL", slug: "postgresql", className: "left-[45%] top-[52%] h-20 w-20", delay: 2.8, duration: 25, x: [0, 28, -24, 0], y: [0, -18, 30, 0], rotate: [0, 4, -6, 0] },
  { name: "Apache Kafka", slug: "apachekafka", className: "right-[42%] top-[58%] h-16 w-16", delay: 3.4, duration: 22, x: [0, -30, 18, 0], y: [0, 26, -24, 0], rotate: [0, -5, 7, 0] },
  { name: "MongoDB", slug: "mongodb", className: "left-[58%] top-[16%] h-16 w-16", delay: 2.7, duration: 24, x: [0, 22, -30, 0], y: [0, -24, 18, 0], rotate: [0, 8, -8, 0] },
  { name: "GitHub", slug: "github", className: "right-[56%] top-[82%] h-16 w-16", delay: 1.9, duration: 21, x: [0, -26, 18, 0], y: [0, 18, -24, 0], rotate: [0, -7, 7, 0] },
]

export default function ParallaxBackground() {
  const [isMobile, setIsMobile] = useState(false)
  const { scrollYProgress } = useScroll()

  useEffect(() => {
    const media = window.matchMedia("(max-width: 767px)")
    const onChange = () => setIsMobile(media.matches)
    onChange()
    media.addEventListener("change", onChange)
    return () => media.removeEventListener("change", onChange)
  }, [])

  const farY = useTransform(scrollYProgress, [0, 1], ["0%", isMobile ? "-12%" : "-26%"])
  const midY = useTransform(scrollYProgress, [0, 1], ["0%", isMobile ? "-20%" : "-40%"])
  const frontY = useTransform(scrollYProgress, [0, 1], ["0%", isMobile ? "-30%" : "-56%"])

  const logoLayerY = useTransform(scrollYProgress, [0, 1], ["0%", isMobile ? "-18%" : "-36%"])
  const logoLayerX = useTransform(scrollYProgress, [0, 1], ["0%", isMobile ? "2%" : "6%"])
  const logoLayerRotate = useTransform(scrollYProgress, [0, 1], [0, isMobile ? 2 : 5])
  const logoOpacity = useTransform(scrollYProgress, [0, 0.16, 0.72, 1], [0.34, 0.46, 0.34, 0.26])

  const heroBlobY = useTransform(scrollYProgress, [0, 0.4, 1], ["0%", isMobile ? "-14%" : "-30%", isMobile ? "-24%" : "-50%"])
  const heroBlobX = useTransform(scrollYProgress, [0, 1], ["0%", isMobile ? "5%" : "11%"])
  const heroBlobScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.16, 1.28])

  const orb2Y = useTransform(scrollYProgress, [0, 0.65, 1], ["0%", isMobile ? "-10%" : "-24%", isMobile ? "-18%" : "-38%"])
  const orb2X = useTransform(scrollYProgress, [0, 1], ["0%", isMobile ? "-4%" : "-12%"])
  const orb2Rotate = useTransform(scrollYProgress, [0, 1], [0, isMobile ? -4 : -8])

  const lineY = useTransform(scrollYProgress, [0, 1], ["0%", isMobile ? "-16%" : "-34%"])
  const lineX = useTransform(scrollYProgress, [0, 1], ["0%", isMobile ? "2%" : "7%"])

  const expProjCardY = useTransform(scrollYProgress, [0.2, 0.55, 1], ["4%", "-15%", "-28%"])
  const expProjCardX = useTransform(scrollYProgress, [0, 1], ["0%", isMobile ? "3%" : "8%"])
  const expProjCardRotate = useTransform(scrollYProgress, [0, 1], [0, isMobile ? 2 : 5])

  const expProjLineY = useTransform(scrollYProgress, [0.25, 0.7, 1], ["12%", "-10%", "-26%"])
  const expProjLineX = useTransform(scrollYProgress, [0, 1], ["0%", isMobile ? "-3%" : "-9%"])

  const gridY = useTransform(scrollYProgress, [0, 1], ["0%", isMobile ? "-6%" : "-14%"])
  const particleY = useTransform(scrollYProgress, [0, 1], ["0%", isMobile ? "-14%" : "-28%"])
  const skillChipY = useTransform(scrollYProgress, [0.45, 0.8, 1], ["12%", "-12%", "-24%"])
  const skillChipX = useTransform(scrollYProgress, [0, 1], ["0%", isMobile ? "2%" : "5%"])
  const skillChipOpacity = useTransform(scrollYProgress, [0.4, 0.62, 0.86, 1], [0.05, 0.18, 0.13, 0.07])

  const contactSpotlightOpacity = useTransform(scrollYProgress, [0.72, 0.9, 1], [0.1, 0.25, 0.36])
  const contactSpotlightScale = useTransform(scrollYProgress, [0.72, 1], [0.86, 1.2])

  const visibleTechLogos = isMobile ? techLogos.slice(0, 6) : techLogos

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <motion.div
        className="absolute inset-0 opacity-[0.26]"
        style={{
          y: farY,
          background:
            "radial-gradient(circle at 20% 12%, rgba(224,161,90,0.2), transparent 35%), radial-gradient(circle at 82% 20%, rgba(10,65,58,0.3), transparent 42%), radial-gradient(circle at 60% 82%, rgba(184,115,51,0.16), transparent 38%)",
        }}
      />

      <motion.div
        className="absolute inset-0 opacity-[0.22]"
        style={{
          y: midY,
          background:
            "linear-gradient(125deg, transparent 0%, rgba(184,115,51,0.16) 28%, transparent 52%), linear-gradient(210deg, transparent 10%, rgba(6,48,58,0.24) 46%, transparent 78%)",
        }}
      />

      <motion.div
        className="absolute -left-28 top-[5%] h-[38rem] w-[38rem] rounded-full"
        style={{
          x: heroBlobX,
          y: heroBlobY,
          scale: heroBlobScale,
          opacity: isMobile ? 0.2 : 0.34,
          background:
            "radial-gradient(circle, rgba(208,138,69,0.38) 0%, rgba(184,115,51,0.2) 38%, transparent 74%)",
        }}
      />
      {!isMobile ? (
        <motion.div
          className="absolute right-[-13rem] top-[34%] h-[34rem] w-[34rem] rounded-full"
          style={{
            x: orb2X,
            y: orb2Y,
            rotate: orb2Rotate,
            opacity: 0.26,
            background:
              "radial-gradient(circle, rgba(8,74,68,0.32) 0%, rgba(8,74,68,0.17) 42%, transparent 74%)",
          }}
        />
      ) : null}

      <motion.div
        className="absolute inset-0 opacity-[0.18]"
        style={{
          x: lineX,
          y: lineY,
          background:
            "repeating-linear-gradient(116deg, transparent 0 60px, rgba(224,161,90,0.16) 60px 62px, transparent 62px 124px)",
        }}
      />

      <motion.div
        className="absolute inset-0 z-[2] mix-blend-multiply contrast-150 brightness-75"
        style={{ x: logoLayerX, y: logoLayerY, rotate: logoLayerRotate, opacity: logoOpacity }}
      >
        {visibleTechLogos.map((logo) => (
          <motion.div
            key={logo.name}
            className={`absolute select-none ${logo.className}`}
            animate={{ x: logo.x, y: logo.y, rotate: logo.rotate }}
            transition={{
              duration: isMobile ? logo.duration + 6 : logo.duration,
              delay: logo.delay,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
          >
            <img
              src={`https://cdn.simpleicons.org/${logo.slug}/000000`}
              alt={logo.name}
              className="h-full w-full object-contain opacity-100 [filter:brightness(0)_contrast(2)_drop-shadow(0_0_8px_rgba(0,0,0,0.75))]"
              draggable={false}
            />
          </motion.div>
        ))}
      </motion.div>

      {!isMobile ? (
        <>
          <motion.div
            className="absolute left-[9%] top-[42%] h-52 w-72 rounded-3xl border border-[#B87333]/35"
            style={{
              x: expProjCardX,
              y: expProjCardY,
              rotate: expProjCardRotate,
              opacity: 0.2,
              background:
                "linear-gradient(135deg, rgba(224,161,90,0.17), rgba(184,115,51,0.05) 45%, rgba(0,0,0,0.0))",
            }}
          />
          <motion.div
            className="absolute right-[8%] top-[50%] h-40 w-56 rounded-[2rem] border border-[#B87333]/30"
            style={{
              x: expProjLineX,
              y: expProjLineY,
              opacity: 0.16,
              background:
                "linear-gradient(145deg, rgba(10,65,58,0.22), rgba(10,65,58,0.05) 55%, rgba(0,0,0,0))",
            }}
          />
        </>
      ) : null}

      <motion.div
        className="absolute inset-0 opacity-[0.14]"
        style={{
          y: gridY,
          background:
            "linear-gradient(rgba(216,176,137,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(216,176,137,0.08) 1px, transparent 1px)",
          backgroundSize: isMobile ? "64px 64px" : "52px 52px",
        }}
      />

      <motion.div
        className="absolute inset-0 opacity-[0.18]"
        style={{
          y: particleY,
          backgroundImage:
            "radial-gradient(circle at 12% 22%, rgba(224,161,90,0.3) 1px, transparent 2px), radial-gradient(circle at 74% 18%, rgba(208,138,69,0.28) 1px, transparent 2px), radial-gradient(circle at 44% 78%, rgba(224,161,90,0.22) 1px, transparent 2px), radial-gradient(circle at 88% 70%, rgba(184,115,51,0.22) 1px, transparent 2px)",
        }}
      />

      <motion.div
        className="absolute inset-0"
        style={{
          x: skillChipX,
          y: skillChipY,
          opacity: skillChipOpacity,
          background:
            "repeating-radial-gradient(circle at 15% 65%, rgba(224,161,90,0.35) 0 5px, transparent 5px 38px), repeating-radial-gradient(circle at 78% 38%, rgba(184,115,51,0.3) 0 4px, transparent 4px 34px)",
        }}
      />

      <motion.div
        className="absolute inset-0 opacity-[0.12]"
        style={{
          y: frontY,
          background:
            "linear-gradient(155deg, transparent 0%, rgba(224,161,90,0.15) 38%, transparent 70%), linear-gradient(320deg, transparent 8%, rgba(8,74,68,0.18) 54%, transparent 84%)",
        }}
      />

      <motion.div
        className="absolute inset-0"
        style={{
          opacity: contactSpotlightOpacity,
          scale: contactSpotlightScale,
          background:
            "radial-gradient(circle at 50% 78%, rgba(224,161,90,0.38) 0%, rgba(184,115,51,0.2) 32%, transparent 70%)",
        }}
      />
    </div>
  )
}
