// const casual = require('casual');
// console.log(casual.username);

// ===================
// Using Vanilla nodejs
// ===================
// const http = require('http');

// const server = http.createServer((req, res) => {
//   if (req.url === '/' && req.method === "GET") {
//     res.write('This is home address');
//     res.end();
//   } else if (req.url === '/about') {
//     res.write('This about addres');
//     res.end();
//   } else {
//     res.statusCode = 404;
//     res.write('No path found!');
//     res.end();
//   }
// });

// server.listen(8080);

const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.get('/', (req, res) => {
  // res.write('This is home address');
  // res.end();
  // res.send('Vidmantas');
  res.json({
    name: 'Vidmantas',
  });
});

app.get('/about', (req, res) => {
  res.status(201).json({
    insterted: true,
  });
});

app.listen(8080, () => console.log('Server is running on port: 8080'));
