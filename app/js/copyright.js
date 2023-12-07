// Author: Nicholas Panayotakos

// Description: This file contains the javascript that detects and changes the copyright year in the footer.

// detect the current year and change the text content of the class named "footer__copyright--year" to the current year

let currentYear = new Date().getFullYear();
let year = document.querySelector(".footer__copyright-year");
year.textContent = currentYear;
