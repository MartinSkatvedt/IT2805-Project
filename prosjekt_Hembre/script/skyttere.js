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

const index = getIndex(personId, skyttere)
const skytter = skyttere[index]
const main = document.querySelector('main')

main.innerHTML = ''

function changeTitle() {
//endrer tittelen
    document.title = skytter.about.surName + ' ' + skytter.about.lastName    
}

function makeToppDiv() {
//Leger til hoved-div-elementet
    let toppDiv = document.createElement('div')
    toppDiv.id = 'person_side_topp'
    main.appendChild(toppDiv)
    
//Lager div med bilde inni
    let imgDiv = document.createElement('div')
    imgDiv.id = 'person_bilder'
    let img = document.createElement('img')
    img.src = skytter.image.mainImage
    imgDiv.appendChild(img)
    toppDiv.appendChild(imgDiv)
    
//Lager person_side_info div
    infoDiv = document.createElement('div')
    infoDiv.id = 'person_side_info'
    toppDiv.appendChild(infoDiv)
    
//Overskrift
    let overskrift = document.createElement('h1')
    overskrift.innerHTML = skytter.about.surName + ' ' + skytter.about.lastName
    infoDiv.appendChild(overskrift)
    
//Beskrivelse kort
    let p = document.createElement('p')
    p.innerHTML = skytter.description.short
    infoDiv.appendChild(p)
    
//Beskrivelse lang
    // p = document.createElement('p')
    // p.innerHTML = skytter.description.long
    // infoDiv.appendChild(p)
    
//Alder --------------------------------------------------------- ikke ferdig, automatisk alder
    let age = getYears()
    p = document.createElement('p')
    p.innerHTML = 'Age: ' + age + ' years'
    infoDiv.appendChild(p)
    
//Bithday
    p = document.createElement('p')
    p.innerHTML = 'Birth: ' + skytter.about.birthDay +'/'+ skytter.about.birthMonth +'/'+ skytter.about.birthYear + ', ' + skytter.about.birthPlace
    infoDiv.appendChild(p)
//-------------------------------------------------------------- 

//FAMILY
    let familyDiv = document.createElement('div')
    familyDiv.id = 'familyDiv'
    for (const obj in skytter.family) {
        if (skytter.family.hasOwnProperty(obj)) {
            const element = skytter.family[obj];
            let p = document.createElement('p')
            p.innerHTML = obj.charAt(0).toUpperCase() + obj.substring(1) + ' who compete:' //For å for føste bokstav Stor
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

    //medlem i bpk med linken
    p = document.createElement('p')
    p.innerHTML = 'membership: '
    let link = document.createElement('a')
    link.id = 'medlemskap'
    link.href = skytter.memberShip.link
    link.innerHTML = skytter.memberShip.name
    link.target = '_blank'
    p.appendChild(link)
    infoDiv.appendChild(p)

    //legger til select-element
    let select = document.createElement('select')
    select.id = 'dp_meny'

    let opt = document.createElement('option')
    opt.disabled = true
    opt.selected = true
    opt.innerHTML = 'Competition Statistics'
    select.appendChild(opt)

    for (const stat of skytter.yearlyStatistics) {
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

}

function getYears() {
    let today = new Date()
    let dd = Number(String(today.getDate()+1).padStart(2, '0')) - skytter.about.birthDay
    let mm = Number(String(today.getMonth() + 1).padStart(2, '0')) - skytter.about.birthMonth//January is 0!
    let yyyy = today.getFullYear() - skytter.about.birthYear
    console.log(yyyy+'|'+mm+'|'+dd+'|');
    if (mm<0) if (mm<1 || dd<0) yyyy--
    return yyyy
     
}

function makeBottomDiv() {
//MERITS-------------------------------------------------
   let divGrid = document.createElement('div')
   divGrid.id = 'grid_container_stats'
   main.appendChild(divGrid)

   let meritsDiv = document.createElement('div')
   meritsDiv.id = 'merits'
   
   h1 = document.createElement('h1')
   h1.innerHTML = 'MERITS'
   meritsDiv.appendChild(h1)


   for (let i = 0; i < skytter.merits.length; i++) {
       const element = skytter.merits[i]
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

    for (let i = 0; i < skytter.bestStatistics.length; i++) {
        const obj = skytter.bestStatistics[i]
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


function createSite() {
    changeTitle()
    makeToppDiv()
    makeBottomDiv()
}

createSite()