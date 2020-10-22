//For å siste url del
const url_string = window.location.href //window.location.href
const url = new URL(url_string)
const personId = url.searchParams.get('id')

function getIndex(value, array) {
    for (let i = 0; i < array.length; i++) {
        const element = array[i].id
        if (element == value) {
            return i
        }
    }
}

const index = getIndex(personId, personer)
const person = personer[index]
const main = document.querySelector('main')

main.innerHTML = ''

function createSite() {
    //endrer tittelen
    document.title = person.about.surName + ' ' + person.about.lastName

    //Leger til hoved-div-elementet
    let mainDiv = document.createElement('div')
    mainDiv.id = 'person_side_topp'
    main.appendChild(mainDiv)

    //Lager bilde med en div inni
    let imgDiv = document.createElement('div')
    imgDiv.id = 'person_bilder'
    let img = document.createElement('img')
    img.src = person.image.mainImage
    imgDiv.appendChild(img)
    mainDiv.appendChild(imgDiv)

    //Lager div id=mattis_side_info
    infoDiv = document.createElement('div')
    infoDiv.id = 'person_side_info'
    mainDiv.appendChild(infoDiv)

    //Overskrift
    let overskrift = document.createElement('h1')
    overskrift.innerHTML = person.about.surName + ' ' + person.about.lastName
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
    p.innerHTML = 'Age: ' + person.about.age + ' years'
    infoDiv.appendChild(p)

    p = document.createElement('p')
    p.innerHTML = 'Birth: ' + person.about.birthDay +'/'+ person.about.birthYear + ', ' + person.about.birthPlace
    infoDiv.appendChild(p)


//FAMILY------------------------------------------------

    let familyDiv = document.createElement('div')
    familyDiv.id = 'familyDiv'
    for (const obj in person.family) {
        if (person.family.hasOwnProperty(obj)) {
            const element = person.family[obj];
            let p = document.createElement('p')
            p.innerHTML = obj.charAt(0).toUpperCase() + obj.substring(1) + '(s):' //For å for føste bokstav Stor
            if (element.length>0) {
                let induvidualDiv = document.createElement('div')
                for (let i = 0; i < element.length; i++) {
                    const individual = element[i];
                    let a = document.createElement('a')
                    a.href = '?id='+ individual[1]
                    a.innerHTML = individual[0]

                    p.appendChild(a)            
                }    
                induvidualDiv.appendChild(p)
                familyDiv.appendChild(induvidualDiv)            
            }
        }
    }
    imgDiv.appendChild(familyDiv)
//FAMILY------------------------------------------------
    //Startet å skyte
    // p = document.createElement('p')
    // p.innerHTML = person.description.statedShooting
    // infoDiv.appendChild(p)

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

    let opt = document.createElement('option')
    opt.disabled = true
    opt.selected = true
    opt.innerHTML = 'Events'
    select.appendChild(opt)

    for (const stat of person.yearlyStatistics) {
        opt = document.createElement('option')
        opt.value = stat[0]
        opt.innerHTML = 'Events in ' + stat[1]
        select.appendChild(opt)
    }
    infoDiv.appendChild(select)

    select.onchange = function () {
        let valgt = this.options[this.selectedIndex] // js property
        window.open(valgt.value)
    }

    let divGrid = document.createElement('div')
    divGrid.id = 'grid_container_stats'
    main.appendChild(divGrid)

//MERITS-------------------------------------------------
    let meritsDiv = document.createElement('div')
    meritsDiv.id = 'merits'

    h1 = document.createElement('h1')
    h1.innerHTML = 'MERITS'
    meritsDiv.appendChild(h1)


    for (let i = 0; i < person.merits.length; i++) {
        const element = person.merits[i]
        div = document.createElement('div')
        div.id = 'merit'

        let kursive = document.createElement('i')
        kursive.innerHTML = element.merit
        div.appendChild(kursive)

        let strengInd = '<b>Ind:</b>'
        let tomStreng = true

        for (let medalje in element.results.ind){
            let antallMedaljer = element.results.ind[medalje]
            if (antallMedaljer > 0) {
                strengInd+= ' | '+antallMedaljer+' '+medalje
                tomStreng = false
            }
        }
        if (!tomStreng) {
            p = document.createElement('p')
            p.innerHTML = strengInd
            div.appendChild(p)
        }

        let strengTeam = '<b>Team:</b>'
        tomStreng = true

        for (let medalje in element.results.team){
            let antallMedaljer = element.results.team[medalje]
            if (antallMedaljer > 0) {
                strengTeam+= ' | '+antallMedaljer+' '+medalje
                tomStreng = false
            }
        }
        if (!tomStreng) {
            p = document.createElement('p')
            p.innerHTML = strengTeam
            div.appendChild(p)            
        }
        meritsDiv.appendChild(div)
    }
    divGrid.appendChild(meritsDiv)


//PERSONAL RECORDS----------------------------------------

    let tableDiv = document.createElement('div')
    divGrid.appendChild(tableDiv)

    h1 = document.createElement('h1')
    h1.innerHTML = 'PERSONAL RECORDS'
    tableDiv.appendChild(h1)

    let tabellRekorder = document.createElement('table')
    tabellRekorder.id = 'person_rekorder'
    tableDiv.appendChild(tabellRekorder)

    let tr = document.createElement('tr')
    let th = document.createElement('th')
    th.innerHTML = 'Event'
    tr.appendChild(th)
    th = document.createElement('th')
    th.innerHTML = 'Score'
    tr.appendChild(th)
    th = document.createElement('th')
    th.innerHTML = 'Year'
    tr.appendChild(th)

    tabellRekorder.appendChild(tr)

    for (let i = 0; i < person.bestStatistics.length; i++) {
        const obj = person.bestStatistics[i]
        tr = document.createElement('tr')

        for (const ovelse in obj) {
            if (obj.hasOwnProperty(ovelse)) {
                const element = obj[ovelse];
                td = document.createElement('td')
                td.innerHTML = element
                tr.appendChild(td)
                
            }
        }
        tabellRekorder.appendChild(tr)
    }
}
createSite()