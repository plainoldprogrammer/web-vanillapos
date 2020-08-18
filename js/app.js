console.log("JavaScript is running...");

const menu = [
  {
    id: 0,
    name: "Eggs"
  }
]

let element = document.getElementById("item-00");
let text = document.createTextNode(menu[0].name);
element.appendChild(text);
