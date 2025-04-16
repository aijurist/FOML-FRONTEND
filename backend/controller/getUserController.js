import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();


export const login = async(req,res)=>{
    const {email,password} = req.body
    const user = await prisma.user.findUnique({
        where:{
            email:email,
        }
    })
    if(!user) {
        console.log("Email not found");
        res.status(404).json({error:"User not exist"});
    }
    const isMatch = await bcrypt.compare(password,user.password)
    if(!isMatch){
        console.log("Password did't match");
        res.status(404).json({error:"Invalid credentials"});
    }
    console.log("User identified",user);
    res.status(200).json({message:"Login success",user});
}