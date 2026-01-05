/**
 * @file main.js
 * @description Main script for Laura Fonseca Portfolio. Handles UI, Animations (GSAP), and Localization.
 * @author Laura Fonseca
 * @version 1.0.0
 * @license MIT
 */

"use strict";

/**
 * CONFIGURATION & STATE
 * Centralized configuration for easy maintenance.
 */
const CONFIG = {
  defaultLang: "en",
  animDuration: 0.8,
  cursorEnabled: true,
  breakpoints: {
    mobile: 768,
    tablet: 1024,
  },
};

/**
 * -----------------------------------------------------------------------------
 * MODULE: LANGUAGE & TRANSLATIONS
 * Handles all localization logic.
 * -----------------------------------------------------------------------------
 */
const TranslationManager = {
  currentLanguage: CONFIG.defaultLang,

  data: {
    en: {
      nav: { about: "ABOUT", work: "WORK", contact: "CONTACT" },
      hero: {
        intro_hi: "Hi, I'm Laura Fonseca!",
        intro_description:
          "I'm a Multimedia & Graphic Design student with a passion for creating meaningful visual experiences. My interests lie in Branding and UX/UI design, where I love blending creativity with strategy to craft designs that are both beautiful and functional.",
      },
      about: { download_cv: "Download CV" },
      work: {
        filters: { all: "All", branding: "Branding", editorial: "Editorial" },
        view: "View",
      },
      projects: {
        common: {
          overview: "Project Overview",
          design_process: "Design Process",
          next_project: "Next Project",
          back_to_projects: "Back to projects",
        },
        applaws: {
          category: "Brand Redesign",
          overview_1:
            "For this project, I had the opportunity to refresh Applaws' visual identity, a premium pet food brand focused on providing high-quality, natural ingredients for cats and dogs.",
          overview_2:
            "The challenge was to design packaging and brand elements that would stand out in a competitive market while conveying the premium nature of the product.",
          process: {
            research_title: "01. Research",
            research_text:
              "I began with comprehensive market research, analyzing competing pet food brands and identifying opportunities for differentiation.",
            strategy_title: "02. Brand Strategy",
            strategy_text:
              "Drawing from the brand's commitment to natural, high-quality ingredients, I defined a strategy focused on authenticity.",
            identity_title: "03. Visual Identity",
            identity_text:
              "I developed a custom logotype integrating the silhouettes of a cat and dog into the negative space of the letters.",
            packaging_title: "04. Packaging Design",
            packaging_text:
              "The packaging was designed to highlight the product's premium ingredients while ensuring strong shelf presence.",
          },
        },
        llorona: {
          overview_1:
            "This project consisted of designing the interface for a restaurant app called La Llorona.",
          overview_2:
            "The app was built to be intuitive and engaging, offering everything from digital menus to loyalty systems.",
          process: {
            research_text:
              "I started by identifying the main digital pain points in restaurant user experiences.",
            ux_text:
              "With the help of detailed user personas, I mapped out customer journeys to address diverse needs.",
            interface_text:
              "Inspired by Mexican culture, I developed a bold and colorful UI system.",
            prototype_text:
              "Low- and high-fidelity prototypes were built and tested to fine-tune usability.",
          },
        },
        velox: {
          overview:
            "Velox is a logistics and delivery application designed to streamline the shipping experience.",
          challenge:
            "The challenge was to design a platform that handles complex logistical data while remaining user-friendly.",
          process: {
            research_text:
              "I began with comprehensive market research, analyzing competing logistics platforms.",
            strategy_text:
              "I developed a strategy focused on speed, reliability, and transparency.",
            design_text:
              "I created a modern visual system with a clean aesthetic.",
            implementation_text:
              "The design was refined through multiple iterations and user testing.",
          },
        },
        nogue: {
          category: "Editorial",
          overview_1:
            "NOGUE is a biannual, satirical fashion magazine that critiques consumerism.",
          overview_2:
            "It is a group project, where my main role was making the InDesign file.",
          process: {
            concept_title: "01. Concept Development",
            concept_text:
              "As a group, we collectively shaped the editorial concept for NOGUE.",
            grid_title: "02. Grid System",
            grid_text: "I established the foundational InDesign grid system.",
            typography_title: "03. Typography & Color",
            typography_text:
              "Using the team's chosen typefaces and color palette, I implemented a consistent typographic hierarchy.",
            layout_title: "04. Layout Design",
            layout_text:
              "I was responsible for the full assembly of the magazine in InDesign.",
          },
        },
        cerditos: {
          category: "Branding",
          overview:
            "For this project, I developed 3 Cerditos, a fictional wine brand.",
          challenge: "The challenge was to build a brand world from scratch.",
          process: {
            naming_title: "01. Naming",
            naming_text:
              "The name 3 Cerditos was inspired by the classic tale of 'The Three Little Pigs.'",
            moodboard_title: "02. Moodboard",
            moodboard_text:
              "To define the creative direction, I built a moodboard focused on warmth and humor.",
            copywriting_title: "03. Creative Copywriting",
            copywriting_text:
              "The tagline 'Beberé, beberé y 3 Cerditos disfrutaré' is a playful adaptation.",
            identity_title: "04. Visual Identity",
            identity_text:
              "Each label tells a mini-story of its respective pig character.",
          },
        },
      },
      footer: {
        lets_connect: "LET'S<br>CONNECT",
        email: "EMAIL",
        instagram: "INSTAGRAM",
        linkedin: "LINKEDIN",
        by_laura: "BY LAURA FONSECA<br>2025<br>ALL RIGHTS RESERVED",
      },
      error: {
        title: "Page Not Found",
        description:
          "Oops! The page you're looking for doesn't exist. Let's get you back on track.",
        back_home: "Back Home",
      },
    },
    es: {
      nav: { about: "ACERCA", work: "TRABAJO", contact: "CONTACTO" },
      hero: {
        intro_hi: "¡Hola, soy Laura Fonseca!",
        intro_description:
          "Soy estudiante de Diseño Multimedia y Gráfico con un fuerte interés en el Branding y el diseño UX/UI. Disfruto explorar cómo la creatividad puede unirse a la estrategia para crear experiencias visuales que no solo sean atractivas, sino también funcionales y significativas.",
      },
      about: { download_cv: "Descargar CV" },
      work: {
        filters: { all: "Todo", branding: "Branding", editorial: "Editorial" },
        view: "Ver",
      },
      projects: {
        common: {
          overview: "Descripción General",
          design_process: "Proceso de Diseño",
          next_project: "Siguiente Proyecto",
          back_to_projects: "Volver a proyectos",
        },
        applaws: {
          category: "Rediseño de Marca",
          overview_1:
            "Para este proyecto, tuve la oportunidad de renovar la identidad visual de Applaws.",
          overview_2:
            "El desafío fue diseñar empaques y elementos de marca que se destacaran en un mercado competitivo.",
          process: {
            research_title: "01. Investigación",
            research_text:
              "Comencé con una investigación de mercado exhaustiva, analizando marcas competidoras.",
            strategy_title: "02. Estrategia",
            strategy_text:
              "Basándome en el compromiso de la marca con ingredientes naturales, definí una estrategia enfocada en autenticidad.",
            identity_title: "03. Identidad Visual",
            identity_text:
              "Desarrollé un logotipo personalizado integrando las siluetas de un gato y un perro.",
            packaging_title: "04. Diseño de Empaque",
            packaging_text:
              "El empaque fue diseñado para destacar los ingredientes premium del producto.",
          },
        },
        llorona: {
          overview_1:
            "Este proyecto consistió en diseñar la interfaz de una aplicación de restaurante llamada La Llorona.",
          overview_2:
            "La aplicación fue construida para ser intuitiva y atractiva.",
          process: {
            research_text:
              "Comencé identificando los principales puntos de dolor digitales en las experiencias de usuarios.",
            ux_text:
              "Con la ayuda de personas de usuario detalladas, tracé viajes de clientes.",
            interface_text:
              "Inspirado en la cultura mexicana, desarrollé un sistema de UI audaz.",
            prototype_text:
              "Se construyeron y probaron prototipos de baja y alta fidelidad.",
          },
        },
        velox: {
          overview:
            "Velox es una aplicación de logística y entrega diseñada para simplificar la experiencia de envío.",
          challenge:
            "El desafío fue diseñar una plataforma que maneje datos logísticos complejos.",
          process: {
            research_text: "Comencé con investigación de mercado exhaustiva.",
            strategy_text:
              "Desarrollé una estrategia enfocada en velocidad y confiabilidad.",
            design_text:
              "Creé un sistema visual moderno con una estética limpia.",
            implementation_text:
              "El diseño se refinó a través de múltiples iteraciones.",
          },
        },
        nogue: {
          category: "Editorial",
          overview_1: "NOGUE es una revista de moda satírica bienal.",
          overview_2:
            "Es un proyecto en grupo, donde mi rol principal fue hacer el archivo de InDesign.",
          process: {
            concept_title: "01. Concepto",
            concept_text:
              "Como grupo, moldeamos colectivamente el concepto editorial.",
            grid_title: "02. Sistema de Cuadrícula",
            grid_text:
              "Establecí el sistema de cuadrícula fundamental de InDesign.",
            typography_title: "03. Tipografía y Color",
            typography_text:
              "Usando las tipografías y paleta de colores elegidas, implementé una jerarquía tipográfica.",
            layout_title: "04. Diseño",
            layout_text:
              "Fui responsable del ensamblaje completo de la revista en InDesign.",
          },
        },
        cerditos: {
          category: "Branding",
          overview:
            "Para este proyecto, desarrollé 3 Cerditos, una marca de vino ficticia.",
          challenge: "El desafío fue construir un mundo de marca desde cero.",
          process: {
            naming_title: "01. Nombrado",
            naming_text:
              "El nombre 3 Cerditos fue inspirado por el cuento clásico.",
            moodboard_title: "02. Moodboard",
            moodboard_text:
              "Para definir la dirección creativa, construí un moodboard enfocado en calidez.",
            copywriting_title: "03. Redacción",
            copywriting_text:
              "El lema 'Beberé, beberé y 3 Cerditos disfrutaré' es una adaptación juguetona.",
            identity_title: "04. Identidad Visual",
            identity_text:
              "Cada etiqueta cuenta la mini-historia de su respectivo personaje.",
          },
        },
      },
      footer: {
        lets_connect: "CONECTA<br>CONMIGO",
        email: "CORREO",
        instagram: "INSTAGRAM",
        linkedin: "LINKEDIN",
        by_laura: "LAURA FONSECA<br>2025<br>TODOS LOS DERECHOS RESERVADOS",
      },
      error: {
        title: "Página No Encontrada",
        description:
          "¡Ups! La página que buscas no existe. Volvamos al camino correcto.",
        back_home: "Volver al Inicio",
      },
    },
  },

  /**
   * Initializes language settings from LocalStorage or Browser preferences.
   */
  init() {
    try {
      const savedLanguage = localStorage.getItem("preferredLanguage");
      if (savedLanguage && this.data[savedLanguage]) {
        this.currentLanguage = savedLanguage;
      } else {
        this.currentLanguage = this.detectBrowserLanguage();
      }

      // Bind events
      const langEnBtn = document.getElementById("lang-en");
      const langEsBtn = document.getElementById("lang-es");

      if (langEnBtn)
        langEnBtn.addEventListener("click", () => this.changeLanguage("en"));
      if (langEsBtn)
        langEsBtn.addEventListener("click", () => this.changeLanguage("es"));

      this.changeLanguage(this.currentLanguage);
    } catch (error) {
      console.error("Translation init failed:", error);
    }
  },

  /**
   * Detects user's browser language.
   * @returns {string} 'es' or 'en'
   */
  detectBrowserLanguage() {
    const browserLang = navigator.language || navigator.userLanguage;
    return browserLang.startsWith("es") ? "es" : "en";
  },

  /**
   * Changes the current language and updates the DOM.
   * @param {string} lang - The language code ('en' or 'es').
   */
  changeLanguage(lang) {
    this.currentLanguage = lang;

    // Update active class on buttons
    document
      .querySelectorAll(".lang-option")
      .forEach((option) => option.classList.remove("active"));
    const activeBtn = document.getElementById(`lang-${lang}`);
    if (activeBtn) activeBtn.classList.add("active");

    this.translatePage();
    localStorage.setItem("preferredLanguage", lang);
  },

  /**
   * Updates all elements with the [data-translate] attribute.
   */
  translatePage() {
    const elements = document.querySelectorAll("[data-translate]");
    elements.forEach((element) => {
      const key = element.getAttribute("data-translate");
      const value = this.getValue(key);

      if (value) {
        if (element.innerHTML.includes("<br>") || value.includes("<br>")) {
          element.innerHTML = value;
        } else {
          element.textContent = value;
        }
      }
    });
  },

  /**
   * Retrieves a nested translation value safely.
   * @param {string} key - Dot notation key (e.g. "nav.work")
   * @returns {string|null} The translated string or null if not found.
   */
  getValue(key) {
    const keys = key.split(".");
    let value = this.data[this.currentLanguage];

    for (const k of keys) {
      if (value && typeof value === "object" && k in value) {
        value = value[k];
      } else {
        return null;
      }
    }
    return value;
  },
};

