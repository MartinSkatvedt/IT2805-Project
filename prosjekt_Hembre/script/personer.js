//For å siste url del
const url_string = window.location.href; //window.location.href
const url = new URL(url_string);
const personId = url.searchParams.get("id");
const p = document.querySelector("#p")

function getIndex(value,array) {
    for (let i = 0; i < array.length; i++) {
        const element = array[i].id;
        if (element == value) {
            return i;
        }
    }        
}
const index = getIndex(personId,personer)
console.log(index);

p.innerHTML = personer[index].surName

