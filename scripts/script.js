// ----------------------------------definitions variables

const header = document.querySelector("header nav");

const heroUpperLeftPara = document.querySelector(".hero-section__upper-left p");
const heroUpperLeftCube = document.querySelector(
  ".hero-section__upper-left-cube"
);
const heroMidRightPara = document.querySelector(".hero-section__mid-right p");
const heroMidRightCube = document.querySelector(
  ".hero-section__upper-right-cube"
);
const heroLowerMidPara = document.querySelector(".hero-section__low-mid p");
const heroLowerMidCube = document.querySelector(
  ".hero-section__lower-mid-cube"
);

const heroPara = document.querySelectorAll(".hero-para");

const scrollIndicator = document.querySelector(".scroll-indicator");

// ----------------------------------functions

// header color change on scroll

window.addEventListener("scroll", () => {
  console.log(window.scrollY);
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    header.classList.add("header-scroll");
  }
  if (window.scrollY < 100) {
    header.classList.remove("header-scroll");
  }
});

// pointer on hover for paragraphs in hero section

const heroParaHover = (para) => {
  para.forEach((para) => {
    para.addEventListener("mouseover", () => {
      para.style.cursor = "pointer";
    });
    para.addEventListener("mouseout", () => {
      para.style.cursor = "default";
    });
  });
};

// scrollIndicator timeout appear

setTimeout(() => {
  scrollIndicator.style.transform = "translateY(1rem)";
}, 2000);

//scrollIndicator disappear on certain scroll height

window.addEventListener("scroll", () => {
  if (window.scrollY > 120) {
    scrollIndicator.style.transform = "translateY(6rem)";
  }
  if (window.scrollY < 120) {
    scrollIndicator.style.transform = "translateY(1rem)";
  }
});

// ----------------------------------function calls

heroParaHover(heroPara);

console.log(window.innerWidth);
