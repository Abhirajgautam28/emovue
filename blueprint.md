
# Project Blueprint: EmoVue

## Overview

EmoVue is a web application that uses a webcam to scan a user's facial expression, determine their mood, and then provide a personalized chat experience with an AI companion. The application is built with Next.js and incorporates modern design principles for a beautiful and intuitive user experience.

## Implemented Features (as of previous state)

*   **Facial Emotion Recognition:** The core feature of the application, using `face-api.js` to detect emotions from a live video stream.
*   **3D Animated Homepage:** A visually engaging homepage featuring a 3D scene.
*   **Glassmorphism UI:** Use of `GlassCard` components to create a modern, layered look.
*   **Basic Routing:** Navigation between the homepage, login page, scan page, and chat page.

## Current Task: Fixes, Authentication, and Redesign

The following plan outlines the steps to fix critical build issues, implement a complete user authentication system with MongoDB, and enhance the overall design and user experience of the application.

### 1. **Resolve Core Build Issue**
*   **Problem:** The `next build` command was not generating a production-ready `out` directory because of an incorrect `output: 'export'` configuration in `next.config.js` for a dynamic application.
*   **Solution:** Remove the `output: 'export'` setting to enable a standard Next.js server-side build, which is necessary for database integration and authentication.

### 2. **Implement Full User Authentication**
*   **Backend Setup:**
    *   Integrate MongoDB using the provided connection string.
    *   Install `mongodb` and `bcryptjs` for database interaction and password hashing.
    *   Create a secure MongoDB connection utility.
    *   Use `next-auth` for session management.
*   **API Endpoints:**
    *   **Register (`/api/auth/register`):** Create a new API route to handle user registration, including password hashing and database entry.
    *   **Login (`/api/auth/[...nextauth]`):** Configure `next-auth` with a Credentials Provider to validate user credentials against the MongoDB database.
*   **Frontend Pages:**
    *   **New Register Page (`/register`):** A new, beautifully designed page for users to create an account.
    *   **Redesigned Login Page (`/login`):** An improved login page that securely handles authentication and provides clear user feedback. It will include a link to the new register page.

### 3. **Enhance UI/UX**
*   **Homepage Redesign:**
    *   Add detailed sections: "How It Works," "Key Features," and a compelling "About" section.
    *   Implement automatic, continuous animation for the background 3D elements to create a more dynamic and engaging experience without user interaction.
*   **Navigation:** Improve the navigation flow between the homepage, login, and register pages.

### 4. **Demo Credentials**
*   Upon completion, the application will be ready for testing. You can register a new user or use the following credentials:
    *   **Email:** `user@example.com`
    *   **Password:** `password123`

This comprehensive plan will result in a robust, fully functional, and visually stunning application, ready for your project submission.
