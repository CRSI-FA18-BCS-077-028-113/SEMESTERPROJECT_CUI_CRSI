const express = require("express");
let router = express.Router();
const validateCourse = require("../../middlewares/validateCourse");
const auth = require("../../middlewares/auth");
const admin = require("../../middlewares/admin");
var {Course,validate, validate} = require("../../models/course");

//get all courses
router.get("/", auth,async(req,res)=>{
let courses = await Course.find();
return res.send(courses);

});

//get single course
router.get("/:id", auth,async(req,res)=>{
   
try {
    let course = await Course.findById(req.params.id);
    if (!course)
        return res.status(400).send("Product With given ID is not present"); //when id is not present id db
        return res.send(course); //everything is ok
    } catch (err) {
    return res.status(400).send("Invalid ID"); // format of id is not correct
    }

});

//update a course
router.put("/:id",auth,admin,async (req, res) => {
    let course = await Course.findById(req.params.id);
    course.name = req.body.name;
    course.code = req.body.code;
    course.instructor = req.body.instructor;
    course.section = req.body.section;
    await course.save();
    return res.send(course);
  });

//DELETE A COURSE
router.delete("/:id",auth,admin,async (req, res) => {
    let course = await Course.findByIdAndDelete(req.params.id);

    return res.send(course);
  });

//Insert a COURSE RECORD
router.post("/",validateCourse ,auth,admin, async (req, res) => {
    let course = new Course();

    course.name = req.body.name;
    course.code = req.body.code;
    course.instructor = req.body.instructor;
    course.section = req.body.section;

    await course.save();
    return res.send(course);
  });

module.exports = router;