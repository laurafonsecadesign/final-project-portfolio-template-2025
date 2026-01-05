# Plan 2: Modular CSS Architecture

## Phase 1: Planning

### User Request

> "My CSS is getting too large and difficult to maintain in a single file. I want to refactor the styling into a modular architecture using a 'barrel' pattern (index.css) to import component-specific files. Can you plan this restructure?"

### AI Analysis & Strategy

We will break down the monolithic CSS into logical layers following ITCSS (Inverted Triangle CSS) principles to improve maintainability and scalability.

**1. File Structure Proposal:**

- `reset.css`: Browser normalization (already exists).
- `base.css`: Global styles, variables (`:root`), typography, and HTML tag defaults.
- `layout.css`: Structural styles (Header positioning, Hero alignment, Section padding, Footer layout).
- `components.css`: Specific UI elements (Buttons, Project Cards, Language Selector, Animations).
- `index.css`: The "barrel" file that uses `@import` to load all valid CSS files in specific order.

**2. Specific Refactoring Tasks:**

- Move `.main-header` and `.project-grid` layouts to `layout.css`.
- Move `.button`, `.view-btn`, and `.cursor` styles to `components.css`.
- Ensure `@media` queries are located near the relevant selectors or at the end of modules.

### Implementation Steps

1.  Create the new CSS files in `assets/css/`.
2.  Migrate styles from the prototype file into the new modules.
3.  Configure `index.css` to import: reset → base → layout → components.
4.  Update `index.html` to link only `assets/css/index.css`.
