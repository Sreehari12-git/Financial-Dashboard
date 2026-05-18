import prisma from "../config/prisma";

export const getFamilyMembers = async(req,res) => {
    try {
        const userId = req.user.id;

        if(!userId) {
            return res.status(401).json({
                message: "User not found"
            })
        }

        const familyMembers = await prisma.familyMember.findMany({
            where: {
                userId: userId
            }
        })

        return res.status(200).json({
            message: "Family members fetched successfully",
            data: familyMembers
        })
    }
    catch(error) {
        console.log(error);
        res.status(500).json({
            message: "Server error"
        })
    }
}