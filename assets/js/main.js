// main.js

document.addEventListener("DOMContentLoaded", () => {
  // =========================
  // Menú móvil
  // =========================
  const mobileNavToggle = document.querySelector(".mobile-nav-toggle");
  const nav = document.querySelector("nav");

  if (mobileNavToggle && nav) {
    mobileNavToggle.addEventListener("click", () => {
      mobileNavToggle.classList.toggle("active");
      nav.classList.toggle("active");
    });
  }

  // =========================
  // Animaciones GSAP
  // =========================
  function initPageAnimations() {
    if (typeof gsap === "undefined") return;

    if (window.ScrollTrigger) {
      gsap.registerPlugin(ScrollTrigger);
    }

    // Header
    gsap.fromTo(
      ".main-header",
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
    );

    // Hero
    gsap.fromTo(
      ".hero-title",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: "power3.out", delay: 0.3 }
    );

    if (window.ScrollTrigger) {
      // About
      gsap.fromTo(
        ".about",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: ".about",
            start: "top 80%",
          },
        }
      );

      // Work title
      gsap.fromTo(
        ".work h2",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: ".work",
            start: "top 80%",
          },
        }
      );

      // Projects grid
      gsap.fromTo(
        ".projects-grid",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.2,
          scrollTrigger: {
            trigger: ".projects-grid",
            start: "top 85%",
          },
        }
      );

      // Contact title
      gsap.fromTo(
        ".contact h2",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: ".contact",
            start: "top 80%",
          },
        }
      );

      // Footer wrapper
      gsap.fromTo(
        ".footer-wrapper",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.2,
          scrollTrigger: {
            trigger: ".footer-wrapper",
            start: "top 85%",
          },
        }
      );
    }
  }

  // =========================
  // Filtro de proyectos
  // =========================
  const filterButtons = document.querySelectorAll(".filter-btn");
  const projects = document.querySelectorAll(".project");

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.getAttribute("data-filter");

      filterButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      projects.forEach((project) => {
        const category = project.getAttribute("data-category");
        if (filter === "all" || filter === category) {
          project.style.display = "block";
        } else {
          project.style.display = "none";
        }
      });
    });
  });

  // =========================
  // Cursor personalizado
  // =========================
  const cursor = document.querySelector(".cursor");

  if (cursor) {
    document.addEventListener("mousemove", (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    });
  }

  // =========================
  // Sistema de traducciones ES / EN
  // =========================
  const translations = {
    es: {
      portfolio: "Portfolio",
      multimedia_design: "Multimedia & Graphic Design",
      about: "ABOUT",
      work: "WORK",
      contact: "CONTACT",
      about_title: "ABOUT",
      about_subtitle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      about_description_1:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      about_description_2:
        "Integer tincidunt, ipsum at condimentum pharetra, urna odio fermentum turpis.",
      education: "Education",
      languages: "Languages",
      skills: "Skills",
      services: "Services",
      spanish_native: "Spanish (Native)",
      english_c2: "English (C2)",
      german_a1: "German (A1)",
      service_branding: "Branding & Visual Identity",
      service_uiux: "UI/UX Design",
      service_editorial: "Editorial & Layout",
      all: "All",
      branding: "Branding",
      editorial: "Editorial",
      lets_connect: "LET'S<br>CONNECT",
      email: "EMAIL",
      instagram: "INSTAGRAM",
      linkedin: "LINKEDIN",
      by_laura: "BY [TU NOMBRE]<br>2025<br>ALL RIGHTS RESERVED",
      view: "View",
    },
    en: {
      portfolio: "Portfolio",
      multimedia_design: "Multimedia & Graphic Design",
      about: "ABOUT",
      work: "WORK",
      contact: "CONTACT",
      about_title: "ABOUT",
      about_subtitle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      about_description_1:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      about_description_2:
        "Integer tincidunt, ipsum at condimentum pharetra, urna odio fermentum turpis.",
      education: "Education",
      languages: "Languages",
      skills: "Skills",
      services: "Services",
      spanish_native: "Spanish (Native)",
      english_c2: "English (C2)",
      german_a1: "German (A1)",
      service_branding: "Branding & Visual Identity",
      service_uiux: "UI/UX Design",
      service_editorial: "Editorial & Layout",
      all: "All",
      branding: "Branding",
      editorial: "Editorial",
      lets_connect: "LET'S<br>CONNECT",
      email: "EMAIL",
      instagram: "INSTAGRAM",
      linkedin: "LINKEDIN",
      by_laura: "BY [YOUR NAME]<br>2025<br>ALL RIGHTS RESERVED",
      view: "View",
    },
  };

  let currentLanguage = "es";

  function applyTranslations(lang) {
    const elements = document.querySelectorAll("[data-translate]");
    elements.forEach((el) => {
      const key = el.getAttribute("data-translate");
      if (translations[lang] && translations[lang][key]) {
        el.innerHTML = translations[lang][key];
      }
    });
  }

  const langEs = document.getElementById("lang-es");
  const langEn = document.getElementById("lang-en");

  if (langEs) {
    langEs.addEventListener("click", () => {
      currentLanguage = "es";
      langEs.classList.add("active");
      if (langEn) langEn.classList.remove("active");
      applyTranslations(currentLanguage);
    });
  }

  if (langEn) {
    langEn.addEventListener("click", () => {
      currentLanguage = "en";
      langEn.classList.add("active");
      if (langEs) langEs.classList.remove("active");
      applyTranslations(currentLanguage);
    });
  }

  // Inicializar idioma y animaciones
  applyTranslations(currentLanguage);
  initPageAnimations();
});
