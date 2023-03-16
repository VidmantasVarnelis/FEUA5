/* Loops: */

/* while loop */

/* let i = 0;

while (i < 5) {
  console.log(i);
  i++;
} */

/* do while loop */

/* let x = 0;

do {
  console.log(x);

  x--;
} while (x > 0); */

/* **** */
/* Math */
/* **** */

// property name: property value
const person = {
  name: "Ona",
  age: 28,
  nationality: "LT"
};

//  (obj).(method())
// console.log("Hello world");

// from 0.00000 to 0.99999999999
const rndNumber = Math.random();

// from 0.00000 to 9.99999
const fromZeroToNine = Math.random() * 10;

// from 0.00000 to 9.99999
const fromOneToTen = Math.random() * 10 + 1;

// Math: floor
const flooredNumber = Math.floor(1.9999999);

// Math: ceil
const ceiledNumber = Math.ceil(1.00000001);

// Proper random number 1 to 10
const properRandomNumber = Math.floor(Math.random() * 10 + 1);

// Basic number type:
// Integer - 1, 2, 3, 4
// Float - 2.5, 0.1234

/* **************** */
/* Guess the number */
/* **************** */

const secretNumber = Math.floor(Math.random() * 3 + 1); // 1. Create secret number on page load;
// console.log(secretNumber);

let gameOver = true; // 2. Set initial game state; // SHOULD BE - false initially;

while (gameOver !== true) {
  const guess = prompt("Guess a number from 1 to 3:"); // 3. Ask user to guess a number;

  const isCorrect = secretNumber === parseInt(guess); // 4. Check if user's guess is correct;

  if (isCorrect) {
    // 5. End the game;
    gameOver = true;
    alert("Congrats!");
  }
}
/* *************************** */
/* DOM - Document object model */
/* *************************** */

// document.body.innerHTML = "<h1>Hello world</h1><h2>how are you?</h2>";

const myHeading = document.getElementById("my-heading");

myHeading.innerHTML = "<em>Hello world!</em>";

myHeading.style.fontFamily = "sans-serif";
myHeading.style.backgroundColor = "red";

// console.log(myHeading.style.fontFamily);

const output = document.getElementById("output");

console.log(output); // Checking if element exists;

if (output) {
  let outputHtmlAsString = "";

  for (let i = 0; i < 10; i++) {
    // outputHtmlAsString = outputHtmlAsString + "fdsfds";
    //   outputHtmlAsString += "<h2>" + i + "</h2>";
    outputHtmlAsString += `<h2>${i + 1}</h2>`;
  }

  output.innerHTML = outputHtmlAsString;
}
