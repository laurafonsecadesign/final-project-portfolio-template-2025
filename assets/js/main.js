// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Custom cursor
const cursor = document.querySelector(".cursor");
const isTouchDevice =
  window.matchMedia("(pointer: coarse)").matches || "ontouchstart" in window;
if (cursor && !isTouchDevice) {
  document.addEventListener("mousemove", (e) => {
    gsap.to(cursor, {
      x: e.clientX,
      y: e.clientY,
      duration: 0.1,
      ease: "power1.out",
    });
  });
} else if (cursor) {
  cursor.style.display = "none";
}

// Mobile menu toggle
const mobileNavToggle = document.querySelector(".mobile-nav-toggle");
const nav = document.querySelector("nav");

if (mobileNavToggle) {
  mobileNavToggle.addEventListener("click", () => {
    mobileNavToggle.classList.toggle("active");
    nav.classList.toggle("active");
  });
}

// Page animations
function initPageAnimations() {
  // Header animation
  gsap.fromTo(
    ".main-header",
    {
      y: -50,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: "power2.out",
    }
  );

  gsap.fromTo(
    ".header-content .subtitle span",
    {
      y: 20,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      stagger: 0.1,
      duration: 0.8,
      delay: 0.3,
      ease: "power2.out",
    }
  );

  gsap.fromTo(
    "nav ul li",
    {
      y: 20,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      stagger: 0.1,
      duration: 0.8,
      delay: 0.5,
      ease: "power2.out",
    }
  );

  // Activate CSS animations when elements are visible
  const animatedElements = document.querySelectorAll(
    ".work h2.scale-in, .contact h2.scale-in, .work-filters.slide-up"
  );

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

  // About section animations
  gsap.fromTo(
    ".about-img",
    {
      y: 50,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 0.8,
      scrollTrigger: {
        trigger: ".about-img",
        start: "top 80%",
      },
      ease: "power2.out",
      clearProps: "opacity",
    }
  );

  gsap.fromTo(
    ".about-text",
    {
      y: 50,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 0.8,
      scrollTrigger: {
        trigger: ".about-text",
        start: "top 80%",
      },
      ease: "power2.out",
      clearProps: "opacity",
    }
  );

  // Info block animations
  gsap.fromTo(
    ".info-col-left",
    {
      x: -50,
      opacity: 0,
    },
    {
      x: 0,
      opacity: 1,
      duration: 0.8,
      scrollTrigger: {
        trigger: ".info-block",
        start: "top 80%",
      },
      ease: "power2.out",
      clearProps: "opacity",
    }
  );

  gsap.fromTo(
    ".info-col-right .info-item",
    {
      y: 50,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      stagger: 0.2,
      duration: 0.8,
      scrollTrigger: {
        trigger: ".info-block",
        start: "top 80%",
      },
      ease: "power2.out",
      clearProps: "opacity",
    }
  );

  // Hero section animations
  const heroTl = gsap.timeline({ delay: 0.3 });

  heroTl.fromTo(
    ".nombre-laura",
    {
      y: 80,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 1.2,
      ease: "power3.out",
    }
  );

  heroTl.fromTo(
    ".nombre-fonseca",
    {
      y: 50,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power2.out",
    },
    "-=0.8"
  );

  // Add some letter animation to the "a" characters in Laura
  gsap.to(".nombre-laura i", {
    y: -10,
    duration: 1.5,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut",
    stagger: 0.2,
    delay: 1.5,
  });

  // Work section animations
  gsap.fromTo(
    ".work h2",
    {
      scale: 0.8,
      opacity: 0,
    },
    {
      scale: 1,
      opacity: 1,
      duration: 0.8,
      scrollTrigger: {
        trigger: ".work h2",
        start: "top 80%",
      },
      ease: "power2.out",
      clearProps: "opacity",
    }
  );

  gsap.fromTo(
    ".work-filters",
    {
      y: 30,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 0.8,
      delay: 0.2,
      scrollTrigger: {
        trigger: ".work-filters",
        start: "top 90%",
      },
      ease: "power2.out",
      clearProps: "opacity",
    }
  );

  // Animations for projects
  gsap.fromTo(
    ".project",
    {
      y: 20,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      stagger: 0.15,
      duration: 0.7,
      scrollTrigger: {
        trigger: ".projects-grid",
        start: "top 85%",
      },
      ease: "power1.out",
      clearProps: "opacity", // Clear opacity after animation to prevent flickering
    }
  );

  // Contact section animations
  gsap.fromTo(
    ".contact h2",
    {
      y: 50,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 0.8,
      scrollTrigger: {
        trigger: ".contact",
        start: "top 80%",
      },
      ease: "power2.out",
      clearProps: "opacity",
    }
  );

  gsap.fromTo(
    ".contact-symbol img",
    {
      scale: 0,
      opacity: 0,
      rotation: -45,
    },
    {
      scale: 1,
      opacity: 1,
      rotation: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".contact-symbol",
        start: "top 80%",
      },
      ease: "back.out(1.7)",
      clearProps: "opacity",
    }
  );
}

