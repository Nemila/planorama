import prisma from "@/lib/prisma";

export default async function handler(req, res) {
  const { method } = req;

  if (!session) {
    res.status(400);
    throw new Error("You need to be logged in");
  }

  switch (method) {
    // METHOD GET - Get all TASKS
    case "GET":
      try {
        const tasks = await prisma.task.findMany({
          where: {
            eventId: Number(req.body.eventId),
          },
        });

        res.status(200).json(tasks);
      } catch (error) {
        res.status(400);
        throw new Error(error.message);
      }
      break;

    // METHOD POST - Create a new TASK
    case "POST":
      try {
        const { label, eventId } = req.body;

        const newTask = await prisma.event.create({
          data: {
            label,
            event: {
              connect: { id: Number(eventId) },
            },
          },
        });

        res.status(201).json(newTask);
      } catch (error) {
        res.status(400);
        throw new Error(error.message);
      }
      break;

    // In case the method is not GET or POST
    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
