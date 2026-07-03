// import express from "express";
// import mongoose from "mongoose";
// import dotenv from "dotenv";
// import cors from "cors";
// import chatRoutes from "./api/chat.js";
// import Chat from "./models/Chat.js";

// dotenv.config();

// const app = express();

// app.use(cors());
// app.use(express.json());

// // ✅ MongoDB Connection
// mongoose
//   .connect(process.env.MONGO_URI)
//   .then(() => console.log("✅ MongoDB Connected"))
//   .catch((err) => console.log("❌ MongoDB Connection Error:", err));

// // 🧠 Chatbot Route
// app.use("/api/chat", chatRoutes);

// // Optional: Get all chat history
// app.get("/api/chats", async (req, res) => {
//   try {
//     const chats = await Chat.find().sort({ timestamp: 1 });
//     res.json(chats);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ reply: "⚠️ Failed to fetch chat history" });
//   }
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

// import express from "express";
// import mongoose from "mongoose";
// import dotenv from "dotenv";
// import cors from "cors";
// import contactRoutes from "./routes/contactRoutes.js";
// import Chat from "./models/Chat.js";
// import chatRoutes from "./api/chat.js";

// dotenv.config();

// const app = express();

// app.use(cors());
// app.use(express.json());

// // ✅ MongoDB Connection
// mongoose
//   .connect(process.env.MONGO_URI)
//   .then(() => console.log("✅ MongoDB Connected"))
//   .catch((err) => console.log("❌ MongoDB Connection Error:", err));

// // Contact routes
// app.use("/api/contact", contactRoutes);

// // 🧠 Chatbot Route
// app.post("/api/chat", async (req, res) => {
//   const { message } = req.body;
//   if (!message) return res.status(400).json({ reply: "Please send a message." });

//   try {
//     // 1️⃣ Save User Message
//     const userMsg = new Chat({ sender: "user", text: message });
//     await userMsg.save();

//     // 2️⃣ Generate Bot Reply (for now basic keyword-based)
//     let reply = "Sorry, I didn't understand that.";
//     const msgLower = message.toLowerCase();

//     if (msgLower.includes("hotel") || msgLower.includes("stay")) {
//       reply = "I can suggest some hotels for your destination. What's your city?";
//     } else if (msgLower.includes("goa")) {
//       reply = "Here are 3 hotels in Goa within your budget: Hotel A, Hotel B, Hotel C.";
//     } else if (msgLower.includes("budget")) {
//       reply = "Please tell me your budget range for the trip.";
//     } else if (msgLower.includes("thank")) {
//       reply = "You’re welcome! 😊";
//     }

//     // 3️⃣ Save Bot Reply
//     const botMsg = new Chat({ sender: "bot", text: reply });
//     await botMsg.save();

//     // 4️⃣ Return Bot Reply
//     return res.json({ reply });
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({ reply: "⚠️ Something went wrong. Try again later." });
//   }
// });

// // 📜 Optional: Retrieve all chats
// app.get("/api/chats", async (req, res) => {
//   try {
//     const chats = await Chat.find().sort({ timestamp: 1 }); // oldest first
//     res.json(chats);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ reply: "⚠️ Failed to fetch chat history" });
//   }
// });

// app.use("/api/chat", chatRoutes);
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

// Routes
import chatRoutes from "./api/chat.js";
import contactRoutes from "./routes/contactRoutes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// ✅ MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.log("❌ MongoDB Connection Error:", err));

// 🧠 Chatbot Route
app.use("/api/chat", chatRoutes);

// 📬 Contact Form Route
app.use("/api/contact", contactRoutes);

// Optional: Get all chat history
app.get("/api/chats", async (req, res) => {
  try {
    const chats = await (await import("./models/Chat.js")).default.find().sort({ timestamp: 1 });
    res.json(chats);
  } catch (err) {
    console.error(err);
    res.status(500).json({ reply: "⚠️ Failed to fetch chat history" });
  }
});

// Optional: Get all contact form messages
app.get("/api/contacts", async (req, res) => {
  try {
    const contacts = await (await import("./models/Contact.js")).default.find().sort({ timestamp: -1 });
    res.json(contacts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ reply: "⚠️ Failed to fetch contact messages" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
