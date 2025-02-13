import express from 'express';
let router = express.Router();

import evaluationService from "../services/EvaluationService.js";


router.post("/addEvaluation", async function(req, res) {
    const evaluationModel = {
            fist_name: req.body.fist_name,
            last_name: req.body.last_name,
            email: req.body.email,
            gender: req.body.gender
    }

    const evaluation = await evaluationService.saveEvaluation(evaluationModel);
    return res.status(200).json(evaluation);
});


router.get("/getAllEvaluations", async function (req,res) {
    const allEvaluation = await evaluationService.getAllEvaluations();
    return res.status(200).json(allEvaluation)
    
});


router.get("/evaluation/:id", async function (req,res) {
    const evaluation = await evaluationService.getEvaluationbyId(req.params.id);
    return res.status(200).json(evaluation)
    
});

router.delete("/deleteEvaluation/:id", async function (req,res) {
    const allEvaluation = await evaluationService.deleteEvaluationbyId();
    return res.status(200).json(evaluation)
    
});


router.put("/updateEvaluation:/id", async function(req, res) {
    const evaluationModel = {
            fist_name: req.body.fist_name,
            last_name: req.body.last_name,
            email: req.body.email,
            gender: req.body.gender
    }

    const evaluation = await evaluationService.updateEvaluationById(req.params.id, evaluationModel);
    return res.status(200).json(evaluation);
});

export default router;