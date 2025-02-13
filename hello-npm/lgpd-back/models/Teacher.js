import { DataTypes, INTEGER} from "sequelize";
import sequelize from "../utils/database.js";

const Teacher = sequelize.define('teachers', {
    id: {
        type: INTEGER,
        autoIncrement:true,
        allowNull: false,
        primaryKey: true

    },
    name:{
        type: DataTypes.STRING,
        allowNull: false,

    },

}, {underscored: true});

export default Teacher;