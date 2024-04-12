import dbConnect from "../../../db/connect";
import Plants from "../../../db/models/index";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const plants = await Plants.find();
    return response.status(200).json(plants);
  }
  if (request.method === "POST") {
    try {
      const plantData = request.body;
      const plant = new Plants(plantData);
      await plant.save();
      return response.status(201).json({ status: "Plant created." });
    } catch (error) {
      console.error(error);
      return response.status(400).json({ error: error.message });
    }
  }
}
