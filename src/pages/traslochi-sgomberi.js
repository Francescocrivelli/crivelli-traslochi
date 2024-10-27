// File: src/pages/traslochi-sgomberi.js
import { NextSeo } from 'next-seo'
import Image from 'next/image'
import Layout from '../components/Layout'

export default function TraslochiSgomberi() {
  return (
    <Layout>
      <NextSeo
        title="Traslochi e Sgomberi Professionali a Chiasso"
        description="Servizi di trasloco e sgombero professionali a Chiasso. Esperti nel settore con oltre 40 anni di esperienza. Preventivi gratuiti."
        canonical="https://crivellitraslochi.ch/traslochi-sgomberi"
      />
      
      <div className="container mx-auto px-4 py-8 text-gray-800">
        <h1 className="text-4xl font-bold mb-8">Traslochi e Sgomberi Professionali</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">I Nostri Servizi di Trasloco</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg className="h-6 w-6 text-blue-600 mr-2 "  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-600">Traslochi residenziali e commerciali</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-600">Imballaggio professionale</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-600">Montaggio e smontaggio mobili</span>
              </li>
            </ul>
          </div>
          <div className="relative h-64 md:h-auto">
            <Image
              src="/images/traslochi1.jpeg"
              alt="Servizio di trasloco professionale"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="relative h-48">
            <Image
              src="/images/traslochi2.jpeg"
              alt="Operazioni di trasloco"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="relative h-48">
            <Image
              src="/images/traslochi5.jpeg"
              alt="Servizio di trasloco in azione"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="relative h-48">
            <Image
              src="/images/traslochi6.jpeg"
              alt="Professionalità nel trasloco"
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
              "@type": "MovingCompany",
              "name": "Crivelli Traslochi",
              "image": [
                "https://crivellitraslochi.ch/images/traslochi1.jpeg",
                "https://crivellitraslochi.ch/images/traslochi2.jpeg"
              ],
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "2606",
                "addressLocality": "Chiasso",
                "postalCode": "6830",
                "addressCountry": "CH"
              },
              "telephone": "+41 91 647 30 84",
              "email": "traslochicrivelli@hotmal.com"
            })
          }}
        />
      </div>
    </Layout>
  )
}