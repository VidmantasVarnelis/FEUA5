/* ********************************* 
1.
Parašykite f-ją, kuri priims string su vardu ir
pavarde, ir grąžins inicialus, sujungtis tašku.
*/

const getInitials = (fullName) => {
  // your code
  const namesArray = fullName.split(' ');
  return namesArray
    .map((name) => {
      return name[0];
    })
    .join('.');
};

console.log(getInitials('Sam Harris Jr')); // S.H
console.log(getInitials('patrick feeney')); // P.F

/* ********************************* 
  2.
  Kai sunku užmigti, galima pabandyti skaičiuoti avis :)
  
  Parašykite f-ją, kuri priims teigiamą skaičių. 
  Kokio dydžio skaičius, tiek avių reikės suskaičiuoti.
  Rezultatą grąžinkite vienu string.
  */

const countSheep = (count) => {
  // your code
};

console.log(countSheep(3));
// "1 sheep...2 sheep...3 sheep..."
console.log(countSheep(5));
//"1 sheep...2 sheep...3 sheep...4 sheep...5 sheep..."

/* ********************************* 
  3.
  Parašykite f-ją, kuri priims dviejų dimensijų
  masyvą (kiekvienas masyvo elementas - atskiras
  masyvas) ir grąžins kiek kartų pasikartoja skaičius 0.
  */

const countZeros = (array) => {
  // your code
};

console.log(
  countZeros([
    [0, 1, 1],
    [0, 1, 0],
    [1, 0, 0],
  ])
); //5
const arr = [
  [0, 1, 1],
  [0, 1, 0],
  [1, 0, 0],
  [1, 1, 0],
];

let count = 0;
// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr[i].length; j++) {
//     if (arr[i][j] === 0) {
//       count++;
//     }
//   }
// }
// arr.forEach((el) => {
//   el.forEach((num) => {
//     if (num === 0) {
//       count++;
//     }
//   });
// });
// console.log(count);

const x = (str) => {
  const obj = {
    numCount: 0,
    stringCount: 0,
  };

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (isNaN(char)) {
      obj.stringCount++;
    } else {
      obj.numCount++;
    }
  }

  if (str.length > 5) {
    return false;
  }
  if ((obj.numCount === 3 && obj.stringCount === 2) || obj.numCount === 5) {
    return true;
  }

  return false;
};
console.log(x('123ab'));

/* ********************************* 
  4.
  Parašykite f-ją, kuri priims skaičių ir grąžins 
  kokio ilgio tai yra skaičius. 
  Svarbu - rezultatas taip pat turi būti skaičius.
  */

const digitCount = (num) => {
  // your code
};

console.log(digitCount(8367)); //4
console.log(digitCount(563349)); //6

/* *********************************  
  5.
  Parašykite f-ją, kuri priims masyvą ir grąžins naują
  masyvą su visomis PASIKARTOJANČIOMIS reikšmėmis
  */

const findDup = (arr) => {
  // your code
};

console.log(findDup([4, 2, 34, 4, 1, 12, 1, 4])); //[4, 1]

/* *********************************
  6.
  Jūsų funkcija gaus sveikąjį skaičių nuo 0 iki 99.
  Parašykite funkciją, kuri paduotą skaičių išspausdins
  žodžiais (anglų kalba).
  Nepamirškite patestuoti ir su įvairiais skaičiais
  
  Bonus: pritaikykite savo funkciją lietuvių kalbai
  */

const nameThatNumber = (num) => {
  // your code
};

console.log(nameThatNumber(4)); // "four"
console.log(nameThatNumber(12)); // "twelve"
console.log(nameThatNumber(19)); // "nineteen"
console.log(nameThatNumber(99)); // "ninety nine"

/* ~~~~~~~ */
/* Matrica */
/* ~~~~~~~ */

/* *************************************************
  X. Sukurkite objektą "Matrix", kuris priims vieną
  vertę "precursor" ir ją išsaugos. Tai gali būti:
  Skaičių seka - 987532667;
  Tekstas - "987532667";
  Masyvas - [9, 8, 7, 5, 3, 2, 6, 6, 7];
  
  Turėkite mintyje, kad paduota vertė visada bus 9
  elementų ilgio.
  */

/* *************************************************
  2. Sukurkite metodą, kuris atliks tam tikrus veiksmus
  su turima "precursor" verte ir konsolėje
  išspausdins matricą tokiu pavidalu:
  9 8 7
  5 3 2
  6 6 7
  
  Svarbu, kad tarp skaičių būtų vienas tarpas, o
  po kiekvieno trečiojo skaičiaus įvyktų eilutės lūžis.
  Tam naudokite "\n", tik atminkite, kad viskas turi
  grįžti su vienu console.log()!
  */

/* *************************************************
  3. Parašykite metodą, kuris išspausdins kiekvieną
  eilutę atskiru console.log(). Tai yra - visas
  vertes iš kairė į dešinę ir taip kiekvienai eilutei
  iš viršaus į apačią.
  
  Galutinis rezultatas:
  9, 8, 7
  5, 3, 2
  6, 6, 7
  
  */

/* *************************************************
  4. Parašykite metodą, kuris išspausdins kiekvieną
  stulpelį atskiru console.log(). Tai yra - visas
  vertes iš viršaus į apačią ir taip kiekvienam
  stulpeliui iš kairės į dešinę.
  
  Galutinis rezultatas:
  9, 5, 6
  8, 3, 6
  7, 2, 7
  
  */
