// cd - keicia direktorija
// cd .. - grazina i pries tai buvusi kataloga

console.log('Hello World!');

// ===============
// Window, document ir kiti objektai nodejs nebeegzistuoja
// ===============
// console.log(window);
// console.log(document);
// document.getElementById('asfasf')

// console.log(global);

// global.setTimeout(() => {
//   console.log('Vidmantas');
// }, 2000);

// ===============
// panaudojimas os modulio
// ===============

// const os = require('os');

// console.log(os.homedir());

const casual = require('casual');

console.log(casual.username);
