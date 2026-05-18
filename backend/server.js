import express from "express"

const app = express()

app.get("/",(req,res) => {
    res.send("Login");
})

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Listening to port {PORT}`);
})