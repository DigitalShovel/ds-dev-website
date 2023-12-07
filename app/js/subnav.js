let productLink = document.querySelector(".subnav__link--product");
let product = document.querySelector("#product");

let specsLink = document.querySelector(".subnav__link--specs");
let specs = document.querySelector("#specifications");

let bundleLink = document.querySelector(".subnav__link--bundle");
let bundle = document.querySelector("#bundle");

if (document.querySelector(".subnav__link--pricing")) {
  let pricingLink = document.querySelector(".subnav__link--pricing");
  let pricing = document.querySelector("#pricing");

  pricingLink.addEventListener("click", () => {
    // scroll to the spot where the pricing section is in the viewport
    pricing.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  });
}

productLink.addEventListener("click", () => {
  // scroll to the spot where the specifications section is in the viewport
  product.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "nearest",
  });
});

specsLink.addEventListener("click", () => {
  // scroll to the spot where the specifications section is in the viewport
  specs.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "nearest",
  });
});

bundleLink.addEventListener("click", () => {
  // scroll to the spot where the bundle section is in the viewport
  bundle.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "nearest",
  });
});
