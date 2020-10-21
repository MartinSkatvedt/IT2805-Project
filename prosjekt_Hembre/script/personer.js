var pageURL = window.location.href;
var lastURLSegment = pageURL.substr(pageURL.lastIndexOf('/') + 1);
console.log(lastURLSegment);