/**
 * Article card for the /resources grid.
 * `article` shape: { icon, meta, title, body, slug? }
 *
 * When you add full article pages later, set `slug` on each article and
 * make this anchor to `#/article/${slug}` (and add an /article/:slug route).
 */
export default function ArticleCard({ article }) {
  const href = article.slug ? `#/article/${article.slug}` : undefined;

  const inner = (
    <>
      <div className="article-thumb">
        <span dangerouslySetInnerHTML={{ __html: article.icon }} />
      </div>
      <div className="article-body">
        <span className="article-meta">{article.meta}</span>
        <h3>{article.title}</h3>
        <p>{article.body}</p>
        <span className="read-more">
          Read more{' '}
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </span>
      </div>
    </>
  );

  return href ? (
    <a className="article-card" href={href}>
      {inner}
    </a>
  ) : (
    <article className="article-card">{inner}</article>
  );
}
