/* Apšilimui */

// 1.
// You have an array of fruits, create a utility
// function which takes in this array and creates
// an unordered list with them.
// Use createElement method for this.
//

// 2.
// Create a simple form which takes in URL and
// alt (alternative) text. On submit, create an image
// tag with provided src and alt values.
// Place this image inside a container of your choice.
// Make sure to set default width and height for this
// image so it doesn't get too big.
//
// Use element inspector to check if the alt text was added!

const fruits = ["🍎", "🍊", "🍓", "🍌", "🫐"];

function outputFruits(array) {
  const ulEl = document.createElement("ul");

  for (let i = 0; i < array.length; i++) {
    const liEl = document.createElement("li");
    liEl.textContent = array[i];
    ulEl.append(liEl);
  }

  document.body.append(ulEl);
}

// outputFruits(fruits);

function createImageElement(url, alt) {
  const img = document.createElement("img");

  if (!url.length) {
    alert("Forgot to provide image URL");
    return;
  }

  img.src += url;
  img.alt = alt;

  img.height = "300";
  img.width = "300";

  img.style.objectFit = "cover";
  img.style.objectPosition = "center";

  document.body.append(img);
}

// createImageElement("https://picsum.photos/id/237/536/354", "Photo of a dog");

function isTruthy(value) {
  if (value) {
    console.log(true);
  } else {
    console.log(false);
  }
}

// DOM manipulations

const grades = [8, 6, 9, 6, 5];
const names = ["Onute", "Marius", "Juozas"];

const mariusGrade = grades[1];
const mariusName = names[1];

const students = [
  {
    name: "Onute",
    grade: 8
  },
  {
    name: "Marius",
    grade: 6
  }
];

const array = [0, null, "hello world", false, undefined]; // Less common;

//

const elementsObject = [
  {
    tagName: "h1",
    value: "Hi"
  },
  {
    tagName: "h2",
    value: "Hello"
  },
  {
    tagName: "h3",
    value: "What's up"
  },
  {
    tagName: "h4",
    value: "Yo"
  },
  {
    tagName: "button",
    value: "My Button"
  }
];

function getElement(elementDataObject) {
  const element = document.createElement(elementDataObject.tagName);
  element.textContent = elementDataObject.value;

  return element;
}

function iterateElementsDataArray(elementsDataArray) {
  if (!elementsDataArray) {
    return;
  }

  for (let i = 0; i < elementsDataArray.length; i++) {
    const object = elementsDataArray[i];

    const createdElement = getElement(object);

    document.body.append(createdElement);
  }
}

// iterateElementsDataArray(elementsObject);

// 3.
//
// Objektai netyčia pavirto į spaghetti code! Turime masyvą, kuriame yra
// du atskiri masyvai, anksčiau reprezentavę objektus.
// Jų viduje turime atskirus masyvus su dviem elementais, kurie
// reprezentuoja key - value poras, pavyzdžiui:
//
//    (key)      (value)
// "firstName": "Vasanath"
//
// Parašykite funkciją, kuriai padavus žemiau nurodytą kintamąjį, konsolėje
// būtų atvaizduotas masyvas su jo viduje esančiais dviem objektais.

const spaghettiCode = [
  [
    ["firstName", "Vasanth"],
    ["lastName", "Raja"],
    ["age", 24],
    ["role", "JSWizard"]
  ],
  [
    ["firstName", "Sri"],
    ["lastName", "Devi"],
    ["age", 28],
    ["role", "Coder"]
  ]
];

const myObj = {};

const singlePair = ["firstName", "Vasanth"];

const dynamicKeyNameFromAVariable = "myRandomKeyName";

myObj[dynamicKeyNameFromAVariable] = "Vasa";
console.log(myObj);
