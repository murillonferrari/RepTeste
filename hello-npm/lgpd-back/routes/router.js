import express from "express";
let router = express.Router();

import userController from "./UserController.js";
import courseController from "./CourseController.js";
import teacherController from "./TeacherController.js";
import evaluationController from "./EvaluationController.js";


router.get("/", function(req,res){
    console.log("Ola");
    res.status(200).json({message: "Ola"});
});


router.use("/", userController)
router.use("/", teacherController)
router.use("/", courseController)
router.use("/", evaluationController)


export default router;