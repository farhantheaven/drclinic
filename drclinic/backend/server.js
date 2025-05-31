const express = require('express');
const cors = require('cors'); // Import CORS
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Enable CORS for all routes
app.use(cors());

// Placeholder email sending function
function sendEnquiryEmail(name, email, phone, message) {
    console.log(`Simulating email sending: To Clinic - From: ${name} <${email}>, Phone: ${phone}, Message: ${message}`);
    // In a real scenario, this would use a library like Nodemailer
    // For now, assume it always succeeds
    return true;
}

// Root route for basic testing
app.get('/', (req, res) => {
    res.send('Node.js Backend is running');
});

// API endpoint for handling enquiries
app.post('/api/enquiry', (req, res) => {
    const { name, email, phone, message } = req.body;

    // Server-side validation
    if (!name || !email || !message) {
        return res.status(400).json({ error: 'Missing required fields (name, email, message)' });
    }

    // Basic email format validation (optional but good)
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        return res.status(400).json({ error: 'Invalid email format' });
    }

    if (sendEnquiryEmail(name, email, phone || '', message)) {
        res.status(200).json({ message: 'Enquiry submitted successfully' });
    } else {
        res.status(500).json({ error: 'Failed to send enquiry email' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
