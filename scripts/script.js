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

// hero upper left cube color change

heroUpperLeftPara.addEventListener("mouseover", () => {
  heroUpperLeftCube.classList.add("cube-hover");
  console.log("mouse in");
});

heroUpperLeftPara.addEventListener("mouseout", () => {
  heroUpperLeftCube.classList.remove("cube-hover");
  console.log("mouse out");
});

// hero mid right cube color change

heroMidRightPara.addEventListener("mouseover", () => {
  heroMidRightCube.classList.add("cube-right-hover");
  console.log("mouse in");
});

heroMidRightPara.addEventListener("mouseout", () => {
  heroMidRightCube.classList.remove("cube-right-hover");
  console.log("mouse out");
});

// hero lower mid cube color change

heroLowerMidPara.addEventListener("mouseover", () => {
  heroLowerMidCube.classList.add("cube-low-hover");
  console.log("mouse in");
});

heroLowerMidPara.addEventListener("mouseout", () => {
  heroLowerMidCube.classList.remove("cube-low-hover");
  console.log("mouse out");
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
