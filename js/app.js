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

function initMenu() {
  loadJSON(function(response) {
    menu = JSON.parse(response);
  });
}

function processMenuItem() {
  console.log("processing a menu item");
}

let menu;
initMenu();

let leftDigit = 0;
let rightDigit = 0;

menu.forEach(menuItem => {
  let element = document.getElementById("item-" + leftDigit + "" + rightDigit);
  let text = document.createTextNode(menuItem.name);
  element.appendChild(text);

  rightDigit++;

  if ((rightDigit % 10) == 0) {
    rightDigit = 0;
    leftDigit++;
  }

  element.addEventListener("click", function() {
    console.log('item clicked');
    processMenuItem();
  });

});
