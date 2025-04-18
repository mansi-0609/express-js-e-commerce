import sequelize from "../db/dbconfig.js";
import { DataTypes } from "sequelize";
 
const cartItem = sequelize.define("cartItem",{
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1
      }
});

export default cartItem;