import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const deleteAllUser = async(req,res) =>{
    try{
        const result = await prisma.user.deleteMany();
        console.log("User succesfully deleted");
        res.status(200).json({message:"All users deleted"})
    }
    catch(err){
        console.log("Error in deleting the user");
        res.status(500).json({error:"Users are not deleted",err})
    }
}