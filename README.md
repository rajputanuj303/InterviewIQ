# InterviewIQ.AI

InterviewIQ.AI is an AI-powered mock interview platform.
It helps users practice role-based interviews, upload resumes for analysis, receive AI feedback, track interview history, and buy credits for more sessions.

## Tech Stack

- **Frontend:** React, Vite, Redux Toolkit, React Router, Tailwind CSS
- **Backend:** Node.js, Express, MongoDB, Mongoose
- **AI & Integrations:** OpenRouter, Firebase Auth, Razorpay

## Features

- Google sign-in with Firebase
- Resume upload and AI resume analysis
- AI-generated interview questions
- Voice-based interview practice
- Answer scoring and feedback
- Interview history and detailed reports
- PDF report download
- Credit-based payment system

## Requirements

- Node.js and npm
- MongoDB running locally or a MongoDB Atlas connection
- Firebase project with Google sign-in enabled
- OpenRouter API key
- Razorpay account and API keys

## Environment Variables

### Server (`server/.env`)

```env
MONGODB_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
OPENROUTER_API_KEY=your_openrouter_api_key
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
PORT=6000
```

### Client (`client/.env`)

```env
VITE_FIREBASE_APIKEY=your_firebase_api_key
VITE_RAZORPAY_KEY_ID=your_razorpay_key_id
```

## Local Setup

### 1. Install dependencies

```bash
cd server
npm install

cd ../client
npm install
```

### 2. Start MongoDB

Make sure MongoDB is running locally, or use a valid Atlas URI in `MONGODB_URL`.

### 3. Run the backend

```bash
cd server
npm run dev
```

### 4. Run the frontend

Open a second terminal:

```bash
cd client
npm run dev
```

## Notes

- The app uses browser speech APIs, so Chrome or Edge works best.
- The client and server URLs are currently hardcoded for deployment and may need to be changed for localhost use.
- The server enables cookie-based auth, so the frontend must send requests with credentials.

## Project Structure

```text
client/
server/
```
