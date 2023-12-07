// Author: Nicholas Panayotakos

// Description: This file is responsible for the dropdown animation when the user hovers over the bear market promo pricing. The animation is handled through JS to make the pricing appear longer by adding a 1.25 second delay before the popup disappears.

// get all the elements with an attribute of data-specs and data-pricing
// get all the elements with a class of .card__data-specs-popup and .card__data-pricing-popup
// when the users hovers over the element with the attribute of data-specs, the popup with the class of .card__data--specs-popup should appear
// when the user is hovered over the element with the attribute of data-pricing, the popup with the class of .card__data--pricing-popup should appear
// when the user us hovered out of the element with the attribute of data-specs, the popup with the class of .card__data--specs-popup should disappear after 1.25 seconds
// when the users hovers out of the element with the attribute of data-pricing, the popup with the class of .card__data--pricing-popup should disappear after 1.25 seconds

const specsPromo = document.querySelectorAll("[data-specs]");
const pricingPromo = document.querySelectorAll("[data-pricing]");
const specsPopup = document.querySelectorAll(".card__data--specs-popup");
const pricingPopup = document.querySelectorAll(".card__data--pricing-popup");

specsPromo.forEach((spec, i) => {
  spec.addEventListener("mouseover", () => {
    specsPopup[i].classList.add("card__data--specs-popup-show");
  });
});

specsPromo.forEach((spec, i) => {
  spec.addEventListener("mouseleave", () => {
    setTimeout(() => {
      specsPopup[i].classList.remove("card__data--specs-popup-show");
    }, 1250);
  });
});

pricingPromo.forEach((price, i) => {
  price.addEventListener("mouseover", () => {
    pricingPopup[i].classList.add("card__data--pricing-popup-show");
  });
});

pricingPromo.forEach((price, i) => {
  price.addEventListener("mouseleave", () => {
    setTimeout(() => {
      pricingPopup[i].classList.remove("card__data--pricing-popup-show");
    }, 1250);
  });
});
