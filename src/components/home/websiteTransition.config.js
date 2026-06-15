/**
 * Configuration for the scroll-driven Hero → Municipal Websites image sequence.
 *
 * Everything about the frame set lives here so the sequence can be swapped or
 * re-tuned without touching component logic.
 *
 *  • FRAME_COUNT  — how many frames the sequence contains.
 *  • FRAME_DIR    — public folder the frames are served from (no trailing slash).
 *  • framePath()  — builds the URL for a given 1-based frame index. Change this
 *                   single function to match any future filename pattern.
 *
 * To replace the 72/73-frame set later:
 *   1. Drop the new frames into a folder under /public.
 *   2. Update FRAME_DIR (and FRAME_EXT / framePath if the names differ).
 *   3. Update FRAME_COUNT to the new total.
 * No component changes are required.
 */

// Number of frames in the sequence (frame-001 … frame-073).
export const FRAME_COUNT = 73;

// Public path the frames are served from. Vite serves /public at the site root,
// so files in /public/images/clerkware/website-transition map to this URL.
export const FRAME_DIR = '/images/clerkware/website-transition';

// File extension of each frame.
export const FRAME_EXT = 'jpg';

// Zero-padding width for the numeric portion of each filename (frame-001 → 3).
export const FRAME_PAD = 3;

/**
 * Build the URL for a 1-based frame index.
 * Default pattern: `${FRAME_DIR}/frame-001.jpg`.
 * Override this body to support any other naming convention.
 */
export function framePath(index1) {
  const n = String(index1).padStart(FRAME_PAD, '0');
  return `${FRAME_DIR}/frame-${n}.${FRAME_EXT}`;
}

// The frame shown as the static poster (reduced-motion fallback and the
// resting end-state). Defaults to the final frame of the sequence.
export const FINAL_FRAME = FRAME_COUNT;

/**
 * Scroll length of the pinned sequence, expressed as multiples of the viewport
 * height. 2.6 → the sticky stage stays pinned for ~2.6 screens of scrolling
 * while the frames advance. Higher = slower/longer scrub.
 */
export const SCROLL_VH = 2.6;

/**
 * Fraction of scroll progress (0–1) at which the Municipal Websites copy begins
 * to fade in. 0.72 → content appears in the final ~28% of the transition.
 */
export const CONTENT_REVEAL_AT = 0.72;
