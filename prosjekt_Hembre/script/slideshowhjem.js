let slideIndex = -1;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("slides");
  let next = document.querySelector("next");
  let prev = document.querySelector("prev");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }

  slideIndex++;

  if (slideIndex >= slides.length) {
      slideIndex = 0
    }
  slides[slideIndex].style.display = "block";  
  //dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 1000); // Change image every 2 seconds
}
