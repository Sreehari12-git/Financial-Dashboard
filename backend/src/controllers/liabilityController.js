import prisma from "../config/prisma";

export const getAllLiabilities = async(req,res) => {
    try {
        const userId = req.user.id;

        const liabilities = await prisma.liability.findMany({
            where: {
                familyMember: {
                    userId: userId
                }
            },
            include: {
                familyMember: {
                    select: {
                        id: true,
                        fullName: true,
                        relation: true
                    }
                }
            },
            orderBy: {
                createdAt: "desc"
            }
        });
        return res.status(200).json({
            message: "Liabilities fetched successfully",
            data: liabilities,
        })
    }catch(error) {
        console.log(error);
        res.status(500).json({
            message: "Server error"
        })
    }
}

