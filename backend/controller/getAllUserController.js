import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


export const getAllUser = async(req,res) =>{
    try{
    const user = await prisma.user.findMany();
    if(!user){
        console.log("No users found");
        res.status(404).json({error:"Cannot get!"});
    }
    console.log("User details succesfully taken");
    res.status(200).json(user);
    }
    catch(err){
        console.log("Error in getting all users")
        res.status(400).json({error:"error"})
    }
}