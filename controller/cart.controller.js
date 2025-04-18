import Cart from "../model/card.model.js";
import sequelize from "../db/dbconfig.js";
import { request, response } from "express";
import cartItem from "../model/cartItem.model.js";
import product from "../model/product.model.js";

export const fetchdata = async (request,response,next)=>{
    try{
        
        let userId = request.params.id;
        console.log("ths is id:",userId )

        let result= await Cart.findAll({where:{userId},include:{model:product},raw:true});
        console.log("result is this ",result)
        return response.status(200).json({result});
    }
    catch(err){
        console.log(err);
        return response.status(500).json({error: "Internal Server Error"});    
    }
}

export const removeToCart = async (request, response, next) => {
    try {
        let { userId, productId } = request.body;
        let cart = await Cart.findOne({ where: { userId }, raw: true });
        if (cart) {
           let result = await cartItem.destroy({ where: { cartId: cart.id, productId } });
           return response.status(200).json({error:"item remove succesfully"});
        }
        else {
            return response.status(404).json({error:"request resourse not found "});
        }
    }
    catch (err) {
        console.log(err);
        return response.status(500).json({error: "Internal Server Error"});
    }
}


export const addToCart = async (request, response, next) => {
    const t = await sequelize.transaction();
    try {
        let { productId, userId } = request.body;
        console.log("this is userid and product id ", userId, productId);
        console.log("req", { productId, userId });
        console.log("request body", request.body);

        let cart = await Cart.findOne({ where: { userId } });
        console.log("this is cart ", cart);

        if (cart) {
            let status = await cartItem.findOne({ where: { productId, CartId: cart.id }, raw: true });
            if (status)
                return response.status(200).json({ message: "item already exist" });
            await cartItem.create({ productId, CartId: cart.id }, { transaction: t });
            await t.commit();
            return response.status(201).json({ message: "item added uccesfully" });
        }

        else {
            let cart = await Cart.create({ userId }, { transaction: t });
            let CartId = cart.dataValues.id;
            await cartItem.create({ productId, CartId }, { transaction: t });
            await t.commit();
            return response.status(201).json({ message: "item succesfully added in cart " });
        }
    }
    catch (err) {
        console.log(err);
        await t.rollback();
        return response.status(500).json({ error: "intrnal server error" })
    }
} 