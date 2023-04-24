import prisma from "@/lib/prisma";

const handler = async (req, res) => {
  const { label, eventId } = req.body;

  try {
    const task = await prisma.task.create({
      data: {
        label,
        event: {
          connect: { id: eventId },
        },
      },
    });
    res.status(201).json(task);
  } catch (error) {
    res.status(400).json({ err: error.message });
  }
};

export default handler;
