let submenu_1 = document.getElementById("submenu_1");
let submenuElement_1 = document.getElementsByClassName("submenuElement_1");
let submenu_2 = document.getElementById("submenu_2");
let submenuElement_2 = document.getElementsByClassName("submenuElement_2");
let utoverElement = document.getElementById("utoverElement");
let submenusElement = document.getElementById("submenus");

let submenuElement_1_Array = Array.from(submenuElement_1);
let submenuElement_2_Array = Array.from(submenuElement_2);

submenusElement.addEventListener("mouseleave", hideSubmenus);
utoverElement.addEventListener("mouseover", showSub1);

function hideSubmenus() {
  submenu_1.style.display = "none";
  submenu_2.style.display = "none";
}

function showSub1() {
  let rect = utoverElement.getBoundingClientRect();
  submenu_1.style.display = "flex";
  submenu_1.style.left = rect.x + "px";
  submenu_1.style.top = rect.y + rect.height + 2 + "px";
}

for (let element of submenuElement_1_Array) {
  element.onmouseover = (event) => {
    let rect = element.getBoundingClientRect();
    submenu_2.style.display = "flex";
    submenu_2.style.left = rect.x + rect.width + "px";
    submenu_2.style.top = rect.y + "px";
    for (i of submenuElement_2_Array) {
      i.children[0].href = fixHref(element.children[0].href, i.id);
    }
  };
}

function fixHref(parentHref, childId) {
  let slicedHref = parentHref.slice(0, parentHref.length - 11);
  return slicedHref + "/" + childId + ".html";
}
