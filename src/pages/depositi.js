import { NextSeo } from 'next-seo'
import Image from 'next/image'
import Layout from '../components/Layout'

export default function Depositi() {
  return (
    <Layout>
      <NextSeo
        title="Servizi di Deposito e Magazzinaggio a Chiasso"
        description="Depositi sicuri e climatizzati a Chiasso. Soluzioni di storage flessibili per privati e aziende. Preventivi personalizzati."
        canonical="https://crivellitraslochi.ch/depositi"
      />
      <div className="container mx-auto px-4 py-8 text-gray-800">
        <h1 className="text-4xl font-bold mb-8">Servizi di Deposito</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">I Nostri Servizi di Storage</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg className="h-6 w-6 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-600">Depositi climatizzati</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-600">Sicurezza 24/7</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-600">Flessibilità nei periodi di deposito</span>
              </li>
            </ul>
          </div>
          <div className="relative h-64 md:h-auto">
            <Image
              src="/images/storage20.jpeg"
              alt="Deposito sicuro e climatizzato"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="relative h-48">
            <Image
              src="/images/storage21.jpeg"
              alt="Unità di deposito"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="relative h-48">
            <Image
              src="/images/storage1.jpeg"
              alt="Area di stoccaggio"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Schema.org markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SelfStorage",
              "name": "Crivelli Traslochi - Depositi",
              "image": [
                "https://crivellitraslochi.ch/images/storage20.jpeg",
                "https://crivellitraslochi.ch/images/storage21.jpeg"
              ],
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "2606",
                "addressLocality": "Chiasso",
                "postalCode": "6830",
                "addressCountry": "CH"
              },
              "telephone": "+41 91 647 30 84",
              "email": "traslochicrivelli@hotmal.com",
              "description": "Servizi di deposito sicuri e climatizzati a Chiasso"
            })
          }}
        />
      </div>
    </Layout>
  )
}