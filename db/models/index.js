import mongoose from "mongoose";
const { Schema } = mongoose;

const plantsSchema = new Schema({
  name: String,
  botanical_name: String,
  water_need: String,
  fertiliser_season: [],
  image: String,
  isOwned: Boolean,
  gallery: [String],
  notes: [String],
  author: String,
});

const Plants = mongoose.models.Plants || mongoose.model("Plants", plantsSchema);

export default Plants;
