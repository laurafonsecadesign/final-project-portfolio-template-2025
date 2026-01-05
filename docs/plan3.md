# Plan 3: JavaScript System (i18n & Animations)

## Phase 1: Planning

### User Request

> "I need a JavaScript system to handle two main features: client-side language switching (English/Spanish) without reloading, and scroll animations using GSAP. The code should be organized and not just a global list of functions."

### AI Analysis & Strategy

We will use a Namespace/Object-based architecture to keep the code clean and prevent global scope pollution.

**1. Architecture (`main.js`):**

- `CONFIG`: Object to store constants (default language, breakpoints).
- `TranslationManager`: Object responsible for detecting browser language, storing dictionary (JSON), and updating DOM elements with `data-translate` attributes.
- `AnimationManager`: Object to handle GSAP ScrollTrigger instances (Hero reveal, Project staggering).
- `UIManager`: Object for UI interactions like the custom cursor and mobile menu.

**2. Translation Logic:**

- Use a dictionary object structure: `data: { en: {...}, es: {...} }`.
- Function `translatePage()`: Select all `[data-translate]` elements and replace `textContent` or `innerHTML`.

**3. Animation Logic:**

- Integrate `gsap` and `ScrollTrigger`.
- Implement `reveal` effects for text (Y-axis translation) and images.
- Implement a custom cursor that follows mouse movement (`mousemove` listener).

### Implementation Steps

1.  Set up the JS module structure with the main objects.
2.  Populate the translation dictionary for Hero, About, and Work sections.
3.  Implement the language toggle logic and LocalStorage saving.
4.  Initialize GSAP animations for the project grid and titles.
