import axios from "axios";
import dotenv from "dotenv";

dotenv.config(); // must be at the top

const testOpenAI = async () => {
  try {
    const res = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: "Hello" }],
        max_tokens: 50
      },
      {
        headers: {
          "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
          "Content-Type": "application/json"
        }
      }
      
    );
    console.log(res.data.choices[0].message.content);
  } catch (err) {
    console.error(err.response?.data || err.message);
  }
};

testOpenAI();
