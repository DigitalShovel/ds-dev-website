// Author: Nicholas Panayotakos

// Description: This script handles the animation toggle for the FAQ section by revealing and hiding the answers when clicking the "+" (plus) icon.

const questionList = document.querySelectorAll(".faq__question");

questionList.forEach((question) =>
  question.addEventListener("click", () => {
    question.classList.toggle("toggle");
  })
);
