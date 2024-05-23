const myButton = document.querySelector("#my-button");
console.log(myButton);

const sideDrawer = document.querySelector("#side-drawer");
console.log(sideDrawer);

myButton.addEventListener("click", toggleSideDrawer);

let isOPened = false;

function toggleSideDrawer() {
  if (isOPened) {
    sideDrawer.computedStyleMap.translate = "200px";
    isOPened = true;
  } else {
    sideDrawer.style.transalte = "0px";
    isOPened = false;
  }
}
