// RECAP

// const
const name = 'Vidmantas';
const age = 200;
// Error - const negalime keisti kintamojo vertes
// age = 40;

// let

let color = 'blue';
color = 'yellow';
color = 'black';
console.log('Spalva: ', color);

// var - nenaudosime kintamuju kurimui
// var year = 2023

// Operators

// ==
// alert(2 == 3);
// alert('Vidmantas' == 'Vidmantas');
// alert(true == true);
// alert('VidmanTas' == 'Vidmantas');
// == lygina tik verte, neiskaito duomenu tipo
// alert(2 == '2');
// alert(2 === '2');
// alert(2 === 2);
// alert('Vidmantas' === 'Vidmantas');
// !== operator
// alert(2 !== 3);
// alert(2 !== 2);
// alert(4 > 4); // false
// alert(4 >= 4);
// alert(3 <= 3);

// Loginiai operatoriai

// IR(AND) operatorius - abi puses turi buti teigiamos kad gauti true rezultata
// alert(24 > 20 && 'Vidmantas' === 'Vidmantas');
// alert(20 > 30 && 30 > 25);
// alert(25 > 20 && 25 > 10 && 25 > 5);
// alert(true && true && false);

// Arba(OR) operatorius - viena is pusiu turi buti teigiamos kad gauti true rezultata
// alert(25 > 30 || 'Vidmantas' === 'Vidmantas');
// alert(25 > 30 || 'Vidmantas' === 'Lukas');
// alert(30 > 40 || 30 > 35 || 30 > 25);

// alert(2 !== 3 && 'Vidmantas' === 'Vidmantas');
// alert(2 == '2' || 'Lukas' === 'Vidmantas');

// alert((15 >= 16 || (20 > 2 && 30 > 25)) && 'Vidmantas' === 'Vidmantas');

// if - else teiginys

// if (20 > 5) {
//   alert('Teiginys teigiamas');
// }
// if (20 > 35) {
//   alert('Teiginys teigiamas');
// } else {
//   alert('Neigiamas teiginys');
// }

// if (30 > 35 || 'Vidmantas' === 'Vidmantas') {
//   alert('If yra teigiamas');
// }

// if ('Vidmantas' === 'Mantas') {
//   alert('Tai yra Mantas');
// } else if ('Mantas' === 'Lukas') {
//   alert('Tai yra Mantas');
// } else if ('Mantas' === 'Kasparas') {
//   alert('Tai yra Mantas');
// } else {
//   alert('Mantas nerastas');
// }

// Truthy Falsy reiksmes
// Truthy
// alert(!!2);
// alert(!!'Vidmantas');
// alert(true);

// Falsy
// alert(!!0);
// alert(!!'');
// alert(!!undefined);
// alert(!!null);
// alert(!!NaN);

// if ('') {
//   alert('Salyga teisinga');
// } else {
//   alert('Salyga neteisinga');
// }

// if ('' || 0 || 'Vidmantas') {
//   alert('Salyga teisinga');
// }

// if(0 > -1 && 0) {
// 	alert('Salyga teisinga')
// }

//  kintamuju vardai turetu naudoti - camelCase
// failu kurimui kebab-case .js pvz my-script.js
// const myName = 'Vidmantas';

// if (myName === 'Lukas') {
//   alert('Salyga teisinga - Lukas');
// } else if (myName === 'Mantas') {
//   alert('Salyga teisinga - Mantas');
// } else {
//   alert('Salyga neteisinga');
// }

// jeigu naudojame prompt su skaiciais - naudosime +prompt()

const myName = prompt('Iveskite varda');

if (myName === 'Mantas') {
  alert('Vardas yra Mantas');
} else if (myName === 'Lukas') {
  alert('Vardas yra Lukas');
} else {
  alert('Tokio vardo neradome!');
}

const myAge = +prompt('Iveskite amziu');

if (myAge > 18) {
  alert('Pilnametis');
} else {
  alert('Nepilnametis');
}
