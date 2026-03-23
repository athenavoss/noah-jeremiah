# NOAH JEREMIAH — "The Private Showroom" Build Spec

## Brand
Noah Jeremiah — Hollywood luxury clothing & accessories. Styles for the elite. $10K jeans. Made in USA. Menswear + Womenswear.

## Concept
"The Private Showroom" — walking into a private showroom in a Hollywood loft. Concrete floors, warm light, one rack of clothes, a glass of champagne. You feel underdressed just being there.

## Stack
- Next.js 16 + Tailwind CSS + Framer Motion
- No backend — static showcase site

## Color Palette
- Background: #111111 (warm charcoal, NOT pure black)
- Primary text: #F0EBE3 (warm cream, NOT pure white)  
- Secondary text: #8A8580 (warm muted grey)
- Accent: #C5A572 (aged gold — old money, not flashy)
- Borders/lines: rgba(240,235,227,0.08) (barely-there cream)

## Typography
- Display/Headers: Playfair Display (ultra-thin serif, 200-300 weight) — Vogue energy
- Body: Inter or system sans-serif, light weight (300)
- Hero text: 120-160px on desktop
- Section labels: tracked-out caps, 10-11px
- ALL typography ultra-refined — think fashion magazine

## Visual Style
- NO film grain (too raw for this brand)
- Soft focus edges — like portrait lens bokeh
- Warm directional side-lighting (NOT overhead spotlight)
- Subtle fade/dissolve transitions between sections
- Spring physics animations — gentle, never flashy
- Custom cursor on desktop (warm gold dot, mix-blend-difference)
- Products have transparent backgrounds with warm glow halos

## Page Structure

### 1. Hero (Full Viewport)
- NO big brand name plastered across screen
- Just "NJ" monogram, barely there, upper-left corner, in thin serif
- Full-bleed editorial feeling — the long-sleeve-dress or foxpurse image, large, center
- Warm side-lighting effect (CSS gradient from left)
- One line bottom-left: "Hollywood. Handmade." — tiny, tracked, cream text
- NO CTA button. Just a thin scroll line indicator
- Smooth fade-in on load

### 2. Collection — One Piece at a Time
- NOT a grid. NOT scattered.
- Each piece gets its own full-viewport moment
- Scroll through pieces like flipping a lookbook
- Product floats center with warm side-lighting glow
- Product name in thin serif, appears with fade
- Price appears subtle, secondary — luxury doesn't shout prices
- Smooth scroll-triggered transitions between pieces
- Show 4-5 hero pieces (long-sleeve-dress, foxpurse, hoodie, swimsuit-white, tank)

### 3. Categories
- Simple split: "Women" | "Men" — large thin serif
- Horizontal divider with gold accent line
- Minimal, just navigation text that links to filtered views

### 4. Studio (About)
- NOT "about us" — section titled "Studio"
- Three sentences max
- "Made in the USA. Made by hand. Made once."
- Single atmospheric image or warm gradient background

### 5. Footer
- Three lines only:
  - inquire@noahjeremiah.com
  - Hollywood, United States
  - © 2026 Noah Jeremiah
- NO social icons. NO newsletter. Ultra minimal.
- Warm gold accent on email link

## Product Page (/product/[slug])
- Full-screen takeover
- Product image 60% of viewport, center-left
- Warm side-lighting (gradient from left side)
- Warm glow halo behind product (radial gradient, cream/gold at very low opacity)
- Product info right side:
  - Category label (tracked caps)
  - Product name (large thin serif)
  - Gold line + price
  - Description text
  - Materials
  - "Inquire About This Piece" button (gold border, NOT filled)
- Drop-in animation on load (fade + slight scale)
- "NJ" monogram top-left, "Back" link top-right

## Products Data
Use these images from public/products/ (the -nobg.png versions have transparent backgrounds):

1. swimsuit-white-nobg.png — "White Swimsuit" — Heavyweight recycled nylon spandex, halter neck
2. swimsuit-black-nobg.png — "Black Swimsuit" — Heavyweight recycled nylon spandex
3. foxpurse-nobg.png — "Fox Purse" — Handcrafted fur bucket bag
4. womens-top-nobg.png — "Jersey Low Cut Dress" — Jersey knit, low cut
5. long-sleeve-dress-nobg.png — "Ribbed Long Sleeve Dress" — Ribbed shoulder pad design
6. tank-nobg.png — "Ribbed Essential Tank" — Black ribbed essential
7. long-sleeve-shirt-nobg.png — "Indiana Long Sleeve" — Long sleeve button-up
8. short-sleeve-shirt-nobg.png — "Alternative Trap Music Tee" — Graphic tee
9. hoodie-nobg.png — "EE Zip Hoodie" — Full zip with sheer cuff extensions
10. hoodie-black-nobg.png — "Black EE Zip Hoodie" — Black colorway

## Animations (Framer Motion)
- Hero: fade in NJ monogram, then image scales up subtly, tagline fades
- Collection: scroll-triggered — each product fades/slides in, previous fades out
- Product page: drop-in with spring physics
- All transitions: smooth, gentle, spring damping 20+
- Warm glow behind products pulses very subtly (opacity oscillation)
- Page transitions: crossfade feel

## Mobile Responsive (CRITICAL — build mobile-first)
- S23 viewport (360x780) as primary target
- One piece at a time works perfectly on mobile
- "NJ" monogram scales down
- Product page stacks vertically
- "Inquire" button sticky at bottom
- Hide custom cursor on touch devices
- All text sizes scale appropriately

## QA Criteria
- Must feel luxury — not streetwear, not e-commerce template
- Every section should feel like a magazine spread
- Warm, not cold
- Serif, not sans-serif for headers
- Gold accents, not white/red
- "Inquire" not "Add to Cart"
- Score target: 9.7/10 from vision QA
