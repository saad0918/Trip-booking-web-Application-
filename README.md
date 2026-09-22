# ✈️ Trip Booking

### AI-Powered Full-Stack Travel Booking Platform

Trip Booking is a modern **full-stack travel platform** built to provide users with a smooth travel experience, including destination exploration, booking-related features, and an **AI-powered travel assistant**.

The application combines a responsive React frontend with a Node.js/Express backend, MongoDB database, and OpenAI-powered chatbot.

---

## ✨ Features

* ✈️ Travel & destination exploration
* 🏨 Booking-related functionality
* 🤖 AI-powered travel chatbot
* 💬 Real-time interaction with AI travel assistant
* 📩 Contact form with email integration
* 🔗 REST API integration
* 🗄️ MongoDB data storage
* 📱 Responsive user interface
* ⚡ Modern React-based frontend

---

## 🤖 AI Travel Assistant

The platform includes an AI-powered chatbot that works as a **travel assistant**.

Users can enter travel-related questions or requests, which are sent from the React frontend to the backend API. The backend communicates with the OpenAI API and returns the AI-generated response to the frontend.

### AI Flow

```text
User
  ↓
React Chatbot
  ↓
Node.js / Express API
  ↓
OpenAI API
  ↓
AI Response
  ↓
React Chatbot
```

The OpenAI API key is kept securely on the **backend using environment variables** rather than exposing it in the frontend.

---

## 🛠️ Tech Stack

### Frontend

* React.js
* JavaScript
* HTML5
* CSS3
* React Router

### Backend

* Node.js
* Express.js
* REST APIs

### Database

* MongoDB
* Mongoose

### AI

* OpenAI API
* AI-powered chatbot

### Other Tools

* Axios
* Nodemailer
* Git
* GitHub

---

## 📂 Project Structure

```text
Trip-Booking/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   └── App.js
│   └── package.json
│
├── backend/
│   ├── routes/
│   ├── controllers/
│   ├── models/
│   ├── middleware/
│   ├── server.js
│   └── package.json
│
└── README.md
```

> Update the folder names above if your actual repository structure is different.

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/saad0918/Trip-Booking.git
cd Trip-Booking
```

### 2. Install Frontend Dependencies

```bash
cd frontend
npm install
```

### 3. Install Backend Dependencies

```bash
cd ../backend
npm install
```

---

## 🔐 Environment Variables

Create a `.env` file inside the backend directory.

Example:

```env
PORT=5000

MONGODB_URI=your_mongodb_connection_string

OPENAI_API_KEY=your_openai_api_key

EMAIL_USER=your_email
EMAIL_PASSWORD=your_email_password
```

> ⚠️ Never commit your `.env` file or API keys to GitHub.

---

## ▶️ Run the Application

### Start Backend

```bash
cd backend
npm start
```

The backend will run on:

```text
http://localhost:5000
```

### Start Frontend

Open another terminal:

```bash
cd frontend
npm start
```

The frontend will run on:

```text
http://localhost:3000
```

---

## 🔗 API Architecture

The application follows a client-server architecture:

```text
React Frontend
      ↓
REST API
      ↓
Node.js + Express
      ↓
MongoDB
```

For the AI chatbot:

```text
React Frontend
      ↓
/api/chat
      ↓
Node.js + Express
      ↓
OpenAI API
      ↓
AI Response
      ↓
React Frontend
```

---

## 📩 Contact Form

The platform also includes a contact form that sends user messages through the backend.

```text
Contact Form
     ↓
React Frontend
     ↓
Express API
     ↓
Nodemailer
     ↓
Email
```

Contact submissions can also be stored in MongoDB.

---


## 🧠 What I Learned

This project helped me strengthen my understanding of:

* React component architecture
* React state and props
* API integration
* REST API development
* Node.js & Express
* MongoDB & Mongoose
* Backend authentication concepts
* AI API integration
* Environment variable management
* Email integration with Nodemailer
* Frontend-backend communication
* Building responsive web applications

---

## 🔮 Future Improvements

* 🔐 Complete user authentication
* 💳 Online payment integration
* 📍 Map & location integration
* 🏨 Advanced hotel booking
* ✈️ Flight booking integration
* 🤖 More advanced AI travel recommendations
* 📊 User booking dashboard
* ⭐ Reviews and ratings

---

## 👨‍💻 Author

### Md Saad Ali

**CSE Graduate | AI/ML & Full-Stack Developer**

🔗 **GitHub:** https://github.com/saad0918

🔗 **Project Repository:** https://github.com/saad0918/Trip-Booking

---

## ⭐ Support

If you found this project useful or interesting, consider giving the repository a ⭐.

---

<p align="center">
  <b>✈️ Plan. Explore. Travel. 🚀</b>
</p>
