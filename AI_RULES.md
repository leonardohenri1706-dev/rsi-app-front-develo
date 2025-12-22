# AI Rules for RSI App Development

This document outlines the technical stack and guidelines for developing the RSI (Rapid Sequence Intubation) application. Adhering to these rules ensures consistency, maintainability, and leverages the strengths of the chosen technologies.

## Tech Stack Overview

*   **Framework**: Next.js for server-side rendering, API routes, and overall application structure.
*   **Frontend Library**: React for building user interfaces.
*   **Language**: TypeScript for type safety and improved code quality.
*   **Styling**: Tailwind CSS for utility-first styling, ensuring responsive and consistent designs.
*   **UI Components**: Primarily Chakra UI for existing components, with a strong preference for shadcn/ui for new components.
*   **Routing**: React Router for client-side navigation within the main application (`app/home.tsx`).
*   **State Management**: React Context API for global state, and `useState`/`useReducer` for local component state.
*   **Internationalization**: `i18next` for multi-language support.
*   **API Communication**: `axios` for making HTTP requests to the backend API routes.
*   **Backend (API Routes)**: Next.js API routes, utilizing MongoDB for data storage, `jsonwebtoken` for authentication, `node:crypto` for security, and `nodemailer` for email services.
*   **Form Validation**: `zod` for robust schema validation in API routes and custom validation functions for client-side forms.
*   **Notifications**: `react-toastify` for displaying user feedback and alerts.

## Library Usage Rules

To maintain consistency and leverage the strengths of each library, please follow these guidelines:

*   **UI Components**:
    *   **For new components**: Always prefer `shadcn/ui` components. If a specific component is not available or doesn't meet requirements, create a new custom component in `app/components/`.
    *   **For existing components**: Components currently built with `Chakra UI` should remain as is unless a specific refactoring request is made.
    *   **Icons**: Use `lucide-react` for all icons.
*   **Styling**:
    *   All styling must be done using **Tailwind CSS** classes. Avoid creating custom CSS files or using inline styles unless absolutely necessary for dynamic values.
    *   Ensure designs are responsive by utilizing Tailwind's responsive utility classes.
*   **Routing**:
    *   **Client-side**: `react-router-dom` for navigation within the main application (`app/home.tsx`).
    *   **API Routes**: Next.js's file-system routing should be used for defining API endpoints (`app/api/`) and initial page loads.
*   **State Management**:
    *   For application-wide state that needs to be shared across many components, use the **React Context API** (e.g., `app/store/PageContext.tsx`).
    *   For component-specific state, use React's `useState` or `useReducer` hooks.
*   **Internationalization**:
    *   All user-facing text should be translated using `i18next` and `react-i18next`. Translation keys should be stored in the `public/locales/{lang}/common.json` files.
*   **API Interaction**:
    *   Use `axios` for all HTTP requests to the backend.
    *   Follow the existing `app/services/api` structure for defining API calls.
*   **Backend Logic (API Routes)**:
    *   Adhere to the existing `app/api-modules` architecture (composers, applications, domain, infra, presentation) for structuring backend logic.
    *   **Database**: Interact with MongoDB using the `mongodb` driver through the `UserRepository` and `MongoDbService`.
    *   **Authentication**: Use `jsonwebtoken` for creating and verifying JWTs, and `node:crypto` for secure password hashing and salt generation.
    *   **Email**: Use `nodemailer` for sending transactional emails.
    *   **Validation**: Use `zod` for validating incoming request bodies in API routes.
*   **Notifications**:
    *   Use `react-toastify` for displaying success, error, and loading messages to the user.