const accordionEl = document.getElementById("accordion");
const toTopLinkEl = document.getElementById("toTopLink");

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

copyRightYear.textContent = new Date().getFullYear();
