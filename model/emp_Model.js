const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const employee = new Schema(
  {
    id: {type: String},
    emp_name: {type: String},
    emp_salary: {type: String},
    emp_age: {type: String},
    emp_image: {type:String},
}
);

module.exports = mongoose.model('Employee_Model', employee);
