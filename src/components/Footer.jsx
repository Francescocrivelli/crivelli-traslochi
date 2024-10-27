// File: src/components/Footer.jsx
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Crivelli Traslochi</h3>
            <p>2606, 6830 Chiasso, Switzerland</p>
            <p>Tel: +41 91 647 30 84</p>
            <p>Email: traslochicrivelli@hotmail.com</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Servizi</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/traslochi-sgomberi" className="hover:text-blue-300">
                  Traslochi e Sgomberi
                </Link>
              </li>
              <li>
                <Link href="/depositi" className="hover:text-blue-300">
                  Depositi
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Link Utili</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/blog" className="hover:text-blue-300">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contatti" className="hover:text-blue-300">
                  Contatti
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Crivelli Traslochi. Tutti i diritti riservati.</p>
        </div>
      </div>
    </footer>
  )
}