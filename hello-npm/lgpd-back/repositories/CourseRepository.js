import Course from "../models/Course.js"


const saveCourse = async(CourseModel) => {
    const save = await Course.create(CourseModel);
    return save;
};



const getAllCourses = async() => {
   return await Course.findAll({
        order: [
            ['id', 'ASC']
        ]}
    );
};


const getCourseById = async(id) => {
    return await Course.findByPk(id);
 };


 const deleteCourseById = async(id) => {
    return await Course.destroy({where: {id: id}});
 };


const updateCourseById = async(id, CourseModel) => {
    try {
        const result = await Course.update(CourseModel, {where:{id: id}});
        if(result[0]===1){
            return {message: "Atualizado com sucesso"};
        }else {
            return{message: "Não foi atualizado", status: 404};
        }
        
    } catch (error) {
        console.error();
        
    }
};

const factory = {
    saveCourse,
    getAllCourses,
    getCourseById,
    deleteCourseById,
    updateCourseById

}

export default factory;