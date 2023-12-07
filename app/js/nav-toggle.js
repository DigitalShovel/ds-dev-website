// Author: Nicholas Panayotakos

// Description: This file contains the javascript for the navbar toggle on mobile/tablet.

const navBar = document.querySelector(".navbar");
const navLinks = document.querySelector(".navbar__links");
const navToggle = document.querySelector(".navbar__hamburger");
const navDropdown = document.querySelector(".dropdown");
const navDropdownMenu = document.querySelector(".dropdown__menu");
const body = document.querySelector("body");
const html = document.querySelector("html");

// toggles the navbar on tablet/mobile
navToggle.addEventListener("click", () => {
  const visibility = navLinks.getAttribute("data-visible");
  const expanded = navToggle.getAttribute("aria-expanded");

  if (visibility === "false") {
    navLinks.setAttribute("data-visible", true);
  } else {
    navLinks.setAttribute("data-visible", false);
  }

  if (expanded === "true") {
    html.classList.remove("no-scroll");
    navToggle.setAttribute("aria-expanded", false);
    navLinks.classList.toggle("show");
  } else {
    html.classList.add("no-scroll");
    navToggle.setAttribute("aria-expanded", true);
    navLinks.classList.toggle("show");
  }
});
