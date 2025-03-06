document.addEventListener("DOMContentLoaded", function () {
  // Hamberger Menu
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

  // Upload Image Function
  var fileInput = document.getElementById("fileInput");
  var uploadButton = document.querySelector(".upload");

  uploadButton.addEventListener("click", function () {
    fileInput.click();
  });

  fileInput.addEventListener("change", function () {
    if (fileInput.files.length > 0) {
      console.log("File selected:", fileInput.files[0].name);
    }
  });
});
