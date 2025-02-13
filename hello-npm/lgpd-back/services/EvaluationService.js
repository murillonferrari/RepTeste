import evaluationRepository from "../repositories/EvaluationRepository.js"

const saveEvaluation = (evaluationModel) => {
    return evaluationRepository.saveEvaluation(evaluationModel);
}

const getEvaluationbyId = (id) => {
    return evaluationRepository.getEvaluationbyId(id);
}

const getAllEvaluation = () => {
    return evaluationRepository.getAllEvaluation();
}

const deleteEvaluationeById = (id) => {
    return evaluationRepository.deleteEvaluationById(id);
}

const updateEvaluationById = (id, EvaluationModel) => {
    return evaluationRepository.updateEvaluationById(id,EvaluationModel);
}


const service = {
    saveEvaluation,
    getEvaluationbyId,
    getAllEvaluation,
    deleteEvaluationeById,
    updateEvaluationById

}


export default service;