'use server'

import { Resend } from 'resend'

export type ContactState = {
  status: 'idle' | 'success' | 'error'
  message: string
}

export async function submitContact(
  _prevState: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const fullName = String(formData.get('fullName') ?? '').trim()
  const company = String(formData.get('company') ?? '').trim()
  const email = String(formData.get('email') ?? '').trim()
  const phone = String(formData.get('phone') ?? '').trim()
  const service = String(formData.get('service') ?? '').trim()
  const message = String(formData.get('message') ?? '').trim()

  if (!fullName || !email || !message) {
    return {
      status: 'error',
      message: 'Please complete your name, email address, and message.',
    }
  }

  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  if (!emailValid) {
    return { status: 'error', message: 'Please enter a valid email address.' }
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.log('[v0] RESEND_API_KEY missing — enquiry not emailed:', { fullName, email })
    return {
      status: 'error',
      message: 'The contact service is not configured yet. Please email us directly at info@devhulon.co.za.',
    }
  }

  // Recipient defaults to the Devhulon inbox; override with CONTACT_EMAIL if set.
  const to = process.env.CONTACT_EMAIL || 'info@devhulon.co.za'
  // Use a verified sending domain if provided, else Resend's shared test sender.
  const from = process.env.CONTACT_FROM_EMAIL || 'Devhulon Website <onboarding@resend.dev>'

  try {
    const resend = new Resend(apiKey)
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `New enquiry from ${fullName}${service ? ` — ${service}` : ''}`,
      text: [
        `Name: ${fullName}`,
        `Company: ${company || '—'}`,
        `Email: ${email}`,
        `Phone: ${phone || '—'}`,
        `Service required: ${service || '—'}`,
        '',
        'Message:',
        message,
      ].join('\n'),
    })

    if (error) {
      console.log('[v0] Resend error:', error)
      return {
        status: 'error',
        message: 'Something went wrong sending your message. Please try again or email info@devhulon.co.za.',
      }
    }
  } catch (err) {
    console.log('[v0] Resend threw:', err)
    return {
      status: 'error',
      message: 'Something went wrong sending your message. Please try again or email info@devhulon.co.za.',
    }
  }

  return {
    status: 'success',
    message: `Thank you, ${fullName.split(' ')[0]}! Your message has been received. Our team will be in touch soon.`,
  }
}
