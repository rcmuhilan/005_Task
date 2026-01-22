# 🚀 Task 005 – Google & Firebase Authentication

## 📖 Overview
This project implements a dual authentication system in an **Express.js** application. It supports **Social Login** via **Google OAuth2.0** (using Passport.js) and traditional **Email/Password Authentication** handled client-side by the **Firebase JS SDK** and verified by the **Firebase Admin SDK** on the backend. It serves as the fifth technical task for the **Skandavel Webtech Internship**.

The application provides a unified login page and demonstrates handling both server-side (OAuth) and client-side (Firebase) authentication flows to protect backend resources.

## 🎯 Objective (Why?)
This task was created to:
- Implement **OAuth2.0** authentication flow.
- Implement client-side authentication with Firebase and JWT validation on the backend.
- Integrate multiple authentication strategies using **Passport.js** and custom middleware.
- Manage external API credentials for both Google and Firebase.

## 🛠️ Tech Stack
- **Language**: TypeScript
- **Runtime**: Node.js
- **Framework**: Express.js
- **Authentication**: Passport.js (`passport-google-oauth20`), Firebase Admin SDK, Firebase JS SDK
- **Tools**: Postman (for testing), Dotenv (for configuration)

## ✨ Features
- **Unified Login Page**: A single UI to choose between Google or Email/Password login.
- **Google Login**: Server-side OAuth 2.0 flow redirects users to Google's secure login page.
- **Firebase Login**: Client-side login with email/password using the Firebase SDK.
- **Protected Route**: A `/profile` endpoint is protected and can only be accessed by providing a valid Firebase ID token in the `Authorization` header.

## ⚙️ Installation & Setup

### 1. Prerequisites
Ensure you have the following installed:
- Node.js
- A Google Cloud Project with OAuth 2.0 credentials.
- A Firebase Project with Authentication enabled (Email/Password provider).

### 2. Navigate to the Directory
```bash
cd 005_Task
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Configure Environment
Create a `.env` file in the `005_Task` root directory. Add your Google OAuth credentials:
```env
PORT=3000
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
GOOGLE_CALLBACK_URL=http://localhost:3000/auth/google/redirect
```

### 5. Run the Application
```bash
npm run start:dev
```
The server will start on `http://localhost:3000`.

## 👤 Author
**Muhilan**
*Intern Developer @ [Skandavel Webtech](https://www.linkedin.com/company/skandavel)*
*--- [Linkedin Profile](https://www.linkedin.com/in/rcmuhilan/)*

---
*Created for learning and assessment purposes.*
