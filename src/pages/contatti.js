
// File: src/pages/contatti.js
import { NextSeo } from 'next-seo'
import Layout from '../components/Layout'

export default function Contatti() {
  return (
    <Layout>
      <NextSeo
        title="Contattaci - Crivelli Traslochi"
        description="Contatta Crivelli Traslochi per un preventivo gratuito o per maggiori informazioni sui nostri servizi di trasloco e deposito a Chiasso."
        canonical="https://crivellitraslochi.ch/contatti"
      />

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-gray-900">Contattaci</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Informazioni di Contatto</h2>
            <div className="space-y-4 text-gray-600 ">
              <p>
                <strong className="text-gray-800" >Indirizzo:</strong><br />
                2606, 6830 Chiasso, Switzerland
              </p>
              <p>
                <strong className="text-gray-800">Telefono:</strong><br />
                +41 91 647 30 84
              </p>
              <p>
                <strong className="text-gray-800">Email:</strong><br />
                traslochicrivelli@hotmal.com
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Richiedi un Preventivo</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Nome e Cognome
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
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
                  Messaggio
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Invia Richiesta
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  )
}