import { NextSeo } from 'next-seo'
import Layout from '../../components/Layout'

// Blog posts data (in a real app, this would come from a CMS or database)
const blogPosts = {
  'come-scegliere-box-deposito-perfetto': {
    slug: 'come-scegliere-box-deposito-perfetto',
    title: 'Come Scegliere il Box di Deposito Perfetto per le Tue Esigenze',
    date: '2024-12-20',
    excerpt: 'Guida completa per scegliere il deposito ideale: dimensioni, sicurezza, ubicazione e consigli per ottimizzare lo spazio.',
    content: `
      <div>
        <h2>Valutare le Dimensioni del Box di Deposito</h2>
        <p>La scelta delle dimensioni corrette è fondamentale per ottimizzare i costi e lo spazio. Ecco come calcolare lo spazio necessario:</p>
        <ul>
          <li><strong>Inventario completo:</strong> Fate una lista dettagliata di tutti gli oggetti da depositare</li>
          <li><strong>Misurate tutto:</strong> Prendete le misure di mobili e scatole per calcolare il volume totale</li>
          <li><strong>Aggiungete il 20%:</strong> Lasciate sempre spazio extra per la movimentazione e futuri depositi</li>
          <li><strong>Considerate l'altezza:</strong> Sfruttate lo spazio verticale con scaffalature e impilamenti sicuri</li>
        </ul>
        <p><em>Tip professionale:</em> Un box da 10m² può contenere mobili di un trilocale, mentre 5m² sono sufficienti per un monolocale.</p>

        <h2>Criteri di Sicurezza Essenziali</h2>
        <p>La sicurezza del vostro deposito deve essere una priorità assoluta. Verificate questi aspetti:</p>
        <ul>
          <li><strong>Videosorveglianza 24/7:</strong> Sistema di telecamere attivo h24 con registrazione</li>
          <li><strong>Accesso controllato:</strong> Badge personali, codici di accesso e controllo degli orari</li>
          <li><strong>Allarme antintrusione:</strong> Sensori di movimento e allarmi collegati a centrale operativa</li>
          <li><strong>Illuminazione adeguata:</strong> Aree ben illuminate per maggiore sicurezza</li>
          <li><strong>Assicurazione:</strong> Verificate la copertura assicurativa inclusa nel servizio</li>
        </ul>

        <h2>Ubicazione e Accessibilità</h2>
        <p>La posizione del deposito influenza la comodità d'uso e i costi di trasporto:</p>
        <ul>
          <li><strong>Vicinanza:</strong> Scegliete un deposito facilmente raggiungibile dalla vostra zona</li>
          <li><strong>Orari di accesso:</strong> Verificate gli orari di apertura e la flessibilità di accesso</li>
          <li><strong>Parcheggio:</strong> Presenza di parcheggi gratuiti per facilitare il carico/scarico</li>
          <li><strong>Servizi aggiuntivi:</strong> Disponibilità di carrelli, elevatori e assistenza per il trasporto</li>
        </ul>

        <h2>Condizioni Ambientali del Deposito</h2>
        <p>Le condizioni climatiche del box sono cruciali per preservare i vostri beni:</p>
        <ul>
          <li><strong>Controllo umidità:</strong> Depositi con sistema di deumidificazione per prevenire muffe</li>
          <li><strong>Temperatura costante:</strong> Ambiente climatizzato per oggetti sensibili</li>
          <li><strong>Ventilazione:</strong> Circolazione d'aria adeguata per mantenere un ambiente salubre</li>
          <li><strong>Impermeabilità:</strong> Strutture protette da infiltrazioni d'acqua</li>
        </ul>

        <h2>Consigli per Organizzare lo Spazio del Deposito</h2>
        <p>Massimizzate l'efficienza del vostro box con questi suggerimenti professionali:</p>
        <ul>
          <li><strong>Mappatura degli oggetti:</strong> Create una mappa digitale della disposizione</li>
          <li><strong>Oggetti frequenti davanti:</strong> Posizionate vicino all'entrata ciò che usate spesso</li>
          <li><strong>Scaffalature verticali:</strong> Utilizzate mensole e scaffali per sfruttare l'altezza</li>
          <li><strong>Protezione degli oggetti:</strong> Coprite mobili con teli protettivi</li>
          <li><strong>Etichettatura chiara:</strong> Marchiate ogni scatola con contenuto dettagliato</li>
          <li><strong>Corridoi di accesso:</strong> Mantenete passaggi liberi per facilitare i movimenti</li>
        </ul>

        <h2>Costi e Contratti: Cosa Sapere</h2>
        <p>Valutate attentamente gli aspetti economici e contrattuali:</p>
        <ul>
          <li><strong>Confrontate i prezzi:</strong> Richiedete preventivi dettagliati da più fornitori</li>
          <li><strong>Costi nascosti:</strong> Verificate spese aggiuntive per accesso, pulizie o servizi extra</li>
          <li><strong>Flessibilità contrattuale:</strong> Possibilità di modifica delle dimensioni o durata</li>
          <li><strong>Modalità di pagamento:</strong> Opzioni di pagamento mensile, trimestrale o annuale</li>
          <li><strong>Clausole di recesso:</strong> Tempi e modalità per la chiusura del contratto</li>
        </ul>

        <h2>Quando Scegliere un Deposito Temporaneo vs Permanente</h2>
        <p>La durata del deposito influenza la scelta del servizio più adatto:</p>
        <h3>Deposito Temporaneo (1-6 mesi):</h3>
        <ul>
          <li>Durante ristrutturazioni domestiche</li>
          <li>Traslochi con sovrapposizione di tempi</li>
          <li>Viaggi prolungati o trasferimenti temporanei</li>
        </ul>
        <h3>Deposito Permanente (oltre 6 mesi):</h3>
        <ul>
          <li>Ridimensionamento della casa</li>
          <li>Oggetti stagionali (sci, attrezzature estive)</li>
          <li>Archivio documenti aziendali</li>
          <li>Collezioni e oggetti di valore</li>
        </ul>

        <h2>Servizi Aggiuntivi da Considerare</h2>
        <p>Alcuni depositi offrono servizi extra che possono semplificarvi la vita:</p>
        <ul>
          <li><strong>Ritiro a domicilio:</strong> Servizio di trasporto dalla vostra casa al deposito</li>
          <li><strong>Imballaggio professionale:</strong> Personale specializzato per proteggere i vostri beni</li>
          <li><strong>Inventario digitale:</strong> Catalogazione fotografica di tutti gli oggetti depositati</li>
          <li><strong>Assicurazione estesa:</strong> Copertura aggiuntiva per oggetti di valore</li>
          <li><strong>Servizio di pulizia:</strong> Pulizia periodica del box per mantenere l'igiene</li>
        </ul>
      </div>
    `
  },
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