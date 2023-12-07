let announcementsLink = document.querySelector(".subnav__link--announcements");
let announcements = document.querySelector("#announcements");

let articlesLink = document.querySelector(".subnav__link--articles");
let articles = document.querySelector("#articles");

let podcastsLink = document.querySelector(".subnav__link--podcasts");
let podcasts = document.querySelector("#podcasts");

announcementsLink.addEventListener("click", () => {
  // scroll to the spot where the announcements section is in the viewport
  announcements.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "nearest",
  });
});

articlesLink.addEventListener("click", () => {
  // scroll to the spot where the articles section is in the viewport
  articles.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "nearest",
  });
});

podcastsLink.addEventListener("click", () => {
  // scroll to the spot where the podcasts section is in the viewport
  podcasts.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "nearest",
  });
});
