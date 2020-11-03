//let navn_header = document.querySelectorAll(".navn_header");

function makeNavnHeader() {
  
  const navn_header = document.querySelector(".navn_header");
  
  const div = document.createElement('div')
  for (let i = 0; i < skyttere.length; i++) {
    const skytter = skyttere[i];
    skytter.className = 'linker'
    
    if (skytter.isShown) {
      const a = makePersonLink(skytter.id)
      a.className = 'link pointer'
      div.appendChild(a)
    }
  }
  navn_header.appendChild(div)
}



function getTotalMealds() {
  let gold = 0
  let silver = 0
  let bronse = 0
  for (let i = 0; i < skyttere.length; i++) {
    for (const merit of skyttere[i].merits) {
      gold += merit.results.ind.gold + merit.results.team.gold
      silver += merit.results.ind.silver + merit.results.team.silver
      bronse += merit.results.ind.bronse + merit.results.team.bronse
    }
  }
  return [gold,silver,bronse]
}
function writeMedals() { 
  const gold = document.querySelector('#gold')
  const silver = document.querySelector('#silver')
  const bronse = document.querySelector('#bronse')
  totalMedals = getTotalMealds()
  gold.innerHTML = totalMedals[0]
  silver.innerHTML = totalMedals[1]
  bronze.innerHTML = totalMedals[2]
}
