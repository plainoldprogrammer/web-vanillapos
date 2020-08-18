console.log("JavaScript is running...");

const menu = [
  {
    id: 0,
    name: "Hot Cake"
  },
  {
    id: 1,
    name: "Eggs"
  },
  {
    id: 2,
    name: "Burrito"
  },
  {
    id: 3,
    name: "Taco"
  },
  {
    id: 4,
    name: "Steak"
  },
  {
    id: 5,
    name: "Burguer"
  },
  {
    id: 6,
    name: "Torta"
  },
  {
    id: 7,
    name: "Chilaquiles"
  },
  {
    id: 8,
    name: "Menudo"
  },
  {
    id: 9,
    name: "Pozole",
  },
  {
    id: 10,
    name: "Brisket"
  },
  {
    id: 11,
    name: "Pork"
  },
  {
    id: 12,
    name: "Nuggets"
  },
  {
    id: 13,
    name: "Sandwich"
  },
  {
    id: 14,
    name: "Pizza"
  },
  {
    id: 15,
    name: "Chicken Bake"
  },
  {
    id: 16,
    name: "Hot Dog"
  },
  {
    id: 17,
    name: "Sausage"
  },
  {
    id: 18,
    name: "Bacon"
  },
  {
    id: 19,
    name: "Meatballs"
  },
  {
    id: 20,
    name: "Soda"
  },
  {
    id: 21,
    name: "Tea"
  },
  {
    id: 22,
    name: "Coffee"
  },
  {
    id: 23,
    name: "Juice"
  }
]

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
});
