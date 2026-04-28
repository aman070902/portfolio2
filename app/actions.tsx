"use server"

import { Resend } from "resend"

export async function submitContactForm(formData: FormData) {
  const name = formData.get("name")
  const email = formData.get("email")
  const message = formData.get("message")

  try {
    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      console.error("RESEND_API_KEY environment variable is not set")
      return {
        message: "Email service is not configured. Please try again later.",
      }
    }

    const resend = new Resend(apiKey)

    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "aman.vrm709@gmail.com",
      subject: `Portfolio Contact: Message from ${name}`,
      html: `
        <h2>New Contact Form Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
    })

    return {
      message: "Thanks for your message! I'll get back to you soon.",
    }
  } catch (error) {
    console.error("Error sending email:", error)
    return {
      message: "Something went wrong. Please try again.",
    }
  }
}
