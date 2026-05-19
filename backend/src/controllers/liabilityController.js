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

export const createLiability = async(req,res) => {
    try {
        const userId = req.user.id;

        const {liabilityName,category,totalAmount,remainingAmount,monthlyPayment,familyMemberId} = req.body;

        const member = await prisma.familyMember.findFirst({
            where: {
                id: Number(familyMemberId),
                userId: userId
            }
        })

        if(!member) {
            return res.status(404).json({
                message: "Family member not found",
            })
        }

        const liability = await prisma.liability.create({
            data: {
                liabilityName,
                category,
                totalAmount: Number(totalAmount),
                remainingAmount: Number(remainingAmount),
                monthlyPayment: monthlyPayment ? Number(monthlyPayment) : null,
                familyMemberId: Number(familyMemberId)
            }
        })

        return res.status(201).json({
            message: "Liability created successfully",
            data: liability,
        })
    } catch(error) {
        console.log(error);
        return res.status(500).json({
            message: "Server error"
        })
    }
}

