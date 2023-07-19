const footer = document.querySelector("footer");
const nav = document.querySelector("nav");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        nav.style.transform = "translateY(-100%)";
      } else {
        nav.style.transform = "translateY(0)";
      }
    });
  },
  { threshold: 0.9 }
);

// Start observing all sections
observer.observe(footer);
