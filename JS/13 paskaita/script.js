// Boolean, string, number
// pvz:
// 2.222242
// rez
// 2.22
// CodeAcademy => codeacademy

const bool = true;
// console.log(bool.toString());
// console.log(typeof bool); // boolean
// console.log(typeof 'CodeAcademy'); //string
// console.log(typeof 25); // number

// Number
// const number = 5.55555;
// console.log(number.toFixed(5)); // skaiciai po kablelio
// console.log(number.toPrecision(5));
// console.log(number.toExponential(1));
// console.log(number.toString());
// console.log((10).toString(2));
// console.log((10).toString(10));
// console.log(number.valueOf());

// String

const string = 'CodeAcademy';

// string[0] = 'A';
console.log(string[0]); // tas pats kaip charAt
console.log(string.charAt(2));
console.log(string.charCodeAt(0));
console.log(String.fromCharCode(67));
console.log(string.concat(' ', 'Grupe', ' ', 'FEUA5'));
console.log(string + ' ' + 'Grupe' + ' ' + 'FEUA5');
console.log(`${string} Grupe FEUA5`);
console.log(string.endsWith('Academy'));
console.log(string.startsWith('Academy'));
// if (string.startsWith('Code') && string.endsWith('Academy')) {
//   alert(string);
// }

console.log(string.includes('A'));
console.log(string.indexOf('demy'));
console.log(string.repeat(4));
console.log(string.replace('Code', 'Javascript'));
console.log('mano vardas Vidmantas'.replace(' ', '-'));
console.log('mano vardas Vidmantas'.replaceAll(' ', '-'));
// slice
console.log(string.slice(4));
console.log(string.slice(4, 8));
console.log(string.slice(0, string.indexOf('demy')));
console.log(string.slice(4, 2)); // klaida - antrasis argumentas turi buti didesnis uz pirma

console.log(string.substring(4, 8));
console.log(string.substring(4, 2));

console.log(string.split(''));
console.log(string.split('d'));
console.log('first first tekstas tekstas'.split(' '));
console.log('first first tekstas tekstas'.split(' ').join(' '));

console.log('         Tekstas          '.trim());
console.log('         Tekstas          '.trimEnd());
console.log('         Tekstas          '.trimStart());

console.log(string.length);

console.log(string.toUpperCase());
console.log(string.toLowerCase());

// 1. Write a JavaScript function to capitalize the first letter of a string.

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

console.log(capitalize('karolis'));

// 1. Write a JavaScript function to capitalize the first letter of a each word.

const str = 'Lorem lorem paragraph codeacademy Vidmantas';

function capitalizeAll(str) {
  const stringArray = str.split(' ');
  let result = '';
  for (let i = 0; i < stringArray.length; i++) {
    const currentWord = stringArray[i];
    result += currentWord[0].toUpperCase() + currentWord.slice(1) + ' ';
  }
  return result;
}
console.log(capitalizeAll(str));

if (typeof str === 'string') {
}
if (str.split(' ').length > 1) {
} else {
}

//Write a JavaScript function that takes a string which has lower and upper case letters as a parameter and converts upper case letters to lower case, and lower case letters to upper case.
function convert(str) {
  const stringArray = str.split('');
  let result = '';
  for (let i = 0; i < stringArray.length; i++) {
    const char = stringArray[i];
    if (char.toUpperCase() === char) {
      result += char.toLowerCase();
    } else if (char.toLowerCase() === char) {
      result += char.toUpperCase();
    }
  }
  return result;
}
console.log(convert(str));
