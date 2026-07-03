import express from "express";
import Contact from "../models/contactModel.js";

const router = express.Router();

// Save contact message
router.post("/", async (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message)
    return res.status(400).json({ error: "All fields are required." });

  try {
    const contactMsg = new Contact({ name, email, message });
    await contactMsg.save();
    res.json({ success: "Message sent successfully!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to send message." });
  }
});

// Get all contact messages
router.get("/", async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ timestamp: -1 });
    res.json(contacts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch messages." });
  }
});

export default router;
