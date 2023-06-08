const express = require('express');
const mysql = require('mysql2/promise');
const joi = require('joi');
const DB_CONFIG = require('../config/db-config');

const router = express.Router();

const pool = mysql.createPool(DB_CONFIG);

const groupSchema = joi.object({
  group_name: joi.string().alphanum().min(3).max(15).required(),
  group_key: joi.string().alphanum().min(3).max(15).required(),
});

const studentSchema = joi.object({
  name: joi.string().alphanum().required(),
  last_name: joi.string().alphanum().required(),
  age: joi.number().required(),
});

router.get('/', async (_, res) => {
  try {
    const [groups] = await pool.execute(
      'SELECT id, group_name, group_key, created_at FROM student_groups',
    );
    res.json(groups);
  } catch (err) {
    res.status(500).end();
  }
});

router.get('/:id/students', async (req, res) => {
  try {
    const [students] = await pool.execute(
      'SELECT id, name, last_name, age, created_at FROM student_groups_has_students AS g1 JOIN students ON g1.students_id=students.id WHERE g1.student_groups_id=?',
      [req.params.id],
    );
    res.json(students);
  } catch {
    res.status(500).end();
  }
});

router.post('/', async (req, res) => {
  try {
    await groupSchema.validateAsync(req.body);
  } catch (err) {
    return res.status(400).json(err);
  }

  try {
    const [groups] = await pool.execute(
      'SELECT * FROM student_groups WHERE group_name=?',
      [req.body.group_name],
    );

    if (groups.length > 0) {
      return res.status(400).json({
        error: 'Group is already created!',
      });
    }

    const [response] = await pool.execute(
      'INSERT INTO student_groups (group_name,group_key,company_id) VALUES (?,?,?)',
      [req.body.group_name, req.body.group_key, 1],
    );

    return res.json(response);
  } catch (err) {
    console.log(err);
    return res.status(500).send(err);
  }
});

router.post('/:id/students/:studentId', async (req, res) => {
  try {
    const [group] = await pool.execute(
      'SELECT student_groups_id FROM student_groups_has_students AS g1 RIGHT JOIN students ON g1.students_id=students.id WHERE students.id',
      [req.params.studentId],
    );

    if (group[0].student_groups_id) {
      return res.status(400).json({ error: 'Student already have group!' });
    }

    const [response] = await pool.execute(
      'INSERT INTO student_groups_has_students (student_groups_id, students_id) VALUES (?, ?)',
      [req.params.id, req.params.studentId],
    );
    return res.json(response);
  } catch (err) {
    console.log(err);

    return res.status(500).end();
  }
});

module.exports = router;
