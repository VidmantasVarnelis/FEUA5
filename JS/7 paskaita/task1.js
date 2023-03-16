// 1: getElementById - kuris pagal id ( tik id tekstas be # )
// 2: querySelector - kuris gali paimti tiek pagal id (#id) tiek pagal klase (.class) tiek pagal taga (tag)
// 2: papildymas - querySelectorAll - paima visus elementus ir sudeda i masyva(array)
// ==========================================================================

// 1: pasiimti formos elementa
// 2: priskirti formai addEventListener su submit tipu
// 3: Paspaudus submit mes norime sustabdyti puslpaio persikrovima
// 4: Pasiimti ivesta reiksme is input elemento ir atlikti skaiciavimus
// 5: Isvesti rezultata i ekrana

// pagal Id
// const formEl = document.getElementById('form');
// pagal Id su querySelector
// const formEl = document.querySelector('#form');
// pagal klase
// const formEl = document.querySelector('.form');
// pagal tag
// const formEl = document.querySelector('form');
// !!! querySelector paima pirma sutika elementa.

// console.log(document.querySelector('form'));
// console.log(document.querySelectorAll('form'));

// console.log(document.querySelector('input[type="radio"]'));

const formEl = document.getElementById('form');

// formEl.addEventListener('submit', manoForma)

// function manoForma() {}

formEl.addEventListener('submit', function (event) {
  event.preventDefault();
  const inputElValue = document.getElementById('digit-input').value;
  const spanEl = document.getElementById('output');
  // if (inputElValue % 3 === 0 && inputElValue % 5 === 0) {
  //   spanEl.textContent = `${inputElValue} Dalijasi is 5 ir 3 - FizzBuzz`;
  // } else if (inputElValue % 3 === 0) {
  //   // spanEl.textContent = inputElValue + ' Dalijasi is 3';
  //   spanEl.textContent = `${inputElValue} Dalijasi is 3 - Fizz`;
  // } else if (inputElValue % 5 === 0) {
  //   // spanEl.textContent = inputElValue + ' Dalijasi is 5';
  //   spanEl.textContent = `${inputElValue} Dalijasi is 5 - Buzz`;
  // }

  if (inputElValue % 15 === 0) {
    console.log(`${inputElValue} Dalijasi is 5 ir 3 - FizzBuzz`);
    spanEl.textContent = `${inputElValue} Dalijasi is 5 ir 3 - FizzBuzz`;
    return;
  }
  if (inputElValue % 3 === 0) {
    // spanEl.textContent = inputElValue + ' Dalijasi is 3';
    console.log(`${inputElValue} Dalijasi is 3 - Fizz`);
    spanEl.textContent = `${inputElValue} Dalijasi is 3 - Fizz`;
    return;
  }
  if (inputElValue % 5 === 0) {
    // spanEl.textContent = inputElValue + ' Dalijasi is 5';
    console.log(`${inputElValue} Dalijasi is 5 - Buzz`);
    spanEl.textContent = `${inputElValue} Dalijasi is 5 - Buzz`;
    return;
  }
  spanEl.textContent = `Nesidalina is 3 ir 5`;
});

// function checkIfNumberDivides(number, divider) {
//   const spanEl = document.getElementById('output');
//   if (number % divider === 0) {
//     console.log(`${number} Dalijasi is ${divider} - FizzBuzz`);
//     spanEl.textContent = `${number} Dalijasi is ${divider} - FizzBuzz`;
//     return;
//   }
// }

const car = 'mustang';

if (car === 'VW' || car === 'Audi' || car === 'Bentley') {
  alert('priklauso pirmai grupei');
} else if (car === 'BMW' || car === 'MINI' || car === 'Rols-Royce') {
  alert('priklauso antrai grupei');
} else {
  alert('priklauso nei vienam');
}
