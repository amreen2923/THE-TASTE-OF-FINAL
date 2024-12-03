let hamburger = document.querySelector(".hamburger");
let navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});
document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

function showPopup() {
  document.getElementById("popup").style.display = "flex";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}

window.addEventListener("load", function () {
  const popup = document.getElementById("newsletter-popup");
  popup.style.display = "flex";
});

document.getElementById("close-content").addEventListener("click", function () {
  const popup = document.getElementById("newsletter-popup");
  popup.style.display = "none";
});
