import prisma from "../config/prisma";

export const createAsset = async(req,res) => {
    try {
        const userId = req.user.id;

        const {assetName,category,purchaseValue,currentValue,annualYield,purchaseDate,familyMemberId} = req.body;

        const member = await prisma.familyMember.findFirst({
            where: {
                id: Number(familyMemberId),
                userId: userId,
            }
        });

        if(!member) {
            return res.status(404).json({
                message: "Family member not found",
            });
        }

        const asset = await prisma.asset.create({
            data: {
                assetName,
                category,
                purchaseValue: Number(purchaseValue),
                currentValue: Number(currentValue),
                annualYield: annualYield ? Number(annualYield) : null,
                purchaseDate: purchaseDate ? new Date(purchaseDate) : null,
                familyMemberId : Number(familyMemberId)
            }
        })

        return res.status(201).json({
                message: "Asset created successfully",
                data: asset,
            });
        } catch (error) {
            console.log(error);
            return res.status(500).json({
            message: "Server error",
            });
        }
}

