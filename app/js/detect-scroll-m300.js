// Author: Nicholas Panayotakos

// Description: The script below detects the scroll position and adds an active class to the corresponding link in the subnav by highlighting it. This file and its variables are slightly different from the i300 script because the i300 has a different scroll position for all three links.

let productM300 = document.querySelector("#product");
let specsM300 = document.querySelector("#specifications");
let bundleM300 = document.querySelector("#bundle");
let pricingM300 = document.querySelector("#pricing");

let productLinkM300 = document.querySelector(".subnav__link--product");
let specsLinkM300 = document.querySelector(".subnav__link--specs");
let bundleLinkM300 = document.querySelector(".subnav__link--bundle");
let pricingLinkM300 = document.querySelector(".subnav__link--pricing");

let check = false;

window.addEventListener("scroll", () => {
  if (window.innerWidth >= 992) {
    if (scrollY <= 400) {
      specsLinkM300.classList.remove("subnav__link--active");
      bundleLinkM300.classList.remove("subnav__link--active");
      pricingLinkM300.classList.remove("subnav__link--active");

      // set the active class to the product link
      productLinkM300.classList.add("subnav__link--active");
    } else if (scrollY <= 1550) {
      productLinkM300.classList.remove("subnav__link--active");
      bundleLinkM300.classList.remove("subnav__link--active");
      pricingLinkM300.classList.remove("subnav__link--active");

      // set the active class to the specs link
      specsLinkM300.classList.add("subnav__link--active");
    } else if (scrollY <= 2350) {
      productLinkM300.classList.remove("subnav__link--active");
      specsLinkM300.classList.remove("subnav__link--active");
      pricingLinkM300.classList.remove("subnav__link--active");

      // set the active class to the bundle link
      bundleLinkM300.classList.add("subnav__link--active");
    } else if (scrollY >= 2351) {
      productLinkM300.classList.remove("subnav__link--active");
      bundleLinkM300.classList.remove("subnav__link--active");
      specsLinkM300.classList.remove("subnav__link--active");

      // set the active class to the pricing link
      pricingLinkM300.classList.add("subnav__link--active");
    }
  } else {
    if (scrollY <= 600) {
      specsLinkM300.classList.remove("subnav__link--active");
      bundleLinkM300.classList.remove("subnav__link--active");
      pricingLinkM300.classList.remove("subnav__link--active");

      // set the active class to the product link
      productLinkM300.classList.add("subnav__link--active");
    } else if (scrollY <= 2500) {
      productLinkM300.classList.remove("subnav__link--active");
      bundleLinkM300.classList.remove("subnav__link--active");
      pricingLinkM300.classList.remove("subnav__link--active");

      // set the active class to the specs link
      specsLinkM300.classList.add("subnav__link--active");
    } else if (scrollY <= 3400) {
      productLinkM300.classList.remove("subnav__link--active");
      specsLinkM300.classList.remove("subnav__link--active");
      pricingLinkM300.classList.remove("subnav__link--active");

      // set the active class to the bundle link
      bundleLinkM300.classList.add("subnav__link--active");
    } else if (scrollY >= 3401) {
      productLinkM300.classList.remove("subnav__link--active");
      bundleLinkM300.classList.remove("subnav__link--active");
      specsLinkM300.classList.remove("subnav__link--active");

      // set the active class to the pricing link
      pricingLinkM300.classList.add("subnav__link--active");
    }
  }
});
