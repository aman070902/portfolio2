"use client"

import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  link: string
  tags: string[]
}

export default function ProjectCard({ title, description, image, link, tags }: ProjectCardProps) {
  return (
    <motion.div 
      whileHover={{ y: -5, boxShadow: "0 0 30px rgba(184, 115, 51, 0.3)" }} 
      transition={{ duration: 0.3 }}
    >
      <Card className="overflow-hidden h-full glass-card border-[#B87333]/30 hover:border-[#D08A45]/50 transition-all duration-300">
        <motion.div className="relative aspect-video" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
          <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#061A1E]/80 to-transparent" />
        </motion.div>
        <CardContent className="p-4">
          <motion.h3
            className="font-semibold text-xl mb-2 text-[#D08A45]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            {title}
          </motion.h3>
          <motion.p
            className="text-sm text-[#B87333]/70 mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            {description}
          </motion.p>
          <motion.div
            className="flex flex-wrap gap-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            {tags.map((tag) => (
              <motion.span
                key={tag}
                className="inline-flex items-center rounded-md bg-[#B87333]/10 px-2 py-1 text-xs font-medium text-[#D08A45] ring-1 ring-inset ring-[#B87333]/30"
                whileHover={{ scale: 1.1, boxShadow: "0 0 10px rgba(184, 115, 51, 0.3)" }}
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>
        </CardContent>
        <CardFooter className="p-4 pt-0">
          <motion.div whileHover={{ x: 5 }}>
            <Link href={link} target="_blank" className="inline-flex items-center gap-2 text-sm text-[#D08A45] hover:text-[#E0A15A] hover:underline transition-colors">
              <Github className="h-4 w-4" />
              View Project
            </Link>
          </motion.div>
        </CardFooter>
      </Card>
    </motion.div>
  )
}
