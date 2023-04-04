const array = [
  'CodeAcademy',
  'Grupe',
  'FEAU5',
  'Javascript',
  1,
  'CodeAcademy',
  2,
  3,
];

// 1 - metodas grazins atgal masyva ar kazkokia verte
// 2 - metodas negrazina nieko

// Foreach negalime pakeisti krypties
// Foreach negali tureti break (negali buti baigtas anksciau laiko)
// Dazniausiai parametrai yra tokie - masyvo elementas, elemento indexas, pats masyvas
const output = document.getElementById('output');

array.forEach(function (element, index, array) {
  output.textContent += `${element} - index ${index} `;
});

const result = array.find(function (element) {
  if (element === 'Javascript') {
    return true;
  } else {
    return false;
  }
});

const result2 = array.find((element) => element === 'Javascript');

const filterResults = array.filter(function (element) {
  if (isNaN(element)) {
    return true;
  } else {
    return false;
  }
});

const mapResults = array.map(function (element) {
  if (element === 'CodeAcademy') {
    element = 'FrontEndAcademy';
  }
  if (!isNaN(element)) {
    element = element.toString();
  }
  if (element.length < 4) {
    element += '1111';
  }
  return element;
});
console.log(mapResults);
console.log(array);
