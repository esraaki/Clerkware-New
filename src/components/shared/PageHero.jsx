import { Fragment } from 'react';

/**
 * Standard internal-page hero with breadcrumb, headline (HTML allowed),
 * lead paragraph (HTML allowed), and optional action row.
 *
 * `breadcrumb` is an array of { label, href? } — items without href are
 * rendered as the current page label.
 */
export default function PageHero({ breadcrumb, headlineHtml, leadHtml, actions, innerStyle }) {
  return (
    <section className="page-hero">
      <div className="container inner" style={innerStyle || { maxWidth: 920 }}>
        {breadcrumb && (
          <p className="breadcrumb">
            {breadcrumb.map((item, i) => (
              <Fragment key={i}>
                {item.href ? <a href={item.href}>{item.label}</a> : <span>{item.label}</span>}
                {i < breadcrumb.length - 1 && (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                )}
              </Fragment>
            ))}
          </p>
        )}
        <h1 dangerouslySetInnerHTML={{ __html: headlineHtml }} />
        {leadHtml && <p className="lead" dangerouslySetInnerHTML={{ __html: leadHtml }} />}
        {actions && <div className="actions">{actions}</div>}
      </div>
    </section>
  );
}
