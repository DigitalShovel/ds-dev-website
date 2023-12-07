// Get all the subnav links
const subnavLinks = document.querySelectorAll('.subnav a');

// Get all the sections
const sections = document.querySelectorAll('section');

// Create an array to store the positions of each section
const sectionPositions = [];

// Loop through each section and store its position in the array
sections.forEach(section => {
  sectionPositions.push(section.offsetTop);
});

// Function to update the active subnav link
function updateActiveLink() {
  // Get the current scroll position
  const scrollPosition = window.scrollY;

  // Loop through each section position and check if the scroll position is greater than or equal to it
  for (let i = 0; i < sectionPositions.length; i++) {
    if (scrollPosition >= sectionPositions[i]) {
      // Remove the active class from all subnav links
      subnavLinks.forEach(link => {
        link.classList.remove('subnav__link--active');
      });

      // Add the active class to the corresponding subnav link
      subnavLinks[i].classList.add('subnav__link--active');
    }
  }
}

// Call the updateActiveLink function on scroll
window.addEventListener('scroll', updateActiveLink);
