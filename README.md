# 🚀 Task 005 – Google OAuth2.0 Authentication

## 📖 Overview
This project implements **Social Authentication** using **Google OAuth2.0** within a **NestJS** application. It demonstrates how to integrate third-party login providers using **Passport.js**, allowing users to sign in with their Google accounts. It serves as the fifth technical task for the **Skandavel Webtech Internship**.

The application handles the OAuth handshake, validates credentials with Google, and processes user profile information.

## 🎯 Objective (Why?)
This task was created to:
- Implement **OAuth2.0** authentication flow.
- Demonstrate proficiency with **Passport.js** strategies (`passport-google-oauth20`).
- Manage external API credentials (Client ID and Secret).
- Handle authentication callbacks and user profile extraction.

## 🛠️ Tech Stack
- **Language**: TypeScript
- **Runtime**: Node.js
- **Framework**: NestJS
- **Authentication**: Passport.js (`passport-google-oauth20`)
- **Tools**: Postman (for testing), Dotenv (for configuration)

## ✨ Features
- **Google Login**: Redirects users to Google's secure login page.
- **OAuth Callback**: Securely handles the response from Google.
- **Profile Retrieval**: Accesses basic user profile information (email, name, photo) upon successful login.

## ⚙️ Installation & Setup

### 1. Prerequisites
Ensure you have the following installed:
- Node.js
- NestJS CLI (Optional but recommended)
- A Google Cloud Console Project with OAuth credentials.

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
