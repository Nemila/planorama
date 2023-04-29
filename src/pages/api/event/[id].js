import prisma from "@/lib/prisma";
import supabase from "@/lib/supabase";

const handler = async (req, res) => {
  const { query, method } = req;
  const id = parseInt(query.id);

  switch (method) {
    // METHOD DELETE - Delete an EVENT
    case "DELETE":
      try {
        const deletedEvent = await prisma.event.delete({
          where: { id },
        });
        await supabase.storage.from("events").remove([deletedEvent.image]);
        res.status(200).json(deletedEvent);
      } catch (error) {
        res.status(400);
        throw new Error(error.message);
      }
      break;

    // METHOD GET - Get infos about an EVENT
    case "GET":
      try {
        const event = await prisma.event.findUnique({
          where: { id },
          include: {
            blocs: true,
            tasks: true,
          },
        });
        res.status(200).json(event);
      } catch (error) {
        res.status(400);
        throw new Error(error.message);
      }
      break;

    // In case method is not GET or DELETE
    default:
      res.setHeader("Allow", ["DELETE", "GET"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
};

export default handler;
