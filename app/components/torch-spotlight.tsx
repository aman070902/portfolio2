"use client"

import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { useEffect, useState, useRef } from "react"

export default function TorchSpotlight() {
  const [mounted, setMounted] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll()
  
  // Smooth spring animation for torch movement
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  // Transform scroll progress to torch position
  const torchY = useTransform(smoothProgress, [0, 1], [100, 85])
  const torchX = useTransform(smoothProgress, [0, 0.5, 1], [85, 90, 85])
  
  // Light beam intensity based on scroll
  const beamIntensity = useTransform(smoothProgress, [0, 0.2, 0.5, 0.8, 1], [1, 1.2, 1.1, 1.3, 1])
  const beamScale = useTransform(smoothProgress, [0, 0.5, 1], [1, 1.15, 1.1])
  
  // Flame flicker effect
  const [flameOffset, setFlameOffset] = useState(0)
  
  useEffect(() => {
    setMounted(true)
    const interval = setInterval(() => {
      setFlameOffset(Math.random() * 4 - 2)
    }, 100)
    return () => clearInterval(interval)
  }, [])

  if (!mounted) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-40 overflow-hidden">
      {/* Main spotlight cone from torch */}
      <motion.div
        className="absolute"
        style={{
          right: "2%",
          top: torchY,
          y: "-50%",
        }}
      >
        {/* Light rays emanating from torch */}
        <motion.div
          className="absolute"
          style={{
            width: "200vw",
            height: "200vh",
            background: `
              conic-gradient(
                from 200deg at 0% 50%,
                transparent 0deg,
                rgba(208, 138, 69, 0.03) 10deg,
                rgba(184, 115, 51, 0.08) 25deg,
                rgba(224, 161, 90, 0.12) 40deg,
                rgba(184, 115, 51, 0.08) 55deg,
                rgba(208, 138, 69, 0.03) 70deg,
                transparent 80deg,
                transparent 360deg
              )
            `,
            transform: "translateX(-5%)",
            opacity: beamIntensity,
            scale: beamScale,
          }}
        />
        
        {/* Secondary softer glow */}
        <motion.div
          className="absolute"
          style={{
            width: "150vw",
            height: "150vh",
            background: `
              radial-gradient(
                ellipse 80% 60% at 0% 50%,
                rgba(208, 138, 69, 0.15) 0%,
                rgba(184, 115, 51, 0.08) 30%,
                transparent 70%
              )
            `,
            transform: "translateX(-10%)",
            opacity: beamIntensity,
          }}
        />
      </motion.div>

      {/* 3D Torch element */}
      <motion.div
        className="absolute"
        style={{
          right: torchX,
          top: torchY,
          x: "50%",
          y: "-50%",
        }}
      >
        {/* Torch body - 3D effect */}
        <div className="relative" style={{ transform: "perspective(500px) rotateY(-15deg)" }}>
          {/* Torch handle */}
          <div 
            className="absolute w-4 h-24 rounded-b-lg"
            style={{
              background: "linear-gradient(90deg, #4a3728 0%, #6b4d38 30%, #8b6a4a 50%, #6b4d38 70%, #4a3728 100%)",
              boxShadow: "inset -2px 0 4px rgba(0,0,0,0.5), inset 2px 0 4px rgba(139,106,74,0.3)",
              top: "60px",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          />
          
          {/* Metal band on torch */}
          <div 
            className="absolute w-6 h-3 rounded-sm"
            style={{
              background: "linear-gradient(90deg, #B87333 0%, #D08A45 30%, #E0A15A 50%, #D08A45 70%, #B87333 100%)",
              boxShadow: "0 0 10px rgba(184, 115, 51, 0.5)",
              top: "55px",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          />
          
          {/* Torch top / fire bowl */}
          <div 
            className="absolute w-10 h-8 rounded-t-lg"
            style={{
              background: "linear-gradient(180deg, #2a1a0f 0%, #4a3728 50%, #6b4d38 100%)",
              boxShadow: "inset 0 4px 8px rgba(208, 138, 69, 0.3)",
              top: "25px",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          />
          
          {/* Fire/Flame effect */}
          <motion.div
            className="absolute"
            style={{
              width: "30px",
              height: "40px",
              top: "-5px",
              left: "50%",
              transform: `translateX(-50%) translateX(${flameOffset}px)`,
            }}
          >
            {/* Outer flame */}
            <motion.div
              animate={{
                scale: [1, 1.1, 0.95, 1.05, 1],
                opacity: [0.8, 1, 0.9, 1, 0.8],
              }}
              transition={{
                duration: 0.5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                background: `
                  radial-gradient(ellipse 50% 80% at 50% 90%,
                    rgba(255, 200, 100, 1) 0%,
                    rgba(255, 150, 50, 0.9) 20%,
                    rgba(208, 138, 69, 0.7) 40%,
                    rgba(184, 115, 51, 0.4) 60%,
                    transparent 80%
                  )
                `,
                filter: "blur(2px)",
                borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%",
              }}
            />
            
            {/* Inner bright flame */}
            <motion.div
              animate={{
                scale: [0.9, 1.05, 0.95, 1, 0.9],
                y: [0, -3, 1, -2, 0],
              }}
              transition={{
                duration: 0.3,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              style={{
                position: "absolute",
                width: "60%",
                height: "70%",
                left: "20%",
                top: "15%",
                background: `
                  radial-gradient(ellipse 50% 70% at 50% 85%,
                    rgba(255, 255, 200, 1) 0%,
                    rgba(255, 220, 150, 0.9) 30%,
                    rgba(255, 180, 100, 0.6) 60%,
                    transparent 100%
                  )
                `,
                filter: "blur(1px)",
                borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%",
              }}
            />
            
            {/* Glow around flame */}
            <motion.div
              animate={{
                opacity: [0.5, 0.8, 0.6, 0.7, 0.5],
                scale: [1, 1.2, 1.1, 1.15, 1],
              }}
              transition={{
                duration: 0.4,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              style={{
                position: "absolute",
                width: "200%",
                height: "200%",
                left: "-50%",
                top: "-50%",
                background: `
                  radial-gradient(circle at 50% 60%,
                    rgba(208, 138, 69, 0.4) 0%,
                    rgba(184, 115, 51, 0.2) 30%,
                    transparent 60%
                  )
                `,
                filter: "blur(8px)",
              }}
            />
          </motion.div>
          
          {/* Sparks */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-yellow-300"
              animate={{
                y: [-10, -40 - i * 10],
                x: [(i - 2) * 3, (i - 2) * 8],
                opacity: [1, 0],
                scale: [1, 0.3],
              }}
              transition={{
                duration: 0.8 + i * 0.2,
                repeat: Infinity,
                delay: i * 0.15,
                ease: "easeOut",
              }}
              style={{
                left: "50%",
                top: "0",
                boxShadow: "0 0 4px rgba(255, 200, 100, 0.8)",
              }}
            />
          ))}
        </div>
      </motion.div>

      {/* Ambient light overlay that follows scroll */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(
              ellipse 100% 50% at 100% 50%,
              rgba(208, 138, 69, 0.05) 0%,
              transparent 50%
            )
          `,
          opacity: beamIntensity,
        }}
      />
    </div>
  )
}
