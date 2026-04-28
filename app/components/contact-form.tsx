"use client"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"
import { submitContactForm } from "../actions"
import { motion } from "framer-motion"

export default function ContactForm() {
  const [pending, setPending] = useState(false)
  const [message, setMessage] = useState("")

  async function handleSubmit(formData: FormData) {
    setPending(true)
    try {
      const response = await submitContactForm(formData)
      setMessage(response.message)
    } catch (error) {
      setMessage("Something went wrong. Please try again.")
    } finally {
      setPending(false)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Card className="p-6 max-w-md mx-auto glass-card copper-border-glow">
        <motion.form action={handleSubmit} className="space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            <label htmlFor="name" className="block text-sm font-medium mb-2 text-[#D08A45]">
              Name
            </label>
            <Input id="name" name="name" required className="bg-[#061A1E]/50 border-[#B87333]/30 focus:border-[#D08A45] focus:ring-[#B87333]/20" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <label htmlFor="email" className="block text-sm font-medium mb-2 text-[#D08A45]">
              Email
            </label>
            <Input id="email" name="email" type="email" required className="bg-[#061A1E]/50 border-[#B87333]/30 focus:border-[#D08A45] focus:ring-[#B87333]/20" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            <label htmlFor="message" className="block text-sm font-medium mb-2 text-[#D08A45]">
              Message
            </label>
            <Textarea id="message" name="message" required className="max-w-lg bg-[#061A1E]/50 border-[#B87333]/30 focus:border-[#D08A45] focus:ring-[#B87333]/20" />
          </motion.div>
          <motion.div
            className="flex justify-center pt-2"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.button
              type="submit"
              disabled={pending}
              whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(184, 115, 51, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center px-8 py-2 rounded-full border-2 border-[#B87333] text-[#D08A45] font-medium bg-transparent hover:bg-[#B87333]/20 disabled:opacity-50 transition-all duration-300"
              style={{ boxShadow: "0 0 15px rgba(184, 115, 51, 0.3)" }}
            >
              {pending ? "Sending..." : "Send Message"}
            </motion.button>
          </motion.div>
          {message && (
            <motion.p
              className="text-sm text-center mt-4 text-[#D08A45]/70"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {message}
            </motion.p>
          )}
        </motion.form>
      </Card>
    </motion.div>
  )
}
