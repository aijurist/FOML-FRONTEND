import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


export const deleteUser = async(req, res) =>{
    try{
        const id=parseInt(req.params.id);
        const user = await prisma.user.delete({
            where:{
                id:id,
            }
        })
        if(!user)
            console.log("No user found");
        else{
            res.status(200).json({sucess:"User deleted successfully"});
            console.log("User deleted succesfully",user)
        }
    }
    catch(err){
        res.status(500).json({error:"Error in deleting the user"})
    }
}