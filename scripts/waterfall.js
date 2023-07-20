const mainsections = document.querySelectorAll(".main-sections");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  },
  { threshold: 0.3 }
);

// Start observing all sections
mainsections.forEach((section) => observer.observe(section));
