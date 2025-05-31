# DrClinic Web Application

This project is a web application for DrClinic, designed to present information about the clinic and allow users to submit enquiries.

## Project Structure

-   `frontend/`: Contains the HTML, CSS, and JavaScript for the client-side application.
-   `backend/`: Contains the Flask (Python) backend application for handling enquiries.

## Frontend

The frontend consists of:
-   **Home Page (`frontend/index.html`):** Displays clinic information, doctor's credentials, services, and 24/7 availability.
-   **Enquiry Page (`frontend/enquiry.html`):** Provides a form for users to submit their details and messages.

To view the frontend, open the `frontend/index.html` file in a web browser.

## Backend

The backend is a Flask application that handles enquiry form submissions.

### Setup and Running the Backend

1.  **Navigate to the backend directory:**
    ```bash
    cd backend
    ```

2.  **Create a virtual environment (recommended):**
    ```bash
    python -m venv venv
    source venv/bin/activate  # On Windows: venv\Scripts\activate
    ```

3.  **Install dependencies:**
    ```bash
    pip install -r requirements.txt
    ```

4.  **Run the Flask application:**
    ```bash
    python app.py
    ```
    The backend will typically start on `http://127.0.0.1:5000/`.

### API Endpoints

-   `POST /api/enquiry`: Receives enquiry data (JSON format: `name`, `email`, `phone` (optional), `message`). Validates data and simulates sending an email.

### Email Notification

**Note:** The email sending functionality in `backend/app.py` is currently a placeholder. It prints the enquiry details to the console instead of sending an actual email. To implement actual email sending, the `send_enquiry_email` function in `app.py` needs to be updated with appropriate email server configurations (e.g., using `smtplib` or an email API service).

## Services Offered (Placeholder)

The "Services Offered" section on the main page currently contains placeholder text. This should be updated with the actual services provided by the clinic.
