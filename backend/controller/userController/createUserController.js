import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

export const signup= async (req,res) =>{
    const {name, email, password} = req.body
    const hashedpassword = await bcrypt.hash(password,10)
    try{
        const user = await prisma.user.create({
            data:{
                name,
                email,
                password:hashedpassword,
            }
        })
        res.status(201).json(user)
        console.log("user created succesfully",user);
    }
    catch(err){
        return res.status(400).json({error:"User not created"});
    }
}