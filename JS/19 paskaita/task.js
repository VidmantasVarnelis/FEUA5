// Create a class called Parrot that will parrot (pun intended) the last phrase it learned. Example usage:

// const polly = new Parrot()
// polly.speak()                              // "Sqwak!"
// polly.teach("Polly want a cracker!")
// polly.speak()                              // "Polly want a cracker!"
// polly.speak()                              // "Polly want a cracker!"
// polly.teach("You're ugly!")
// polly.speak()                              // "You're ugly!"

// class Parrot {
//   #word;
//   constructor() {
//     this.#word = 'Sqwak';
//   }
//   speak() {
//     console.log(this.#word);
//   }

//   teach(newWord) {
//     this.#word = newWord;
//   }
// }

// const polly = new Parrot();
// polly.speak();
// polly.teach('Polly want a cracker!');
// polly.speak();
// polly.speak();
// polly.teach("You're ugly!");
// polly.speak();

// 2 task
//Create a class called Parrot that will parrot (pun intended) learn multiple phrases and repeat a random one. Example usage:
// const polly = new Parrot()
// polly.speak()                              // "Sqwak!"
// polly.teach("Polly want a cracker!")
// polly.teach("You're ugly!")
// polly.teach("I love you!")
// polly.speak()                              // "You're ugly!"
// polly.speak()                              // "I love you!"
// polly.speak()                              // "I love you!"

class Parrot2 {
  #word;
  constructor() {
    this.#word = ['Sqwak'];
  }

  #randomWord() {
    const random = Math.floor(Math.random() * this.#word.length);
    return this.#word[random];
  }

  speak() {
    console.log(this.#randomWord());
  }

  teach(newWord) {
    this.#word.push(newWord);
  }
}

const polly = new Parrot2();
polly.speak();
polly.teach('Polly want a cracker!');
polly.speak();
polly.speak();
polly.teach("You're ugly!");
polly.speak();
polly.speak();
polly.speak();
polly.speak();

// Uzduotis Sukurti index.html forma su input ir button kur galesime irasyti teach reiksmes. Sukurti button Speak, kuris isvestu i ekrana random zodzius
