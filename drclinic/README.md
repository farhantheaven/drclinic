# DrClinic Web Application

This project is a web application for DrClinic, designed to present information about the clinic and allow users to submit enquiries.

## Project Structure

-   `frontend/`: Contains the React (Vite) single-page application styled with Tailwind CSS.
-   `backend/`: Contains the Node.js/Express backend application for handling enquiries.

## Frontend

The frontend is a single-page application (SPA) built with [React](https://reactjs.org/) (using [Vite](https://vitejs.dev/)) and styled with [Tailwind CSS](https://tailwindcss.com/). It uses [React Router](https://reactrouter.com/) for navigation.

### Frontend Setup and Development

1.  **Navigate to the frontend directory:**
    ```bash
    cd drclinic/frontend
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```
    This will typically start the development server on `http://localhost:5173/` (Vite's default, but it might vary). Open this URL in your browser to view the application. The server supports Hot Module Replacement (HMR) for a fast development experience.

4.  **Build for production:**
    ```bash
    npm run build
    ```
    This command will create a `dist` folder in `drclinic/frontend` containing the optimized static assets for deployment.

## Backend

The backend is a Node.js/Express application that handles enquiry form submissions.

### Setup and Running the Backend

1.  **Navigate to the backend directory:**
    ```bash
    cd backend
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the Express application:**
    ```bash
    node server.js
    ```
    The backend will typically start on `http://localhost:3000/`.

### API Endpoints

-   `POST /api/enquiry`: Receives enquiry data (JSON format: `name`, `email`, `phone` (optional), `message`). Validates data and simulates sending an email.

### Email Notification

**Note:** The email sending functionality in `backend/server.js` is currently a placeholder. It prints the enquiry details to the console instead of sending an actual email. To implement actual email sending, the `sendEnquiryEmail` function in `server.js` needs to be updated with appropriate email server configurations (e.g., using a library like Nodemailer and an email API service).

## Services Offered (Placeholder)

The "Services Offered" section on the main page currently contains placeholder text. This should be updated with the actual services provided by the clinic.
