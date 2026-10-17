# Wanderly: Responsive Travel Guide

A mobile-first travel guide where you can browse, filter, search, and save destinations. Built with plain HTML, CSS, and JavaScript, with no frameworks, as Project 1 of the DecodeLabs Full Stack Development internship.

## Features
- Fully responsive layout (mobile, tablet at 768px, desktop at 1024px)
- Category filters and live search that work together
- Save destinations to a "Saved trips" list that persists after a refresh
- Hamburger menu on mobile with keyboard support
- Accessible markup: skip link, semantic landmarks, labelled controls, visible focus states

## Tech
- **HTML5:** semantic landmarks (`header`, `nav`, `main`, `article`, `footer`)
- **CSS3:** mobile-first, Grid for page layout, Flexbox for components, `clamp()` for fluid type
- **JavaScript:** DOM manipulation, event delegation, `localStorage`

## Design
Palette: Mocha Mousse, Ethereal Blue, and Moonlit Grey. Fonts: Montserrat (headings) and Open Sans (body).

## Process
1. **Discovery:** HMW statement and empathy map in `docs/discovery.md`
2. **Wireframes:** grayscale mobile and desktop layouts in `docs/`
3. **Semantic HTML:** structure first, no styling
4. **Styling:** mobile-first CSS with breakpoints at 768px and 1024px
5. **Logic:** menu toggle, filter, search, save
6. **Audit:** Lighthouse and manual accessibility checks

## Audit results (mobile)
| Performance | Accessibility | Best Practices | SEO |
|---|---|---|---|
| XX | 100 | 100 | 100 |

LCP: X.X s, CLS: 0. Screenshot in `docs/lighthouse.png`.

## Run locally
Open the folder in VS Code and start it with the Live Server extension.

## Credits
Photos from Unsplash and Pexels.