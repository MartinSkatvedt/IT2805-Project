//For å siste url del
const url_string = window.location.href; //window.location.href
const url = new URL(url_string);
const personId = url.searchParams.get('id');

function getIndex(value,array) {
    for (let i = 0; i < array.length; i++) {
        const element = array[i].id;
        if (element == value) {
            return i;
        }
    }        
}

const index = getIndex(personId,personer)

const main = document.querySelector('main')

main.innerHTML = ''

function createSite() {
    let person = personer[index]

    let mainDiv = document.createElement('div')
    mainDiv.id = 'person_side_topp'
    main.appendChild(mainDiv)
    
    let div = document.createElement('div')
    div.id = 'person_bilder'

    let img = document.createElement('img')
    img.src = personer[index].image.mainImage
    div.appendChild(img)
    main.appendChild(div)

    div = document.createElement('div')
    div.id = 'person_side_info'
    main.appendChild(div)

    let h1 = document.createElement('h1')
    h1.innerHTML = person.surName +' '+ person.lastName
    mainDiv.appendChild(h1)
    
    let p = document.createElement('p')
}
createSite()