const express = require('express');
require('dotenv').config();
const cors = require('cors');
const { MongoClient, ObjectId } = require('mongodb');

const server = express();
server.use(cors());
server.use(express.json());

const mongoClient = new MongoClient(process.env.CONNECTION_STRING);
const PORT = process.env.PORT || 8080;

server.post('/university', async (req, res) => {
  const payload = req.body;
  try {
    const mongoCluster = await mongoClient.connect();
    const university = {
      name: payload.name,
      address: payload.address,
    };
    const response = await mongoCluster
      .db('FEUA5-university')
      .collection('university')
      .insertOne(university);

    await mongoCluster.close();
    res.status(201).json(response);
  } catch (err) {
    res.status(500).end();
  }
});

server.post('/students', async (req, res) => {
  const payload = req.body;
  try {
    const mongoCluster = await mongoClient.connect();
    const students = {
      firstName: payload.firstName,
      lastName: payload.lastName,
      age: payload.age,
      universityId: new ObjectId(payload.universityId),
    };
    const response = await mongoCluster
      .db('FEUA5-university')
      .collection('students')
      .insertOne(students);

    await mongoCluster.close();
    res.status(201).json(response);
  } catch (err) {
    res.status(500).end();
  }
});

server.get('/students', async (_, res) => {
  try {
    const mongoCluster = await mongoClient.connect();
    const students = await mongoCluster
      .db('FEUA5-university')
      .collection('students')
      .aggregate([
        {
          $lookup: {
            from: 'university', // nurodo kokia kolekcija apjungti duomenubazeje
            localField: 'universityId', // studentu kolekcijoje esantis property
            foreignField: '_id', // universitetu kolekcijos foreign key pagal kuri apjungsim kolekcijas
            as: 'university', // kaip vadinsis galutiniame rezultate musu duomenys
          },
        },
        {
          $project: { universityId: 0 },
        },
        // {
        //   $group: {
        //     _id: '$firstName',
        //     sumAge: { $sum: '$age' },
        //     avgAge: { $avg: '$age' },
        //   },
        // },
      ])
      .toArray();
    res.status(200).json(students);
  } catch (err) {
    res.status(500).end();
  }
});

server.listen(PORT, () => console.log(`Server is running on PORT: ${PORT}`));
