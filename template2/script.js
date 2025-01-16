// let menuIcon = document.querySelector("#menu-icon");
// let navbar = document.querySelector(".navbar");
// let sections = document.querySelectorAll("section");
// let navLinks = document.querySelectorAll("header nav a");

// window.onscroll = () => {
//   sections.forEach((sec) => {
//     let top = window.scrollY;
//     let offset = sec.offsetTop - 150;
//     let height = sec.offsetHeight;
//     let id = sec.getAttribute("id");

//     if (top >= offset && top < offset + height) {
//       navLinks.forEach((links) => {
//         links.classList.remove("active");
//         document
//           .querySelector("header nav a [href*=' + id + ']")
//           .classList.add("active");
//       });
//     }
//   });
// };

// menuIcon.onclick = () => {
//   menuIcon.classList.toggle("bx-x");
//   navbar.classList.toggle("active");
// };

// 2nd version
// // Toggle Navbar Menu
// const menuIcon = document.querySelector("#menu-icon");
// const navbar = document.querySelector(".navbar");

// menuIcon.addEventListener("click", () => {
//   menuIcon.classList.toggle("bx-x");
//   navbar.classList.toggle("active");
// });

// // Highlight Active Navbar Link on Scroll
// const sections = document.querySelectorAll("section");
// const navLinks = document.querySelectorAll("header nav a");

// window.addEventListener("scroll", () => {
//   const scrollPosition = window.scrollY;

//   sections.forEach((section) => {
//     const sectionTop = section.offsetTop - 150; // Adjusted for header offset
//     const sectionHeight = section.offsetHeight;
//     const sectionId = section.getAttribute("id");

//     if (
//       scrollPosition >= sectionTop &&
//       scrollPosition < sectionTop + sectionHeight
//     ) {
//       navLinks.forEach((link) => link.classList.remove("active")); // Remove active class
//       const activeLink = document.querySelector(
//         `header nav a[href*='${sectionId}']`
//       );
//       if (activeLink) activeLink.classList.add("active"); // Add active class to the current link
//     }
//   });
// });

// 3rd version

// Constants for breakpoints matching CSS media queries
const BREAKPOINTS = {
  mobile: 767,
  tablet: 895,
  desktop: 1285,
  largeDesktop: 1920,
};

// Touch interaction states
let touchStartX = 0;
let touchEndX = 0;

// DOM Elements
const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");
const header = document.querySelector(".header");
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("header nav a");

// Toggle Navbar Menu
menuIcon.addEventListener("click", (e) => {
  e.stopPropagation();
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
});

// Enhanced close menu functionality
document.addEventListener("click", (e) => {
  if (!menuIcon.contains(e.target) && !navbar.contains(e.target)) {
    closeMenu();
  }
});

// Touch Events for Mobile Swipe
document.addEventListener("touchstart", (e) => {
  touchStartX = e.changedTouches[0].screenX;
});

document.addEventListener("touchend", (e) => {
  touchEndX = e.changedTouches[0].screenX;
  handleSwipe();
});

function handleSwipe() {
  const swipeThreshold = 50;
  const swipeDistance = touchEndX - touchStartX;

  if (Math.abs(swipeDistance) > swipeThreshold) {
    if (swipeDistance > 0 && !navbar.classList.contains("active")) {
      // Swipe right - open menu
      openMenu();
    } else if (swipeDistance < 0 && navbar.classList.contains("active")) {
      // Swipe left - close menu
      closeMenu();
    }
  }
}

function openMenu() {
  menuIcon.classList.add("bx-x");
  navbar.classList.add("active");
}

function closeMenu() {
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
}

// Enhanced Scroll Behavior
let lastScrollTop = 0;
const scrollThreshold = 50;

// Debounce function with improved timing
function debounce(func, wait = 10) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Enhanced scroll handler with header behavior
window.addEventListener(
  "scroll",
  debounce(() => {
    const scrollPosition = window.scrollY;
    const scrollDelta = scrollPosition - lastScrollTop;

    // Header show/hide behavior
    if (Math.abs(scrollDelta) > scrollThreshold) {
      if (scrollDelta > 0 && scrollPosition > header.offsetHeight) {
        // Scrolling down - hide header
        header.style.transform = "translateY(-100%)";
        header.style.transition = "transform 0.3s ease-in-out";
      } else {
        // Scrolling up - show header
        header.style.transform = "translateY(0)";
      }
    }

    // Active section highlighting with improved accuracy
    let currentSection = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - header.offsetHeight - 50;
      const sectionHeight = section.offsetHeight;

      if (
        scrollPosition >= sectionTop &&
        scrollPosition < sectionTop + sectionHeight
      ) {
        currentSection = section.getAttribute("id");
      }
    });

    // Update active nav link with smooth transition
    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href").substring(1) === currentSection) {
        link.classList.add("active");
      }
    });

    lastScrollTop = scrollPosition;
  })
);

// Enhanced Smooth Scroll
navLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    if (this.hash !== "") {
      const targetSection = document.querySelector(this.hash);
      const headerOffset = header.offsetHeight;
      const targetPosition = targetSection.offsetTop - headerOffset;

      // Close menu if on mobile
      if (window.innerWidth <= BREAKPOINTS.tablet) {
        closeMenu();
      }

      // Smooth scroll with easing
      smoothScrollTo(targetPosition, 1000);
    }
  });
});

// Custom smooth scroll function with easing
function smoothScrollTo(targetPosition, duration) {
  const startPosition = window.scrollY;
  const distance = targetPosition - startPosition;
  let startTime = null;

  function easeInOutCubic(t) {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);

    window.scrollTo(0, startPosition + distance * easeInOutCubic(progress));

    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    }
  }

  requestAnimationFrame(animation);
}

// Responsive Resize Handler
window.addEventListener(
  "resize",
  debounce(() => {
    // Reset mobile menu state above tablet breakpoint
    if (window.innerWidth > BREAKPOINTS.tablet) {
      closeMenu();
    }

    // Recalculate section positions
    updateSectionPositions();
  })
);

// Update section positions after dynamic content changes
function updateSectionPositions() {
  sections.forEach((section) => {
    section.dataset.offsetTop = section.offsetTop;
  });
}

// Initialize positions on load
document.addEventListener("DOMContentLoaded", () => {
  updateSectionPositions();

  // Add touch feedback for buttons
  document.querySelectorAll(".btn").forEach((btn) => {
    btn.addEventListener("touchstart", () => {
      btn.style.transform = "scale(0.95)";
    });

    btn.addEventListener("touchend", () => {
      btn.style.transform = "scale(1)";
    });
  });
});

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.2,
  rootMargin: "0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("in-view");
    }
  });
}, observerOptions);

// Observe all sections for scroll animations
sections.forEach((section) => {
  observer.observe(section);
});
