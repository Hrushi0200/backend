import express from 'express'
import dotenv from 'dotenv'
import { connectDB } from "./config/db.js"
import { userRoutes } from './routes/user.routes.js'

dotenv.config();
connectDB();
const app = express();
app.use(express.json());

//Routes
app.use('/api/users',userRoutes)

app.get("/",(req,res)=>{
    res.send("API is running...")
})

app.listen(process.env.PORT, () => {
    console.log("Server is running on port: ", process.env.PORT);

})