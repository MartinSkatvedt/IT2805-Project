function makeNameHeader() {

  const name_header = document.querySelector(".name_header");

  const div = document.createElement('div')
  for (let i = 0; i < shooters.length; i++) {
    const shooter = shooters[i];
    shooter.className = 'linker'

    if (shooter.isShown) {
      const a = makePersonLink(shooter.id)
      a.className = 'link pointer active'
      div.appendChild(a)
    }
  }
  name_header.appendChild(div)
}



function getTotalMedals() {
  let gold = 0
  let silver = 0
  let bronze = 0
  for (let i = 0; i < shooters.length; i++) {
    for (const merit of shooters[i].merits) {
      gold += merit.results.ind.gold + merit.results.team.gold
      silver += merit.results.ind.silver + merit.results.team.silver
      bronze += merit.results.ind.bronze + merit.results.team.bronze
    }
  }
  return [gold, silver, bronze]
}

function writeMedals() {
  const gold = document.querySelector('#gold')
  const silver = document.querySelector('#silver')
  const bronze = document.querySelector('#bronze')
  const totalMedals = getTotalMedals()
  gold.innerHTML = String(totalMedals[0])
  silver.innerHTML = String(totalMedals[1])
  bronze.innerHTML = String(totalMedals[2])
}
