import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createPetition = async(req,res)=>{
    try{
    const {title, petition, status, name, mobile, address, department } = req.body;
    const result = await prisma.petition.create({
        data:{
            title,
            petition,
            status,
            name,
            mobile,
            address,
            department,
        }
    })
    if(!result){
        res.status(400).json({error:"Petition not created"})
    }
    console.log(result.status);
    res.status(201).json({success:"petition created"})
    }
    catch(err){
        console.log("Server error");
        res.status(500).json({error:"Server error in petition creating.."});
    }
}