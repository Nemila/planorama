import prisma from "@/lib/prisma";
import supabase from "@/lib/supabase";

const handler = async (req, res) => {
  const { query, method } = req;
  const id = parseInt(query.id);

  switch (method) {
    case "DELETE":
      const deletedEvent = await prisma.event.delete({
        where: { id },
      });
      await supabase.storage.from("events").remove([deletedEvent.image]);
      res.status(200).json(deletedEvent);
      break;
    case "GET":
      const event = await prisma.event.findUnique({
        where: { id },
        include: {
          blocs: true,
          tasks: true,
        },
      });
      res.status(200).json(event);
      break;
    default:
      res.setHeader("Allow", ["DELETE", "GET"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
};

export default handler;
