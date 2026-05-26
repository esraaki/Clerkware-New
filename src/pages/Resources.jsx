import PageHero from '../components/shared/PageHero.jsx';
import CTABand from '../components/shared/CTABand.jsx';
import FAQ from '../components/shared/FAQ.jsx';
import ArticleCard from '../components/shared/ArticleCard.jsx';
import { ARTICLES } from '../data/articles.js';

const FAQ_ITEMS = [
  {
    q: 'How long does a typical Town Web launch take?',
    a: 'Most municipalities launch in 4–6 weeks: 1 week discovery, 2 weeks design + content migration, 1 week training, 1 week soft launch. Larger municipalities sometimes run 8–10 weeks.',
  },
  {
    q: 'Do I need technical skills to manage the site?',
    a: 'No. Clerkware is designed for clerks, not developers. The CMS works like a word processor. We train your team during onboarding and have ongoing support available.',
  },
  {
    q: 'Will my content survive the migration?',
    a: 'Yes. We handle the migration end-to-end. We preserve URLs (with redirects from the old site), documents, images, and structured content like meeting minutes and ordinances.',
  },
  {
    q: 'What about training?',
    a: "Comprehensive training during launch, plus ongoing video tutorials, weekly office hours, and on-demand phone support. We don't just hand you the keys and disappear.",
  },
  {
    q: 'Can we keep our existing domain?',
    a: 'Absolutely. We can work with your existing domain or help you transition to a .gov domain. We handle the technical details of the migration including DNS, SSL, and email.',
  },
  {
    q: 'What if I need help outside business hours?',
    a: 'For urgent issues (site down, emergency alerts not sending), we have on-call after-hours support. Standard support is M–F 8am–5pm CT with phone, email, and screen-share.',
  },
];

export default function Resources() {
  return (
    <>
      <PageHero
        breadcrumb={[{ label: 'Home', href: '#/home' }, { label: 'Resources' }]}
        headlineHtml="Guides, best practices, and field notes <em>for clerks</em>."
        leadHtml="Practical resources from 20+ years working alongside municipal teams. No fluff. No vendor-speak. Just the stuff we wish someone had told us in year one."
      />

      <section className="section">
        <div className="container">
          <div className="sec-head" data-reveal>
            <span className="eyebrow">
              <span className="dot" />
              Field notes
            </span>
            <h2>Latest from the Town Web team.</h2>
          </div>
          <div className="article-grid" id="article-grid" data-reveal data-reveal-delay="1">
            {ARTICLES.map((article) => (
              <ArticleCard key={article.title} article={article} />
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: '#fff' }}>
        <div className="container">
          <div className="sec-head" data-reveal>
            <span className="eyebrow">
              <span className="dot" />
              Frequently asked
            </span>
            <h2>Quick answers from clerks who switched.</h2>
            <p>From new-customer onboarding calls.</p>
          </div>
          <FAQ id="resources-faq" items={FAQ_ITEMS} />
        </div>
      </section>

      <CTABand
        headingHtml="Have <em>more questions</em>?"
        bodyHtml="Our team is here to help you find the right solution for your municipality."
      />
    </>
  );
}