// Initialize animations on page load
window.addEventListener("DOMContentLoaded", () => {
  initPageAnimations();
});

// Filtros de proyectos
const filterBtns = document.querySelectorAll(".filter-btn");
const projects = document.querySelectorAll(".project");
filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    const filter = btn.dataset.filter;

    projects.forEach((proj) => {
      if (filter === "all" || proj.dataset.category === filter) {
        gsap.to(proj, {
          opacity: 1,
          scale: 1,
          duration: 0.4,
          ease: "power2.out",
          display: "block",
        });
      } else {
        gsap.to(proj, {
          opacity: 0,
          scale: 0.95,
          duration: 0.4,
          ease: "power2.out",
          display: "none",
        });
      }
    });
  });
});

// Smooth scrolling for navigation
document.querySelectorAll("nav a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    const target = document.querySelector(targetId);

    window.scrollTo({
      top: target.offsetTop,
      behavior: "smooth",
    });
  });
});

// Project hover animations
const projectItems = document.querySelectorAll(".project");
projectItems.forEach((item) => {
  const image = item.querySelector(".project-image img");
  const details = item.querySelector(".project-details");

  item.addEventListener("mouseenter", () => {
    gsap.to(image, {
      scale: 1.05,
      duration: 0.4,
      ease: "power2.out",
    });

    gsap.to(details, {
      opacity: 1,
      duration: 0.3,
      ease: "power2.out",
    });
  });

  item.addEventListener("mouseleave", () => {
    gsap.to(image, {
      scale: 1,
      duration: 0.4,
      ease: "power2.out",
    });

    gsap.to(details, {
      opacity: 0,
      duration: 0.3,
      ease: "power2.out",
    });
  });
});

// Custom cursor interactions
if (window.innerWidth > 768 && cursor && !isTouchDevice) {
  const interactiveElements = document.querySelectorAll("a, button, .project");
  interactiveElements.forEach((element) => {
    element.addEventListener("mouseenter", () => {
      gsap.to(cursor, {
        scale: 1.5,
        opacity: 0.7,
        duration: 0.3,
        ease: "power2.out",
      });
    });
    element.addEventListener("mouseleave", () => {
      gsap.to(cursor, {
        scale: 1,
        opacity: 1,
        duration: 0.3,
        ease: "power2.out",
      });
    });
  });
}

