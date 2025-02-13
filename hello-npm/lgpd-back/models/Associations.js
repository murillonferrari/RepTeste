import User from "./Userjs";
import Teacher from "./Teacher.js";
import Course from "./Course.js";
import Evaluation from "./Evaluation.js";
import { Association } from "sequelize";


const association = () => {
    Course.hasMany(Teacher);
    User.hasMany(Evaluation);
    Course.hasMany(Evaluation);

}

const factory = {
    association
}

export default factory;