/**
 * -----------------------------------------------------------------------------
 * MODULE: ANIMATIONS (GSAP)
 * Handles all GSAP ScrollTrigger animations.
 * -----------------------------------------------------------------------------
 */
const AnimationManager = {
  init() {
    // Safety check: Ensure GSAP is loaded
    if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") {
      console.error("GSAP or ScrollTrigger not loaded.");
      return;
    }

    try {
      gsap.registerPlugin(ScrollTrigger);
      this.initPageAnimations();
      this.initProjectFilters();
      this.init404Animations();
      this.initScrollTo();
      this.initMobileScroll();
    } catch (e) {
      console.error("Animation initialization failed:", e);
    }
  },

  initPageAnimations() {
    // Header
    this.animateIfPresent(
      ".main-header",
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8 }
    );

    // Hero Text
    if (document.querySelector(".nombre-laura")) {
      const tl = gsap.timeline({ delay: 0.3 });
      tl.fromTo(
        ".nombre-laura",
        { y: 80, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" }
      );
      if (document.querySelector(".nombre-fonseca")) {
        tl.fromTo(
          ".nombre-fonseca",
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, ease: "power2.out" },
          "-=0.8"
        );
      }
    }

    // ScrollTrigger Animations
    this.createScrollAnimation(".about-img", { y: 50, opacity: 0 });
    this.createScrollAnimation(".about-text", { y: 50, opacity: 0 });
    this.createScrollAnimation(
      ".work h2",
      { scale: 0.8, opacity: 0 },
      "top 80%"
    );
    this.createScrollAnimation(
      ".work-filters",
      { y: 30, opacity: 0 },
      "top 90%",
      0.2
    );

    // Projects Stagger
    if (document.querySelector(".projects-grid")) {
      gsap.fromTo(
        ".project",
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 0.7,
          scrollTrigger: { trigger: ".projects-grid", start: "top 85%" },
          ease: "power1.out",
          clearProps: "opacity",
        }
      );
    }

    // Contact
    this.createScrollAnimation(".contact h2", { y: 50, opacity: 0 });
    if (document.querySelector(".contact-symbol img")) {
      gsap.fromTo(
        ".contact-symbol img",
        { scale: 0, opacity: 0, rotation: -45 },
        {
          scale: 1,
          opacity: 1,
          rotation: 0,
          duration: 1,
          scrollTrigger: { trigger: ".contact-symbol", start: "top 80%" },
          ease: "back.out(1.7)",
          clearProps: "opacity",
        }
      );
    }

    // Intersection Observer for CSS Animations (Legacy support)
    this.initCSSObservers();
  },

  /**
   * Helper to animate element if it exists in DOM
   */
  animateIfPresent(selector, fromVars, toVars) {
    if (document.querySelector(selector)) {
      gsap.fromTo(selector, fromVars, { ...toVars, ease: "power2.out" });
    }
  },

  /**
   * Helper to create standard ScrollTrigger animations
   */
  createScrollAnimation(selector, fromVars, startPos = "top 80%", delay = 0) {
    if (document.querySelector(selector)) {
      gsap.fromTo(selector, fromVars, {
        ...fromVars, // Reset to 'to' state logic implies we need 0 values usually, but strict mapping:
        y: 0,
        scale: 1,
        opacity: 1, // Defaulting destination
        duration: 0.8,
        delay: delay,
        scrollTrigger: { trigger: selector, start: startPos },
        ease: "power2.out",
        clearProps: "opacity",
      });
    }
  },

  initCSSObservers() {
    const animatedElements = document.querySelectorAll(
      ".work h2.scale-in, .contact h2.scale-in, .work-filters.slide-up"
    );
    if (animatedElements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.animationPlayState = "running";
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    animatedElements.forEach((el) => {
      el.style.animationPlayState = "paused";
      observer.observe(el);
    });
  },

  initProjectFilters() {
    const filterBtns = document.querySelectorAll(".button[data-filter]");
    const projects = document.querySelectorAll(".project");

    filterBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        filterBtns.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        const filter = btn.dataset.filter;

        projects.forEach((proj) => {
          const match = filter === "all" || proj.dataset.category === filter;
          gsap.to(proj, {
            opacity: match ? 1 : 0,
            scale: match ? 1 : 0.95,
            duration: 0.4,
            display: match ? "block" : "none",
            ease: "power2.out",
          });
        });
      });
    });
  },

  init404Animations() {
    if (!document.querySelector(".error-container")) return;

    const tl = gsap.timeline();
    tl.fromTo(
      ".error-number",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    )
      .fromTo(
        ".error-title",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
        "-=0.7"
      )
      .fromTo(
        ".error-description",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
        "-=0.6"
      )
      .fromTo(
        ".error-button",
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.8, ease: "back.out(1.7)" },
        "-=0.6"
      );
  },

  initScrollTo() {
    document.querySelectorAll("nav a").forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        const targetId = this.getAttribute("href");
        if (targetId.startsWith("#")) {
          e.preventDefault();
          const target = document.querySelector(targetId);
          if (target)
            window.scrollTo({ top: target.offsetTop, behavior: "smooth" });
        }
      });
    });
  },

  initMobileScroll() {
    if (window.innerWidth <= CONFIG.breakpoints.mobile) {
      const infoRow = document.querySelector(".info-row");
      const infoBlock = document.querySelector(".info-block");
      if (infoRow && infoBlock) {
        const scrollLength = infoRow.scrollWidth - infoBlock.clientWidth;
        gsap.to(infoRow, {
          x: () => -scrollLength,
          ease: "none",
          scrollTrigger: {
            trigger: infoBlock,
            start: "center center",
            end: "+=100%",
            pin: true,
            scrub: 0.2,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });
      }
    }
  },
};

