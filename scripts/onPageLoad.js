const heroSections = document.querySelectorAll(".hero-section_animation-tag");
console.log(heroSections);

window.addEventListener("load", () => {
  heroSections.forEach((section, index) => {
    const delay = 200 * index; // Adjust the delay value as per your preference
    setTimeout(() => {
      section.classList.add("hero-section_animation-tag-visible");
    }, delay);
  });
});
