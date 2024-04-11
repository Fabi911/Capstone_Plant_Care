import dbConnect from "../../../../db/connect";
import Plants from "../../../../db/models/index";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (request.method === "GET") {
    const plant = await Plants.findById(id);

    if (!plant) {
      return response.status(404).json({ status: "Not Found" });
    }

    response.status(200).json(plant);
  }
  if (request.method === "POST") {
    try {
      const plantData = request.body;
      const plant = new Product(plantData);
      await plant.save();
      return response.status(201).json({ status: "Plant created." });
    } catch (error) {
      console.error(error);
      return response.status(400).json({ error: error.message });
    }
  }
  if (request.method === "PUT") {
    const updatedPlant = request.body;

    await Plants.findByIdAndUpdate(id, updatedPlant);

    return response.status(200).json({ status: `Plant successfully updated.` });
  }

  if (request.method === "DELETE") {
    await Plants.findByIdAndDelete(id);
    response.status(200).json({ status: `Plant successfully deleted.` });
  }
}
