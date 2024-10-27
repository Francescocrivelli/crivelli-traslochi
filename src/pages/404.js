// File: src/pages/404.js
import { NextSeo } from 'next-seo'
import Link from 'next/link'
import Layout from '../components/Layout'

export default function Custom404() {
  return (
    <Layout>
      <NextSeo
        title="Pagina Non Trovata - Crivelli Traslochi"
        noindex={true}
      />
      
      <div className="min-h-[60vh] flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">404 - Pagina Non Trovata</h1>
          <p className="text-gray-600 mb-8">
            La pagina che stai cercando non esiste o è stata spostata.
          </p>
          <Link
            href="/"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Torna alla Home
          </Link>
        </div>
      </div>
    </Layout>
  )
}
