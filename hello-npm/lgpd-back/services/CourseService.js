import courseRepository from "../repositories/CourseRepository.js"

const saveCourse = (courseModel) => {
    return courseRepository.saveCourse(courseModel);
}

const getCoursebyId = (id) => {
    return CourseRepository.getCoursebyId(id);
}

const getAllCourse = () => {
    return courseRepository.getAllCourse();
}

const deleteCourseById = (id) => {
    return courseRepository.deleteCourseById(id);
}


const updateCourseById = (id, courseModel) => {
    return courseRepository.updateCourseById(id,courseModel);
}


const service = {
    saveCourse,
    getCoursebyId,
    getAllCourse,
    deleteCourseById,
    updateCourseById

}


export default service;