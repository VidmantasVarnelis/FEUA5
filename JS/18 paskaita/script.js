/* 
1. Calling constructor - creates an empty object;
2. This empty object is then linked to this keyword
3. Setting all provided properties;
4. Returns a new object;
*/

/* 
function SomeClass () {

    1. 
    const myNewObj = {};
    2. 
    const this = myNewObj;
    3. 
    this.name = "Something"
    this.age = 23
    this.greet = function () {
        console.log(`Hi, my name is ${this.name}`);
    }

    4.
    return this // This is our brand new object
}
*/

function Friend(name, age) {
  this.name = name;
  this.age = age;
}

Friend.prototype.greet = function () {
  console.log(`Hi, my name is ${this.name} and I'm ${this.age} years old.`);
};

Friend.prototype.pi = 3.1415;

const friend1 = {
  name: 'Ona',
  greet: function () {
    console.log(`Hi, my name is ${this.name}`);
  },
};

let result = [];

const ona = new Friend('Ona', 24);
const jonas = new Friend('Jonas', 30);
// ona.greet();
// jonas.greet();

/* ES6 */

class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // If we want to add something to prototype
  speak() {
    console.log(`${this.name} says hi`);
  }
}

class Dog extends Animal {
  constructor(n, a) {
    super(n, a); // === parent constructor
    this.type = 'dog';
  }
}

const barkey = new Dog('Barkey', 3);

barkey.speak();

// console.log(barkey);

// Game example

class Tamagochi {
  constructor(n) {
    this.name = n;
    this.joy = 100;
    this.food = 100;
  }

  play() {
    console.log(`${this.name} is playing!`);
    this.joy = 100;
  }

  study() {
    if (this.joy > 50) {
      console.log(`${this.name} studies...`);
      this.joy = this.joy - 25;
    } else {
      console.log("I'm not happy enough");
    }
  }
}

const pet = new Tamagochi('XYZ');

pet.study();
pet.study();
pet.study();
pet.play();
pet.study();

console.log(pet);

console.log([]);
