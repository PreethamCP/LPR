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

  // File Upload Trigger
  uploadButton.addEventListener("click", function () {
    fileInput.click();
    console.log("upload");
  });

  // Handle File Selection
  fileInput.addEventListener("change", function () {
    if (fileInput.files.length > 0) {
      console.log("File selected:", fileInput.files[0].name);
    }
  });
});
