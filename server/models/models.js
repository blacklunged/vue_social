import { sequelize } from "../db.js";
import { DataTypes } from "sequelize";

export const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true },
    nickname:{type: DataTypes.STRING, unique:true}, 
    password:{type: DataTypes.STRING}, 
    name:{type: DataTypes.STRING}, 
    surname:{type: DataTypes.STRING}, 
}) 
