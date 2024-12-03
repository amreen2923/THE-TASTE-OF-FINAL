// Get the modal elements
let modal = document.getElementById("modal");
let modalImg = document.getElementById("modal-img");
let modalCaption = document.getElementById("modal-caption");

// Function to open the modal with the clicked image and caption
function openModal(src, alt) {
  modal.style.display = "flex";
  modalImg.src = src;
}

// Function to close the modal
function closeModal() {
  modal.style.display = "none";
}

// Add event listeners to each gallery image
const galleryItems = document.querySelectorAll(".gallery-item img");
galleryItems.forEach((img) => {
  img.addEventListener("click", () => openModal(img.src));
});

// Close the modal when clicking outside of the modal content
window.onclick = function (event) {
  if (event.target === modal) {
    closeModal();
  }
};

let isInViewport = (element) => {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

let handleScrollAnimations = () => {
  const elements = document.querySelectorAll(".scroll-animation");
  elements.forEach((element) => {
    if (isInViewport(element)) {
      element.classList.add("visible");
    }
  });
};

window.addEventListener("scroll", handleScrollAnimations);
document.addEventListener("DOMContentLoaded", handleScrollAnimations);
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
