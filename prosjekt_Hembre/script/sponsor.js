var bakkevold = document.querySelector("#bakkevold")
var oxford = document.querySelector("#oxford")
var bakkevold_info = document.querySelector("#bakkevold_info")
var oxford_info = document.querySelector("#oxford_info")


bakkevold.onclick=()=>bakkevoldS()
oxford.onclick=()=>oxfordS()

bakkevold_info.onclick=()=>goToBakkevold()
oxford_info.onclick=()=>goToOxford()

function oxfordS(){
  oxford_info.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});

}
function bakkevoldS(){
  bakkevold_info.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
}
function goToBakkevold(){
  window.open("https://www.pardininorge.no/","_blank")
}
function goToOxford(){
  window.open("https://www.oxfordguncompany.co.uk/","_blank")
}
