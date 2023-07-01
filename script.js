//definitions variables

const heroUpperLeftPara = document.querySelector(".hero-section__upper-left p");
const heroUpperLeftCube = document.querySelector(
  ".hero-section__upper-left-cube"
);
const heroMidRightPara = document.querySelector(".hero-section__mid-right p");
const heroMidRightCube = document.querySelector(
  ".hero-section__upper-right-cube"
);

console.log(heroMidRightCube);
console.log(heroMidRightPara);

// functions

heroUpperLeftPara.addEventListener("mouseover", () => {
  heroUpperLeftCube.classList.add("cube-hover");
  console.log("mouse in");
});

heroUpperLeftPara.addEventListener("mouseout", () => {
  heroUpperLeftCube.classList.remove("cube-hover");
  console.log("mouse out");
});

heroMidRightPara.addEventListener("mouseover", () => {
  heroMidRightCube.classList.add("cube-right-hover");
  console.log("mouse in");
});

heroMidRightPara.addEventListener("mouseout", () => {
  heroMidRightCube.classList.remove("cube-right-hover");
  console.log("mouse out");
});
