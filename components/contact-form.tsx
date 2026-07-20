'use client'

import { useActionState } from 'react'
import { useFormStatus } from 'react-dom'
import { CheckCircle2, AlertCircle } from 'lucide-react'
import { submitContact, type ContactState } from '@/app/actions'
import { services } from '@/lib/site-data'

const initialState: ContactState = { status: 'idle', message: '' }

function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full rounded-md bg-green px-6 py-3.5 text-sm font-semibold text-green-foreground transition-colors hover:bg-green/90 disabled:opacity-60"
    >
      {pending ? 'Sending…' : 'Send Message'}
    </button>
  )
}

const inputClass =
  'w-full rounded-md border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-green focus:ring-2 focus:ring-green/20'

export function ContactForm() {
  const [state, formAction] = useActionState(submitContact, initialState)

  return (
    <form action={formAction} className="space-y-4">
      {state.status === 'success' && (
        <div className="flex items-start gap-3 rounded-md border border-green/30 bg-green/10 p-4 text-sm text-navy">
          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green" strokeWidth={2} />
          <p>{state.message}</p>
        </div>
      )}
      {state.status === 'error' && (
        <div className="flex items-start gap-3 rounded-md border border-destructive/30 bg-destructive/10 p-4 text-sm text-destructive">
          <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" strokeWidth={2} />
          <p>{state.message}</p>
        </div>
      )}

      <div>
        <label htmlFor="fullName" className="sr-only">
          Full Name
        </label>
        <input id="fullName" name="fullName" className={inputClass} placeholder="Full Name" required />
      </div>
      <div>
        <label htmlFor="company" className="sr-only">
          Company Name
        </label>
        <input id="company" name="company" className={inputClass} placeholder="Company Name" />
      </div>
      <div>
        <label htmlFor="email" className="sr-only">
          Email Address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          className={inputClass}
          placeholder="Email Address"
          required
        />
      </div>
      <div>
        <label htmlFor="phone" className="sr-only">
          Phone Number
        </label>
        <input id="phone" name="phone" type="tel" className={inputClass} placeholder="Phone Number" />
      </div>
      <div>
        <label htmlFor="service" className="sr-only">
          Service Required
        </label>
        <select id="service" name="service" defaultValue="" className={inputClass}>
          <option value="" disabled>
            Service Required
          </option>
          {services.map((s) => (
            <option key={s.slug} value={s.title}>
              {s.title}
            </option>
          ))}
          <option value="Other">Other</option>
        </select>
      </div>
      <div>
        <label htmlFor="message" className="sr-only">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className={inputClass}
          placeholder="Message"
          required
        />
      </div>
      <SubmitButton />
    </form>
  )
}
