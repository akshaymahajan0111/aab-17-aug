import { Helmet } from '@dr.pogodin/react-helmet';
import { ArrowDownRight } from 'lucide-react';
import { motion } from 'motion/react';
import { home } from 'virtual:content';

const siteUrl = 'https://hello-world.example';
const pageUrl = `${siteUrl}/`;
const title = 'Hello, world. | Hello World';
const description = 'A quiet, welcoming place to arrive, take a breath, and begin again.';
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'WebSite', '@id': `${siteUrl}/#website`, name: 'Hello World', url: siteUrl },
    { '@type': 'Organization', '@id': `${siteUrl}/#organization`, name: 'Hello World', url: siteUrl },
    {
      '@type': 'WebPage',
      '@id': `${siteUrl}/#webpage`,
      name: title,
      url: pageUrl,
      isPartOf: { '@id': `${siteUrl}/#website` },
      about: { '@id': `${siteUrl}/#organization` },
      datePublished: '2026-08-17',
      dateModified: '2026-08-17',
    },
  ],
};

const rise = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
} as const;

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={pageUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:image" content={`${siteUrl}/og-image.png`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={`${siteUrl}/og-image.png`} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <main id="top">
        <section className="paper-field relative overflow-hidden px-6 pb-20 pt-16 lg:px-10 lg:pb-28 lg:pt-24">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-[110px_minmax(0,1fr)_260px] lg:gap-8">
            <motion.aside
              initial="hidden"
              animate="visible"
              variants={rise}
              transition={{ duration: 0.55, ease: 'easeOut' }}
              className="flex items-start gap-4 lg:flex-col lg:gap-8"
              aria-label="Page folio"
            >
              <span className="font-heading text-2xl text-primary">01</span>
              <span className="h-px w-16 bg-border lg:h-24 lg:w-px" />
              <span className="text-xs text-muted-foreground">Opening note</span>
            </motion.aside>

            <div className="relative">
              <motion.p
                initial="hidden"
                animate="visible"
                variants={rise}
                transition={{ duration: 0.55, delay: 0.08, ease: 'easeOut' }}
                className="mb-7 text-sm text-muted-foreground"
              >
                {home.hero.eyebrow}
              </motion.p>
              <motion.h1
                initial="hidden"
                animate="visible"
                variants={rise}
                transition={{ duration: 0.7, delay: 0.14, ease: 'easeOut' }}
                className="max-w-4xl font-heading text-[clamp(5rem,13vw,11.5rem)] font-medium leading-[0.76] tracking-[-0.055em] text-foreground"
              >
                {home.hero.title}
              </motion.h1>
              <motion.p
                initial="hidden"
                animate="visible"
                variants={rise}
                transition={{ duration: 0.6, delay: 0.28, ease: 'easeOut' }}
                className="mt-12 max-w-md text-lg leading-8 text-muted-foreground"
              >
                {home.hero.note}
              </motion.p>
              <motion.a
                initial="hidden"
                animate="visible"
                variants={rise}
                transition={{ duration: 0.6, delay: 0.38, ease: 'easeOut' }}
                href="#notes"
                className="editorial-link mt-10 inline-flex items-center gap-3 text-sm font-medium text-primary"
              >
                <span>{home.invitation.label}</span>
                <ArrowDownRight size={17} strokeWidth={1.5} />
              </motion.a>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 8 }}
              animate={{ opacity: 1, scale: 1, y: [0, -5, 0] }}
              transition={{ opacity: { duration: 0.6, delay: 0.3 }, scale: { duration: 0.6, delay: 0.3 }, y: { duration: 5, repeat: Infinity, ease: 'easeInOut' } }}
              className="justify-self-start lg:justify-self-end"
              aria-hidden="true"
            >
              <div className="stamp flex h-28 w-28 items-center justify-center rounded-full border border-primary/40 text-center font-heading text-xl leading-none text-primary">
                hello<br />Airo
              </div>
            </motion.div>
          </div>
        </section>

        <section id="notes" className="border-y border-border px-6 py-16 lg:px-10 lg:py-20">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-[110px_minmax(0,1fr)] lg:gap-8">
            <div>
              <p className="text-xs text-muted-foreground">A few small notes</p>
            </div>
            <div className="grid grid-cols-1 border-t border-border md:grid-cols-3">
              {home.principles.map((principle) => (
                <article key={principle.id} className="border-b border-border py-8 md:border-b-0 md:px-7 md:first:pl-0 md:not-last:border-r md:last:pr-0">
                  <p className="mb-8 font-heading text-4xl text-primary">{principle.title}</p>
                  <p className="max-w-xs text-sm leading-7 text-muted-foreground">{principle.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-16 lg:px-10 lg:py-24">
          <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 border-l border-primary pl-6 md:flex-row md:items-end">
            <p className="font-heading text-4xl leading-none text-foreground md:text-5xl">{home.invitation.folio}</p>
            <a href="#top" className="editorial-link text-sm text-muted-foreground">Back to the first word</a>
          </div>
        </section>
      </main>
    </>
  );
}
