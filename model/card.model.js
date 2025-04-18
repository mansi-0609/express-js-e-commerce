import { DataTypes } from "sequelize";
import sequelize from "../db/dbconfig.js";
import { response } from "express";
const Cart= sequelize.define("Cart",{
     id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
     }
});

export default Cart;