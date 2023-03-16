// // =============================================
// // Masyvai - array
// // =============================================

// //               0          1   2       3
// const array = ['Vidmantas', 5, true, { age: 30 }];

// array[0] = 'Mantas';
// array[1] = 10;
// console.log(array[0]);
// console.log(array[3].age);

// for (let i = 0; i < array.length; i++) {
//   console.log(array[i]);
// }

// // Cikli alternatyva - ES6

// for (let element of array) {
//   console.log(element);
// }

// querySelector(.klase)
// querySelector(#id)

// TASK - BMW ul
// const liArray = document.querySelectorAll('li');
// const firstLiEl = liArray[0].textContent;
// const secondLiEl = liArray[1].textContent;
// liArray[0].textContent = secondLiEl;
// liArray[1].textContent = firstLiEl;

// ===============================================
// Function
// ============================================
// Parametrai - skliausteliuose esantys zodziai
// parametru gali buti tiek kiek mes ju norim
function getName(name) {
  if (name) {
    console.log(name);
  } else {
    console.log('Vardas nerastas');
  }
}

// Funkcijos iskvietimas
console.log('Testuoju');
// Argumentai - funkcijos viduje esancios reiksmes
getName('Vidmantas');
getName('Mantas');
getName('Lukas');
getName();

// Funkcija su return

function getRandom(min, max) {
  const random = Math.floor(Math.random() * (max - min + 1) + min);
  console.log(random);
  // Kodo po random rasyti negalime - funkcija baigia savo darba ties return zodziu
  return random;
}

const random = getRandom(1, 5);
const random2 = getRandom(1, 5);

// document.body.textContent = '1 random - ' + random + ' 2 random - ' + random2;
// console.log('Isoreje funkcijos', random);
// console.log('Isoreje funkcijos', random2);
// getRandom(5, 15);

function addTwoNumber(n1, n2) {
  return n1 + n2;
}
// document.body.textContent = addTwoNumber(2, 2);

// console.log('Testuoju funkcija funkcijoje', addTwoNumber(getRandom(2, 6), 2));

// =========================================
// Events
// =========================================
// 1. Pasiimti elementa is DOM - galima su querySelector - getElementById
// 2. Priskirti eventa su addEventListener
// 3. Sukuriame funkcija kuri bus iskviesta kai eventas bus iskviestas
// sintakse document.getElementById('id').addEventListener("event", fn)

document.getElementById('button').addEventListener('click', onClick);

function onClick() {
  alert('Vardas - Vidmantas');
}

// 2 budas
const inputEl = document.getElementById('input');
// inputEl.addEventListener('input', onTextChange);
// inputEl.addEventListener('change', onTextChange);

function onTextChange(e) {
  console.log('CodeAcademy');
}

document.querySelector('li').addEventListener('copy', onCopy);

function onCopy() {
  alert('Tekstas nukopijuotas');
}

// TASKS

const btnEl = document.getElementById('counter-btn');
const subBtnEl = document.getElementById('counter-btn-sub');
const multiBtnEl = document.getElementById('counter-btn-multi');
// let counterValue = document.getElementById('counter').textContent;

btnEl.addEventListener('click', onCounterClick);
subBtnEl.addEventListener('click', onCounterSubClick);
multiBtnEl.addEventListener('click', onCounterMultiOperation);

function onCounterClick() {
  document.getElementById('counter').textContent++;
}

function onCounterSubClick() {
  document.getElementById('counter').textContent--;
}

function onCounterMultiOperation() {
  let counterValue = document.getElementById('counter').textContent;
  const operation = prompt('Enter your operation [sum, div, multi, add]');
  const value = +prompt('Enter your value - Current Value ' + counterValue);
  // if (operation === 'sum') {
  // Number(counterValue) += 2;
  // } else if (operation === 'div') {}...
  switch (operation) {
    case 'sum':
      const sum = parseInt(counterValue) + value;
      document.getElementById('counter').textContent = sum;
      break;
    case 'div':
      const div = parseInt(counterValue) / value;
      document.getElementById('counter').textContent = div;
      break;
    case 'multi':
      const multi = parseInt(counterValue) * value;
      document.getElementById('counter').textContent = multi;
      break;
    case 'sub':
      const sub = parseInt(counterValue) - value;
      return (document.getElementById('counter').textContent = sub);
    default:
    // onCounterMultiOperation();
  }
}
