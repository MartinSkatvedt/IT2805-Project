function createAtletes() {
    for (let i = 0; i < personer.length; i++) {
        const element = personer[i]
        if (element.isShown) {
            makeAthlete(i)   
        }
    }
}

function makeAthlete(i) {
    const person = personer[i]
    const container = document.querySelector(".grid-container-athletes")
    const a = document.createElement('a')
    a.className = 'athlete'
    a.href = 'personer.html?id='+person.id

    const divAthlete = document.createElement('div')

    const img = document.createElement('img')
    img.src = person.image.mainImage
    divAthlete.appendChild(img)

    const textDiv = document.createElement('div')
    textDiv.className = 'text'
    textDiv.innerHTML = person.about.surName + ' ' + person.about.lastName

    divAthlete.appendChild(img)
    divAthlete.appendChild(textDiv)

    a.appendChild(divAthlete)
    container.appendChild(a)



}

createAtletes()