# Plan 1: Project Setup & Semantic Structure

## Phase 1: Planning

### User Request

> "I am starting a portfolio project. I need to set up the core HTML structure. It needs a fixed header, a hero section with large typography, an 'About' section, a 'Work' grid, and a footer. I want to use 'Instrument Serif' and 'Helvetica' as my fonts. Please outline the semantic HTML structure and basic CSS variables setup."

### AI Analysis & Strategy

To ensure a solid foundation and accessibility from the start, we will focus on semantic tags and CSS custom properties for global theming.

**1. HTML Structure Strategy:**

- **Header:** `<header>` containing a `<nav>` for navigation links and a language toggle (EN/ES).
- **Hero:** `<section>` with `<h1>` visually hidden (for SEO) and display text in `<span>` tags for styling.
- **About:** `<section id="about">` using a flex/grid layout for an image/text split.
- **Work:** `<section id="work">` containing a grid of `<article>` tags for each project card.
- **Footer:** `<footer id="contact">` with social links and copyright info.

**2. Design System (CSS Variables):**
We will define the following in `:root` to allow for easy changes later:

- `--primary-color`: #0903ca (Blue)
- `--white`: #f2f2f2
- `--black`: #141414
- `--font-family-serif`: 'Instrument Serif'
- `--font-family-helvetica`: 'Helvetica Neue'

**3. External Assets:**

- Google Fonts import for 'Instrument Serif'.
- GSAP scripts (via CDN) for future animations.

### Implementation Steps

1.  Create `index.html` and scaffolding the semantic tags.
2.  Create `assets/css/reset.css` (Meyer reset) and `assets/css/base.css`.
3.  Implement the CSS variables and font imports in `base.css`.
4.  Verify semantic validity of the HTML structure.
