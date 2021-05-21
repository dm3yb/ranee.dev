const accordionEl = document.getElementById("accordion");
const toTopLinkEl = document.getElementById("toTopLink");
const heroSLiderEl = document.getElementById("heroSlider");
const burgerBtnEl = document.getElementById("burgerBtn");
const burgerMenuEl = document.getElementById("burgerMenu");

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

let clearTime = null;
window.addEventListener("scroll", () => {
  clearTimeout(clearTime);
  clearTime = setTimeout(() => {
    if (window.pageYOffset > 500) {
      toTopLinkEl.classList.add("show");
    } else if (window.pageYOffset < 500) {
      toTopLinkEl.classList.remove("show");
    }
  }, 100);
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

copyRightYear.textContent = new Date().getFullYear();
