AI Development Documentation
Project: Portfolio Template Challenge Student: Laura Fonseca Course: Web Foundations, WEB ATELIER (UDIT) AI Tools: ChatGPT (Architect & Code Review), VS Code Copilot Period: December 2024 - January 2025

Overview
This project represents a major refactoring and optimization of a previously existing codebase. I started with a functional but structurally disorganized website (monolithic CSS, unstructured JavaScript, and heavy assets).

Unlike typical "code generation" workflows, I primarily used AI as a Lead Architect and QA Specialist. The AI helped me audit the existing mess, plan a modular architecture, and implement professional patterns like the "Barrel" CSS pattern and a Namespace-based JavaScript architecture.

How I Used AI:
Since I was dealing with legacy code that needed improvement, I followed a strict Audit → Plan → Implement workflow, complying with the course's "Two-Phase" requirement.

Audit: I uploaded my existing files (index.html, style.css) and asked the AI to identify performance bottlenecks, semantic errors, and maintainability issues.

Planning: Before writing new code, I requested the AI to generate development plans (stored in ./docs/) outlining the new directory structure and logic.

Implementation: I refactored the code following these approved plans, moving from a chaotic structure to a professional one.

Features Refactored & Built with AI Help
Modular CSS Architecture (The Barrel Pattern)
My original CSS was a single, unmaintainable file. The AI help me separate the css into base, layout, and components, and index.css. Plan: ./docs/plan2.md Files: assets/css/ directory.

JavaScript Namespace Architecture & i18n
I needed a robust way to handle English/Spanish translations without page reloads. The AI helped me move away from global functions to a clean Object-Based architecture (TranslationManager, UIManager). It helped structure the JSON dictionary logic for text replacement. Plan: ./docs/plan3.md Files: assets/js/main.js

GSAP Scroll Animations
I wanted high-end scroll animations for the text and project cards. I used AI to understand the syntax of GSAP ScrollTrigger and how to integrate it within my new AnimationManager object so it wouldn't conflict with the translation logic. Files: assets/js/main.js

What I Built Independently
While AI helped with the architecture and complex logic, the core design essence remained mine:

Visual Identity: The choice of Instrument Serif vs. Helvetica, the color palette (#0903ca), and the layout composition.

Content: All project descriptions (Applaws, Velox, etc.) and case study texts.

HTML Structure: The foundational semantic tagging (article, section, header) was established by me, then refined with AI suggestions.

Design Decisions: The decision to use a specific grid layout and the aesthetic direction of the 404 page.

Documentation of Plans
To ensure intentional architecture and prevent aimless code generation, I documented the AI planning phase before implementation. You can find the specific strategies for each major refactoring step in the docs/ folder:

plan1.md: Project Setup & Semantic Structure

plan2.md: Modular CSS Architecture

plan3.md: JavaScript System (i18n & Animations)

plan4.md: Performance & Optimization

Reflection
Using AI as a "Senior Architect" rather than just a "Code Writer" changed my perspective on web development. Initially, I felt overwhelmed by my own disorganized code. The AI didn't just fix it; it taught me why it was wrong (e.g., why giant CSS files are bad, why global scope is dangerous).

The hardest part was resisting the urge to just copy-paste solutions. By forcing myself to generate a written plan first, I had to read and understand the proposed architecture before a single line of code was changed. This resulted in a project that is not only visually pleasing but technically robust and scalable.

Laura Fonseca January 2025
