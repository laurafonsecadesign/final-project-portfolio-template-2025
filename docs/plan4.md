# Plan 4: Performance & Optimization

## Phase 1: Planning

### User Request

> "The site structure and logic are done, but performance scores are low due to large images, and there are some accessibility warnings regarding screen readers and the custom cursor. I need a plan to optimize assets using ImageKit and fix these accessibility issues."

### AI Analysis & Strategy

We need to focus on Core Web Vitals (LCP) and Accessibility (a11y) best practices without altering the design.

**1. Image Optimization Strategy:**

- **CDN Usage:** Utilize ImageKit for serving all static assets.
- **Dynamic Resizing:** Append URL parameters (e.g., `?tr=w-800`) to request resized images based on context (thumbnails vs. hero).
- **Lazy Loading:** Add `loading="lazy"` to all below-the-fold images to reduce initial payload.

**2. Accessibility (a11y) Improvements:**

- **Screen Readers:** Implement a `.sr-only` class to hide semantic headings (`h1`, `h2`) visually while keeping them accessible to AT (Assistive Technology).
- **Cursor Fallback:** Disable the custom JS cursor on touch devices (mobiles/tablets) using media queries to prevent UX issues.

**3. Code Hygiene:**

- Create a `.gitignore` to prevent committing system files (`.DS_Store`).
- Audit code to remove any development `console.log` statements.

### Implementation Steps

1.  Update all `<img>` `src` attributes in HTML to use ImageKit parameters.
2.  Add `loading="lazy"` to Work and Gallery images.
3.  Add `.sr-only` class to `base.css` and apply it to the main `<h1>` in HTML.
4.  Wrap the custom cursor logic in a media query check (`matchMedia('(pointer: fine)')`).
5.  Final Lighthouse audit to confirm scores.
