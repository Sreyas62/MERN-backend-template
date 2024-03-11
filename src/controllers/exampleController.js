// Import any required services or models here
const exampleService = require('../services/exampleService');

// Define your controller methods
exports.getExamples = async (req, res) => {
  try {
    const examples = await exampleService.getExamples();
    res.json(examples);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.createExample = async (req, res) => {
  try {
    console.log(req.body);
    const { name } = req.body;
    console.log(name);
    const newExample = await exampleService.createExample(name);
    console.log(newExample);
    res.json(newExample);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};