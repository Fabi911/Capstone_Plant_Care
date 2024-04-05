import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

export default async function handler(req, res) {
  // if (req.method === "GET") {
  //   const { resources } = await cloudinary.search
  //     .expression("folder:myPlants")
  //     .sort_by("public_id")
  //     .max_results(10)
  //     .execute();
  //   const publicIds = resources.map((file) => file.public_id);
  //   res.send(publicIds);
  //   console.log("publicIds", publicIds);
  // }
  if (req.method === "POST") {
    try {
      const { image } = req.body;
      const result = await cloudinary.uploader.upload(image, {
        folder: "myPlants",
        transformation: {
          width: 640,
          height: 480,
          crop: "fill",
        },
      });
      res
        .status(200)
        .json({ url: result.secure_url, public_id: result.public_id });
    } catch (error) {
      res.status(500).json({ error: "Something went wrong" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
