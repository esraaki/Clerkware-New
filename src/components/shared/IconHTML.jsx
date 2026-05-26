/**
 * Renders an SVG icon stored as a raw HTML string.
 * Topic icons in src/data/topicIcons.js are stored as strings so they can be
 * dropped into existing markup unchanged from the static site.
 */
export default function IconHTML({ html, className }) {
  return <span className={className} dangerouslySetInnerHTML={{ __html: html }} />;
}
