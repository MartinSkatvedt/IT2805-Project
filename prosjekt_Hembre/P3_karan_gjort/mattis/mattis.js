const stevner = document.getElementById("stevner_knapp"); // Global variable that refers to element in HTML
const content = document.getElementById("content"); // Global variable that refers to element in HTML
stevner.onclick = dropdown

function dropdown() {
content.innerHTML = `
<a href="#">Kristiansand NM 20/09/2020</a>
<a href="#">Fornebu 14/08/2020</a>
<a href="#">Bærum 03/07/2020</a>
`

}
