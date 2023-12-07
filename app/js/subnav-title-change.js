let pricingClass = document.querySelector(".subnav__link--pricing");
let specsClass = document.querySelector(".subnav__link--specs");

// changes the name of the subnav links on mobile
window.matchMedia("(max-width: 450px)").onchange = (e) => {
  if (e.matches) {
    specsClass.innerHTML = "Specs";
  } else {
    specsClass.innerHTML = "Specifications";
  }
};