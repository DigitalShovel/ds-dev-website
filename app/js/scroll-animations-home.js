/*------------------------------
Register plugins
------------------------------*/

gsap.registerPlugin(ScrollTrigger);

/* The following three functions are responsible for sliding up the app mockups as the user scrolls down the page */

gsap.from(".app__mockup", 2, {
  y: 400,
  opacity: 1,
  ease: Power4.easeOut,
  scrollTrigger: {
    trigger: ".app",
    start: "top center",
    // markers: "true",
    scrub: 2,
  },
});

gsap.to(".list-item__heading", 2, {
  y: -20,
  ease: Power4.easeOut,
  scrollTrigger: {
    trigger: ".testimonials__list",
    start: "top center",
    // markers: "true",
    scrub: 2,
  },
});

gsap.to(".list-item__subheading", 2, {
  y: 30,
  ease: Power4.easeOut,
  scrollTrigger: {
    trigger: ".testimonials__list",
    start: "top center",
    // markers: "true",
    scrub: 2,
  },
});
