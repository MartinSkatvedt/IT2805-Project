// var pageURL = window.location.href;
// var lastURLSegment = pageURL.substr(pageURL.lastIndexOf('/') + 1);
// console.log(lastURLSegment);



//For å siste url del
let url_string = window.location.href; //window.location.href
let url = new URL(url_string);
let id = url.searchParams.get("id");
console.log(id);

