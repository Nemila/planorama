import { getServerSession } from "next-auth";
import { authOptions } from "./auth/[...nextauth]";
import prisma from "@/lib/prisma";

export default async function handler(req, res) {
  const session = await getServerSession(req, res, authOptions);
  const { method } = req;

  if (!session) {
    res.status(500).json({
      err: "You need to be connected",
    });
  }

  switch (method) {
    // METHOD GET - Get all EVENTS
    case "GET":
      try {
        // Get signed in user
        const user = await prisma.user.findUnique({
          where: {
            email: session.user.email,
          },
        });

        // Find events for user id
        const events = await prisma.event.findMany({
          where: {
            userId: user.id,
          },
        });

        res.status(200).json(events);
      } catch (error) {
        res.status(500).json({
          err: error.message,
        });
      }
      break;

    // METHOD POST - Create a new EVENT
    case "POST":
      try {
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

        // switch (template) {
        //   case "wedding":
        //     for (let task in weddingTasks) {
        //       await prisma.task.create({
        //         data: {
        //           label: weddingTasks[task],
        //           event: {
        //             connect: { id: newEvent.id },
        //           },
        //         },
        //       });
        //     }
        //     break;
        //   case "birthday":
        //     for (let task in birthdayTasks) {
        //       await prisma.task.create({
        //         data: {
        //           label: birthdayTasks[task],
        //           event: {
        //             connect: { id: newEvent.id },
        //           },
        //         },
        //       });
        //     }
        //     break;
        //   case "conference":
        //     for (let task in conferenceTasks) {
        //       await prisma.task.create({
        //         data: {
        //           label: conferenceTasks[task],
        //           event: {
        //             connect: { id: newEvent.id },
        //           },
        //         },
        //       });
        //     }
        //     break;
        // }

        res.status(201).json(newEvent);
      } catch (error) {
        res.status(500).json({
          err: error.message,
        });
      }
      break;

    // In case the method is not GET or POST
    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
