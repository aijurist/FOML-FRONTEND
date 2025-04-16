import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import Authrouter from "./routes/authRoute.js"
import Petitionrouter from "./routes/petitionRoute.js"

dotenv.config();
const app = express()

const PORT = process.env.PORT || 4000;


app.use(express.json())
app.use(cors())
app.use("/api/auth",Authrouter)
app.use("/api",Petitionrouter)

app.listen(PORT, (req,res)=>{
    console.log(`Server started at port ${PORT}`);

})