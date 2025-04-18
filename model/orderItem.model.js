import { DataTypes } from "sequelize";
import sequelize from "../db/dbconfig.js";

const orderItem = sequelize.define("orderItem", {
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    price: { // price at time of purchase
        type: DataTypes.FLOAT,
        allowNull: false,
    },
});

export default orderItem;