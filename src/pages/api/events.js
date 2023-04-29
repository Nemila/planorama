import { getServerSession } from "next-auth";
import { authOptions } from "./auth/[...nextauth]";
import prisma from "@/lib/prisma";

export default async function handler(req, res) {
  const session = await getServerSession(req, res, authOptions);
  const { method } = req;

  switch (method) {
    case "GET":
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
      break;
    case "POST":
      const { name, description, location, image, startAt, endAt, template } =
        req.body;

      const newEvent = await prisma.event.create({
        data: {
          name,
          description,
          location,
          image,
          startAt: new Date(startAt),
          endAt: new Date(endAt),
          user: {
            connect: { email: session.user.email },
          },
        },
      });

      switch (template) {
        case "wedding":
          for (let task in weddingTasks) {
            await prisma.task.create({
              data: {
                label: weddingTasks[task],
                event: {
                  connect: { id: newEvent.id },
                },
              },
            });
          }
          break;
        case "birthday":
          for (let task in birthdayTasks) {
            await prisma.task.create({
              data: {
                label: birthdayTasks[task],
                event: {
                  connect: { id: newEvent.id },
                },
              },
            });
          }
          break;
        case "conference":
          for (let task in conferenceTasks) {
            await prisma.task.create({
              data: {
                label: conferenceTasks[task],
                event: {
                  connect: { id: newEvent.id },
                },
              },
            });
          }
          break;
      }

      res.status(201).json(newEvent);
      break;

    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
