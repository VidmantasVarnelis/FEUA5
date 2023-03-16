// document.body.innerHTML = '<h1>Lorem</h1> asfasfasf';
const output = document.getElementById('output');
// console.log(output.innerText);

// document.querySelector('input').addEventListener('input', function (e) {
//   console.log(e.target.value);
//   // output.innerHTML = e.target.value;
//   // output.textContent = e.target.value;
//   // output.innerText = e.target.value;
// });

const headingEl = document.querySelector('h1');
const greenBtn = document.getElementById('green');
const redBtn = document.getElementById('red');
const blueBtn = document.getElementById('blue');

greenBtn.addEventListener('click', function () {
  headingEl.style.color = 'green';
  // css property - font-size
  // js style property - camelCase fontSize
  headingEl.style.fontSize = '3rem';
  headingEl.style.backgroundColor = 'lightgreen';
});

redBtn.addEventListener('click', function () {
  // panaikina pries tai turetas inline stiliaus savybes
  headingEl.style.cssText = 'background-color: red; font-size: 4rem;';
});

blueBtn.addEventListener('click', function () {
  // panaikina pries tai turetas visas klases

  // headingEl.className = 'primary-heading';

  headingEl.classList.add('primary-heading', 'secondary-heading');
  headingEl.classList.remove('secondary-heading');
  console.log(headingEl.classList.contains('heading'));
  // klase prides jeigu klases elemente nera, o jeigu yra istrins ja
  headingEl.classList.toggle('heading-3');
  headingEl.classList.toggle('heading');
});
