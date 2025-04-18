import { response } from "express";
import sequelize from "../db/dbconfig.js";
import { DataTypes } from "sequelize";

const order= sequelize.define("order",{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    totalAmount:{
       type:DataTypes.FLOAT,
       allowNull:false,
    },
    userId:{
        type:DataTypes.INTEGER,
        allowNull:false,
        references:{
            model:"users",
            key:"id",
        }
    }
});


export default order;
