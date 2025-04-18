import { validationResult } from "express-validator";
import user from "../model/use.model.js";
import bcrypt from "bcryptjs";

export const signInAction = async (request, response, next) => {
    try {
        let { email, password } = request.body;
        let User = await user.findOne({ where: { email }, raw: true });
        if (User) {
            let databasePassword = User.password;
            let status = bcrypt.compareSync(password, databasePassword);
            return status ? response.status(200).json({ message: "sign in succes", User }) : response.status(401).json({ error: "unauthorized user | invalid password" });
        }
        return response.status(401).json({ error: "Unauthorized access | Invalid Email Id" });

    }
    catch (err) {
        return response.status(500).json({ error: "intranal server error" });
    }
}

export const signUpAction = async (request, response, next)=>{
    try{
        const errors=validationResult(request);
        if(!errors.isEmpty())
         return response.status(400).json({error:errors.array()});
        let {username,email,password}=request.body;
        let saltkey = bcrypt. genSaltSync(12);
         password=bcrypt.hashSync(password,saltkey);
         const result = await user.create({username,email,password});
         return response.status(201).json({message:"Sign up successfull", User:result});
    
}
    catch(err){
        return response.status(500).json({error:" internal server error "});
    }
    }