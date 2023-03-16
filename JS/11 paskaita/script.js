// console.log(window);
// window.console.log('Testuoju');
// window.alert('Testuoju');
// window.prompt
console.log(window.document);

const firstName = 'John';
const lastName = 'Doe';
const age = 50;

// const person = {
//   firstName: 'John',
//   lastName: 'Doe',
//   age: 50,
// };
// // 1 budas
// console.log(person.firstName);
// console.log(person.lastName);
// // 2 budas
// const nameKey = 'firstName';
// console.log(person[nameKey]);

const car = {
  name: 'Audi',
  year: 2017,
  model: ['a4', 'a5', 'q5', 'a6'],
  additionalInfo: {
    wheels: 4,
  },
  start: function (model) {
    // console.log(model);
    // console.log(this);
    let foundModel = null;
    for (let i = 0; i < this.model.length; i++) {
      if (this.model[i] === model) {
        foundModel = model;
        break;
      }
    }
    // console.log(foundModel);
    // Truthy "asfas" 1 true [] {}
    // Falsy "" 0 null undefined
    console.log(
      `${this.name} ${this.year} ${foundModel ? foundModel : ''} started!`
    );
  },
  drive: function () {
    console.log('Drive!');
  },
  // 2 budas - ES6
  stop() {
    console.log('Car stopped!');
  },
};
console.log(car);
car.start('a5');
car.start('a6');
car.start('a7');
car.drive();
car.stop();

console.log(Object.keys(car));
console.log(Object.values(car));

// Document methods

// console.log(document.location.reload());
// console.log(document.location.replace('https://google.com'));
// console.log(document.location.search);
