

let navn_header = document.querySelectorAll(".navn_header");
let link = document.querySelectorAll(".link");


for navn of link{

}

for løkke gjennom family.about.surName

for (let i = 0; i < skyttere.length; i++) {

}
 for person in family.about.surName{
   const textDiv = document.createElement('button')
   textDiv.className = 'link'
   navn_header.innerHTML = skytter.about.surName
 }

function makeAthlete(i) {
    const skytter = skyttere[i]

    const textDiv = document.createElement('div')
    textDiv.className = 'text'
    textDiv.innerHTML = skytter.about.surName + ' ' + skytter.about.lastName

    const divAthlete = document.createElement('div')
    divAthlete.appendChild(img)
    divAthlete.appendChild(textDiv)

    const a = document.createElement('a')
    a.className = 'athlete'
    a.href = 'skyttere.html?skytter='+skytter.id

    a.appendChild(divAthlete)

    return a

}
