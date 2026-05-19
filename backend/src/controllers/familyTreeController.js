import prisma from "../config/prisma";

export const getFamilyTree = async (req, res) => {

  const userId = req.user.id;

  const members = await prisma.familyMember.findMany({
    where: {
      userId
    },
    select: {
      id: true,
      fullName: true,
      relation: true,
      relatedToId: true
    }

  });
  res.json(members);
};