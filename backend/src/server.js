import express from "express"
import dotenv from "dotenv"
import authRoutes from "./routes/authRoutes.js"
import familyMembersRoutes from "./routes/familyMemberRoutes.js"

dotenv.config();
const app = express()

app.get("/",(req,res) => {
    res.send("Login successful");
})

const PORT = process.env.PORT

app.use(express.json())

app.use("/", authRoutes)
app.use("/family-members", familyMembersRoutes)


app.listen(PORT, () => {
    console.log(`Listening to port {PORT}`);
})