import mongoose from "mongoose";

const chatSchema = new mongoose.Schema({
  sender: { type: String, enum: ["user", "bot"], required: true },
  text: { type: String, required: true },
  timestamp: { type: Date, default: Date.now }
});

export default mongoose.model("Chat", chatSchema);
