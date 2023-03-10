///_________________________ toggle icon navbar_________________
const menuIcon = document.querySelector("#menu-icon");
const navBar = document.querySelector(".nav-bar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navBar.classList.toggle("active");
};

///_________________________ scroll section active link_________________
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

  ///_________________________ sticky navbar_________________
  let header = document.querySelector("header");

  header.classList.toggle("sticky", window.scrollY > 100);

  ///_________________________ remove toggle icon  and navbar when click navbar_________________
  menuIcon.classList.remove("bx-x");
  navBar.classList.remove("active");
};

const typed = new Typed(".multiple-text", {
  strings: ["Frontend Developer", "Graphic Designer", "Music Producer"],
  typedSpeed: 100,
  backSpeed: 50,
  backDelay: 1000,
  loop: true,
});

///_________________________ scroll reveal_________________
ScrollReveal({
  reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(".about-img", { origin: "left" });
ScrollReveal().reveal(".about-content", { origin: "right" });
ScrollReveal().reveal(
  ".home-img, .services-container,.portfolio-box, .contact form",
  {
    origin: "bottom",
  }
);
