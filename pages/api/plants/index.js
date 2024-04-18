import dbConnect from "../../../db/connect";
import Plants from "../../../db/models/index";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(request, response) {
  await dbConnect();
  const session = await getServerSession(request, response, authOptions);
  if (request.method === "GET") {
    if (session) {
      const plants = await Plants.find({
        author: session.user.email,
      });
      return response.status(200).json(plants);
    } else {
      const plants = await Plants.find({ author: "default" });
      return response.status(200).json(plants);
    }
  } else if (request.method === "POST") {
    try {
      if (session) {
        const plantData = request.body;
        const plant = new Plants({ ...plantData, author: session.user.email });
        await plant.save();
        return response.status(201).json({ status: "Plant created." });
      } else {
        return response.status(401).json({ status: "Not authorized" });
      }
    } catch (error) {
      console.error(error);
      return response.status(400).json({ error: error.message });
    }
  }
}
