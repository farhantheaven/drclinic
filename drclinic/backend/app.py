from flask import Flask, jsonify, request

app = Flask(__name__)

@app.route('/')
def home():
    return "Backend is running"

@app.route('/api/enquiry', methods=['POST'])
def handle_enquiry():
    data = request.get_json()

    if not data or not all(key in data for key in ['name', 'email', 'message']):
        return jsonify({'error': 'Missing required fields (name, email, message)'}), 400

    name = data.get('name')
    email = data.get('email')
    phone = data.get('phone', '') # Optional field
    message = data.get('message')

    if send_enquiry_email(name, email, phone, message):
        return jsonify({'message': 'Enquiry submitted successfully'}), 200
    else:
        return jsonify({'error': 'Failed to send enquiry email'}), 500

def send_enquiry_email(name, email, phone, message):
    # Placeholder for actual email sending logic
    print(f"Simulating email sending: To Clinic - From: {name} <{email}>, Phone: {phone}, Message: {message}")
    # In a real scenario, this function would use smtplib or a mail API
    # For now, assume it always succeeds
    return True

if __name__ == '__main__':
    app.run(debug=True)
