const friends = [
  {
    name: "Ona",
    age: 23,
    favColor: "red",
    pets: ["cat", "horse"],
    hairType: "wavy"
  },
  {
    name: "Petras",
    age: 17,
    favColor: "green",
    pets: ["dog"],
    hairType: "straight"
  },
  {
    name: "Klemensas",
    age: 28,
    favColor: "black",
    pets: ["horse", "cat", "dog", "rat"],
    hairType: "shaved"
  },
  {
    name: "Leokadija",
    age: 30,
    favColor: "violet",
    pets: [],
    hairType: "straight"
  },
  {
    name: "Arvydas",
    age: 14,
    favColor: "green",
    pets: ["cat", "goldfish"],
    hairType: "curly"
  },
  {
    name: "Elena",
    age: 18,
    favColor: "blue",
    pets: [],
    hairType: "straight"
  },
  {
    name: "Gytis",
    age: 34,
    favColor: "green",
    pets: ["dog", "cat", "rat"],
    hairType: "curly"
  }
];

// map - sukuria naują masyvą, kurio vertės atitinka tai, ką mes grąžinam (per return);
// find - suranda ir grąžina pirmą atitinkančią reikšmę, jei neranda - undefined;
// filter - grąžina naują masyvą su visomis vertėmis, kurios atitiko sąlygą;
// forEach - iteruoja visas masyvo vertes;
// some - grąžina boolean, jei bent vienas elementas atitinka iškeltą sąlygą;
// every - grąžina boolean, tik true bus tuo atveju, jei VISI masyvo elementai atitiks mūsų sąlygą;

/* 
Exercise 1

1. Išsirinkite LYGINIUS skaičius ir juos pakelkite kvadratus.
Išspausdinkite naują masyvą
Rezultatas: [484, 2116, 7396, 9604]

2. Naudodami pirminį masyvą, suskaičiuokite visų skaičių
sumą.
Gautą vertę taip pat išspausdinkite
Rezultatas: 468

*/

// const allNums = [11, 22, 33, 46, 75, 86, 97, 98];

/*  */
// Sort method
/*  */

// Numbers
const unsortedNumbers = [1, 5, 9, 7, 4, 11, 2, 15, 8, 10, 3, 6, 14, 12, 13];
// const unsortedNumbers = [2, 1, 4, 3, 5, 8, 7, 9];
unsortedNumbers.sort(function (a, b) {
  return b - a;
});

// console.log(unsortedNumbers);

// Letters
const unsortedLetters = [
  "h",
  "a",
  "i",
  "g",
  "b",
  "f",
  "j",
  "e",
  "k",
  "d",
  "c",
  "aa",
  "ac",
  "ab"
];

// unsortedLetters.sort(function (a, b) {
//   return a > b ? -1 : 1;
// });

// unsortedLetters.sort().reverse();

// Sorting by age ascending
// friends.sort(function (a, b) {
//   return a.age - b.age;
// });
// const sortedFriendsByAge = friends.map(function (friend) {
//   return { name: friend.name, age: friend.age };
// });

// Sorting friends by name
// friends.sort(function (a, b) {
//   return a.name > b.name ? 1 : -1;
// });

// const sortedFriendsNames = friends.map(function (friend) {
//   return friend.name;
// });

// console.log(sortedFriendsNames);

// Sort friends who have them most pets
/* friends.sort(function (a, b) {
  return b.pets.length - a.pets.length;
});

const friendsWithMostPets = friends.map(function (friend) {
  return { name: friend.name, animals: friend.pets };
});

console.log(friendsWithMostPets); */

/*  */
// Reduce metodas
/*  */

const allNums = [11, 22, 33, 46, 75, 86, 97, 98];

// kaip randam sumą vien su reduce metodu
const sum = allNums.reduce(function (acc, curr) {
  return acc + curr;
}, 0);

// console.log(sum);

const namesAgesObject = friends.reduce(
  function (acc, curr, index, array) {
    acc.names.push(curr.name);
    acc.ages.push(curr.age);

    acc.agesSum += curr.age;

    if (!acc.avgAge) {
      const totalSum = array.reduce(function (acc, curr) {
        return acc + curr.age;
      }, 0);

      acc.avgAge = totalSum / array.length;
    }

    return acc;
  },
  {
    names: [],
    ages: [],
    agesSum: 0
  }
);

console.log(namesAgesObject);
