/* 5. */

const listNameForm = document.getElementById('list-name');
const listNameOutput = document.getElementById('list-name-output');

if (listNameForm && listNameOutput) {
  listNameForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const nameInput = event.target.querySelector('input[name=name]');
    const timesInput = event.target.querySelector('input[type=number]');

    const timesInputValue = parseInt(timesInput.value);

    for (let i = 0; i < timesInputValue; i++) {
      const listItem = document.createElement('li');
      listItem.id = `list-item-${i}`;
      listItem.textContent = nameInput.value;

      listNameOutput.append(listItem);
    }
  });
}

/* 6. */

const triangleInput = document.getElementById('triangle');
const triangleOutput = document.getElementById('triangle-output');

if (triangleInput && triangleOutput) {
  triangleInput.addEventListener('input', function (event) {
    const value = parseInt(event.target.value);

    let result = '';
    for (let i = 0; i < value; i++) {
      const stars = '*'.repeat(i + 1);

      /* for (let x = 0; x <= i; x++) {
        result += "*";
      } */

      result += `${stars}<br>`;
    }

    triangleOutput.innerHTML = result;
  });
}

/* 7. */

function createComment(username, comment) {
  /* Creating container element */
  const commentContainerEl = document.createElement('div');
  commentContainerEl.classList.add('comment-container');

  /* Creating username text element */
  const usernameEl = document.createElement('h4');
  usernameEl.classList.add('comment-username');
  usernameEl.textContent = username;

  /* Creating comment text element */
  const commentEl = document.createElement('p');
  commentEl.classList.add('comment-content');
  commentEl.textContent = comment;

  /* Finishing up */
  commentContainerEl.append(usernameEl);
  commentContainerEl.append(commentEl);

  return commentContainerEl;
}

const commentsForm = document.getElementById('comments-form');
const commentsSection = document.getElementById('comments-section');

if (commentsForm && commentsSection) {
  commentsForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const usernameInput = event.target.querySelector('input[name=username]');
    const commentInput = event.target.querySelector('textarea[name=comment]');

    if (!usernameInput || !commentInput) {
      console.error('Some inputs were not found!');
      return;
    }

    const usernameVal = usernameInput.value;
    const commentVal = commentInput.value;

    const commentElement = createComment(usernameVal, commentVal);

    commentsSection.append(commentElement);
  });
}
