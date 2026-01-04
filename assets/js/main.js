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
// 1. TRANSLATIONS OBJECT - ORGANIZED BY SECTIONS
const translations = {
  en: {
    nav: {
      about: "ABOUT",
      work: "WORK",
      contact: "CONTACT",
    },
    hero: {
      intro_hi: "Hi, I'm Laura Fonseca!",
      intro_description:
        "I'm a Multimedia & Graphic Design student with a passion for creating meaningful visual experiences. My interests lie in Branding and UX/UI design, where I love blending creativity with strategy to craft designs that are both beautiful and functional.",
    },
    about: {
      download_cv: "Download CV",
    },
    work: {
      filters: {
        all: "All",
        branding: "Branding",
        editorial: "Editorial",
      },
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
            "I began with comprehensive market research, analyzing competing pet food brands and identifying opportunities for differentiation. This included studying consumer preferences and trends in the premium pet food segment.",
          strategy_title: "02. Brand Strategy",
          strategy_text:
            "Drawing from the brand's commitment to natural, high-quality ingredients and its B Corporation values, I defined a strategy focused on authenticity, simplicity, and emotional connection. The positioning aimed to reflect Applaws' unique offering, through a warm and trustworthy brand voice.",
          identity_title: "03. Visual Identity",
          identity_text:
            "I developed a custom logotype integrating the silhouettes of a cat and dog into the negative space of the letters, symbolizing inclusivity. The identity system was expanded with a soft, vibrant color palette, rounded typography, and expressive illustrations to evoke joy, care, and modernity, while maintaining clarity and legibility.",
          packaging_title: "04. Packaging Design",
          packaging_text:
            "The packaging was designed to highlight the product's premium ingredients while ensuring strong shelf presence. I created a flexible system that accommodated different product lines while maintaining brand consistency.",
        },
      },
      llorona: {
        overview_1:
          "This project consisted of designing the interface for a restaurant app called La Llorona. The objective was to build a high-fidelity prototype in Figma, applying graphic and interface design principles.",
        overview_2:
          "The app was built to be intuitive and engaging, offering everything from digital menus with vibrant imagery to an integrated loyalty system that rewards user interaction.",
        process: {
          research_text:
            "I started by identifying the main digital pain points in restaurant user experiences, such as fragmented services, outdated menus, and lack of engaging loyalty programs. Market data and competitor analysis revealed a growing demand for unified, intuitive platforms. These insights shaped the foundation for the app's core features.",
          ux_text:
            "With the help of detailed user personas, I mapped out customer journeys to address diverse needs—from speedy mobile ordering to social reward systems. This led to features like in-app reservations, real-time delivery tracking, and interactive challenges that cater to both casual visitors and loyal customers.",
          interface_text:
            "Inspired by Mexican culture, I developed a bold and colorful UI system that balanced energy and clarity. The palette blends warm tones like coral and mustard with vibrant accents like lime green and soft pinks, creating a lively, modern feel. Icons and layouts were kept clean and intuitive to ensure a smooth navigation flow.",
          prototype_text:
            "Low- and high-fidelity prototypes were built and tested to fine-tune usability. I focused on optimizing flows for actions like Pay&Go, delivery, and reservations—making sure each felt fast and effortless.",
        },
      },
      velox: {
        overview:
          "Velox is a logistics and delivery application designed to streamline the shipping experience. The goal was to create an intuitive interface that simplifies package tracking and delivery management.",
        challenge:
          "The challenge was to design a platform that handles complex logistical data while remaining user-friendly and visually appealing across all device types.",
        process: {
          research_text:
            "I began with comprehensive market research, analyzing competing logistics platforms and identifying user pain points. The research revealed critical needs around real-time tracking and simplified delivery management.",
          strategy_text:
            "I developed a strategy focused on speed, reliability, and transparency. The design approach emphasized clear information hierarchy and intuitive navigation to help users quickly access shipping information.",
          design_text:
            "I created a modern visual system with a clean aesthetic and strategic use of color to highlight important states and actions. The design system ensures consistency across all app screens and components.",
          implementation_text:
            "The design was refined through multiple iterations and user testing, optimizing for mobile-first experience and ensuring fast load times for critical information displays.",
        },
      },
      nogue: {
        overview_1:
          "NOGUE is a biannual, satirical fashion magazine that critiques consumerism, fast fashion, and performative luxury through irony, parody, and bold visual storytelling. NOGUE mimics high-fashion aesthetics only to subvert them with chaotic layouts, awkward poses, and irreverent content. Designed collaboratively, the magazine merges theatrical photography, hand-drawn illustrations, and playful typography to expose the absurdity of the fashion world while celebrating imperfection, humor, and rebellion.",
        overview_2:
          "It is a group project, where my main role was making the InDesign file.",
        process: {
          concept_title: "01. Concept Development",
          concept_text:
            "As a group, we collectively shaped the editorial concept for NOGUE, aiming to satirize the fashion industry's contradictions through parody and visual critique. While the initial concept and tone were developed collaboratively, I worked closely with the team to translate our shared vision into a cohesive structure within InDesign, helping to define how the magazine's chaotic humor would be delivered through layout and flow.",
          grid_title: "02. Grid System",
          grid_text:
            "I established the foundational InDesign grid system that balanced structure with flexibility, allowing space for both traditional magazine elements and disruptive, collage-like visuals. The system supported multi-column layouts but was intentionally broken in key moments to reflect the magazine's satirical edge and fragmented editorial tone.",
          typography_title: "03. Typography & Color",
          typography_text:
            "Using the team's chosen typefaces and color palette, I implemented a consistent typographic hierarchy and applied color throughout the layout to enhance both readability and personality. My role involved ensuring that bold titles, handwritten elements, and body text worked harmoniously across pages, contributing to NOGUE's playful, rebellious voice.",
          layout_title: "04. Layout Design",
          layout_text:
            "I was responsible for the full assembly of the magazine in InDesign, carefully placing text, images, and graphic elements to achieve the right pacing and visual impact. From full-bleed photos to white space management and layering sketches, I ensured that each spread aligned with our conceptual goals—balancing editorial polish with intentional disorder.",
        },
      },
      cerditos: {
        overview:
          "For this project, I developed 3 Cerditos, a fictional wine brand created as part of a design exploration. The concept, branding, and packaging were entirely crafted by me, with the goal of imagining a wine that breaks away from traditional formality and speaks directly to a young, urban audience through humor, storytelling, and a playful visual identity.",
        challenge:
          "The challenge was to build a brand world from scratch—starting with naming and narrative—while designing a cohesive system that felt approachable, memorable, and market-ready.",
        process: {
          naming_title: "01. Naming",
          naming_text:
            "The name 3 Cerditos was inspired by the classic tale of 'The Three Little Pigs.' This familiar reference adds a playful twist and makes the brand instantly recognizable. Each 'cerdito' represents a different wine (red, rosé, and white), allowing for character-based storytelling that reinforces the brand's casual, fun-loving personality.",
          moodboard_title: "02. Moodboard & Concept Development",
          moodboard_text:
            "To define the creative direction, I built a moodboard focused on warmth, humor, and rustic charm. The goal was to infuse the brand with personality—something vibrant, nostalgic, and a little irreverent—while still feeling connected to nature and quality wine production.",
          copywriting_title: "03. Creative Copywriting",
          copywriting_text:
            "The tagline 'Beberé, beberé y 3 Cerditos disfrutaré' is a playful adaptation of the fairy tale phrase 'Soplaré, soplaré y tu casa derribaré.' This catchy, rhyming slogan was designed to evoke familiarity and make the brand voice memorable, light-hearted, and inviting.",
          identity_title: "04. Visual Identity & Packaging",
          identity_text:
            "Each label tells a mini-story of its respective pig character: Pedrito (red), Juanito (rosé), and Manolito (white). The designs combine whimsical illustration with bold color palettes, pairing each wine's personality with its visual expression. The back labels provide narrative context, linking the wines to the Natural Park of La Mata, adding a fictional terroir-based storytelling element.",
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
    nav: {
      about: "ACERCA",
      work: "TRABAJO",
      contact: "CONTACTO",
    },
    hero: {
      intro_hi: "¡Hola, soy Laura Fonseca!",
      intro_description:
        "Soy estudiante de Diseño Multimedia y Gráfico con un fuerte interés en el Branding y el diseño UX/UI, las áreas que más me apasionan. Disfruto explorar cómo la creatividad puede unirse a la estrategia para crear experiencias visuales que no solo sean atractivas, sino también funcionales y significativas.",
    },
    about: {
      download_cv: "Descargar CV",
    },
    work: {
      filters: {
        all: "Todo",
        branding: "Branding",
        editorial: "Editorial",
      },
      view: "Ver",
    },
    projects: {
      common: {
        overview: "Descripción General del Proyecto",
        design_process: "Proceso de Diseño",
        next_project: "Siguiente Proyecto",
        back_to_projects: "Volver a proyectos",
      },
      applaws: {
        category: "Rediseño de Marca",
        overview_1:
          "Para este proyecto, tuve la oportunidad de renovar la identidad visual de Applaws, una marca premium de alimentos para mascotas enfocada en proporcionar ingredientes naturales de alta calidad para gatos y perros.",
        overview_2:
          "El desafío fue diseñar empaques y elementos de marca que se destacaran en un mercado competitivo mientras transmitían la naturaleza premium del producto.",
        process: {
          research_title: "01. Investigación",
          research_text:
            "Comencé con una investigación de mercado exhaustiva, analizando marcas competidoras de alimentos para mascotas e identificando oportunidades de diferenciación. Esto incluyó estudiar las preferencias de los consumidores y las tendencias en el segmento de alimentos premium para mascotas.",
          strategy_title: "02. Estrategia de Marca",
          strategy_text:
            "Basándome en el compromiso de la marca con ingredientes naturales y de alta calidad y sus valores de Corporación B, definí una estrategia enfocada en autenticidad, simplicidad y conexión emocional. El posicionamiento buscaba reflejar la oferta única de Applaws a través de una voz de marca cálida y confiable.",
          identity_title: "03. Identidad Visual",
          identity_text:
            "Desarrollé un logotipo personalizado integrando las siluetas de un gato y un perro en el espacio negativo de las letras, simbolizando inclusividad. El sistema de identidad se expandió con una paleta de colores suave y vibrante, tipografía redondeada e ilustraciones expresivas para evocar alegría, cuidado y modernidad, manteniendo claridad y legibilidad.",
          packaging_title: "04. Diseño de Empaque",
          packaging_text:
            "El empaque fue diseñado para destacar los ingredientes premium del producto mientras aseguraba una fuerte presencia en estantería. Creé un sistema flexible que acomodaba diferentes líneas de productos manteniendo consistencia de marca.",
        },
      },
      llorona: {
        overview_1:
          "Este proyecto consistió en diseñar la interfaz de una aplicación de restaurante llamada La Llorona. El objetivo era construir un prototipo de alta fidelidad en Figma, aplicando principios de diseño gráfico e interfaz.",
        overview_2:
          "La aplicación fue construida para ser intuitiva y atractiva, ofreciendo todo, desde menús digitales con imágenes vibrantes hasta un sistema de fidelización integrado que recompensa la interacción del usuario.",
        process: {
          research_text:
            "Comencé identificando los principales puntos de dolor digitales en las experiencias de usuarios de restaurantes, como servicios fragmentados, menús desactualizados y falta de programas de fidelización atractivos. Los datos de mercado y el análisis competitivo revelaron una demanda creciente de plataformas unificadas e intuitivas. Estos conocimientos sentaron las bases para las características principales de la aplicación.",
          ux_text:
            "Con la ayuda de personas de usuario detalladas, tracé viajes de clientes para abordar diversas necesidades, desde pedidos móviles rápidos hasta sistemas de recompensas sociales. Esto llevó a características como reservaciones en la aplicación, seguimiento de entrega en tiempo real y desafíos interactivos que atienden tanto a visitantes casuales como a clientes leales.",
          interface_text:
            "Inspirado en la cultura mexicana, desarrollé un sistema de UI audaz y colorido que equilibró energía y claridad. La paleta mezcla tonos cálidos como coral y mostaza con acentos vibrantes como verde lima y rosas suaves, creando una sensación moderna y animada. Los iconos y diseños se mantuvieron limpios e intuitivos para asegurar un flujo de navegación suave.",
          prototype_text:
            "Se construyeron y probaron prototipos de baja y alta fidelidad para refinar la usabilidad. Me enfoqué en optimizar flujos para acciones como Pay&Go, entrega y reservaciones, asegurándome de que cada una se sintiera rápida y sin esfuerzo.",
        },
      },
      velox: {
        overview:
          "Velox es una aplicación de logística y entrega diseñada para simplificar la experiencia de envío. El objetivo era crear una interfaz intuitiva que simplifique el seguimiento de paquetes y la gestión de entregas.",
        challenge:
          "El desafío fue diseñar una plataforma que maneje datos logísticos complejos mientras permanece amigable con el usuario y visualmente atractiva en todos los tipos de dispositivos.",
        process: {
          research_text:
            "Comencé con investigación de mercado exhaustiva, analizando plataformas de logística competidoras e identificando puntos de dolor del usuario. La investigación reveló necesidades críticas en torno al seguimiento en tiempo real y la gestión de entregas simplificada.",
          strategy_text:
            "Desarrollé una estrategia enfocada en velocidad, confiabilidad y transparencia. El enfoque de diseño enfatizaba una jerarquía clara de información y navegación intuitiva para ayudar a los usuarios a acceder rápidamente a la información de envío.",
          design_text:
            "Creé un sistema visual moderno con una estética limpia y uso estratégico del color para destacar estados y acciones importantes. El sistema de diseño asegura consistencia en todas las pantallas y componentes de la aplicación.",
          implementation_text:
            "El diseño se refinó a través de múltiples iteraciones y pruebas de usuario, optimizando para experiencia mobile-first y asegurando tiempos de carga rápidos para las visualizaciones de información crítica.",
        },
      },
      nogue: {
        overview_1:
          "NOGUE es una revista de moda satírica bienal que critica el consumismo, la moda rápida y el lujo performativo a través de ironía, parodia y narrativa visual audaz. NOGUE imita la estética de la moda de alta costura solo para subvertirla con diseños caóticos, poses incómodas y contenido irreverente. Diseñada colaborativamente, la revista fusiona fotografía teatral, ilustraciones hechas a mano y tipografía juguetona para exponer el absurdo del mundo de la moda mientras celebra la imperfección, el humor y la rebelión.",
        overview_2:
          "Es un proyecto en grupo, donde mi rol principal fue hacer el archivo de InDesign.",
        process: {
          concept_title: "01. Desarrollo de Concepto",
          concept_text:
            "Como grupo, moldeamos colectivamente el concepto editorial de NOGUE, buscando satirizar las contradicciones de la industria de la moda a través de la parodia y la crítica visual. Si bien el concepto inicial y el tono fueron desarrollados colaborativamente, trabajé de cerca con el equipo para traducir nuestra visión compartida en una estructura cohesiva dentro de InDesign, ayudando a definir cómo el humor caótico de la revista se entregaría a través del diseño y flujo.",
          grid_title: "02. Sistema de Cuadrícula",
          grid_text:
            "Establecí el sistema de cuadrícula fundamental de InDesign que equilibraba estructura con flexibilidad, permitiendo espacio tanto para elementos de revista tradicionales como para visuales disruptivos tipo collage. El sistema soportaba diseños multicolumna pero fue intencionalmente roto en momentos clave para reflejar el borde satírico de la revista y el tono editorial fragmentado.",
          typography_title: "03. Tipografía y Color",
          typography_text:
            "Usando las tipografías y paleta de colores elegidas por el equipo, implementé una jerarquía tipográfica consistente y apliqué color en todo el diseño para mejorar tanto la legibilidad como la personalidad. Mi rol incluyó asegurar que títulos en negrita, elementos manuscritos y texto de cuerpo funcionaran armónicamente en todas las páginas, contribuyendo a la voz juguetona y rebelde de NOGUE.",
          layout_title: "04. Diseño de Diseño",
          layout_text:
            "Fui responsable del ensamblaje completo de la revista en InDesign, colocando cuidadosamente texto, imágenes y elementos gráficos para lograr el ritmo e impacto visual correcto. Desde fotos de sangrado completo hasta la gestión del espacio en blanco y la superposición de bocetos, aseguré que cada página se alineara con nuestros objetivos conceptuales, equilibrando el pulido editorial con el desorden intencional.",
        },
      },
      cerditos: {
        overview:
          "Para este proyecto, desarrollé 3 Cerditos, una marca de vino ficticia creada como parte de una exploración de diseño. El concepto, la marca y el empaque fueron completamente elaborados por mí, con el objetivo de imaginar un vino que se aleja de la formalidad tradicional y se dirige directamente a una audiencia joven y urbana a través del humor, la narración y una identidad visual juguetona.",
        challenge:
          "El desafío fue construir un mundo de marca desde cero, comenzando con nombres y narrativa, mientras diseñaba un sistema cohesivo que se sintiera accesible, memorable y listo para el mercado.",
        process: {
          naming_title: "01. Nombrado",
          naming_text:
            "El nombre 3 Cerditos fue inspirado por el cuento clásico de 'Los Tres Cerditos'. Esta referencia familiar agrega un giro juguetón y hace que la marca sea instantáneamente reconocible. Cada 'cerdito' representa un vino diferente (tinto, rosado y blanco), permitiendo una narrativa basada en personajes que refuerza la personalidad casual y amante de la diversión de la marca.",
          moodboard_title: "02. Moodboard y Desarrollo de Concepto",
          moodboard_text:
            "Para definir la dirección creativa, construí un moodboard enfocado en calidez, humor y encanto rústico. El objetivo era infundir la marca con personalidad, algo vibrante, nostálgico y un poco irreverente, mientras se sentía conectado con la naturaleza y la producción de vino de calidad.",
          copywriting_title: "03. Redacción Creativa",
          copywriting_text:
            "El lema 'Beberé, beberé y 3 Cerditos disfrutaré' es una adaptación juguetona de la frase del cuento de hadas 'Soplaré, soplaré y tu casa derribaré'. Este lema pegadizo y rimado fue diseñado para evocar familiaridad y hacer que la voz de la marca fuera memorable, desenfadada e invitante.",
          identity_title: "04. Identidad Visual y Empaque",
          identity_text:
            "Cada etiqueta cuenta la mini-historia de su respectivo personaje de cerdo: Pedrito (tinto), Juanito (rosado) y Manolito (blanco). Los diseños combinan ilustraciones caprichosas con paletas de colores audaces, emparejando la personalidad de cada vino con su expresión visual. Las etiquetas posteriores proporcionan contexto narrativo, vinculando los vinos al Parque Natural de La Mata, agregando un elemento de narrativa ficticia basada en terroir.",
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
};

// 2. CURRENT LANGUAGE VARIABLE
let currentLanguage = "en";

// 3. CHANGE LANGUAGE FUNCTION
function changeLanguage(lang) {
  currentLanguage = lang;

  // Update active language button classes
  document.querySelectorAll(".lang-option").forEach((option) => {
    option.classList.remove("active");
  });
  document.getElementById(`lang-${lang}`).classList.add("active");

  // Translate all elements
  translatePage();

  // Save preference to localStorage
  localStorage.setItem("preferredLanguage", lang);
}

// 4. GET NESTED TRANSLATION VALUE FUNCTION
// Supports both flat keys (e.g., "about") and nested keys (e.g., "nav.about", "projects.applaws.category")
function getTranslation(key) {
  const keys = key.split(".");
  let value = translations[currentLanguage];

  for (let i = 0; i < keys.length; i++) {
    if (value && typeof value === "object" && keys[i] in value) {
      value = value[keys[i]];
    } else {
      console.warn(`Translation key not found: ${key}`);
      return key; // Return key if translation not found
    }
  }

  return value;
}

// 5. TRANSLATE PAGE FUNCTION
function translatePage() {
  const elements = document.querySelectorAll("[data-translate]");

  elements.forEach((element) => {
    const key = element.getAttribute("data-translate");
    const value = getTranslation(key);

    if (value !== key) {
      if (element.innerHTML.includes("<br>")) {
        element.innerHTML = value;
      } else {
        element.textContent = value;
      }
    }
  });
}

// 6. INITIALIZATION
document.addEventListener("DOMContentLoaded", function () {
  // Detect browser language or retrieve saved language
  const savedLanguage = localStorage.getItem("preferredLanguage");
  if (savedLanguage && translations[savedLanguage]) {
    currentLanguage = savedLanguage;
  } else {
    currentLanguage = detectBrowserLanguage();
  }

  // Configure event listeners for language buttons
  const langEnBtn = document.getElementById("lang-en");
  const langEsBtn = document.getElementById("lang-es");

  if (langEnBtn) {
    langEnBtn.addEventListener("click", () => changeLanguage("en"));
  }
  if (langEsBtn) {
    langEsBtn.addEventListener("click", () => changeLanguage("es"));
  }

  // Apply initial language
  changeLanguage(currentLanguage);
});

// 7. DETECT BROWSER LANGUAGE FUNCTION (optional)
function detectBrowserLanguage() {
  const browserLang = navigator.language || navigator.userLanguage;
  if (browserLang.startsWith("es")) {
    return "es";
  }
  return "en";
}
