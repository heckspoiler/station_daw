//definitions variables

const heroUpperLeftPara = document.querySelector(".hero-section__upper-left p");
const heroUpperLeftCube = document.querySelector(
  ".hero-section__upper-left-cube"
);

// functions

heroUpperLeftPara.addEventListener("mouseover", () => {
  heroUpperLeftCube.classList.add("cube-hover");
  console.log("mouse in");
});

heroUpperLeftPara.addEventListener("mouseout", () => {
  heroUpperLeftCube.classList.remove("cube-hover");
  console.log("mouse out");
});
