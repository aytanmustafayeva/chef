
function scrollToTop() {
  window.scrollTo(0,0);
}

menu__icon = document.querySelector(".menu__icon");
menu__icon.onclick = function () {
  nav = document.querySelector(".nav");
  nav.classList.toggle("active");
};