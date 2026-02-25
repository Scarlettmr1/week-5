# Responsive Image Gallery + Lightbox — Build Plan

**Stack:** Plain HTML + CSS + JS (no build tools, no dependencies needed)

---

## Step 1 — HTML skeleton (2 min)

Create `index.html` with a `<section class="gallery">` containing 6–8 `<figure>` cards. Use placeholder images (picsum.photos). Open in browser and confirm images load.

**Test:** Page renders images in a single column.

---

## Step 2 — CSS grid layout (5 min)

Add `style.css`. Style `.gallery` with `display: grid` and `grid-template-columns: repeat(auto-fill, minmax(250px, 1fr))`. Add `gap`, `border-radius`, and `overflow: hidden` to the cards.

**Test:** Resize the browser window — grid reflows from 1 to 3+ columns automatically.

---

## Step 3 — Hover overlay (5 min)

Add a `<figcaption>` to each card. Use CSS to show it on `:hover` with opacity transition. Position it absolutely over the image.

**Test:** Hover each card — caption fades in smoothly.

---

## Step 4 — Lightbox HTML + CSS (8 min)

Add a `<div id="lightbox">` overlay to the HTML (hidden by default with `display: none`). Inside it put: a close button `×`, a `<img>` tag, and a caption `<p>`. Style it as a fixed full-screen overlay with a dark semi-transparent background, centered content.

**Test:** Temporarily set `display: flex` in CSS — overlay appears correctly centered. Revert to `display: none`.

---

## Step 5 — Lightbox open/close JS (8 min)

Add `gallery.js`. On each gallery image click: set lightbox `img src` to the clicked image's `src`, set the caption text, then set `lightbox.style.display = 'flex'`. Wire the close button and pressing `Escape` to hide the lightbox.

**Test:** Click a gallery image — lightbox opens with the right image. Press `Esc` or `×` — it closes.

---

## Step 6 — Previous/Next navigation (8 min)

Add prev/next `<button>` arrows to the lightbox. In JS, track `currentIndex` in the image array. Clicking arrows updates `src` and caption. Also handle left/right arrow keypresses.

**Test:** Open lightbox, press arrow keys — cycles through all images without closing.

---

## Step 7 — Mobile polish (5 min)

Add a `@media (max-width: 600px)` block: single-column grid, larger touch targets for lightbox buttons, and `max-height: 80vh` on the lightbox image so it doesn't overflow on small screens.

**Test:** Open Chrome DevTools → toggle device toolbar → verify layout and lightbox work at 375px wide.

---

## Step 8 — Commit and push

```bash
git add index.html style.css gallery.js
git commit -m "Add responsive image gallery with lightbox"
git push -u origin claude/clear-session-3n0Xe
