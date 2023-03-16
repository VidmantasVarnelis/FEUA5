function greeting(nameToGreet) {
  console.log(nameToGreet);

  if (nameToGreet === '') {
    return 'Empty string';
  }

  if (nameToGreet === undefined) {
    return 'Cannot be undefined';
  }

  if (nameToGreet === 0) {
    return 'Cannot be zero';
  }

  /* Or */
  //   if (!nameToGreet) {
  //     return "Cannot be empty";
  //   }

  return `Hello, ${nameToGreet}`;
}

/* const greetingMessage = greeting(0);

console.log(greetingMessage);

document.body.textContent = greetingMessage; */

/* Menu */

const button = document.querySelector('.menu-button');
const menu = document.querySelector('.menu');

if (button && menu) {
  button.addEventListener('click', function (event) {
    menu.classList.toggle('open');
  });
}

/* ************************* */
/* Getting and setting forms */
/* ************************* */

/* 1 */

const firstForm = document.querySelector('.form-1');
const firstOutput = document.querySelector('.output-1');

if (firstForm && firstOutput) {
  firstForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const nameInput = document.getElementById('form-1-name');
    const nameValue = nameInput.value;

    firstOutput.textContent = nameValue;
  });
}

/* Tips */

function roundDecimals(number) {
  return Math.round(number * 100) / 100;
}

const tipsForm = document.getElementById('tips-calc');
const tipsOutput = document.getElementById('tips-output');

if (tipsForm && tipsOutput) {
  tipsForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const amount = document.getElementById('amount');
    const percent = document.getElementById('percent');

    const amountValue = amount.value ? parseInt(amount.value) : 0;
    const percentValue = percent.value ? parseInt(percent.value) : 0;

    const totalAmountTips = roundDecimals(amountValue * (percentValue / 100));

    const total = amountValue + totalAmountTips;

    const message = `Amount: ${amountValue}; Tips: ${totalAmountTips}; Total: ${total}`;

    tipsOutput.textContent = message;
  });
}

/* Užduotis */
// 1. Sukurti formą su vienu number input - gimimo metai;
// 2. On Submit - paskaičiuokite kiek žmogui metų pagal pateiktą vertą;
// 3. Vertę atvaizduokite po forma, pavyzdžiui, heading elemente.

/* ******************************* */
/* Namų darbas - KMI skaičiuotuvas */
/* ******************************* */

// 1. Sukurkite formą su dviem input'ais - height ir weight;
// height priims skaičių, kuris nurodo ūgį (cm, ne metrais),
// weight priims skaičių, kuris nurodo svorį (kg),
// 2. Parašykite logiką, kuri stebės formos submit event'ą bei
// neleis puslapiui persikrauti on submit;
// 3. Submitinus formą, paskaičiuokite koks jūsų KMI (formulė - google);
// 4. Gautą rezultatą išveskite puslapyje po forma.
// Svarbu - dviejų skaičių po kableliu tikslumu;

// Bonus:
// 5. Naudodami if statements ir remiantis gauta KMI reikšme, išvestame
// rezultate nurodykite KMI kategorija, pavyzdžiui, normalus, per mažas, viršsvoris etc.
// 6. Po sėkmingo paskaičiavimo - formą išvalykite ir neleiskite jos pakartotinai
// submittinti, kol nebus įvestos visos reikiamos vertės.
