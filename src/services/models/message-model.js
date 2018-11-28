const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const employeeDataSchema = new Schema({
  firstName: String,
  lastName: String,
  emailAddress: String,
  homePhoneNumber: Number,
  workPhoneNumber: {type: Number, default: 0},
  dateOfBirth: String,
  skypeId: String,
  facebookProfileUrl: String,
  otherPhone: String,
  city: String,
  state: String
})

const EmployeeData = mongoose.model('employeeData',employeeDataSchema);
module.exports = EmployeeData;
