import { response } from "express";
import Category from "../model/catagory.model.js";

export const saveInBulkAction=(request,response,next)=>{
    Category.bulkCreate(request.body)
    .then(result=>{
       return response.status(200).json({message: "save data succesfully"});
    })
    .catch(err=>{
        return response.status(500).json({err:"internal server error"});
    });
}

export const fetchCategory = (request, response,next)=>{
    Category.findAll()
    .then(result=>{
       return  response.status(200).json({category:result});
    })
    .catch(err=>{
        return response.status(500).json({err:"internal server error"});
    });
}