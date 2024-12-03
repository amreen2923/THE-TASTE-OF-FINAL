
let hamburger = document.querySelector(".hamburger");
let navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => 
{
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});
document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => 
  {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);


let index = 0;

function moveSlide(step) 
{
    const slides = document.querySelectorAll('.carousel-slide img');
    index = (index + step + slides.length) % slides.length;
    document.querySelector('.carousel-slide').style.transform = `translateX(${-index * 100}%)`;
}

document.addEventListener('scroll', function () 
{
    const parallaxSections = document.querySelectorAll('.parallax, .mid-section');

    parallaxSections.forEach((section) => 
    {
        const speed = section.dataset.speed || 0.5; 
        const yOffset = window.scrollY * speed;

        section.style.transform = `translateY(${yOffset}px)`;
    });
});

function highlightNutritionInfo() 
{
    const nutritionSection = document.getElementById('nutrition-info');
    
    nutritionSection.style.backgroundColor = 'rgb(246, 246, 10)';
    
    setTimeout(() => 
    {
        nutritionSection.style.backgroundColor = '';
    }, 2000);
}



document.addEventListener("DOMContentLoaded", function() 
{

    const popup = document.getElementById("popup");
    const recipeButton = document.querySelector(".recipe-button");
    const closeButton = document.querySelector(".close-btn");

    function openPopup() 
    {
        popup.style.display = "flex"; 
    }

    function closePopup() 
    {
        popup.style.display = "none";  
    }

    recipeButton.addEventListener("click", openPopup);

    closeButton.addEventListener("click", closePopup);
});

 
