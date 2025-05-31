document.addEventListener('DOMContentLoaded', () => {
    const enquiryForm = document.getElementById('enquiryForm');

    if (enquiryForm) {
        enquiryForm.addEventListener('submit', async (event) => {
            event.preventDefault();

            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const message = document.getElementById('message').value.trim();

            // Client-side validation
            if (!name || !email || !message) {
                alert('Please fill in all required fields: Name, Email, and Message.');
                return;
            }

            // Basic email format validation (optional, but good practice)
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                alert('Please enter a valid email address.');
                return;
            }

            const data = {
                name: name,
                email: email,
                phone: phone,
                message: message
            };

            try {
                const response = await fetch('http://localhost:3000/api/enquiry', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                });

                const responseData = await response.json();

                if (response.ok) {
                    alert(responseData.message || 'Enquiry submitted successfully!');
                    enquiryForm.reset(); // Clear the form fields
                } else {
                    alert(responseData.error || 'An error occurred while submitting the enquiry.');
                }
            } catch (error) {
                console.error('Error submitting enquiry:', error);
                alert('An unexpected error occurred. Please try again later.');
            }
        });
    }
});
