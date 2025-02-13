import { DataTypes, INTEGER} from "sequelize";
import sequelize from "../utils/database.js";

const Evaluation = sequelize.define('evaluations', {
    id: {
        type: INTEGER,
        autoIncrement:true,
        allowNull: false,
        primaryKey: true

    },
    concept:{
        type: DataTypes.STRING,
        allowNull: false,

    },

}, {underscored: true});

export default Evaluation;