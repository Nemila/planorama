import { getServerSession } from "next-auth/next";
import { authOptions } from "./auth/[...nextauth]";
import prisma from "@/lib/prisma";

const handler = async (req, res) => {
  const session = await getServerSession(req, res, authOptions);
  const data = req.body;

  const newEvent = await prisma.event.create({
    data: {
      name: data.name,
      address: data.address,
      startAt: new Date(data.startAt),
      endAt: new Date(data.endAt),
      user: {
        connect: { email: session.user.email },
      },
    },
  });

  res.status(201).json(newEvent);
};

export default handler;
