const myNums = [100, 203, 45, 65, 19004, 4324];

const [pirmas, antras, trecias] = myNums;

// console.log(pirmas, antras, trecias);

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

// console.log(friends);

const newArr = friends.map(function (friend) {
  const { name: newName, age } = friend;

  const name = "something else";

  return { newName, age };
});

// console.log(newArr);

/* Spread */
// Arrays
const arr1 = [4, 5, 6];

const arr2 = [1, 2, 3];

const newMergedArray = [...arr1, 100000, 23333];

// console.log(newMergedArray);

// Objects

const geo = {
  city: "Vilnius",
  country: "Lithuania"
};

const friend = {
  name: "Gytis",
  age: 34,
  favColor: "green",
  pets: ["dog", "cat", "rat"],
  hairType: "curly",
  ...geo
};

// console.log(friend);

// Rest: Array

const anotherArr = [100, 203, 45, 65, 19004, 4324];

const [first, second, ...somethingsomething] = anotherArr;

console.log(first, second, somethingsomething);

// Rest: Object

const { name, city, age, pets, ...rest } = friend;

console.log(rest);
