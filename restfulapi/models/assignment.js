var mongoose = require("mongoose");
const Joi = require("@hapi/joi");

var assignmentSchema = mongoose.Schema({
  coursecode: String,
  section: String,
  coursename: String,
  assignmentnumber: Number,
  syllabus:String,
  date:String,

});

function validateAssignment(data) {
  const schema = Joi.object({
    coursecode: Joi.string().min(2).required(),
    coursename: Joi.string().min(2).required(),
    section: Joi.string().min(6).required(),
    assignmentnumber: Joi.number().required(),
    syllabus: Joi.string().required(),
    date: Joi.string().required(),
  });
  return schema.validate(data, { abortEarly: false });
}

var Assignment = mongoose.model("Assignment", assignmentSchema);

module.exports.Assignment = Assignment;
module.exports.validate = validateAssignment;