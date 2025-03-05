document.addEventListener("DOMContentLoaded", function () {
  var navMenu = document.querySelector(".nav-menu");
  var menuOpen = document.querySelector(".menu-open");
  var menuClose = document.querySelector(".menu-close");

  menuOpen.addEventListener("click", function () {
    navMenu.style.display = "flex";
    menuOpen.style.display = "none";
    menuClose.style.display = "block";
  });

  menuClose.addEventListener("click", function () {
    navMenu.style.display = "none";
    menuOpen.style.display = "block";
    menuClose.style.display = "none";
  });
});
