// Title
let Logo = document.getElementById("logo");
let logoSpan = document.getElementById("logoSpan");
let LogoList = document.getElementById("logoList");
let logoSpanList = document.getElementById("logoSpanList");
let headlineLogo = document.getElementById("headlineLogo");
let headlineLogoSpan = document.getElementById("headlineLogoSpan");

Logo.innerHTML = "xpress";
logoSpan.innerHTML = "E";
// logoSpan.style.color = "#273";

LogoList.innerHTML = "xpress";
logoSpanList.innerHTML = "E";

headlineLogo.innerHTML = "xpress";
headlineLogoSpan.innerHTML = "E";
// headlineLogoSpan.style.color = "#273";

// List Handling
let list = document.querySelector(".list");
let listBurger = document.querySelector(".burger");
listBurger.addEventListener("click", () => {
  list.classList.toggle("active");
});

// Slider Settings

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  effect: "fade",
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
});

var swiper = new Swiper(".mySwiper-2", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  loop: true,
  coverflowEffect: {
    rotate: 50,
    stretch: 2,
    depth: 100,
    modifier: 1,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});
