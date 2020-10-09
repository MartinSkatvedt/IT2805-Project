let slideIndex = -1;
showSlides();
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

next.addEventListener("click", test)
prev.addEventListener("click", test)

function test(event) {
    eventType = event.target.className
    if (eventType == 'next') {
        nextSlide(1)
    } else {
        nextSlide(-1)
    }
}

function showSlides() {
    nextSlide(1)
    setTimeout(showSlides, 5000); // Change image every 5 seconds
}
function nextSlide(n) {
    const slides = document.getElementsByClassName("slides");

    for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
    }

    slideIndex += n

    if (slideIndex >= slides.length) {
        slideIndex = 0
    }
    if (slideIndex < 0) {
        slideIndex = slides.length-1
    }
    console.log(slideIndex);
    
    slides[slideIndex].style.display = "block";  
    
}