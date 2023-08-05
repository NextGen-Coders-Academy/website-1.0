const db = require("../database/models/index");
const Employee = db.employees;

async function getAllEmployees(req, res) {
  try {
    const employees = await db.employees.findAll();
    res.json(employees);
  } catch (error) {
    console.error("Error fetching tests:", error);
    res.status(500).json({ error: "Could not fetch tests." });
  }
}


async function employeeIndex(req, res) {
  try {
    const employees = await Employee.findAll();
    console.log(employees)
    res.render('employees', {employees: employees});
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: "Could not fetch employees." });
  }
}

/* admin use only
async function createEmployee(req, res) {
  try {
    const { firstName, lastName, title, bio, startDate, endDate } = req.body;
    const newTest = await db.test.create({ name });
    res.status(201).json(newTest);
  } catch (error) {
    console.error("Error creating test:", error);
    res.status(500).json({ error: "Could not create test name." });
  }
}
*/

module.exports = {
  // createTest,
  employeeIndex,
  getAllEmployees
};
