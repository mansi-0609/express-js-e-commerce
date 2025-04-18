import { response } from "express";
import product from "../model/product.model.js";
import { json } from "express";

export const updateProduct=(request,response,next)=>{
    let id = request.params.id;
    product.update(request.body,{where:{id}})
    .then(result=>{
        return response.status(200).json({product:result});
    })
    .catch(err=>{
        return response.status(500),json({err:"intrnal server error"});
    });
}

export const deleteProduct=(request,response,next)=>{
    let id = request.params.id;
    product.destroy({where:{id:id}})
    .then(result=>{
        return response.status(200).json({product:result});
    })
    .catch(err=>{
        return response.status(500).json({err:"intrenal server error ...."});
    });
}

export const fetchProduct = (request, response, next) => {
    let id = request.params.id;

    // product.findByPk(id)
    product.findOne({where:{id:id}})
        .then(result=>{
           return response.status(200).json({product:result});
        })
        .catch(err=>{
            return response.status(500).json({err:"this is error msg"});
        })
}

export const fetchProducts = (request, response, next) => {
    product.findAll()
        .then((result) => {
            return response.status(200).json({ product: result })
        })
        .catch(err => {
            return response.status(500), json({ error: "interenal server error ...", err })
        })
}
export const saveInBulkAction = (request, response, next) => {
    let products = request.body.products;
    let data = [];
    for (let p of products) {
        let productCategory = p.category;
        delete p.category;
        p.productCategory = productCategory;

        data.push(p);
    }
    product.bulkCreate(data)
        .then(() => {
            // console.log(data.length);
            return response.status(201).json({ message: "All Product Save.." })

        })
        .catch(err=> {
            console.log(err);
            return response.status(500).json({ error: "internl server error" });
        })
}