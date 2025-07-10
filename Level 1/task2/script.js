// === MOBILE MENU TOGGLE ===
const menuIcon = document.getElementById("menu-icon");
const navbar = document.querySelector(".navbar");

menuIcon.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

// Close menu on nav link click (mobile UX)
document.querySelectorAll(".navbar a").forEach((link) => {
  link.addEventListener("click", () => {
    navbar.classList.remove("active");
  });
});

// === SCROLL REVEAL EFFECT ===
const revealElements = document.querySelectorAll("section");

const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("reveal-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.1,
  }
);

revealElements.forEach((section) => {
  section.classList.add("reveal"); // for CSS animation
  revealObserver.observe(section);
});
const cardObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        if (entry.target.classList.contains("card")) {
          entry.target.style.transitionDelay = `${index * 100}ms`;
        }
        entry.target.classList.add("reveal-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.1,
  }
);

// Apply to all .card and section elements
document.querySelectorAll("section, .card").forEach((el) => {
  el.classList.add("reveal");
  cardObserver.observe(el);
});