// Animación horizontal info-block en móvil
if (window.innerWidth <= 768) {
  gsap.registerPlugin(ScrollTrigger);

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
// 1. OBJETO CON TODAS LAS TRADUCCIONES
const translations = {
  en: {
    // Header
    portfolio: "Portfolio",
    multimedia_design: "Multimedia & Graphic Design",
    about: "ABOUT",
    work: "WORK",
    contact: "CONTACT",

    // About section
    intro_hi: "Hi, I'm Laura Fonseca!",
    intro_description:
      "I'm a Multimedia & Graphic Design student with a passion for creating meaningful visual experiences. My interests lie in Branding and UX/UI design, where I love blending creativity with strategy to craft designs that are both beautiful and functional.",

    // Info block
    education: "Education",
    bachelor_degree: "Bachelor in Multimedia & Graphic Design",
    technical_baccalaureate: "Technical Baccalaureate",
    languages: "Languages",
    spanish_native: "Spanish (Native)",
    english_c2: "English (C2 - Proficiency Cambridge Certificate)",
    german_a1: "German (A1 - Goethe Institute)",
    skills: "Skills",
    creativity: "Creativity",
    communication: "Communication",
    problem_solving: "Problem-Solving",
    adaptability: "Adaptability",
    time_management: "Time Management",
    collaboration: "Collaboration",
    experience: "Experience",
    basketball_coach: "Basketball Coach",
    english_teacher: "English teacher",
    english_teacher_desc: "For children aged 6 to 12",
    waitress: "Waitress",
    others: "Others",
    language_immersion: "Language immersion",
    language_immersion_desc: "Bury St. Edmunds: Culford School. January 2017.",
    academic_debate: "Academic debate",
    june: "June",
    january: "January",
    datecoach: "(October 2024 – Present)",
    dateteacher: "(November 2023 – Present)",
    datewaitress: "(September – November 2023)",

    // Work section
    all: "All",
    branding: "Branding",
    editorial: "Editorial",
    view: "View",

    // Contact section
    lets_connect: "LET'S<br>CONNECT",
    email: "EMAIL",
    instagram: "INSTAGRAM",
    linkedin: "LINKEDIN",
    by_laura: "BY LAURA FONSECA<br>2025<br>ALL RIGHTS RESERVED",
  },
  es: {
    // Header
    portfolio: "Portafolio",
    multimedia_design: "Diseño Multimedia y Gráfico",
    about: "ACERCA",
    work: "TRABAJO",
    contact: "CONTACTO",

    // About section
    intro_hi: "¡Hola, soy Laura Fonseca!",
    intro_description:
      "Soy estudiante de Diseño Multimedia y Gráfico con un fuerte interés en el Branding y el diseño UX/UI, las áreas que más me apasionan. Disfruto explorar cómo la creatividad puede unirse a la estrategia para crear experiencias visuales que no solo sean atractivas, sino también funcionales y significativas.",

    // Info block
    education: "Educación",
    bachelor_degree: "Licenciatura en Diseño Multimedia y Gráfico",
    technical_baccalaureate: "Bachillerato Técnico",
    languages: "Idiomas",
    spanish_native: "Español (Nativo)",
    english_c2: "Inglés (C2 - Certificado Cambridge Proficiency)",
    german_a1: "Alemán (A1 - Goethe Institute)",
    skills: "Habilidades",
    creativity: "Creatividad",
    communication: "Comunicación",
    problem_solving: "Resolución de Problemas",
    adaptability: "Adaptabilidad",
    time_management: "Gestión del Tiempo",
    collaboration: "Colaboración",
    experience: "Experiencia",
    basketball_coach: "Entrenadora de Baloncesto",
    english_teacher: "Profesora de inglés",
    english_teacher_desc: "Para niños de 6 a 12 años",
    waitress: "Camarera",
    others: "Otros",
    language_immersion: "Inmersión lingüística",
    language_immersion_desc: "Bury St. Edmunds: Culford School. Enero 2017.",
    academic_debate: "Debate académico",
    june: "Junio",
    january: "Enero",
    datecoach: "(Octubre 2024 – Presente)",
    dateteacher: "(Noviembre 2023 – Presente)",
    datewaitress: "(Septiembre – Noviembre 2023)",

    // Work section
    all: "Todo",
    branding: "Branding",
    editorial: "Editorial",
    view: "Ver",

    // Contact section
    lets_connect: "CONECTA<br>CONMIGO",
    email: "CORREO",
    instagram: "INSTAGRAM",
    linkedin: "LINKEDIN",
    by_laura: "LAURA FONSECA<br>2025<br>TODOS LOS DERECHOS RESERVADOS",
  },
};

// 2. VARIABLE PARA IDIOMA ACTUAL
let currentLanguage = "en"; // Idioma por defecto

// 3. FUNCIÓN PARA CAMBIAR IDIOMA
function changeLanguage(lang) {
  currentLanguage = lang;

  // Actualizar clases activas de los botones de idioma
  document.querySelectorAll(".lang-option").forEach((option) => {
    option.classList.remove("active");
  });
  document.getElementById(`lang-${lang}`).classList.add("active");

  // Traducir todos los elementos
  translatePage();

  // Guardar preferencia en localStorage (opcional)
  localStorage.setItem("preferredLanguage", lang);
}

// 4. FUNCIÓN PARA TRADUCIR LA PÁGINA
function translatePage() {
  const elements = document.querySelectorAll("[data-translate]");

  elements.forEach((element) => {
    const key = element.getAttribute("data-translate");
    if (translations[currentLanguage] && translations[currentLanguage][key]) {
      if (element.innerHTML.includes("<br>")) {
        element.innerHTML = translations[currentLanguage][key];
      } else {
        element.textContent = translations[currentLanguage][key];
      }
    }
  });
}

// 5. INICIALIZACIÓN
document.addEventListener("DOMContentLoaded", function () {
  // Recuperar idioma guardado (opcional)
  const savedLanguage = localStorage.getItem("preferredLanguage");
  if (savedLanguage && translations[savedLanguage]) {
    currentLanguage = savedLanguage;
  }

  // Configurar event listeners para los botones de idioma
  document
    .getElementById("lang-es")
    .addEventListener("click", () => changeLanguage("es"));
  document
    .getElementById("lang-en")
    .addEventListener("click", () => changeLanguage("en"));

  // Aplicar idioma inicial
  changeLanguage(currentLanguage);
});

// 6. FUNCIÓN PARA DETECTAR IDIOMA DEL NAVEGADOR (opcional)
function detectBrowserLanguage() {
  const browserLang = navigator.language || navigator.userLanguage;
  if (browserLang.startsWith("es")) {
    return "es";
  }
  return "en";
}
currentLanguage = detectBrowserLanguage();
