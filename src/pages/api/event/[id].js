import { getServerSession } from "next-auth/next";
import { authOptions } from "./auth/[...nextauth]";
import prisma from "@/lib/prisma";

const handler = async (req, res) => {
  const session = await getServerSession(req, res, authOptions);
  const { query, method } = req;
  console.log(query.id);
  const id = parseInt(query.id);

  switch (method) {
    case "DELETE":
      const event = await prisma.event.delete({
        where: {
          id,
        },
      });
      res.status(200).json(event);
      break;
  }
};

export default handler;
