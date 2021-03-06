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
    element.addEventListener("click", function() {
      itemQuantityClicked(i);
    });
  }

  element = document.getElementById("button-clear-all");
  element.addEventListener("click", function() {
    let ticket = document.getElementById('ticket');
    let ticketOrderSection = document.getElementById('ticket-order');
    ticket.removeChild(ticketOrderSection);


    let newOrderSection = document.createElement("div");
    newOrderSection.className = 'ticket-order';
    newOrderSection.id = 'ticket-order';
    let ticketHeader = document.getElementById("ticket-header");
    ticketHeader.parentNode.insertBefore(newOrderSection, ticketHeader.nextElementSibling);
  });
}

function initMenu() {
  loadJSON(function(response) {
    menu = JSON.parse(response);
  });
}

function initStatusBar() {
  let date = document.createTextNode(new Date().getDay() + '/' + new Date().getMonth() + '/' + new Date().getFullYear());

  let statusBar = document.getElementById('status-bar');
  statusBar.appendChild(date);
}

function itemQuantityClicked(quantity) {
  let ticket = document.getElementById("ticket-order");
  let itemQuantity = document.createTextNode(quantity + ' ');
  ticket.appendChild(itemQuantity);

  entry = createNewEntry();
  entry.quantity = Number(itemQuantity.textContent);
}

function menuItemClicked(item) {
  let ticket = document.getElementById("ticket-order");
  let itemName = document.createTextNode(item);
  ticket.appendChild(itemName);

  let blank = document.createElement("br");
  ticket.appendChild(blank);

  entry.item = itemName.textContent;
  entries.push(entry);
}

function createNewEntry() {
  return { quantity: 0, item: ""};
}

let menu;
initNumpad();
initMenu();
initStatusBar();

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

let entries = new Array();
let entry;
