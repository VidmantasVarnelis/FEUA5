class Animal {
  constructor(name) {
    this.name = name;
  }
  walk() {
    console.log('walk');
  }
}

const animal = new Animal('mailo');

// ===================================
// Abstraction
// ===================================

class Employee {
  constructor(name, year, salary) {
    this.name = name;
    this.year = year;
    this.salary = salary;
    this.bonus = 250;
  }

  calculateSalaryWithBonus() {
    this.salaryWithBonus = this.salary + this.bonus;
  }

  printInformation() {
    console.log(`Employee ${this.name} - salary: ${this.salaryWithBonus}`);
  }
}

// const employee1 = new Employee('Mantas', 1975, 10000);
// const employee2 = new Employee('Paulius', 1995, 20000);
// employee1.calculateSalaryWithBonus();
// employee1.printInformation();
// console.log(employee1);
// employee2.calculateSalaryWithBonus();
// employee2.printInformation();

// ===================================
// Encapsulation
// ===================================

class Employee2 {
  // Kitose programavimo kalbose naudojama public ir private
  // 1budas - priskirti # prie savybes
  #bonus;
  #salary;
  constructor(name, year, salary) {
    this.name = name;
    this.year = year;
    this.#salary = salary;
    this.#bonus = 250;
  }

  #calculateSalaryWithBonus() {
    this.#salary = this.#salary + this.#bonus;
  }

  printInformation() {
    this.#calculateSalaryWithBonus();
    console.log(`Employee ${this.name} - salary: ${this.#salary}`);
  }

  getSalary() {
    return this.#salary;
  }

  setSalary(salary) {
    this.#salary = salary;
    return salary;
  }
}

const employee3 = new Employee2('Mantas', 1975, 10000);
const employee4 = new Employee2('Paulius', 1995, 20000);
employee3.printInformation();
employee4.printInformation();
employee3.name = 'Ramunas';
console.log(employee3.getSalary());
console.log(employee3.setSalary(535123523));

// ===================================
// INHERITANCE
// ===================================

class Apartament {
  #address;
  #rent;
  #allowedPets;
  constructor(allowedPets, rent) {
    this.#address = 'Konstitucijos pr.';
    this.#rent = rent;
    this.#allowedPets = allowedPets;
  }

  getAddress() {
    return this.#address;
  }
}

class Person extends Apartament {
  #name;
  #age;
  constructor(name, age, rent, allowedPets) {
    super(allowedPets, rent);
    this.#name = name;
    this.#age = age;
  }
}

class Animal2 extends Apartament {
  constructor(name, breed) {
    super(true, 350);
    this.name = name;
    this.breed = breed;
  }
}

const person = new Person('Vidmantas', 25, 500, true);
const person2 = new Person('Lukas', 25, 650, false);

// ===================================
// POLYMORPHISM
// ===================================

class Animal3 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  walk() {
    console.log('Walking');
  }

  bark() {
    console.log('Barking');
  }
}

class Dog extends Animal3 {
  constructor(name, age) {
    super(name, age);
  }
}

class Wolf extends Animal3 {
  constructor(name, age) {
    super(name, age);
  }
  bark() {
    super.bark();
    console.log('WOLF WOLF');
  }
}

const dog = new Dog('Mailo', 5);
const wolf = new Wolf('Wolf', 10);
console.log(dog);
console.log(wolf);
dog.bark();
wolf.bark();
