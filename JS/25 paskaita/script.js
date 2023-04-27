const getDadJokes = async () => {
  try {
    const response = await fetch('https://reqres.in/api/dadjokes?page=15');
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

// getDadJokes().then((data) => {
//   console.log(data);
// });

const outputEl = document.getElementById('joke');
const nextBtn = document.getElementById('next-btn');

const main = async () => {
  const jokes = await getDadJokes();
  if (jokes.data.length > 0) {
    outputEl.textContent = jokes.data.joke;
  } else {
    if (localStorage.getItem('jokes')) {
      const localStorageJokes = JSON.parse(localStorage.getItem('jokes'));
      const random = Math.floor(Math.random() * localStorageJokes.length);
      outputEl.textContent = localStorageJokes[random];
      nextBtn.addEventListener('click', () => {
        // const newJoke = await getDadJokes()
        const newRandom = Math.floor(Math.random() * localStorageJokes.length);
        outputEl.textContent = localStorageJokes[newRandom];
      });
    } else outputEl.textContent = 'No jokes was found!';
  }
};
main();
