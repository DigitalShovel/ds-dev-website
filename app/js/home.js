// Author: Nicholas Panayotakos

/* Description: This file contains the javascript for: 

1. the animation that triggers when the user hovers or taps on the testimonials section.
2. The button switch between pause/play for the 3D minipod rotation.
3. The animation that triggers when the user hovers or taps on the button "Get Started" at the income section.

*/

function showChatBubble() {
  document.querySelector(".testimonials__left-person").style.transform = "translateX(0px)";
  document.querySelector(".testimonials__right-person").style.transform = "translateX(0px)";
  document.querySelector(".testimonials__chat-bubble").style.transform = "scale(1) rotate(0deg)";
  document.querySelector(".testimonials__chat-bubble").style.opacity = "1";
}

function hideChatBubble() {
  document.querySelector(".testimonials__left-person").style.transform = "translateX(-10px)";
  document.querySelector(".testimonials__right-person").style.transform = "translateX(10px)";
  document.querySelector(".testimonials__chat-bubble").style.transform = "scale(0) rotate(-90deg)";
  document.querySelector(".testimonials__chat-bubble").style.opacity = "0";
}

let pauseBtn = document.querySelector(".btn__pause");
let pausedPath = document.querySelector(".btn__pause > svg > path");
let minipodRotation = document.querySelector(".camera-rotate");

pauseBtn.addEventListener("click", () => {
  minipodRotation.classList.toggle("paused");
  pausedPath.classList.toggle("playing");
});

function plugIn() {
  document.querySelector(".income__plug").style.transform = "translate(-20px)";
  document.querySelector(".income__passive").style.color = "var(--blue-500)";
  document.querySelector(".income__cable").style.strokeDashoffset = "0";
  document.querySelector(".income__cable").style.strokeDashoffset = "-1000";
}

function plugOut() {
  document.querySelector(".income__plug").style.transform = "translate(2px)";
  document.querySelector(".income__passive").style.color = "var(--blue-900)";
  document.querySelector(".income__cable").style.strokeDashoffset = "0";
}
