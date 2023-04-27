// const createDadJokes = async () => {
//   try {
//     const response = await fetch('https://icanhazdadjoke.com/graphql', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         query: 'query { joke {id joke permalink } }',
//       }),
//     });
//     console.log(response);
//     const data = await response.json();
//     console.log(data);
//   } catch (err) {
//     console.log(err);
//   }
// };
// createDadJokes();

const createDadJokes = async (joke) => {
  try {
    const response = await fetch('https://reqres.in/api/dadjokes?page=15', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(joke),
    });
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

const formEl = document.getElementById('add-joke');

formEl.addEventListener('submit', async (event) => {
  event.preventDefault();
  const data = {
    joke: event.target.querySelector('input').value,
  };
  const jokeResponse = await createDadJokes(data);
  if (jokeResponse.joke) {
    const localStorageJokes = localStorage.getItem('jokes')
      ? JSON.parse(localStorage.getItem('jokes'))
      : [];
    localStorageJokes.push(jokeResponse.joke);
    localStorage.setItem('jokes', JSON.stringify(localStorageJokes));
    location.replace('./');
  } else {
    alert('Joke was not created!');
  }
});
