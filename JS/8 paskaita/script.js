// 1. Console išspausdinkite skaičius nuo 1 iki 100 (įskaitant);
// 2. Jei skaičius dalinasi iš 3, spausdinam "Fizz";
// 3. Jei dalinasi iš 5, spausdinam "Buzz";
// 4. Jei dalinasi iš 3 ir 5, spaudinam "FizzBuzz";

/* 
1
2
Fizz
4
Buzz
Fizz
7
...
...
FizzBuzz
*/

function printFizzBuzz() {
  for (let i = 1; i < 101; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
      continue;
    }

    if (i % 5 === 0) {
      console.log("Buzz");
      continue;
    }

    if (i % 3 === 0) {
      console.log("Fizz");
      continue;
    }

    console.log(i);
  }
}

// printFizzBuzz();

/* 1. */

const checkboxesForm = document.querySelector(".checkboxes");

if (checkboxesForm) {
  checkboxesForm.addEventListener("submit", function (onute) {
    onute.preventDefault();
    const checkbox = onute.target.querySelector('input[name="agree"]');
    console.log(checkbox);
  });
}

/* 2. */

const radiosForm = document.querySelector(".radios");

if (radiosForm) {
  radiosForm.addEventListener("submit", function (jonukas) {
    jonukas.preventDefault();

    const input = jonukas.target.querySelector("input[name=city]:checked");
    console.log(input.value);
  });
}

/* Anonymous functions */

/* function handleEvent(event) {
  console.log(event);
} */

// Anoniminė - neturi vardo; galim paduoti į event listenerį kaip antrą parametrą
/* function() {
    console.log("hello")
} */

/* 3. */

const colorsForm = document.querySelector(".colors");

if (colorsForm) {
  colorsForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const colorInput = event.target.querySelector("input[name=color]");

    event.target.style.backgroundColor = colorInput.value;
  });
}

/* 4. */

const liveInput = document.getElementById("live-input");
const liveOutput = document.getElementById("live-input-output");

if (liveInput && liveOutput) {
  liveInput.addEventListener("input", function (event) {
    liveOutput.textContent = event.target.value;
  });
}

/* 5. */

const vatForm = document.querySelector(".vat");
const vatOutput = document.getElementById("vat-output");

if (vatForm && vatOutput) {
  vatForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const input = e.target.querySelector("input[name=price]");

    const vatAmount = parseFloat(input.value) * 0.21;
    const totalWithVat = parseFloat(input.value) * 1.21;

    vatOutput.textContent = `VAT amount: ${vatAmount} EUR; Total with VAT: ${totalWithVat} EUR`;
  });
}

/* Reminder rounding floats up */

const float1 = 12.235;

const float1Rounded = Math.round(float1 * 1000) / 1000;

// console.log(float1Rounded);

// Ceil

// console.log(Math.ceil(12.01));

// Floor

// console.log(Math.floor(12.99));

const myName = "Gitanas Nausėda";

let result = "";

for (let i = myName.length - 1; i >= 0; i--) {
  result += myName.charAt(i);
}

console.log(result);
