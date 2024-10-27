// File: src/pages/api/contact.js
import { NextResponse } from 'next/server'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  try {
    const { name, email, phone, message } = req.body

    // Here you would typically integrate with your email service
    // Example using environment variables for configuration
    const emailData = {
      to: process.env.CONTACT_EMAIL,
      subject: `Nuovo messaggio da ${name}`,
      text: `
        Nome: ${name}
        Email: ${email}
        Telefono: ${phone}
        Messaggio: ${message}
      `
    }

    // For demo purposes, just log and return success
    console.log('Email data:', emailData)

    return res.status(200).json({ message: 'Message sent successfully' })
  } catch (error) {
    console.error('Contact form error:', error)
    return res.status(500).json({ message: 'Error sending message' })
  }
}
