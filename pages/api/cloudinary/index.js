import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

export default async function handler(req, res) {
  if (req.method === "GET") {
    const { resources } = await cloudinary.search
      .expression("folder:myPlants")
      .sort_by("public_id")
      .max_results(10)
      .execute();
    const publicIds = resources.map((file) => file.public_id);
    res.send(publicIds);
    console.log("publicIds", publicIds);
  }
}
