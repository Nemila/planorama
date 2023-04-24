import { getServerSession } from "next-auth/next";
import { authOptions } from "./auth/[...nextauth]";
import prisma from "@/lib/prisma";

const weddingTasks = [
  "Set a wedding date and create a guest list",
  "Choose a wedding venue and book required facilities and services",
  "Send out save-the-date cards and invitations",
  "Choose wedding attire for the bride, groom, and wedding party",
  "Plan the wedding ceremony and reception",
  "Arrange for catering and refreshments for guests",
  "Choose a wedding cake and other desserts",
  "Shop for decorations, flowers, and other wedding decor",
  "Plan wedding photography and videography",
  "Arrange for wedding transportation",
  "Create a wedding registry or wish list",
  "Write wedding vows and speeches",
  "Plan and book a honeymoon destination",
  "Clean up and dispose of trash after the wedding",
];

const birthdayTasks = [
  "Choose a theme for the party",
  "Create a guest list",
  "Send out invitations",
  "Book a venue or set up a party space",
  "Arrange for catering or prepare food and drinks",
  "Plan party activities and games",
  "Shop for decorations and party favors",
  "Arrange for music or entertainment",
  "Set up a photo booth or other photo opportunities",
  "Create a schedule for the party",
  "Prepare any necessary speeches or toasts",
  "Set up a gift table or wish list",
  "Clean up and dispose of trash after the party",
  "Send out thank-you notes or messages",
];

const conferenceTasks = [
  "Choose a theme and topic for the conference",
  "Create a conference website and registration system",
  "Identify and invite keynote speakers and presenters",
  "Secure a venue and book required facilities and services",
  "Develop a conference program and schedule",
  "Create and distribute promotional materials",
  "Set up a registration system for attendees and track registration numbers",
  "Plan and book catering and refreshments for attendees",
  "Set up audio-visual equipment and other technical needs",
  "Create conference signage and wayfinding",
  "Plan and execute on-site logistics, such as parking, security, and accessibility",
  "Follow up with attendees and presenters after the conference with surveys and feedback requests",
  "Evaluate the success of the conference against goals and objectives, and identify areas for improvement for future conferences.",
];

const handler = async (req, res) => {
  const session = await getServerSession(req, res, authOptions);

  if (req.method !== "POST") {
    res.status(403).json({ err: "POST requests only" });
  }

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
  } catch (error) {
    console.log(error.message);
    res.status(400).send(error.message);
  }
};

export default handler;
