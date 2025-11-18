# EmoVue Application Blueprint

## 1. Overview

EmoVue is a web application designed for real-time emotion analysis using a webcam. It provides users with a personalized chat experience by understanding their emotional state. The application aims for a modern, intuitive, and visually engaging user interface.

## 2. Design and Style Guide

The application follows the Material Design system, implemented using the Material-UI (MUI) library. The aesthetic is clean, modern, and incorporates sophisticated "3D" and "glassmorphism" effects to create a sense of depth and tactility.

*   **Color Palette:**
    *   **Primary:** A vibrant purple (`#7c3aed`) for key actions and branding.
    *   **Secondary:** A cool pink/magenta for gradients and accents.
    *   **Background:** A deep, dark gray (`#111827`) with a subtle noise texture.
    *   **Cards:** A semi-transparent white (`rgba(255, 255, 255, 0.1)`) with a backdrop blur effect.
*   **Typography:**
    *   **Headings:** `CalSans`, a bold and expressive font.
    *   **Body:** `Inter`, a clean and highly readable sans-serif font.
*   **Key UI Elements:**
    *   **Cards:** "Lifted" from the background with deep, multi-layered drop shadows and rounded corners.
    *   **Buttons:** Feature a gradient background and a subtle "glow" effect on hover to encourage interaction.
    *   **Icons:** Used to enhance understanding and navigation.

## 3. Current Implementation Plan: UI Overhaul

This plan details the steps to overhaul the UI, moving from basic Tailwind CSS to a more robust and visually rich Material-UI implementation.

*   **Step 1: Install Dependencies:** Add `@mui/material`, `@mui/icons-material`, `@emotion/react`, and `@emotion/styled` to the project.
*   **Step 2: Create Custom Theme:** Implement a custom MUI theme in `src/theme.js` to define the application's colors and fonts.
*   **Step 3: Update Root Layout:** Wrap the application in MUI's `ThemeProvider` to apply the custom theme globally.
*   **Step 4: Refactor Homepage:** Rebuild the homepage using MUI components (`Container`, `Box`, `Typography`, `Button`) and apply custom styles for the 3D/glassmorphism card and CTA button.
*   **Step 5: Refactor Login Page:** Rebuild the login page using MUI components (`Card`, `TextField`, `Button`).
*   **Step 6: Deprecate Old Components:** Remove the now-redundant `GlassCard.js` and `FloatingButton.js` components.
