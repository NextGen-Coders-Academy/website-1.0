const db = require("../models");

async function getAllTests(req, res) {
    try {
      const tests = await db.test.findAll();
      res.json(tests);
    } catch (error) {
      console.error('Error fetching users:', error);
      res.status(500).json({ error: 'Could not fetch users.' });
    }
  }

// Controller functions
async function createTest(req, res) {
    try {
      const { name } = req.body;
      const newTest = await db.test.create({ name });
      res.status(201).json(newTest);
    } catch (error) {
      console.error('Error creating user:', error);
      res.status(500).json({ error: 'Could not create user.' });
    }
  }

module.exports = {
    createTest,
    getAllTests,
};