//let navn_header = document.querySelectorAll(".navn_header");
let navn_header = document.querySelector(".navn_header");

const div = document.createElement('div')
  for (let i = 0; i < skyttere.length; i++) {
    const skytter = skyttere[i];
    skytter.className = 'linker'

    if (skytter.isShown) {
      const a = makePersonLink(skytter.id)
      a.className = 'link'
      div.appendChild(a)
    }
  }
  navn_header.appendChild(div)


  console.log(div);
