// Import any required models here
// const Example = require('../models/example');
const userData = require('../models/userModel');

// Define your service methods
exports.getExamples = async () => {
  return "value";

};

exports.createExample = async (name) => {
    console.log("controllr",name);
  const resp = await userData.create({Name:name});
  console.log(resp);
  return resp;
};