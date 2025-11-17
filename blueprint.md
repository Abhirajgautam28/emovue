# EmoVue Blueprint

## Overview

EmoVue is a Next.js web application that provides a personalized chat experience by understanding user emotions through real-time facial analysis. It features a modern, intuitive interface with a 3D animated homepage and a seamless user authentication flow.

## Project Outline

### Framework & Styling
- **Framework:** Next.js 14 with App Router
- **Styling:** Tailwind CSS for a utility-first styling approach.
- **UI Components:**
    - `GlassCard`: A reusable card component with a glassmorphism effect, used for creating visually appealing containers.
    - `FloatingButton`: A reusable button with a floating effect, providing interactive and modern user controls.

### Backend & Database
- **Database:** MongoDB Atlas for storing user data.
- **Authentication:** Custom email and password authentication.
    - `/api/auth/register`: API endpoint for user registration.
    - `/api/auth/login`: API endpoint for user login.
- **Environment Variables:** MongoDB connection string is managed securely using a `.env.local` file.

### Features & Pages
- **Homepage (`/`)**
    - A visually engaging homepage with a 3D animated scene using `react-three-fiber`.
    - Provides a clear overview of the application's features and purpose.
    - Includes a call-to-action to encourage user registration.
    - Demo user credentials are provided for easy access.
- **Authentication Pages**
    - **Registration Page (`/register`)**: A clean and simple form for new users to create an account.
    - **Login Page (`/login`)**: A form for existing users to log in.
- **Core Application Pages**
    - **Chat Page (`/chat`)**: The main interface for users to interact with the emotion-aware AI.
    - **Scan Page (`/scan`)**: A dedicated page for the facial emotion scanning process.

### Project Structure
- `/app`: Contains the main application pages using the Next.js App Router.
- `/pages/api`: Contains the API routes for authentication.
- `/components`: Houses reusable React components for UI and 3D scenes.
- `/lib`: Includes utility functions, such as the MongoDB connection helper.

## Current Request: Deploy the Application

The user has requested to deploy the application.

**Plan:**
1.  **Create `blueprint.md`:** Document the project's current state, features, and architecture.
2.  **Deploy to Firebase:** Use the `classic_firebase_hosting_deploy` tool to deploy the Next.js application as a server-side rendered app. The build output is in the `.next` directory.