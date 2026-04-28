import { Card } from "@/components/ui/card"
import { motion } from "framer-motion"

const technologies = [
  {
    category: "Languages",
    skills: [
      "C++",
      "C",
      "Python",
      "C#",
      "Java",
      "Go",
      "SQL",
      "JavaScript",
      "TypeScript",
      "Rust",
      "Linux",
    ],
  },
  {
    category: "Embedded & Systems",
    skills: ["OOP", "Embedded Development", "Controller Validation", "System Testing", "Data Structures"],
  },
  {
    category: "Cloud & Tools",
    skills: ["AWS", "Docker", "Kubernetes", "Git/GitHub", "CI/CD", "Azure", "GCP", "PostgreSQL", "MySQL", "MongoDB"],
  },
]

export default function TechStack() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {technologies.map((tech, index) => (
        <motion.div
          key={tech.category}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
          viewport={{ once: true }}
          whileHover={{ y: -5, boxShadow: "0 0 25px rgba(184, 115, 51, 0.25)" }}
        >
          <Card className="p-6 glass-card border-[#B87333]/30 hover:border-[#D08A45]/50 transition-all duration-300">
            <h3 className="text-lg font-semibold mb-4 text-[#D08A45] copper-gradient-text">{tech.category}</h3>
            <div className="flex flex-wrap gap-2">
              {tech.skills.map((skill) => (
                <motion.span
                  key={skill}
                  whileHover={{ scale: 1.1, boxShadow: "0 0 12px rgba(184, 115, 51, 0.4)" }}
                  className="inline-flex items-center rounded-md bg-[#B87333]/10 px-2 py-1 text-sm font-medium text-[#D08A45] ring-1 ring-inset ring-[#B87333]/30 transition-all duration-200"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}
