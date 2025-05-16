const navLinks = document.getElementById("nav-links");
const menuBtn = document.getElementById("menu-btn");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute(
    "class",
    isOpen ? "ri-close-line" : "ri-menu-3-line"
  );
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-3-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// header container
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".header__content .section__description", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".header__content .header__btn", {
  ...scrollRevealOption,
  delay: 1000,
});

// about container
ScrollReveal().reveal(".about__content .section__header", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".about__content .section__description", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".about__content .about__btn", {
  ...scrollRevealOption,
  delay: 1000,
});

// service container
ScrollReveal().reveal(".service__card", {
  ...scrollRevealOption,
  interval: 500,
});

// portfolio container
ScrollReveal().reveal(".portfolio__card", {
  duration: 1000,
  interval: 500,
});

// typewritter effect
const words = ["Developer", "Crafter", "Painter"];
const typewriterSpan = document.getElementById("typewriter");

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let delay = 120;
let pauseAfterTyping = 1500;  // pause after full word typed
let pauseAfterDeleting = 500; // pause after fully deleted

function type() {
  const currentWord = words[wordIndex];

  if (!isDeleting) {
    // Typing
    typewriterSpan.textContent = currentWord.substring(0, charIndex + 1);
    charIndex++;

    if (charIndex === currentWord.length) {
      // Word fully typed, pause before deleting
      delay = pauseAfterTyping;
      isDeleting = true;
    } else {
      // Continue typing quickly
      delay = 120;
    }
  } else {
    // Deleting
    typewriterSpan.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      // Word fully deleted, pause before typing next
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      delay = pauseAfterDeleting;
    } else {
      // Continue deleting quickly
      delay = 60;
    }
  }

  setTimeout(type, delay);
}

type();
