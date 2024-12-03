let initSlider = () => {
  let slideButtons = document.querySelectorAll(".slider-wrapper .slide-button");
  let imageList = document.querySelector(".slider-wrapper .image-list");
  let maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;

  slideButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // console.log(button);
      let direction = button.id == "prev-slide" ? -1 : 1;
      let scrollAmount = imageList.clientWidth * direction;
      imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
    });
  });
  let handleSlideButtons = () => {
    slideButtons[0].style.display =
      imageList.scrollLeft <= 0 ? "none" : "block";
    slideButtons[1].style.display =
      imageList.scrollLeft >= maxScrollLeft ? "none" : "block";
  };

  imageList.addEventListener("scroll", () => {
    handleSlideButtons();
  });
};
window.addEventListener("load", initSlider);

const heads = document.querySelectorAll(".head");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      } else {
        entry.target.classList.remove("visible");
      }
    });
  },
  {
    threshold: 0.1,
  }
);

heads.forEach((head) => observer.observe(head));

heads.forEach((head) => observer.observe(head));

const isInViewport = (element) => {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

const handleScroll = () => {
  const animatedElements = document.querySelectorAll(".heading, .container-1");

  animatedElements.forEach((element) => {
    if (isInViewport(element)) {
      element.classList.add("visible");
    }
  });
};

window.addEventListener("scroll", handleScroll);

handleScroll();
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
