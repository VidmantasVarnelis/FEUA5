function myFunc() {}

const myOtherFunc = () => {};

const name = name => {
  console.log(name);
};

const anotherFn = function (name) {
  console.log(name);
};

[(1, 2, 3, 4)].map(function () {});

[(1, 2, 3, 4)].map((number, index, array) => {});

const sumUp = (num1, num2) => num1 + num2;

// console.log(sumUp(5, 5));

// Hoisting

// Fn declaration: hoisted
myHoistedFn();

function myHoistedFn() {
  console.log("Labas");
}
myHoistedFn();

// Fn expression: not hoisted - throws error;
// fnAsExpression();
const fnAsExpression = function () {
  console.log("Labas 2");
};

fnAsExpression(); // OK;

// Hoisted
console.log(myHoistedVariable); // Works but is still undefined

var myHoistedVariable = 2023; // var gets defined here

console.log(myHoistedVariable); // Now it has value

// Not hoisted
// console.log(myConstVariable); - Throws reference error;
const myConstVariable = 2023;

// console.log(myLetVariable); - Throws reference error;
let myLetVariable = 2023;

console.log(myConstVariable); // OK
console.log(myLetVariable); // OK

const test = () => {};
