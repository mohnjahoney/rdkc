

# RDKC Portfolio Website

A clean, exhibition-style portfolio site for Rachel D.K. Clark's wearable art — built as a single-page experience with one additional route for the full collection.

---

## 1. Foundation & Configuration Setup
- Copy `siteConfig.ts` to `src/config/` and all JSON data files to `src/data/`
- Copy all uploaded images to their correct `public/` paths (gallery, branding, portraits, UI)
- Copy the Blair font to `public/fonts/`
- Set up `@font-face` for Blair (self-hosted) and load Inter from CDN
- Define CSS custom properties from siteConfig colors
- Switch from `BrowserRouter` to `HashRouter` for GitHub Pages compatibility

## 2. Navigation Bar
- Minimal sticky header with RDKC logo (left) linking to top
- Desktop: "Selected Works" and "Book Rachel" links + "More" dropdown with caret
- Mobile: "Selected Works" and "Book Rachel" links + hamburger menu
- More/hamburger contains: Shows & Talks, Workshops & Classes, Online Workshop, About, Contact, and "View Full Collection →" (visually distinct as a route link)
- All items smooth-scroll to anchored sections except Full Collection (navigates to `#/collection`)
- Menus close on selection, outside click, scroll, or Escape
- Sticky behavior and scroll-margin-top driven by siteConfig values

## 3. Selected Works Gallery (Homepage Hero)
- Section header: "Wearable Art by Rachel D.K. Clark"
- Masonry-style vertically scrolling layout using siteConfig column counts (3 columns desktop, 2 mobile)
- Shows first 12 images per siteConfig.gallery.numberOfSelectedImages
- Subtle hover scale on desktop, tap feedback on mobile (values from siteConfig.motion)
- Captions hidden per siteConfig.gallery.showGridCaptions setting
- Each image clickable → opens lightbox

## 4. Lightbox Overlay
- Large image display with title, year, and description (when available)
- Minimal chrome, neutral dark backdrop
- Description constrained in width, scrollable if long, set in Inter
- Close via: backdrop click, close button, Escape key, browser back, swipe-down on mobile
- Background scroll locked while open
- Clicking the image itself does NOT close the lightbox
- Restores scroll position on close, no route change

## 5. Shows & Talks Section
- Intro paragraphs from shows.json
- Alternating image/text layout (side-by-side desktop, stacked mobile)
- No cards, borders, or shadows — spacing only
- Each program shows title, description, and "Inquire →" text link
- "Inquire →" scrolls to Contact and prefills the subject field with inquirySubject
- Missing images fall back to placeholder

## 6. Workshops & Classes Section
- Same layout pattern as Shows & Talks
- Data-driven from workshops.json
- Same "Inquire →" CTA behavior (scroll + prefill)

## 7. Online Coat Workshop Subsection
- Lightweight subsection describing the four-part structure, self-paced format, instructor input, and contact pathway
- Intentionally minimal — designed to be expanded later

## 8. About Section
- Portrait image (left) + biographical paragraphs (right) on desktop, stacked on mobile
- Text left-aligned, set in Inter (body font)
- Centered quote from Rachel below the bio
- All content from about.json

## 9. Contact & Booking Section
- Left side: email, phone, location + Instagram icon link
- Right side: inquiry form with name, email, subject (pre-fillable), and message fields
- Form is client-side only (no backend) — shows success/error messages from contact.json
- Clean, welcoming feel with generous spacing

## 10. Full Collection Route (`#/collection`)
- Separate route showing ALL 14 gallery images
- Same masonry visual system but with full-mode column counts (4 desktop, 3 mobile)
- Shows title, year, and description captions
- Each image opens the same lightbox
- Navigation back to main page via logo or browser back

## 11. Polish & Quality
- Graceful fallbacks for missing data (no "undefined" in UI, placeholder images for broken loads)
- Console warnings in debug mode for missing fields
- Consistent typography: Blair for headings/wordmark, Inter for body and nav
- Restrained motion throughout — short fades, ease-out transitions
- Responsive across all breakpoints
- All configurable values sourced from siteConfig (no hardcoded magic numbers)

