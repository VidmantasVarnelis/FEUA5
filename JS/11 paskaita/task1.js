// const book = {
//   title: 'The 48 Laws of Power Paperback',
//   year: 2000,
//   author: 'Robert Greene',
// };

// const book2 = {
//   title: 'House of Flame and Shadow (Crescent City, 3)',
//   year: 2024,
//   author: 'Sarah J. Maas',
// };

// const book3 = {
//   title: 'Reminders of Him: A Novel',
//   year: 2022,
//   author: 'Colleen Hoover',
// };

// Keep track of which books you read and which books you want to read!

// 1. Create an array of objects, where each object describes a book and has properties for the title (a string), author (a string), and alreadyRead (a boolean indicating if you read it yet).
// 2. Iterate through the array of books. For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".
// Now use an if/else statement to change the output depending on whether you read it yet or not. If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'
const books = [
  {
    title: 'The 48 Laws of Power Paperback',
    year: 2000,
    author: 'Robert Greene',
    img: 'https://picsum.photos/200/300?random=1',
    isAlreadyRead: false,
  },
  {
    title: 'House of Flame and Shadow (Crescent City, 3)',
    year: 2024,
    author: 'Sarah J. Maas',
    img: 'https://picsum.photos/200/300?random=2',
    isAlreadyRead: true,
  },
  {
    title: 'Reminders of Him: A Novel',
    year: 2022,
    author: 'Colleen Hoover',
    img: 'https://picsum.photos/200/300?random=3',
    isAlreadyRead: false,
  },
  {
    title: 'Meant to Be: A Novel ',
    year: 2022,
    author: 'Emily Giffin',
    img: 'https://picsum.photos/200/300?random=4',
    isAlreadyRead: true,
  },
];

const output = document.getElementById('output');

function createBooks() {
  for (let i = 0; i < books.length; i++) {
    const currentBook = books[i];
    const containerEl = document.createElement('div');
    const imgEl = document.createElement('img'); // <img></img>
    imgEl.src = currentBook.img; // <img src="https://picsum.photos/200/300?random=1"></img>
    imgEl.alt = 'Book cover';
    const headingEl = document.createElement('h1'); // <h1></h1>
    headingEl.textContent = `${currentBook.title} - ${currentBook.year}`; // <h1>Reminders of Him: A Novel</h1>
    const spanEl = document.createElement('span');
    if (currentBook.isAlreadyRead) {
      spanEl.textContent = `You already read ${currentBook.title}`;
      spanEl.style.color = 'red';
    } else {
      spanEl.textContent = `You still need to read ${currentBook.title}`;
      spanEl.style.color = 'green';
    }
    containerEl.append(imgEl, headingEl, spanEl);
    output.append(containerEl);
  }
}
createBooks();

// const person = {
// 	name: e.target.querySelector().value
// 	lastName: e.target.querySelector().value
// }
