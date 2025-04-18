import { DataTypes, Sequelize } from "sequelize";
import sequelize from "../db/dbconfig.js";

const product=sequelize.define("product",{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    title:DataTypes.STRING,
    description:DataTypes.STRING,
    productCategory:DataTypes.STRING,
    price:DataTypes.FLOAT,
    rating:DataTypes.FLOAT,
    stock:DataTypes.INTEGER,
    warrentyInformation:DataTypes.STRING,
    shippingInformation:DataTypes.STRING,
    availabilityStatus:DataTypes.STRING
})
sequelize.sync()
.then(()=>{
    console.log("product tabel created..")
})
.catch(()=>{
    console.log(err);
});

export default product;