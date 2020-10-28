// document.write(`
//     <footer>

//       <div class="footer-container-one">

//         <img class="logo_footer" src="bilder/logo2.svg" alt="">

//         <div class="liste0 listeFooter">

//           <ul>
//             <li><p><a href="0">Pål Hembre</a></p></li>
//             <li><a href="1">Best results</a></li>
//             <li><a href="2">Average</a></li>
//             <li><a href="3">Nr of starts</a></li>
//             <li><a href="4">Events this year</a></li>
//           </ul>

//         </div>

//         <div class="liste1 listeFooter">

//           <ul>
//             <li><p><a href="0">Mattis Hembre</a></p></li>
//             <li><a href="1">Best results</a></li>
//             <li><a href="2">Average</a></li>
//             <li><a href="3">Nr of starts</a></li>
//             <li><a href="4">Events this year</a></li>
//           </ul>

//         </div>

//         <div class="liste2 listeFooter">

//           <ul>
//             <li><p><a href="0">Ludvik Hembre</a></p></li>
//             <li><a href="1">Best results</a></li>
//             <li><a href="2">Average</a></li>
//             <li><a href="3">Nr of starts</a></li>
//             <li><a href="4">Events this year</a></li>
//           </ul>

//         </div>

//         <div class="liste3 listeFooter">

//           <ul>
//             <li><p><a href="0"> Tim Leo Hembre</a></p></li>
//             <li><a href="1">Best results</a></li>
//             <li><a href="2">Average</a></li>
//             <li><a href="3">Nr of starts</a></li>
//             <li><a href="4">Events this year</a></li>
//           </ul>

//         </div>

//           <ul>
//             <li><p id="footer_contact"><a href="#">Contact Us</a></p></li>
//           </ul>

//       </div>

//       <div class="footer-container-two">


//         <div class="contact">

//           <p>Mail: pal.hembre@gmail.com</p>
//           <p>Phone: +47 42069666</p>
//           <p>Fax: +47 323 555 1234</p>

//         </div>

//         <p></p>

//         <div class="nasjonalStat">

//           <a href="#">Link til nasjonal pistol statistikk: fsu.no</a>

//         </div>


//       </div>

//     </footer>`)

    // function editLink(){
    //   for (let i in skyttere){
        // let links = document.querySelector(`.liste${i}`).querySelectorAll("a")
    //       links[0].href = "skyttere.html?skytter="+ skyttere[i].id
    //       links[1].href = skyttere[i].stasticsLinks.bestResults[0]
    //       links[2].href = skyttere[i].stasticsLinks.average[0]
    //       links[3].href = skyttere[i].stasticsLinks.totalStarts[0]
    //       links[4].href ="#"
    //   }
    // }
    // editLink()

    const footer = document.createElement('footer')
    const body = document.querySelector('body')

    for (let i = 0; i < skyttere.length; i++) {
      const skytter = skyttere[i];
      if (skytter.isShown) {
        const div = document.createElement('div')
        const personLink = makePersonLink(skytter.id)
        const statLinks = makeStatLinks(skytter)
        div.appendChild(personLink)
        div.appendChild(statLinks)
        footer.appendChild(div)
      }
    }
    body.appendChild(footer)