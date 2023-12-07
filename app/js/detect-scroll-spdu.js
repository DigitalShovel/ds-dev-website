// Author: Nicholas Panayotakos

// Description: The script below detects the scroll position and adds an active class to the corresponding link in the subnav by highlighting it. This file and its variables are slightly different from the M300 script because the M300 has a different scroll position for all three links.

let productSPDU = document.querySelector("#product");
let specsSPDU = document.querySelector("#specifications");
let bundleSPDU = document.querySelector("#bundle");

let productLinkSPDU = document.querySelector(".subnav__link--product");
let specsLinkSPDU = document.querySelector(".subnav__link--specs");
let bundleLinkSPDU = document.querySelector(".subnav__link--bundle");

let check = false;

window.addEventListener("scroll", () => {
  if (window.innerWidth >= 992) {
    if (scrollY <= 400) {
      specsLinkSPDU.classList.remove("subnav__link--active");
      bundleLinkSPDU.classList.remove("subnav__link--active");

      // set the active class to the product link
      productLinkSPDU.classList.add("subnav__link--active");
    } else if (scrollY <= 1250) {
      productLinkSPDU.classList.remove("subnav__link--active");
      bundleLinkSPDU.classList.remove("subnav__link--active");

      // set the active class to the specs link
      specsLinkSPDU.classList.add("subnav__link--active");
    } else if (scrollY > 1250) {
      productLinkSPDU.classList.remove("subnav__link--active");
      specsLinkSPDU.classList.remove("subnav__link--active");

      // set the active class to the bundle link
      bundleLinkSPDU.classList.add("subnav__link--active");
    }
  } else {
    if (scrollY <= 400) {
      specsLinkSPDU.classList.remove("subnav__link--active");
      bundleLinkSPDU.classList.remove("subnav__link--active");

      // set the active class to the product link
      productLinkSPDU.classList.add("subnav__link--active");
    } else if (scrollY <= 1100) {
      productLinkSPDU.classList.remove("subnav__link--active");
      bundleLinkSPDU.classList.remove("subnav__link--active");

      // set the active class to the specs link
      specsLinkSPDU.classList.add("subnav__link--active");
    } else if (scrollY > 1100) {
      productLinkSPDU.classList.remove("subnav__link--active");
      specsLinkSPDU.classList.remove("subnav__link--active");

      // set the active class to the bundle link
      bundleLinkSPDU.classList.add("subnav__link--active");
    }
  }
});
