//For å siste url del
const url_string = window.location.href; //window.location.href
const url = new URL(url_string);
const personId = url.searchParams.get('id');

function getIndex(value, array) {
    for (let i = 0; i < array.length; i++) {
        const element = array[i].id;
        if (element == value) {
            return i;
        }
    }
}
const index = getIndex(personId, personer)
const person = personer[index]

const main = document.querySelector('main')

main.innerHTML = ''

function createSite() {
//endrer tittelen
    document.title = person.surName + ' ' + person.lastName

//Leger til hoved-div-elementet
    let mainDiv = document.createElement('div')
    mainDiv.id = 'person_side_topp'
    main.appendChild(mainDiv)

//Lager bilde med en div inni
    let imgDiv = document.createElement('div')
    imgDiv.id = 'person_bilder'
    let img = document.createElement('img')
    img.src = personer[index].image.mainImage
    imgDiv.appendChild(img)
    mainDiv.appendChild(imgDiv)

//Lager div id=mattis_side_info
    infoDiv = document.createElement('div')
    infoDiv.id = 'person_side_info'
    mainDiv.appendChild(infoDiv)

//Overskrift
    let overskrift = document.createElement('h1')
    overskrift.innerHTML = person.surName + ' ' + person.lastName
    infoDiv.appendChild(overskrift)
    
//Beskrivelse kort
    let p = document.createElement('p')
    p.innerHTML = person.description.short
    infoDiv.appendChild(p)

//Beskrivelse lang
    p = document.createElement('p')
    p.innerHTML = person.description.long
    infoDiv.appendChild(p)

//Alder
    p = document.createElement('p')
    p.innerHTML = 'Age: '+person.age+' years'
    infoDiv.appendChild(p)

//Startet å skyte
    p = document.createElement('p')
    p.innerHTML = person.description.statedShooting
    infoDiv.appendChild(p)

//medlem i bpk med linken
    p = document.createElement('p')
    p.innerHTML = 'membership: '
    let link = document.createElement('a')
    link.id = 'medlemskap'
    link.href = person.memberShip.link
    link.innerHTML = person.memberShip.name
    p.appendChild(link)
    infoDiv.appendChild(p)

//legger til select-element
    let select = document.createElement('select')
    select.id = 'dp_meny'

    let oopt = document.createElement('select')
    oopt.disabled = true
    oopt.
    oopt.deafultSelected = true
    select.appendChild(oopt)
    
    for (const stat of person.yearlyStatistics) {
        let opt = document.createElement('option','true')
        opt.value = stat[0]
        opt.innerHTML = 'Events in '+stat[1]
        select.appendChild(opt)
    }
    infoDiv.appendChild(select)

    let dp_list = document.getElementById("dp_meny") // Global variable that refers to element in HTML
    dp_list.onchange = function() {
    let valgt = this.options[this.selectedIndex] // js property
      window.open(valgt.value)
    
    }
    
}
createSite()