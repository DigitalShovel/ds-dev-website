const currentPage = window.location.pathname.split("/").pop(); // get the name of the current webpage
const navbarLinks = document.querySelectorAll(".navbar__link"); // get all elements with class "navbar__link"
const dropdownButton = document.querySelector(".dropdown__button"); // get the element with class "dropdown__button"

if (currentPage === "m300" || "i300" || "nanopod" || "fans" || "awnings") {
  // check if the current page is one of the product pages
  dropdownButton.dataset.currentPage = true; // set the data attribute "data-current-page" to true
} else {
  dropdownButton.dataset.currentPage = false; // set the data attribute "data-current-page" to false for all other links
}

navbarLinks.forEach((link) => {
  if (link.getAttribute("href").includes(currentPage)) {
    // check if the link's href attribute includes the name of the current page
    link.dataset.currentPage = true; // set the data attribute "data-current-page" to true
    dropdownButton.dataset.currentPage = false; // set the data attribute "data-current-page" to false for the product link
  } else {
    link.dataset.currentPage = false; // set the data attribute "data-current-page" to false for all other links
  }
});
