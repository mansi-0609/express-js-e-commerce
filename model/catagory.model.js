import sequelize from "../db/dbconfig.js";
import {DataTypes} from "sequelize";

const Category = sequelize.define("category",{
    slug:{
        type:DataTypes.STRING,
        primaryKey:true,   
    },
    name:DataTypes.STRING,
    url:DataTypes.STRING
});

sequelize.sync()
.then(()=>{
    console.log("table is created..");
})
.catch(()=>{
    console.log("internal error");
})

export default Category;