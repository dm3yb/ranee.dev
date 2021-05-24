const accordionEl = document.getElementById("accordion");
const heroSLiderEl = document.getElementById("heroSlider");
const burgerBtnEl = document.getElementById("burgerBtn");

const heroSliderEl = new Swiper(".hero-slider", {
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  speed: 800,
  loop: true,
  allowTouchMove: false,
  autoplay: {
    delay: 2500,
  },
});

accordionEl.addEventListener("click", (e) => {
  const title = e.target.closest(".accordion-title");
  const collapse = title.nextElementSibling;
  const content = collapse.firstElementChild;
  if (collapse.classList.contains("active")) {
    collapse.style.height = 0;
    collapse.classList.remove("active");
    title.classList.remove("active-title");
  } else {
    collapse.style.height = getComputedStyle(content).height;
    collapse.classList.add("active");
    title.classList.add("active-title");
  }
});

burgerBtnEl.addEventListener("click", (e) => {
  document.body.classList.toggle("burger-open");
});

AOS.init();

copyRightYear.textContent = new Date().getFullYear();
