// const color = prompt('Enter color:');

// if (color === 'black') {
//   console.log('Color is black');
// } else if (color === 'blue') {
//   console.log('Color is Blue');
// } else if (color === 'red') {
//   console.log('Color is Red');
// } else if (color === 'white') {
//   console.log('Color is White');
// } else {
//   console.log('Color not found!');
// }

// Switch salygos

// Skliausteliuose esantis parametras negali buti kondicija. Gali priimti tik string ir number

// switch ('grey') {
//   case 'blue': {
//     console.log('Color is Blue');
//     break;
//   }
//   case 'black': {
//     console.log('Color is black');
//     break;
//   }
//   case 'white': {
//     console.log('Color is white');
//     break;
//   }
//   case 'red': {
//     console.log('Color is red');
//     break;
//   }
//   default: {
//     console.log('Color not found!');
//   }
// }

switch (18) {
  case 14:
  case 15:
  case 16:
  case 17: {
    console.log('Pauglys');
    break;
  }
  case 18:
  case 19:
  case 20: {
    const color = 'blue';
    console.log('Suauges' + color);
    break;
  }
  default:
    console.log('Amzius neatitinka reikalavimu');
}

// ======================================
// Ternary operator
// ======================================

// kondicija ? teigiamazas : neigiamas

const name =
  'Vidmantas' === 'Vidmantas' ? 'Vidmantas' : 'Klaida - nerastas vardas';

const color = prompt('Enter color');

const isColorBlack = color === 'black' ? 'Black' : 'Not Black';

console.log(isColorBlack);

let newColor;
console.log(newColor);

if (color === 'black') {
  newColor = 'Black';
} else {
  newColor = 'Not Black';
}

console.log(newColor);

// =====================================
// Ciklai - for ciklas
// =====================================

// Programavime dazniausiai viskas prasideda nuo 0
// for (let index = 0; index < 10; index++) {
//   console.log(index);
//   console.log('Vidmantas');
// }

// console.log('Cycle end');

// for (let index = 3; index <= 10; index++) {
//   console.log(index);
// }
// let num = 1;
// console.log(++num);

// let sum = 5;
// // sum = sum + 5;
// // sum += 5;
// // sum -= 5;
// sum *= 3; // sum = sum * 3
// console.log('sum', sum);
// for (let index = 10; index > 0; index -= 2) {
//   console.log(index);
// }

// Infinity ciklas - begalybe
// for (let index = 10; index > 0; index++) {
//   console.log(index);
// }

// for (let index = 0; index > 10; index++) {
//   console.log(index);
// }

for (let index = 0; index < 1000; index++) {
  if (index % 2 === 0) {
    console.log('Skaicius yra lyginis:', index);
  } else {
    console.log('Skaicius yra nelyginis', index);
  }
}
console.log('Cycle code');
