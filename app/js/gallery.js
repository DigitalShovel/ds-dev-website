// Author: Nicholas Panayotakos

// Description: This file contains the javascript that controls the gallery modal.

// 1. get the photo from the gallery
// 2. add an event listener to the photo
// 3. when the photo is clicked, the modal window should pop up
// 4. the modal window should contain the photo that was clicked
// 5. the modal window should have a left and right arrow to navigate through the photos
// 6. when the left arrow is clicked, the previous photo should be displayed
// 7. when the right arrow is clicked, the next photo should be displayed
// 8. the modal window should have a close button
// 9. when the close button is clicked, the modal window should close
// 10. when the modal window is open, the user should be able to use the left and right arrow keys to navigate through the photos
// 11. the modal window should also close when the user clicks outside of the modal window
// 12. the modal window should also close when the user presses the escape key
// 13. when the modal window is open, the user should not be able to tab through the rest of the page

// 1. get the photo from the gallery
const photos = document.querySelectorAll(".photo");
const navbar = document.querySelector(".navbar");
const subnav = document.querySelector(".subnav");

// 2. add an event listener to the photo
photos.forEach((photo) => {
  photo.addEventListener("click", () => {
    // 3. when the photo is clicked, the modal window should pop up
    const modal = document.querySelector(".modal");
    modal.classList.add("open");

    html.style.overflow = "hidden";
    navbar.style.zIndex = "-1";
    subnav.style.zIndex = "-1";

    // 4. the modal window should contain the photo that was clicked
    const modalImg = document.querySelector(".modal__photo");
    modalImg.src = photo.src;

    // 4a. the modal window should contain the photo's caption
    const modalCaption = document.querySelector(".modal__caption");
    modalCaption.textContent = photo.alt;
  });
});

// 5. the modal window should have a left and right arrow to navigate through the photos
// 6. when the left arrow is clicked, the previous photo should be displayed
// 7. when the right arrow is clicked, the next photo should be displayed
// 7a. when the left arrow is clicked, the previous photo's caption should be displayed
// 7b. when the right arrow is clicked, the next photo's caption should be displayed

const leftArrow = document.querySelector(".btn__gallery-left");
const rightArrow = document.querySelector(".btn__gallery-right");

leftArrow.addEventListener("click", () => {
  const modalImg = document.querySelector(".modal__photo");
  const modalCaption = document.querySelector(".modal__caption");

  const currentPhoto = document.querySelector(".modal__photo").src;
  const currentCaption = document.querySelector(".modal__caption").textContent;

  for (let i = 0; i < photos.length; i++) {
    if (currentPhoto === photos[i].src) {
      if (i === 0) {
        modalImg.src = photos[photos.length - 1].src;
        modalCaption.textContent = photos[photos.length - 1].alt;
      } else {
        modalImg.src = photos[i - 1].src;
        modalCaption.textContent = photos[i - 1].alt;
      }
    }
  }
});

rightArrow.addEventListener("click", () => {
  const modalImg = document.querySelector(".modal__photo");
  const modalCaption = document.querySelector(".modal__caption");

  const currentPhoto = document.querySelector(".modal__photo").src;
  const currentCaption = document.querySelector(".modal__caption").textContent;

  for (let i = 0; i < photos.length; i++) {
    if (currentPhoto === photos[i].src) {
      if (i === photos.length - 1) {
        modalImg.src = photos[0].src;
        modalCaption.textContent = photos[0].alt;
      } else {
        modalImg.src = photos[i + 1].src;
        modalCaption.textContent = photos[i + 1].alt;
      }
    }
  }
});

// 8. the modal window should have a close button
// 9. when the close button is clicked, the modal window should close
const closeBtn = document.querySelector(".close");

closeBtn.addEventListener("click", () => {
  const modal = document.querySelector(".modal");
  modal.classList.remove("open");

  html.style.overflow = "auto";
  navbar.style.zIndex = "999";
  subnav.style.zIndex = "99";
});

// 10. when the modal window is open, the user should be able to use the left and right arrow keys to navigate through the photos
document.addEventListener("keydown", (e) => {
  const modal = document.querySelector(".modal");
  if (modal.classList.contains("open")) {
    if (e.key === "ArrowLeft") {
      leftArrow.click();
    } else if (e.key === "ArrowRight") {
      rightArrow.click();
    }
  }
});

// 11. the modal window should also close when the user clicks outside of the modal window
const modal = document.querySelector(".modal");

modal.addEventListener("click", (e) => {
  if (e.target.classList.contains("modal-container")) {
    navbar.style.zIndex = "999";
    subnav.style.zIndex = "99";
    closeBtn.click();
  }
});

// 12. the modal window should also close when the user presses the escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeBtn.click();

    navbar.style.zIndex = "999";
    subnav.style.zIndex = "99";
  }
});

// 13. when the modal window is open, the user should not be able to tab through the rest of the page
const focusableElements = document.querySelectorAll("a[href], button, input, textarea, select, details, [tabindex]:not([tabindex='-1'])");

document.addEventListener("keydown", (e) => {
  if (e.key === "Tab") {
    if (modal.classList.contains("open")) {
      e.preventDefault();
      focusableElements[0].focus();
    }
  }
});
