// DOM Elements
const header = document.getElementById("header")
const hamburger = document.querySelector(".hamburger")
const mobileMenu = document.querySelector(".mobile-menu")
const mobileLinks = document.querySelectorAll(".mobile-link")
const contactForm = document.getElementById("contact-form")
const currentYearSpan = document.getElementById("current-year")

// Set current year in footer
currentYearSpan.textContent = new Date().getFullYear()

// Header scroll effect
window.addEventListener("scroll", () => {
  if (window.scrollY > 10) {
    header.classList.add("scrolled")
  } else {
    header.classList.remove("scrolled")
  }
})
const container = document.getElementById('text-container');
const xd = document.getElementById('header');
const textArray = ['Text 1', 'Text 2', 'Text 3', 'Text 4', 'Text 5', 'Text 6'];
let currentIndex = 0;

// Hide the navbar initially
header.classList.add('hidden');

setTimeout(() => {
    const interval = setInterval(() => {
        if (currentIndex >= textArray.length) {
            clearInterval(interval); // Stop text animation
            container.classList.add('move-up'); // Move animation div up

            // Reveal the navbar and content after the animation
            setTimeout(() => {
                xd.classList.remove('hidden');
            }, 1000); // Matches the animation duration
            return;
        }
        container.textContent = textArray[currentIndex];
        currentIndex++;
    }, 200);
}, 500); // Initial delay of 0.5 seconds

// Mobile menu toggle
hamburger.addEventListener("click", () => {
  mobileMenu.classList.toggle("active")

  // Animate hamburger icon
  const spans = hamburger.querySelectorAll("span")
  if (mobileMenu.classList.contains("active")) {
    spans[0].style.transform = "rotate(45deg) translate(5px, 5px)"
    spans[1].style.opacity = "0"
    spans[2].style.transform = "rotate(-45deg) translate(5px, -5px)"
  } else {
    spans[0].style.transform = "none"
    spans[1].style.opacity = "1"
    spans[2].style.transform = "none"
  }
})

// Close mobile menu when clicking a link
mobileLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("active")

    // Reset hamburger icon
    const spans = hamburger.querySelectorAll("span")
    spans[0].style.transform = "none"
    spans[1].style.opacity = "1"
    spans[2].style.transform = "none"
  })
})

// Contact form submission
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault()

    // Get form data
    const formData = new FormData(contactForm)
    const formValues = Object.fromEntries(formData.entries())

    // Here you would typically send the form data to a server
    console.log("Form submitted:", formValues)

    // Show success message
    alert("Thanks for your message! I'll get back to you soon.")

    // Reset form
    contactForm.reset()
  })
}

// Scroll reveal animation
const revealElements = document.querySelectorAll(
  ".section-title, .about-content, .project-card, .skill-card, .contact-content",
)

const revealOnScroll = () => {
  const windowHeight = window.innerHeight

  revealElements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top
    const elementVisible = 150

    if (elementTop < windowHeight - elementVisible) {
      element.classList.add("fade-in")
    }
  })
}

// Add scroll event listener
window.addEventListener("scroll", revealOnScroll)

// Initial check on page load
window.addEventListener("load", revealOnScroll)

