document.write(`
    <footer>

      <div class="footer-container-one">
      </div>

      <div class="footer-container-two">


        <div class="contact">

          <p>Mail: pal.hembre@gmail.com</p>
          <p>Phone: +47 42069666</p>
          <p>Fax: +47 323 555 1234</p>

        </div>

        <p></p>

        <div class="nasjonalStat">

          <a href="#">Link til nasjonal pistol statistikk: fsu.no</a>

        </div>


      </div>

    </footer>`)

    function makeFooter(){
      let footer = document.querySelector(".footer-container-one")
      footer.innerHTML = ""
      footer.innerHTML += `

      <img class="logo_footer" src="bilder/logo2.svg" alt="">


      `

      for(i in skyttere){
        footer.innerHTML += `

        <div class="liste${i} listeFooter">

          <ul>
            <li><p><a href="skyttere.html?skytter=${skyttere[i].id}">${skyttere[i].about.surName} ${skyttere[i].about.lastName}</a></p></li>
            <li><a href="${skyttere[i].stasticsLinks[0][0]}">${skyttere[i].stasticsLinks[0][1]}</a></li>
            <li><a href="${skyttere[i].stasticsLinks[1][0]}">${skyttere[i].stasticsLinks[1][1]}</a></li>
            <li><a href="${skyttere[i].stasticsLinks[2][0]}">${skyttere[i].stasticsLinks[2][1]}</a></li>
            <li><a href="${skyttere[i].stasticsLinks[3][0]}">${skyttere[i].stasticsLinks[3][1]}</a></li>
          </ul>

        </div>


        `
      }
      footer.innerHTML += `
        </div>

          <ul>
            <li><p id="footer_contact"><a href="./kontakt.html">Contact Us</a></p></li>
          </ul>

        </div>
      `
    }
    makeFooter()
