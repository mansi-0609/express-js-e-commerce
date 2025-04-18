import express from "express";
import bodyParser from "body-parser";
import userRouter from "./routes/user.route.js";
import productRouter from "./routes/product.route.js"
import CategoryRouter from "./routes/category.route.js";
import cartRouter from './routes/cart.route.js';
import orderRoute from "./routes/order.route.js";
import "./model/association.js";

const app= express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use("/user",userRouter);
app.use("/product",productRouter);
app.use("/category",CategoryRouter);
app.use("/cart",cartRouter);
app.use("/order",orderRoute);
app.listen(3000,()=>{
    console.log("server start...");
});
