import { useState } from 'react';

/**
 * Accessible FAQ accordion. Pass `items` as an array of { q, a } objects.
 * Each item opens/closes independently; the open/close glyph is built from
 * two pseudo-elements in CSS (see .faq-q .plus rules).
 */
export default function FAQ({ items, id }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="faq" id={id} data-reveal data-reveal-delay="1">
      {items.map((item, i) => {
        const open = i === openIndex;
        return (
          <div key={item.q} className={'faq-item' + (open ? ' is-open' : '')}>
            <button
              className="faq-q"
              type="button"
              aria-expanded={open}
              onClick={() => setOpenIndex(open ? null : i)}
            >
              {item.q}
              <span className="plus">+</span>
            </button>
            <div className="faq-a">{item.a}</div>
          </div>
        );
      })}
    </div>
  );
}
