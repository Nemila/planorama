import { getServerSession } from "next-auth/next";
import { authOptions } from "./auth/[...nextauth]";
import prisma from "@/lib/prisma";

const handler = async (req, res) => {
  const session = await getServerSession(req, res, authOptions);

  if (req.method !== "POST") {
    res.status(403).json({ err: "POST requests only" });
  }

  const { name, address, startAt, endAt } = req.body;
  const newEvent = await prisma.event.create({
    data: {
      name,
      address,
      startAt: new Date(startAt),
      endAt: new Date(endAt),
      user: {
        connect: { email: session.user.email },
      },
    },
  });

  res.status(201).json(newEvent);
};

export default handler;
