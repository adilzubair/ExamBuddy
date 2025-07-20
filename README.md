# Propease

A modern React application built with Vite and styled with Tailwind CSS.

## Installation and Usage

To get started with Propease, follow these steps:

1.  **Install dependencies:**
    ```bash
    npm install
    ```

2.  **Run the development server:**
    ```bash
    npm run dev
    ```
    This will start the development server, typically at `http://localhost:5173/`.

3.  **Build for production:**
    ```bash
    npm run build
    ```
    This command will build the project for production in the `dist` folder.

4.  **Preview the production build:**
    ```bash
    npm run preview
    ```
    This command will serve the production build locally for preview.

## Technologies Used

*   **React:** A JavaScript library for building user interfaces.
*   **Vite:** A fast build tool and development server for modern web projects.
*   **Tailwind CSS:** A utility-first CSS framework for rapid UI development.
*   **React Router:** For declarative routing in a React application.

## Features/Pages

The application includes the following pages/features:
- Home page
- Sign In page
- Sign Up page
- Reset Password page
- Various UI components and partials for building the user interface.

## Backend Setup

The backend is a Node.js/Express application located in the `/backend` directory. It handles tasks like sending emails.

**Prerequisites:**
*   Node.js and npm installed.

**Installation & Setup:**

1.  **Navigate to the backend directory:**
    ```bash
    cd backend
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Set up environment variables:**
    Create a `.env` file in the `backend` directory by copying the `.env.example` file:
    ```bash
    cp .env.example .env
    ```
    Edit the `.env` file and add your SendGrid API key and preferred port:
    ```
    SENDGRID_API_KEY=your_actual_sendgrid_api_key_here
    PORT=3001
    ```
    *Note: You need a SendGrid account and a verified sender email/domain to send emails.*

**Running the Backend:**

*   **Development mode (with nodemon, if you choose to add it later, or standard node):**
    ```bash
    npm start 
    ```
    (If `npm start` is not defined yet in `backend/package.json`, add `"start": "node index.js"` to the `scripts` section or instruct to use `node index.js` directly).
*   **Running Tests:**
    ```bash
    npm test
    ```
    This will run the Jest tests for the backend.

## API Endpoints

### Send Email

*   **Endpoint:** `POST /api/send-email`
*   **Description:** Sends an email using SendGrid. Intended for use by the newsletter subscription form.
*   **Request Body (JSON):**
    ```json
    {
      "to": "recipient@example.com",
      "from": "noreply@propease.com", // Must match the configured sender in backend
      "subject": "Your Subject Here",
      "html": "<p>Your HTML email content here.</p>"
    }
    ```
*   **Responses:**
    *   `200 OK`: Email sent successfully.
        ```json
        { "message": "Email sent successfully!" }
        ```
    *   `400 Bad Request`: Missing fields, invalid email format, invalid 'from' email, or content too long.
        ```json
        { "error": "Specific error message here" }
        ```
    *   `500 Internal Server Error`: Failed to send email due to a server-side or SendGrid API issue.
        ```json
        { "error": "Failed to send email." }
        ```
