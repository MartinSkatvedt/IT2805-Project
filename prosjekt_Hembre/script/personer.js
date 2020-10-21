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
const person = personer[index]

const main = document.querySelector('main')

main.innerHTML = ''

function createSite() {

    let mainDiv = document.createElement('div')
    mainDiv.id = 'person_side_topp'
    main.appendChild(mainDiv)
    
    let imgDiv = document.createElement('div')
    imgDiv.id = 'person_bilder'
    let img = document.createElement('img')
    img.src = personer[index].image.mainImage
    imgDiv.appendChild(img)
    mainDiv.appendChild(imgDiv)


    infoDiv = document.createElement('div')
    infoDiv.id = 'person_side_info'
    mainDiv.appendChild(infoDiv)

    let h1 = document.createElement('h1')
    h1.innerHTML = person.surName +' '+ person.lastName
    infoDiv.appendChild(h1)
    
    let p = document.createElement('p')
    p.innerHTML = person.description

}
createSite()