/**
 * -----------------------------------------------------------------------------
 * MODULE: UI (Cursor & Menu)
 * Handles interactive UI elements not strictly related to page flow animations.
 * -----------------------------------------------------------------------------
 */
const UIManager = {
  init() {
    this.initCursor();
    this.initMobileMenu();
  },

  initCursor() {
    const cursor = document.querySelector(".cursor");
    const isTouchDevice =
      window.matchMedia("(pointer: coarse)").matches ||
      "ontouchstart" in window;

    if (!cursor) return;

    if (isTouchDevice) {
      cursor.style.display = "none";
      return;
    }

    document.addEventListener("mousemove", (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: "power1.out",
      });
    });

    // Interactive hover states
    if (window.innerWidth > CONFIG.breakpoints.mobile) {
      const interactiveElements = document.querySelectorAll(
        "a, button, .project"
      );
      interactiveElements.forEach((el) => {
        el.addEventListener("mouseenter", () =>
          gsap.to(cursor, { scale: 1.5, opacity: 0.7, duration: 0.3 })
        );
        el.addEventListener("mouseleave", () =>
          gsap.to(cursor, { scale: 1, opacity: 1, duration: 0.3 })
        );
      });
    }
  },

  initMobileMenu() {
    const toggle = document.querySelector(".mobile-nav-toggle");
    const nav = document.querySelector("nav");
    if (toggle && nav) {
      toggle.addEventListener("click", () => {
        toggle.classList.toggle("active");
        nav.classList.toggle("active");
      });
    }
  },
};

/**
 * -----------------------------------------------------------------------------
 * INITIALIZATION
 * Entry point for the application.
 * -----------------------------------------------------------------------------
 */
document.addEventListener("DOMContentLoaded", () => {
  TranslationManager.init();
  UIManager.init();
  AnimationManager.init();
});
