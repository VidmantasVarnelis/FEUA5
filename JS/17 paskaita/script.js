const fruit = ["banana", "apple", "orange", "watermelon"];
const vegetables = ["carrot", "tomato", "pepper", "lettuce"];

/* 

You have two different arrays. 
Write a single function that performs many operations on them.

Don't forget check how your data changes after each step (print out to console)!

*/

/* 1. Remove the last item from the vegetable array. */

/* 2. Remove the first item from the fruit array. */

/* 3. Find the index of "orange." */

/* 4. Add that number to the end of the fruit array. */

/* 5. Use the length property to find the length of the vegetable array. */

/* 6 Add that number to the end of the vegetable array. */

/* 7 Put the two arrays together into one array. Fruit first. Call the new Array "food". */

/* 8. Remove 2 elements from your new array starting at index 4 with one method. */

/* 9. Reverse your array. */

/* 10 Turn the array into a string and return it. */

/* 
If you've done everything correctly, the last step should print the following string to the console:
3,pepper,1,watermelon,orange,apple
*/

// ## Second part of exercises

/********************
1. Parašykite kodą, kuris duotame masyve surastų unikalias vertes.
T.y. tas vertes, kurios nepasikartoja.
*********************/

function onlyUnique(someArray) {
  // your code
}

console.log(onlyUnique([1, 1, 2, 3, 3, 4, 4, 5]));
// Rezultatas: [2, 5]

/********************
  2. Parašykite kodą, kuris iš paduoto masyvo sukurs du atskirus masyvus.
  Funkcija turi grąžinti masyvą su dviem masyvais viduje: lyginiai ir nelyginiai skaičiai (atskirai)
  SVARBU: negali būti pasikartojančių verčių.
  *********************/

function splitByOddAndEven(someArray) {
  // your code
}

console.log(splitByOddAndEven([2, 3, 7, 6, 2, 4, 9]));
// Rezultatas: [[2, 4, 6], [3, 7, 9]]

/********************
  3. Išrikiuokite gautą masyvą taip, kad pradžioje būtų skaičiai, o pabaigoje raidės
  *********************/

function sortTheArray(someArray) {
  // your code
}

console.log(sortTheArray(["b", 6, "a", "q", 7, 2]));
// Rezultatas: [2, 6, 7, "a", "b", "q"]

/********************
  4. Antruoju parametru paduodamas indexų masyvas. 
  Remdamiesi juo, iš pirmojo masyvo sukurkite ir grąžinkite naują masyvą su vertėmis
  iš pateiktų indexų. Jei kyla neaiškumų, žiūrėkite į pageidaujamą rezultatą.
  *********************/

function buildArray(someArray, indexes) {
  // your code
}

console.log(buildArray(["mon", "tue", "wed", "thur", "fri"], [1, 3, 4]));
// Rezultatas: ["tue", "thur", "fri"]

/********************
  5. Turime daugiadimensį masyvą, jo viduje yra trys raidžių rinkiniai po 3 raides.
  Raidės rinkiniuose išmėtytos atsitiktine tvarka, kaip ir patys rinkiniai taip pat
  išmėtyti atsitiktinai.
  
  Išrūšiuokite masyvą taip, kad kiekvieno rinkinio raidės būtų abėcėlės tvarka, o
  taip pat ir visi rinkiniai būtų idėstyti abėcėlės tvarka (žiūrėti į rezultatą).
  *********************/

function alphabetize(someArray) {
  // your code
}

const jumbledAlphabetically = [
  ["e", "d", "f"],
  ["a", "c", "b"],
  ["m", "o", "n"]
];
console.log(alphabetize(jumbledAlphabetically));
// Rezultatas: [["a", "b", "c"], ["d", "e", "f"], ["m", "n", "o"]]

/********************
  6. Parašykite kodą, kuris iš pateikto masyvo suras mažiausią ir didžiausią skaičius
  bei juos grąžins kaip masyvą (žiūrėti į rezultatą).
  *********************/

function findSmallestAndLargestNumbers(someArray) {
  // your code
}

console.log(findSmallestAndLargestNumbers([14, 28, 3, 8, 2]));
// Rezultatas: [2, 28]

/********************
  7. Parašykite kodą, kuris TOLYGIAI sumaišys du pateiktus masyvus ir grąžins vieną
  masyvą.
  Logikos pavyzdys:
  Pirmo masyvo pirmasis elementas;
  Antro masyvo pirmasis elementas;
  Pirmo masyvo antrasis elementas;
  Antro masyvo antrasis elementas;
  ir t.t.
  
  Atkreipkite dėmesį, kad abu masyvai gali būti skirtingo ilgio.
  Tokiu atveju, pasibaigus vieno vertėms, kito masyvo likutinės vertės pridedamos
  prie rezultato masyvo galo.
  
  *********************/

function mix(firstArray, secondArray) {
  // your code
}

console.log(mix([1, 2, 3], [4, 5, 6]));
// [1, 4, 2, 5, 3, 6]
console.log(mix(["h", "a", "c"], [7, 4, 17, 10, 48]));
// ["h", 7, "a", 4, "c", 17, 10, 48]
