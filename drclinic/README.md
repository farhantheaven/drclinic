# DrClinic Web Application

This project is a web application for DrClinic, designed to present information about the clinic and allow users to submit enquiries.

## Project Structure

-   `frontend/`: Contains the HTML, CSS, and JavaScript for the client-side application.
-   `backend/`: Contains the Node.js/Express backend application for handling enquiries.

## Frontend

The frontend consists of:
-   **Home Page (`frontend/index.html`):** Displays clinic information, doctor's credentials, services, and 24/7 availability.
-   **Enquiry Page (`frontend/enquiry.html`):** Provides a form for users to submit their details and messages.

To view the frontend, open the `frontend/index.html` file in a web browser.

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
