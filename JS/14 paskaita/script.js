// Basic array methods

const myArr = [1, 2, 3, 4];

// console.log(myArr);

const lastItem = myArr.pop();

myArr.push({ name: "Lukas" });

myArr.unshift("Hello");
myArr.shift();

// console.log(myArr, lastItem);

// Callback

document.body.addEventListener("click", function (e) {});

// function addEventListener(eventType, callbackFunction) {
//   // some logic;

//   // if event happened:
//   callbackFunction(event);
// }

function checkEvenNumber(number, successCallback, failureCallback) {
  if (number % 2 === 0) {
    successCallback(number);
  } else {
    failureCallback(number);
  }
}

function evenNumberMessage(num) {
  console.log(`${num} is even number`);
}

// checkEvenNumber(2, evenNumberMessage, function (num) {
//   console.log(`${num} is not an even number`);
// });

// Advanced array methods

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

/* for (let i = 0; i < friends.length; i++) {
  const friend = friends[i];
  console.log(friend.age);
} */

/*  */
// forEach
/*  */

friends.forEach(function (friend) {
  //   console.log(friend.name);
});

// JUST AN EXAMPLE how forEach could be working in the background
function forEach(callback) {
  for (let i = 0; i < friends.length; i++) {
    const friend = friends[i];

    callback(friend, i, friends);
  }
}

// forEach(function (element, index, array) {
//   console.log(element, index, array);
// });

/*  */
// filter
/*  */

const minors = friends.filter(function (friend) {
  const isMinor = friend.age < 18;
  return isMinor;
});

// console.log(minors);

const friendsWhoLikeGreen = friends.filter(function (friend) {
  return (
    friend.favColor === "green" &&
    friend.pets.find(function (pet) {
      return pet === "dog";
    })
  );
});

console.log(friendsWhoLikeGreen);

/*  */
// find
/*  */

const oneFriendWhoLikesGreen = friends.find(function (friend) {
  return friend.favColor === "green";
});

// console.log(oneFriendWhoLikesGreen);

/*  */
// includes
/*  */

const petsArray = ["dog", "cat", "rat"];

// console.log(petsArray.includes("cow"));

/*  */
// some; every
/*  */

const canSomeoneBuyUsBeer = friends.some(function (friend) {
  return friend.age > 17;
});

// console.log(canSomeoneBuyUsBeer);

const canWeAllGoToTheClub = friends.every(function (friend) {
  return friend.age > 17;
});

// console.log(canWeAllGoToTheClub);

/*  */
// map
/*  */

const friendsNames = friends.map(function (friend) {
  return friend.name;
});

// console.log(friendsNames);

const namesAndAges = friends.map(function (friend) {
  return { name: friend.name, dsfsdafasdfsdafage: friend.age };
});

// console.log(namesAndAges);
