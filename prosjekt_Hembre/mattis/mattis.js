

var dp_list = document.getElementById("dp_meny") // Global variable that refers to element in HTML
dp_list.onchange = function() {
var valgt = this.options[this.selectedIndex] // js property
  window.open(valgt.value)

}
