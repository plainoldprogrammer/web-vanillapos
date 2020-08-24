console.log("JavaScript is running...");

function loadJSON(callback) {
  var xobj = new XMLHttpRequest();
  xobj.overrideMimeType("menu.json");
  xobj.open('GET', './js/menu.json', false);
  xobj.onreadystatechange = function () {
    if (xobj.readyState == 4 && xobj.status == "200") {
      callback(xobj.responseText);
    }
  };
  xobj.send(null);
}

function initNumpad() {
  let element;
  for (let i = 0; i < 10; i++) {
    element = document.getElementById("button-quantity-" + i);
    console.log(element);
    element.addEventListener("click", function() {
      itemQuantityClicked(i);
    });
  }
}

function initMenu() {
  loadJSON(function(response) {
    menu = JSON.parse(response);
  });
}

function itemQuantityClicked(quantity) {
  console.log("quantity: ", quantity);
}

function menuItemClicked(item) {
  let element = document.getElementById("ticket");
  let text = document.createTextNode(item);
  element.appendChild(text);

  console.log("item: ", item);
}

initNumpad();

let menu;
initMenu();

let leftDigit = 0;
let rightDigit = 0;

menu.forEach(menuItem => {
  let element = document.getElementById("button-item-" + leftDigit + "" + rightDigit);
  let text = document.createTextNode(menuItem.name);
  element.appendChild(text);

  rightDigit++;

  if ((rightDigit % 10) == 0) {
    rightDigit = 0;
    leftDigit++;
  }

  element.addEventListener("click", function() {
    menuItemClicked(menuItem.name);
  });

});
