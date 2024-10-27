
// File: src/components/ContactForm.jsx
import { useState } from 'react'

export default function ContactForm() {
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState(null)

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('loading')
    setError(null)

    const formData = new FormData(e.target)
    const data = Object.fromEntries(formData.entries())

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error('Errore nell\'invio del messaggio')
      }

      setStatus('success')
      e.target.reset()
    } catch (err) {
      setError(err.message)
      setStatus('error')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Nome e Cognome *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
          Telefono
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
          Messaggio *
        </label>
        <textarea
          id="message"
          name="message"
          rows="4"
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        ></textarea>
      </div>

      {error && (
        <div className="text-red-600 text-sm">
          {error}
        </div>
      )}

      {status === 'success' && (
        <div className="text-green-600 text-sm">
          Messaggio inviato con successo!
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className={cn(
          "bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",
          status === 'loading' ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-700"
        )}
      >
        {status === 'loading' ? 'Invio in corso...' : 'Invia Richiesta'}
      </button>
    </form>
  )
}
