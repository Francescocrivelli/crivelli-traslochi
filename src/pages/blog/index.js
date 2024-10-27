import { NextSeo } from 'next-seo'
import Link from 'next/link'
import Layout from '../../components/Layout'

export default function Blog() {
  const posts = [
    {
      slug: 'guida-trasloco',
      title: 'Tutto Quello che Devi Sapere per il Trasloco',
      excerpt: 'Una guida completa per preparare il tuo trasloco in modo organizzato ed efficiente.',
      date: '2024-04-15'
    },
    {
      slug: 'consigli-organizzazione',
      title: 'Consigli per un Trasloco Organizzato',
      excerpt: 'Scopri i migliori consigli per mantenere tutto organizzato durante il tuo trasloco.',
      date: '2024-04-10'
    }
  ]

  return (
    <Layout>
      <NextSeo
        title="Blog - Consigli per Traslochi e Storage"
        description="Consigli utili, guide e suggerimenti per organizzare al meglio il tuo trasloco e gestire il tuo spazio di storage."
        canonical="https://crivellitraslochi.ch/blog"
      />
      
      <div className="container mx-auto px-4 py-8 text-gray-800">
        <h1 className="text-4xl font-bold mb-8 text-gray-800">Blog</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map((post) => (
            <article key={post.slug} className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <Link href={`/blog/${post.slug}`}>
                <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <time className="text-sm text-gray-500">{post.date}</time>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </Layout>
  )
}