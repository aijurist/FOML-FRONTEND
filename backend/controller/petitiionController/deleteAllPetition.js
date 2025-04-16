import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const deleteAllPetition = async(req,res) =>{
    try{
        const petitions = await prisma.petition.deleteMany();
        if(!petitions){
            console.log(petitions)
            return res.status(400).json({error:"Petition not deleted"});
        }
        res.status(200).json({success:"All Petitions are deleted"});
        console.log("All Petitions are deleted successfully");
    }
    catch(err){
        res.status(500).json({error:"Server error in delete all the petitions"})
        console.log("Server error in deleting all the petitions");
    }
}