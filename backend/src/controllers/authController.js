import prisma from "../config/prisma";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

export const loginUser = async(req,res) => {

    try {
        const {email,password} = req.body;
        const user = await prisma.user.findUnique({
            where: {
                email
            }
        })

        if(!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        const isMatch = await bcrypt.compare(password,user.password);

        if(!isMatch) {
            return res.status(401).json({
                message: "Invalid credentials"
            })
        }

        const token = jwt.sign(
            {
                id: user.id
            },
            process.env.JWT_SECRET,
        );

        res.status(200).json({
            message: "Login successful",
            token,
            user: {
                id: user.id,
                fullName: user.fullName,
                email: user.email
            }
        })
    }
    catch(error) {
        console.log(error);

        res.status(500).json({
            message: "Server error"
        })
    }
}