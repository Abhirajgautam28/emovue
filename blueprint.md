
# EmoWell - AI Companion for Emotional Wellness

## Overview

EmoWell is a Next.js application designed to be an AI-powered companion for emotional wellness. It uses a combination of 3D animations, real-time emotion detection, and a conversational AI to provide a unique and engaging user experience.

## Implemented Features

### Onboarding Experience
- **3D Animated Landing Page:** A visually stunning landing page with a 3D orb and starfield background, created with `@react-three/fiber` and `@react-three/drei`.
- **Animated Text and Button:** The headline and "Get Started" button are animated using `framer-motion` for a smooth and modern feel.

### User Authentication
- **Glassmorphism Login Form:** A sleek login form with a "glassmorphism" effect, allowing users to enter their credentials.

### Mood Detection
- **Real-time Emotion Scanning:** The application uses `face-api.js` to access the user's webcam and detect their dominant emotion in real-time.
- **Visual Feedback:** The webcam feed is displayed with an overlay showing facial landmarks and the detected emotion.

### AI Chat
- **Conversational Interface:** A chat window allows users to interact with the AI companion.
- **API-Powered Chat:** The chat is connected to a backend API that will eventually be powered by a Large Language Model.

### UI Components
- **`GlassCard`:** A reusable component for creating UI elements with a "glassmorphism" effect.
- **`FloatingButton`:** A reusable floating action button for primary actions.
- **`Scene`:** A wrapper component for Three.js scenes.

### Styling
- **Dark Theme:** The application uses a dark theme for a modern and visually comfortable experience.
- **Tailwind CSS:** The UI is styled using the Tailwind CSS framework for rapid and consistent styling.

## Plan

- **Install Dependencies:** Install `@react-three/fiber`, `@react-three/drei`, `framer-motion`, and `face-api.js`.
- **Set up `face-api.js` models:** Download and place the `face-api.js` models in the `public/models` directory.
- **Create `blueprint.md`:** Create and populate the `blueprint.md` file with the project overview, implemented features, and the plan.
