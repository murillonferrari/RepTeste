import express from 'express';
let router = express.Router();

import courseService from "../services/CourseService.js";

router.post("/addCourse", async function(req, res) {
    const courseModel = {
            fist_name: req.body.fist_name,
            last_name: req.body.last_name,
            email: req.body.email,
            gender: req.body.gender
    }

    const course = await courseService.saveCourse(courseModel);
    return res.status(200).json(course);
});


router.get("/getAllCourses", async function (req,res) {
    const allCourse = await courseService.getAllCourses();
    return res.status(200).json(allCourse)
    
});


router.get("/course/:id", async function (req,res) {
    const course = await courseService.getCoursebyId(req.params.id);
    return res.status(200).json(course)
    
});

router.delete("/deleteCourse/:id", async function (req,res) {
    const allCourse = await courseService.deleteCoursebyId();
    return res.status(200).json(course)
    
});


router.put("/updateCourse:/id", async function(req, res) {
    const courseModel = {
            fist_name: req.body.fist_name,
            last_name: req.body.last_name,
            email: req.body.email,
            gender: req.body.gender
    }

    const course = await courseService.updateCourseById(req.params.id, courseModel);
    return res.status(200).json(course);
});


export default router;