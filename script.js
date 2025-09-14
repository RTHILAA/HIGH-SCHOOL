document.addEventListener("DOMContentLoaded", function () {
  AOS.init({
    duration: window.innerWidth < 768 ? 500 : 800,
    easing: "ease-in-out",
    once: true,
    offset: window.innerWidth < 768 ? 50 : 100,
    disable: false,
  });
});

let bars = document.getElementById("bars");
let navbar = document.querySelector(".navbar ul");

let scrollToTopBtn = document.getElementById("scrollToTop");

const darkModeToggle = document.getElementById("darkModeToggle");
const darkModeToggleMobile = document.getElementById("darkModeToggleMobile");
const body = document.body;

bars.addEventListener("click", () => {
  if (navbar.style.display === "none" || navbar.style.display === "") {
    bars.classList.replace("fa-bars", "fa-xmark");
    navbar.style.display = "flex";
  } else {
    bars.classList.replace("fa-xmark", "fa-bars");
    navbar.style.display = "none";
  }
});

function setupToggle(btnId, boxesSelector, showText, hideText) {
  const btn = document.getElementById(btnId);
  const boxes = document.querySelectorAll(boxesSelector);

  btn.addEventListener("click", () => {
    const anyHidden = [...boxes].some(
      (box) => box.style.display === "none" || box.style.display === ""
    );
    boxes.forEach((box) => (box.style.display = anyHidden ? "flex" : "none"));
    btn.textContent = anyHidden ? hideText : showText;
  });
}

setupToggle(
  "btn-events",
  ".box-events1",
  "View All Events",
  "View Less Events"
);
setupToggle(
  "btn-faculty",
  ".box-faculty1",
  "View All Faculty",
  "View Less Faculty"
);
setupToggle(
  "btn-reviews",
  ".box-reviews1",
  "View All Reviews",
  "View Less Reviews"
);

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 300) {
    scrollToTopBtn.classList.add("show");
  } else {
    scrollToTopBtn.classList.remove("show");
  }
});

scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

darkModeToggleMobile.classList.add("show");

if (localStorage.getItem("darkMode") === "enabled") {
  body.classList.add("dark-mode");
  updateDarkModeIcons(true);
}

function toggleDarkMode() {
  body.classList.toggle("dark-mode");
  if (body.classList.contains("dark-mode")) {
    localStorage.setItem("darkMode", "enabled");
    updateDarkModeIcons(true);
  } else {
    localStorage.setItem("darkMode", "disabled");
    updateDarkModeIcons(false);
  }
}

function updateDarkModeIcons(isDarkMode) {
  document.querySelectorAll(".dark-mode-toggle i").forEach((icon) => {
    icon.classList.toggle("fa-sun", isDarkMode);
    icon.classList.toggle("fa-moon", !isDarkMode);
  });
}

darkModeToggle.addEventListener("click", toggleDarkMode);
darkModeToggleMobile.addEventListener("click", toggleDarkMode);

// Add this to your existing JavaScript
function preventHorizontalScroll() {
  if (window.innerWidth <= 949) {
    document.body.style.overflowX = 'hidden';
    document.documentElement.style.overflowX = 'hidden';
  } else {
    document.body.style.overflowX = '';
    document.documentElement.style.overflowX = '';
  }
}

// Run on load and resize
window.addEventListener('load', preventHorizontalScroll);
window.addEventListener('resize', preventHorizontalScroll);
