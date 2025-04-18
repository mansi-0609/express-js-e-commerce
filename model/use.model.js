import {DataTypes} from "sequelize";
import sequelize from "../db/dbconfig.js";

const user = sequelize.define("user",{
    id:{
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    username:{
        type:DataTypes.STRING,
        allowNull:false,
        validate:{
            isAlpha:true
        }
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true,
        validate:{
            isEmail:true
        }
    }
});
sequelize.sync()
.then(()=>{
    console.log("user table created..");
})
.catch(err=>{
    console.log(err);
});

export default user;
