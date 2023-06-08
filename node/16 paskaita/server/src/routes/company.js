const express = require('express');
const mysql = require('mysql2/promise');
const DB_CONFIG = require('../config/db-config');

const router = express.Router();

const pool = mysql.createPool(DB_CONFIG);

router.get('/company', async (_, res) => {
  try {
    // company[0] yra tas pats kad [company]
    const [company] = await pool.execute('SELECT * FROM company');
    res.json(company);
  } catch (err) {
    console.log(err);
    res.status(500).end();
  }
});

router.get('/company/:id', async (req, res) => {
  try {
    const [company] = await pool.query('SELECT * FROM company WHERE id=?', [
      req.params.id,
    ]);
    if (company.length === 0) {
      return res.status(400).json({
        status: 400,
        error: `Company with this id - ${req.params.id} does not exist!`,
      });
    }
    return res.json(company[0]);
  } catch (err) {
    return res.status(500).end();
  }
});

router.post('/company', async (req, res) => {
  try {
    if (!req.body.company_name) {
      return res.status(400).json({
        status: 400,
        error: 'You must provide company_name',
      });
    }

    if (!req.body.company_size) {
      return res.status(400).json({
        status: 400,
        error: 'You must provide company_size',
      });
    }
    const [companies] = await pool.query(
      'SELECT company_name FROM company WHERE company_name=?',
      [req.body.company_name],
    );

    if (companies.length > 0) {
      return res.status(400).json({
        status: 400,
        error: 'Company already exists!',
      });
    }

    const payload = {
      company_name: req.body.company_name,
      company_size: req.body.company_size,
      company_address: req.body.company_address,
      company_field: req.body.company_field,
      logo_url: req.body.logo_url,
    };
    const [response] = await pool.query('INSERT INTO company SET ?', [payload]);
    return res.status(201).json(response);
  } catch (err) {
    console.log(err);
    return res.status(500).end();
  }
});

router.put('/company/:id', async (req, res) => {
  try {
    if (!req.body.company_name) {
      return res.status(400).json({
        status: 400,
        error: 'You must provide company_name',
      });
    }

    if (!req.body.company_size) {
      return res.status(400).json({
        status: 400,
        error: 'You must provide company_size',
      });
    }

    const [companies] = await pool.query('SELECT id FROM company WHERE id=?', [
      req.params.id,
    ]);

    if (companies.length === 0) {
      return res.status(400).json({
        status: 400,
        error: 'Company does not exist!',
      });
    }

    const payload = {
      company_name: req.body.company_name,
      company_size: req.body.company_size,
      company_address: req.body.company_address,
      company_field: req.body.company_field,
      logo_url: req.body.logo_url,
    };

    const [response] = await pool.query('UPDATE company SET ? WHERE id=?', [
      payload,
      req.params.id,
    ]);
    return res.status(200).json(response);
  } catch (err) {
    console.log(err);
    return res.status(500).end();
  }
});

router.delete('/company/:id', async (req, res) => {
  try {
    const [response] = await pool.query('DELETE FROM company WHERE id=?', [
      req.params.id,
    ]);
    return res.json(response);
  } catch (err) {
    return res.status(500).end();
  }
});

module.exports = router;
