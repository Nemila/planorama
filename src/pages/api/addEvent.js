import { getServerSession } from "next-auth/next";
import { authOptions } from "./auth/[...nextauth]";
import prisma from "@/lib/prisma";

const handler = async (req, res) => {
  const session = await getServerSession(req, res, authOptions);

  if (req.method !== "POST") {
    res.status(403).json({ err: "POST requests only" });
  }

  try {
    const { startAt, endAt } = req.body;
    const newEvent = await prisma.event.create({
      data: {
        ...req.body,
        startAt: new Date(startAt),
        endAt: new Date(endAt),
        user: {
          connect: { email: session.user.email },
        },
      },
    });

    res.status(201).json(newEvent);
  } catch (error) {
    console.log(error.message);
    res.status(400).send(error.message);
  }
};

export default handler;
