var navMenu = document.querySelector(".nav-menu");
var menuOpen = document.querySelector(".menu-open");
var menuClose = document.querySelector(".menu-close");

menuOpen.addEventListener("click", function () {
  navMenu.style.display = "flex"; // Ensure it becomes visible
  navMenu.classList.add("active");
  menuOpen.style.display = "none";
  menuClose.style.display = "block";
});

menuClose.addEventListener("click", function () {
  navMenu.style.display = "none"; // Hide menu properly
  navMenu.classList.remove("active");
  menuOpen.style.display = "block";
  menuClose.style.display = "none";
});
