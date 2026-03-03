# 🚀 Task 005 – Firebase & Custom Authentication

## 📖 Overview

This project implements a dual authentication system in an **Express.js** application. It originally included Google OAuth, but that portion has been refactored out into a separate project; the remaining code focuses on traditional **Email/Password Authentication** handled client-side by the **Firebase JS SDK** and verified by the **Firebase Admin SDK** on the backend. It serves as the fifth technical task for the **Skandavel Webtech Internship**.

The application provides a unified login page and demonstrates handling both server-side (OAuth) and client-side (Firebase) authentication flows to protect backend resources.

## 🎯 Objective (Why?)

This task was created to:

- Implement client-side authentication with Firebase and JWT validation on the backend.
- Integrate custom email/password authentication alongside Firebase.
- Maintain custom middleware for verifying Firebase tokens.
- Manage external API credentials for Firebase.

## 🛠️ Tech Stack

- **Language**: TypeScript
- **Runtime**: Node.js
- **Framework**: Express.js
- **Authentication**: Firebase Admin SDK, Firebase JS SDK
- **Tools**: Postman (for testing), Dotenv (for configuration)

## ✨ Features

- **Unified Login Page**: A single UI to choose between Email/Password login or Firebase social providers.
- **Firebase Login**: Client-side login with email/password using the Firebase SDK (social providers handled on client).
- **Protected Route**: A `/profile` endpoint is protected and can only be accessed by providing a valid Firebase ID token in the `Authorization` header.

## ⚙️ Installation & Setup

### 1. Prerequisites

Ensure you have the following installed:

- Node.js
- A Firebase Project with Authentication enabled (Email/Password provider).
- A Firebase Project with Authentication enabled (Email/Password provider).

> **⚠️ Note:** Any Firebase configuration keys or IDs visible in the source code are **not legitimate**. You must replace them with your own valid credentials from your Firebase Console.

### 2. Navigate to the Directory

```bash
cd 005_Task
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Configure Environment

Create a `.env` file in the `005_Task` root directory. Only the port is required; all Firebase configuration is stored in the client or service account JSON.

```env
PORT=3000
```

> **📌 Firebase Admin Key:**
> This backend uses the Firebase Admin SDK, which requires a service account JSON file (`muhilan-firebase.json` in `src`).
> Download it from your Firebase Console under **Project settings → Service accounts → Generate new private key** and place it at the project root (or update `src/index.ts` accordingly).
>
> **Note:** Google OAuth details were removed from this codebase; to experiment with OAuth you should use the separate project dedicated to that flow.

### 5. Run the Application

```bash
npm run start:dev
```

The server will start on `http://localhost:3000`.

## 👤 Author

**Muhilan**
_Developer @ [Skandavel Webtech](https://www.linkedin.com/company/skandavel)_
_--- [Linkedin Profile](https://www.linkedin.com/in/rcmuhilan/)_

---

_Created for learning and assessment purposes._
