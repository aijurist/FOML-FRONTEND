import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createPetition = async(req,res)=>{
    try{
    const petition= req.body;
    const result = await prisma.petition.create({
        data:{
            title:petition.title,
            petition:petition.petition,
            status:petition.status,
            name:petition.name,
            mobile:petition.mobile,
            address:petition.address,
            department:"health",
        }
    })
    if(!result){
        return res.status(400).json({error:"Petition not created"})
    }
    console.log(result.status);
    res.status(201).json({success:"petition created"})
    }
    catch(err){
        console.log("Server error", err);
        res.status(500).json({error:"Server error in petition creating.."});
    }
}