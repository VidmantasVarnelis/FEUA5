const userID = 'lukas323';

const baseUrl = `https://quark-scandalous-beast.glitch.me/${userID}/todos`;

// Our API functions
const getTodos = async () => {
  try {
    const response = await fetch(baseUrl);
    const data = await response.json();

    renderTodoList(data);
  } catch (err) {
    console.error(err);
  }
};

const postTodo = async (requestBody) => {
  try {
    const response = await fetch(baseUrl, {
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
      body: JSON.stringify(requestBody),
    });
    const data = await response.json();

    console.log(data);
  } catch (err) {
    console.error(err);
  }
};

const deleteTodo = async (todoId) => {
  try {
    const response = await fetch(`${baseUrl}/${todoId}`, {
      method: 'DELETE',
    });
  } catch (err) {
    console.log(err);
  }
};

const updateTodo = async (todoId, requestBody) => {
  try {
    const response = await fetch(`${baseUrl}/${todoId}`, {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'PUT',
      body: JSON.stringify(requestBody),
    });
  } catch (err) {
    console.error(err);
  }
};

// updateTodo("9149a1c5-8aff-452d-ba73-cc0a24e59e0b", {
//   title: "Updated title"
// });

// Other utilities

const renderTodoList = (array) => {
  const output = document.getElementById('list-output');

  if (!output && !array) {
    return;
  }

  output.innerHTML = '';

  array.forEach((todo) => {
    // Creating <li>
    const liEl = document.createElement('li');
    liEl.style.display = 'flex';
    liEl.style.alignItems = 'center';

    // Creating checkbox
    const checkboxEl = document.createElement('input');
    checkboxEl.checked = todo.completed;
    checkboxEl.type = 'checkbox';

    checkboxEl.addEventListener('change', async (event) => {
      const currentState = event.target.checked;
      await updateTodo(todo.id, {
        completed: currentState,
      });
    });

    // Creating <p> for title
    const titleEl = document.createElement('p');
    titleEl.textContent = todo.title;
    titleEl.style.margin = '10px 16px 10px 8px';

    // Creating delete button
    const deleteEl = document.createElement('a');
    deleteEl.href = '#';
    deleteEl.textContent = 'X';
    deleteEl.style.color = 'red';
    deleteEl.style.padding = '3px';

    deleteEl.addEventListener('click', async (event) => {
      event.preventDefault();
      await deleteTodo(todo.id);
      console.log('Deleted');
      await getTodos();
      console.log('Refetched');
    });

    // Appending elements to the <li>
    liEl.append(checkboxEl, titleEl, deleteEl);

    // Appending element to <ul>
    output.append(liEl);

    console.log(todo);
  });
};

// Initial fetch on load

getTodos();

// postTodo({
//   title: "Keturi",
//   description: "324243423"
// });
