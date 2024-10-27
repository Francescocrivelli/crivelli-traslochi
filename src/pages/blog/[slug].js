import { NextSeo } from 'next-seo'
import Layout from '../../components/Layout'

// Blog posts data (in a real app, this would come from a CMS or database)
const blogPosts = {
  'guida-trasloco': {
    slug: 'guida-trasloco',
    title: 'Tutto Quello che Devi Sapere per il Trasloco',
    date: '2024-04-15',
    excerpt: 'Una guida completa per preparare il tuo trasloco in modo organizzato ed efficiente.',
    content: `
      <div>
        <h2>Preparazione al Trasloco</h2>
        <p>La chiave per un trasloco di successo è una buona preparazione. Iniziate almeno due mesi prima organizzando:</p>
        <ul>
          <li>Lista di tutti gli oggetti da traslocare</li>
          <li>Calendario delle attività</li>
          <li>Budget dettagliato</li>
          <li>Documentazione necessaria</li>
        </ul>

        <h2>Come Imballare Correttamente</h2>
        <p>L'imballaggio è fondamentale per proteggere i vostri oggetti durante il trasloco:</p>
        <ul>
          <li>Utilizzate scatole di dimensioni appropriate</li>
          <li>Proteggete gli oggetti fragili con pluriball</li>
          <li>Etichettate chiaramente ogni scatola</li>
          <li>Non riempite troppo le scatole</li>
        </ul>

        <h2>Tempistiche e Organizzazione</h2>
        <p>Ecco una timeline ideale per organizzare il vostro trasloco:</p>
        <ul>
          <li>2 mesi prima: Iniziate a pianificare e decluttering</li>
          <li>1 mese prima: Iniziate l'imballaggio degli oggetti non essenziali</li>
          <li>2 settimane prima: Organizzate le utenze</li>
          <li>1 settimana prima: Preparate una valigia con l'essenziale</li>
        </ul>
      </div>
    `
  },
  'consigli-organizzazione': {
    slug: 'consigli-organizzazione',
    title: 'Consigli per un Trasloco Organizzato',
    date: '2024-04-10',
    excerpt: 'Scopri i migliori consigli per mantenere tutto organizzato durante il tuo trasloco.',
    content: `
      <div>
        <h2>Sistema di Organizzazione</h2>
        <p>Un sistema di organizzazione efficace è essenziale per un trasloco senza stress:</p>
        <ul>
          <li>Create un sistema di codifica colori per le stanze</li>
          <li>Utilizzate un inventario digitale</li>
          <li>Fotografate il contenuto delle scatole</li>
          <li>Mantenete una lista di priorità</li>
        </ul>

        <h2>Gestione dei Documenti</h2>
        <p>Organizzate tutti i documenti importanti:</p>
        <ul>
          <li>Create una cartella dedicata al trasloco</li>
          <li>Conservate tutti i preventivi e le ricevute</li>
          <li>Fate copie dei documenti importanti</li>
          <li>Preparate un file con i contatti utili</li>
        </ul>

        <h2>Organizzazione degli Spazi</h2>
        <p>Come organizzare gli spazi in modo efficiente:</p>
        <ul>
          <li>Misurate tutti i mobili e gli spazi</li>
          <li>Create una planimetria della nuova casa</li>
          <li>Pianificate la disposizione dei mobili</li>
          <li>Identificate le aree di stoccaggio</li>
        </ul>
      </div>
    `
  }
}

export default function BlogPost({ post }) {
  if (!post) {
    return null
  }

  return (
    <Layout>
      <NextSeo
        title={`${post.title} | Crivelli Traslochi Blog`}
        description={post.excerpt}
        canonical={`https://crivellitraslochi.ch/blog/${post.slug}`}
        openGraph={{
          title: post.title,
          description: post.excerpt,
          type: 'article',
          article: {
            publishedTime: post.date,
            modifiedTime: post.date,
            section: 'Traslochi',
            tags: ['traslochi', 'organizzazione', 'storage'],
          },
        }}
      />
      
      <article className="container mx-auto px-4 py-8 max-w-3xl">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <time className="text-gray-500 mb-8 block">{post.date}</time>
        
        <div 
          className="prose text-gray-800 lg:prose-xl"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Schema.org markup for blog post */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              "headline": post.title,
              "datePublished": post.date,
              "dateModified": post.date,
              "author": {
                "@type": "Organization",
                "name": "Crivelli Traslochi"
              },
              "publisher": {
                "@type": "Organization",
                "name": "Crivelli Traslochi",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://crivelli-traslochi.ch/logo.png"
                }
              }
            })
          }}
        />
      </article>
    </Layout>
  )
}

export async function getStaticPaths() {
  // Generate paths for all blog posts
  const paths = Object.keys(blogPosts).map((slug) => ({
    params: { slug }
  }))

  return {
    paths,
    fallback: false // Return 404 for paths not returned by getStaticPaths
  }
}

export async function getStaticProps({ params }) {
  // Get the post content using the slug
  const post = blogPosts[params.slug]

  // If post doesn't exist, return 404
  if (!post) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      post
    }
  }
}