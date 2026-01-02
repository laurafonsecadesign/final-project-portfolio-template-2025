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
const filterBtns = document.querySelectorAll(".button[data-filter]");
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
    about: "ABOUT",
    work: "WORK",
    contact: "CONTACT",

    // About section
    intro_hi: "Hi, I'm Laura Fonseca!",
    intro_description:
      "I'm a Multimedia & Graphic Design student with a passion for creating meaningful visual experiences. My interests lie in Branding and UX/UI design, where I love blending creativity with strategy to craft designs that are both beautiful and functional.",
    download_cv: "Download CV",

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

    // 404 section
    error_title: "Page Not Found",
    error_description:
      "Oops! The page you're looking for doesn't exist. Let's get you back on track.",
    back_home: "Back Home",
  },
  es: {
    // Header
    about: "ACERCA",
    work: "TRABAJO",
    contact: "CONTACTO",

    // About section
    intro_hi: "¡Hola, soy Laura Fonseca!",
    intro_description:
      "Soy estudiante de Diseño Multimedia y Gráfico con un fuerte interés en el Branding y el diseño UX/UI, las áreas que más me apasionan. Disfruto explorar cómo la creatividad puede unirse a la estrategia para crear experiencias visuales que no solo sean atractivas, sino también funcionales y significativas.",
    download_cv: "Descargar CV",

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

    // 404 section
    error_title: "Página No Encontrada",
    error_description:
      "¡Ups! La página que buscas no existe. Volvamos al camino correcto.",
    back_home: "Volver al Inicio",
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
  // Detectar idioma del navegador o recuperar idioma guardado
  const savedLanguage = localStorage.getItem("preferredLanguage");
  if (savedLanguage && translations[savedLanguage]) {
    currentLanguage = savedLanguage;
  } else {
    currentLanguage = detectBrowserLanguage();
  }

  // Configurar event listeners para los botones de idioma
  const langEnBtn = document.getElementById("lang-en");
  const langEsBtn = document.getElementById("lang-es");

  if (langEnBtn) {
    langEnBtn.addEventListener("click", () => changeLanguage("en"));
  }
  if (langEsBtn) {
    langEsBtn.addEventListener("click", () => changeLanguage("es"));
  }

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
