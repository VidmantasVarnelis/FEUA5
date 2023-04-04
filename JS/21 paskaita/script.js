document.cookie = 'name=Vidmantas';

const date = new Date();
date.setMinutes(date.getMinutes() + 1);
console.log(date.toUTCString());

document.cookie = `group=FEUA5; expires=${date.toUTCString()}`;

console.log(document.cookie);

localStorage.setItem('name', 'Vidmantas');
localStorage.setItem('user', '["asfa", "asfasfas"]');
console.log(localStorage.getItem('name'));
console.log(localStorage.getItem('user'));

// Su masyvais ir objektais
const arr = ['labas'];
localStorage.setItem('arr', JSON.stringify(arr));
console.log(JSON.parse(localStorage.getItem('user'))); // masyvo konvertacija is string
console.log(JSON.parse(localStorage.getItem('arr')));
localStorage.removeItem('arr');

const button = document.querySelector('button');

button.addEventListener('click', () => {
  sessionStorage.setItem('name', 'Vidmantas');
});

const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const value = event.target.querySelector('input').value;
  document.cookie = `value=${value}; expires=${date}`;
});

const cookieValue = document.cookie
  .split(' ')
  .find((el) => el.includes('value'));

if (cookieValue) {
  document.body.textContent = 'As prisijunges';
}

// const localStorageValue = localStorage.getItem('user')
// if(localStorageValue){
// 	....
// }
