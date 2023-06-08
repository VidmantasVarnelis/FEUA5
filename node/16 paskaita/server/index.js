const express = require('express');
const cors = require('cors');
require('dotenv').config();
const companyRoute = require('./src/routes/company');
const groupsRoute = require('./src/routes/groups');

const server = express();

server.use(express.json());
server.use(cors());
// server.use((req, res, next) => {
//   const flag = true;
//   if (flag) {
//     console.log('Code Academy');
//     next();
//   } else {
//     res.status(500).send({ error: true });
//   }
// });

const PORT = process.env.PORT || 8080;

server.use('/', companyRoute);
server.use('/groups', groupsRoute);

server.listen(PORT, () => console.log(`Server is running on PORT:${PORT}`));
