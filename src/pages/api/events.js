import { getServerSession } from "next-auth/next";
import { authOptions } from "./auth/[...nextauth]";
import prisma from "@/lib/prisma";

const handler = async (req, res) => {
  const session = await getServerSession(req, res, authOptions);

  // if (req.method === "POST") {
  //   const { name, address, startAt, endAt } = req.body;

  //   const newEvent = await prisma.event.create({
  //     data: {
  //       name,
  //       address,
  //       startAt: new Date(startAt),
  //       endAt: new Date(endAt),
  //       user: {
  //         connect: { email: session.user.email },
  //       },
  //     },
  //   });

  //   res.status(201).json(newEvent);
  // }

  const user = await prisma.user.findUnique({
    where: {
      email: session.user.email,
    },
  });

  const events = await prisma.event.findMany({
    where: {
      userId: user.id,
    },
  });

  res.status(200).json(events);
};

export default handler;
