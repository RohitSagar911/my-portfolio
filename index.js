const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

let observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Get current section ID
        const id = entry.target.getAttribute("id");

        // Remove 'active' class from all nav links
        navLinks.forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${id}`) {
            link.classList.add("active");
          }
        });
      }
    });
  },
  {
    threshold: 0.6, // Adjust how much of section needs to be visible
  }
);

// Observe each section
sections.forEach((section) => {
  observer.observe(section);
});
