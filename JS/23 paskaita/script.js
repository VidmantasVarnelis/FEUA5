// ES5

// fetch('./db.json', {
//   method: 'GET',
// });

// response.text()
// fetch('./db.json')
//   .then((response) => {
//     return response.text();
//   })
//   .then((data) => {
//     console.log(data);
//   });

// fetch('./db.json')
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   });

// TASK

const tbody = document.getElementById('table-body');
const resultInfo = document.getElementById('result-info');

//ASYNC/AWAIT

const main = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await response.json();
    const count = {
      completed: 0,
      notCompleted: 0,
    };

    const user = {};

    if (data.length > 0) {
      data.forEach((todo) => {
        const tableRow = document.createElement('tr'); // <tr></tr>
        const userCell = document.createElement('td');
        const titleCell = document.createElement('td');
        const completedCell = document.createElement('td');
        userCell.textContent = todo.userId;
        titleCell.textContent = todo.title;

        // if (user[`user${todo.userId}`]) {
        //   user[`user${todo.userId}`]++;
        // } else {
        //   user[`user${todo.userId}`] = 1;
        // }

        if (todo.completed) {
          count.completed++;
        } else {
          count.notCompleted++;
        }
        // let completed = '';
        // if (todo.completed) {
        //   completed += '+';
        // } else {
        //   completed += '-';
        // }
        completedCell.textContent = todo.completed ? '+' : '-';
        tableRow.append(userCell, titleCell, completedCell); // <tr><td>asfasf</td><td>asfasf</td>asfasfasf<td></td></tr>
        tbody.append(tableRow);
      });
      console.log(user);
      const completedEl = document.createElement('div');
      const notCompletedEl = document.createElement('div');

      completedEl.textContent = `Completed: ${count.completed}`;
      notCompletedEl.textContent = `Not Completed: ${count.notCompleted}`;

      resultInfo.append(completedEl, notCompletedEl);
    }
  } catch (err) {
    console.log(err);
  }
};

main();
