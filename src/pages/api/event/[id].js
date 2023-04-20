import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]";
import prisma from "@/lib/prisma";

const handler = async (req, res) => {
  if (req.method !== "DELETE") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { id } = req.query;

  try {
    const response = await prisma.event.delete({
      where: {
        id: parseInt(id),
      },
    });
    res.status(200).json(response.data);
  } catch (error) {
    res.status(403).json({ err: "Error occured while deleting a food item." });
  }
};

export default handler;
