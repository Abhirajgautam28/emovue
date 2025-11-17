# EmoWell - Emotional Wellness App

## Overview

EmoWell is a futuristic AI companion designed to support your emotional wellness. The application provides a modern and engaging user experience, with a focus on visual appeal and intuitive interaction.

## Design and Features

### Visual Design

*   **Theme:** Futuristic, with a dark background, vibrant gradients, and a subtle noise texture.
*   **Glassmorphism:** Reusable `GlassCard` component for a modern, semi-transparent UI.
*   **Animations:** `framer-motion` for smooth page transitions and interactive element animations.
*   **Typography:** `Inter` font for a clean and readable text.

### Core Features

*   **Onboarding:** A visually appealing welcome screen that sets the tone for the application.
*   **Login:** A simple login page (authentication to be implemented).
*   **Mood Scan:** A placeholder page for the facial recognition feature.
*   **Chat:** An interactive chat interface for the user to communicate with the AI assistant.

### File Structure

*   `src/app/`: Main application directory.
    *   `layout.js`: Root layout with the base styles.
    *   `page.js`: Onboarding page.
    *   `login/page.js`: Login page.
    *   `scan/page.js`: Mood scan page.
    *   `chat/page.js`: Chat page.
*   `src/components/ui/GlassCard.js`: Reusable glassmorphism card component.
*   `tailwind.config.mjs`: Tailwind CSS configuration.
*   `postcss.config.mjs`: PostCSS configuration.

## Current Plan

*   Flesh out the UI and add more visual details.
*   Implement the facial recognition and mood detection feature.
*   Integrate the AI chat functionality.
*   Add authentication.
