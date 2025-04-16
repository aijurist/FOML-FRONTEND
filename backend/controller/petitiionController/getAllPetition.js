import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getAllPetition = async(req,res) =>{
    try{
    const petition = await prisma.petition.findMany();
    if(!petition){
        console.log("No petition found");
        res.status(400).json({error:"No petition found"})
    }
    console.log(petition)
    res.status(200).json({success:"Taken"},petition);
    }
    catch(err){
    console.log("Server error in getting all petitions");
    res.status(500).json({err:"Server error in getting all petitions"});
    }
}