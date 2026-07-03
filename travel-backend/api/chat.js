// api/chat.js
import express from "express";
import axios from "axios";
import Chat from "../models/Chat.js";
import dotenv from "dotenv";

dotenv.config();
const router = express.Router();

router.post("/", async (req, res) => {
  const { message } = req.body;
  if (!message) return res.status(400).json({ reply: "Please send a message." });

  try {
    // Save user message
    await new Chat({ sender: "user", text: message }).save();

    // ---- NEW OPENAI ENDPOINT ----
    const response = await axios.post(
      "https://api.openai.com/v1/responses",
      {
        model: "gpt-4o-mini",
        input: `You are a travel assistant. User says: ${message}`
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
          "Content-Type": "application/json"
        }
      }
    );

    const botReply = response.data.output_text;

    // Save bot message
    await new Chat({ sender: "bot", text: botReply }).save();

    res.json({ reply: botReply });
  } catch (error) {
    console.error(error.response?.data || error);
    res.status(500).json({ reply: "⚠️ Something went wrong. Try again later." });
  }
});

export default router;
