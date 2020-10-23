function createAtletes() {
    for (let i = 0; i < skyttere.length; i++) {
        const element = skyttere[i]
        if (element.isShown) {
            makeAthlete(i)   
        }
    }
}

function makeAthlete(i) {
    const skytter = skyttere[i]
    const container = document.querySelector(".grid-container-athletes")
    const a = document.createElement('a')
    a.className = 'athlete'
    a.href = 'skyttere.html?id='+skytter.id

    const divAthlete = document.createElement('div')

    const img = document.createElement('img')
    img.src = skytter.image.mainImage
    divAthlete.appendChild(img)

    const textDiv = document.createElement('div')
    textDiv.className = 'text'
    textDiv.innerHTML = skytter.about.surName + ' ' + skytter.about.lastName

    divAthlete.appendChild(img)
    divAthlete.appendChild(textDiv)

    a.appendChild(divAthlete)
    container.appendChild(a)



}

createAtletes()