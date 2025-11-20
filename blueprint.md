# Project Blueprint

## Overview

This is a Next.js application with a 3D animated background using `react-three-fiber`. It includes user authentication with NextAuth.js. The application has a modern design with a gradient background and animated text.

## Project Outline

*   **Framework:** Next.js
*   **Styling:** Tailwind CSS
*   **Authentication:** NextAuth.js with GitHub and Credentials providers.
*   **3D Graphics:** `react-three-fiber` and `react-three-drei` for a dynamic, animated background of rotating cubes.
*   **UI Components:**
    *   `ThreeScene.tsx`: A client component that renders the 3D scene.
    *   `RotatingBox`: A component that renders a single rotating box in the 3D scene.
*   **Pages:**
    *   `/`: The home page, which displays the 3D scene and sign-in/sign-out buttons.
    *   `/dashboard`: A protected route that is only accessible to authenticated users.
    *   `/login`: A login page.
*   **Routing:** App Router
*   **Design:**
    *   **Color Palette:** Gradients from purple to blue, with accent colors of pink, blue, yellow, green, and orange for the 3D objects.
    *   **Typography:** "Inter" font.
    *   **Layout:** Centered content with a full-screen 3D background.
    *   **Animations:** Fade-in animations for text, and continuous rotation of 3D objects.

## Changes Made to Fix the Build

1.  **Upgraded NextAuth.js:** Updated the NextAuth.js configuration to the latest version (v5). This involved:
    *   Creating a new `auth.config.ts` file for the NextAuth.js configuration.
    *   Updating the `auth.ts` file to use the new `NextAuth` constructor with the credentials provider.
    *   Updating the `app/api/auth/[...nextauth]/route.ts` file to export the `handlers` from the `auth.ts` file.
2.  **Configured Path Aliases:** Configured the `@` path alias in `tsconfig.json` to resolve to the root directory.
3.  **Corrected Import Paths:** Corrected the import paths for the `auth` object in `app/layout.tsx` and `app/page.tsx`.
4.  **Fixed TypeScript Error:** Fixed a TypeScript error in `app/components/ThreeScene.tsx` by converting the `position` prop of the `directionalLight` and `camera` to a `THREE.Vector3` object.
