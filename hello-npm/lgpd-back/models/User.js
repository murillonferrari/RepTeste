import { DataTypes, INTEGER} from "sequelize";
import sequelize from "../utils/database.js";

const User = sequelize.define('users', {
    id: {
        type: INTEGER,
        autoIncrement:true,
        allowNull: false,
        primaryKey: true

    },
    fist_name:{
        type: DataTypes.STRING,
        allowNull: false,

    },
    last_name:{
        type: DataTypes.STRING,
        allowNull: false,

    },
    email: DataTypes.STRING,

    gender: DataTypes.STRING

}, {underscored: true});

export default User;