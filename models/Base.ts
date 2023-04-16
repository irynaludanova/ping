import mongoose from "mongoose"

const baseSchema = new mongoose.Schema(
  {
    category: { type: String, required: true },
    group: { type: String, required: true },
    item_id: { type: Number, required: true, unique: true },
    img: { type: String, required: true },
    name: { type: String, required: true },
    path: { type: String, required: true },
    price: { type: Number, required: true },
    new_price: Number,
    weight: Number,
    shape: { type: String, required: true },
    desc: { type: String, required: true },
    speed: Number,
    control: Number,
    layers: Number,
    height: Number,
    width: String,
    shape_length: Number,
    countInStock: Number,
  },

  {
    timestamps: true,
  }
)

const Base = mongoose.models.Base || mongoose.model("Base", baseSchema)
export default Base
