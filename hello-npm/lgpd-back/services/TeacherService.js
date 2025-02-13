import teacherRepository from "../repositories/TeacherRepository.js"

const saveTeacher = (teacherModel) => {
    return userRepository.saveTeacher(teacherModel);
}

const getTeacherbyId = (id) => {
    return teacherRepository.getTeacherbyId(id);
}

const getAllTeacher = () => {
    return teacherRepository.getAllTeacher();
}

const deletTeacherbyId = (id) => {
    return teacherRepository.deleteTeacherbyId(id);
}


const updateTeacherById = (id, teacherModel) => {
    return userRepository.updateUserById(id,teacherModel);
}


const service = {
    saveTeacher,
    getTeacherbyId,
    getAllTeacher,
    deletTeacherbyId,
    updateTeacherById

}


export default service;