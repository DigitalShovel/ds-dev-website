// Author: Nicholas Panayotakos

// Description: The script below detects the scroll position and adds an active class to the corresponding link in the subnav by highlighting it. This file and its variables are slightly different from the M300 script because the M300 has a different scroll position for all three links.

let productI300 = document.querySelector("#product");
let specsI300 = document.querySelector("#specifications");
let bundleI300 = document.querySelector("#bundle");

let productLinkI300 = document.querySelector(".subnav__link--product");
let specsLinkI300 = document.querySelector(".subnav__link--specs");
let bundleLinkI300 = document.querySelector(".subnav__link--bundle");

let check = false;

window.addEventListener("scroll", () => {
  if (window.innerWidth >= 992) {
    if (scrollY <= 400) {
      specsLinkI300.classList.remove("subnav__link--active");
      bundleLinkI300.classList.remove("subnav__link--active");

      // set the active class to the product link
      productLinkI300.classList.add("subnav__link--active");
    } else if (scrollY <= 1250) {
      productLinkI300.classList.remove("subnav__link--active");
      bundleLinkI300.classList.remove("subnav__link--active");

      // set the active class to the specs link
      specsLinkI300.classList.add("subnav__link--active");
    } else if (scrollY > 1250) {
      productLinkI300.classList.remove("subnav__link--active");
      specsLinkI300.classList.remove("subnav__link--active");

      // set the active class to the bundle link
      bundleLinkI300.classList.add("subnav__link--active");
    }
  } else {
    if (scrollY <= 400) {
      specsLinkI300.classList.remove("subnav__link--active");
      bundleLinkI300.classList.remove("subnav__link--active");

      // set the active class to the product link
      productLinkI300.classList.add("subnav__link--active");
    } else if (scrollY <= 1800) {
      productLinkI300.classList.remove("subnav__link--active");
      bundleLinkI300.classList.remove("subnav__link--active");

      // set the active class to the specs link
      specsLinkI300.classList.add("subnav__link--active");
    } else if (scrollY > 1800) {
      productLinkI300.classList.remove("subnav__link--active");
      specsLinkI300.classList.remove("subnav__link--active");

      // set the active class to the bundle link
      bundleLinkI300.classList.add("subnav__link--active");
    }
  }
});
