function createAtletes() {
    const gridHjem = document.querySelector('.grid-container-hjem')
    const center = document.createElement('div')
    center.id = 'center'
    const container = document.createElement('div')
    container.className = "grid-container-athletes"
    center.appendChild(container)
    gridHjem.appendChild(center)
    
    for (let i = 0; i < skyttere.length; i++) {
        const element = skyttere[i]
        if (element.isShown) {
            makeAthlete(i)   
            // const container = document.querySelector('.')
        }
    }
}

function makeAthlete(i) {
    const skytter = skyttere[i]
    const container = document.querySelector('.grid-container-athletes')
    const divAthlete = document.createElement('div')
    
    const a = document.createElement('a')
    a.className = 'athlete'
    a.href = 'skyttere.html?id='+skytter.id

    const img = document.createElement('img')
    img.src = skytter.image.mainImage

    const textDiv = document.createElement('div')
    textDiv.className = 'text'
    textDiv.innerHTML = skytter.about.surName + ' ' + skytter.about.lastName

    divAthlete.appendChild(img)
    divAthlete.appendChild(textDiv)

    a.appendChild(divAthlete)
    console.log(a);
    console.log(container);
    container.appendChild(a)
}

function createSlideshow() {
    for (let i = 0; i < bilder.slideShow.length; i++) {
        makeSlide(i)
    }
    makeButtons()
}

function makeSlide(i) {
    console.log(bilder.slideShow[i]);
    const src = bilder.slideShow[i]
    const slideshowContainer = document.querySelector(".slideshow-container")
    
    const divSlides = document.createElement('div')
    divSlides.className = 'slides fade'

    const img = document.createElement('img')
    img.src = src
    
    const textDiv = document.createElement('div')
    textDiv.className = 'text'
    textDiv.innerHTML = 'Tekst her'
    
    divSlides.appendChild(img)
    divSlides.appendChild(textDiv)
    
    slideshowContainer.appendChild(divSlides)
}

function makeButtons() {
    const container = document.querySelector("#center")
    
    const buttonSlidesDiv = document.createElement('div')
    buttonSlidesDiv.className = 'buttonsSlides'
    buttonSlidesDiv.style.textAlign = 'center'

    const prevSpan = document.createElement('span')
    prevSpan.innerHTML = '<'
    prevSpan.id = 'prev'
    
    buttonSlidesDiv.appendChild(prevSpan)

    const nextSpan = document.createElement('span')
    nextSpan.innerHTML = '>'
    nextSpan.id = 'next'
    buttonSlidesDiv.appendChild(nextSpan)

    container.appendChild(buttonSlidesDiv)

}

// let slideIndex = -1;
// function btnClick(event) {
//     eventType = event.target.id
//     if (eventType == 'next') {
//         nextSlide(1)
//     } else {
//         nextSlide(-1)
//     }
// }

// function showSlides() {
//     nextSlide(1)
//     setTimeout(showSlides, 5000); // Change image every 5000 milliseconds
// }

// function nextSlide(n) {
//     const slides = document.getElementsByClassName("slides");

//     for (let i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }

//     slideIndex += n

//     if (slideIndex >= slides.length) {
//         slideIndex = 0
//     }

//     if (slideIndex < 0) {
//         slideIndex = slides.length - 1
//     }
//     slides[slideIndex].style.display = "block";
// }

// createSlideshow()
createAtletes()