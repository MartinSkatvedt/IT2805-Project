main()

function main() {
    const main = document.querySelector('main')
    const gch =  document.createElement('div')
    gch.className = 'grid-container-hjem'

//Sporsors------------------------------------------------
    const sponsors = document.createElement('div')
    sponsors.id = 'sponsors'
    
//ikke ferdig    
    
    
    gch.appendChild(sponsors)
    
//Center -------------------------------------------------
    const center = document.createElement('div')
    center.id = 'center'

    center.appendChild(createSlideshow())
    center.appendChild(makeButtons())
    center.appendChild(createAtletes())
    gch.appendChild(center)

//Supporters----------------------------------------------
     const supporters = document.createElement('div')
     supporters.id = 'supporters'

//Ikke ferdig


    gch.appendChild(supporters)

//Main----------------------------------------------------
    main.appendChild(gch)



}



function createAtletes() {
    const container = document.createElement('div')
    container.className = 'grid-container-athletes'

    for (let i = 0; i < skyttere.length; i++) {
        const element = skyttere[i]
        if (element.isShown) {
            container.appendChild(makeAthlete(i))
        }
    }
    return container
}
function makeAthlete(i) {
    const skytter = skyttere[i]
    
    
    const img = document.createElement('img')
    img.src = skytter.image.mainImage
    
    const textDiv = document.createElement('div')
    textDiv.className = 'text'
    textDiv.innerHTML = skytter.about.surName + ' ' + skytter.about.lastName
    
    const divAthlete = document.createElement('div')
    divAthlete.appendChild(img)
    divAthlete.appendChild(textDiv)
    
    const a = document.createElement('a')
    a.className = 'athlete'
    a.href = 'skyttere.html?id='+skytter.id

    a.appendChild(divAthlete)

    return a

}

function createSlideshow() {
    const container = document.createElement('div')
    container.className = 'slideshow-container'

    for (let i = 0; i < bilder.slideShow.length; i++) {
        container.appendChild(makeSlide(i))
    }
    return container
}

function makeSlide(i) {
    const src = bilder.slideShow[i]
    
    const divSlides = document.createElement('div')
    divSlides.className = 'slides fade'

    const img = document.createElement('img')
    img.src = src
    
    const textDiv = document.createElement('div')
    textDiv.className = 'text'
    textDiv.innerHTML = 'Tekst her'
    
    divSlides.appendChild(img)
    divSlides.appendChild(textDiv)
    
    return divSlides
}

function makeButtons() {
    
    const buttonSlidesDiv = document.createElement('div')
    buttonSlidesDiv.className = 'buttonsSlides'

    const prevSpan = document.createElement('span')
    prevSpan.innerHTML = '<'
    prevSpan.id = 'prev'
    
    buttonSlidesDiv.appendChild(prevSpan)

    const nextSpan = document.createElement('span')
    nextSpan.innerHTML = '>'
    nextSpan.id = 'next'

    buttonSlidesDiv.appendChild(nextSpan)

    return buttonSlidesDiv

}
