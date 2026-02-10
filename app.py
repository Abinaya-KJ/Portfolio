from flask import Flask, send_from_directory, jsonify, request
from flask_cors import CORS
import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from dotenv import load_dotenv

load_dotenv() # Load environment variables from .env if present

# Initialize Flask with the correct static folder pointing to the Vite build output
app = Flask(__name__, static_folder='dist', static_url_path='')
CORS(app)

# Mock Data
projects = [
  {
    "id": 1,
    "title": "Image-Based Classification of Fruit Ripening Stages",
    "category": "Machine Learning",
    "description": "This project uses machine learning and image processing to classify different stages of fruit ripening based on images.",
    "color": "#ffe5ec",
    "isInteractive": True,
    "image": "/fruit-ripening-stages.png",
    "githubUrl": "https://github.com/Abinaya-KJ",
    "technologies": ['Python', 'Machine Learning', 'Image Processing', 'PyTorch', 'CNN', 'YOLOv8', 'TensorFlow', 'NumPy', 'Pandas']
  },
  {
    "id": 2,
    "title": "Market Basket Analysis",
    "category": "DATA ANALYTICS",
    "description": "Market Basket Analysis using the Apriori algorithm to identify frequent itemsets and purchasing patterns.",
    "color": "#e0c3fc",
    "isInteractive": True,
    "image": "/market-basket-analysis.png",
    "technologies": ['Python', 'Data Analytics', 'Apriori Algorithm', 'Association Rule Mining', 'Pandas', 'NumPy', 'Mlxtend'],
    "githubUrl": "https://github.com"

  },

]

@app.route('/api/projects', methods=['GET'])
def get_projects():
    return jsonify(projects)

@app.route('/api/contact', methods=['POST'])
def contact():
    data = request.json
    name = data.get('name')
    email = data.get('email')
    message = data.get('message')

    if not all([name, email, message]):
        return jsonify({"message": "All fields are required", "success": False}), 400

    # Email Configuration
    sender_email = os.environ.get('EMAIL_USER')
    sender_password = os.environ.get('EMAIL_PASS')
    recipient_email = "jabinaya034@gmail.com"

    if not sender_email or not sender_password:
        return jsonify({"message": "Server misconfiguration: Email credentials missing", "success": False}), 500

    try:
        # Create MIME object
        msg = MIMEMultipart()
        msg['From'] = sender_email
        msg['To'] = recipient_email
        msg['Subject'] = f"New Contact Form Message from {name}"
        
        body = f"""
        You have received a new message from your portfolio contact form.
        
        Name: {name}
        Email: {email}
        
        Message:
        {message}
        """
        msg.attach(MIMEText(body, 'plain'))

        # Connect to Gmail SMTP (SSL)
        with smtplib.SMTP_SSL('smtp.gmail.com', 465) as server:
            server.login(sender_email, sender_password)
            server.send_message(msg)
            
        return jsonify({"message": "Message sent successfully!", "success": True}), 200

    except Exception as e:
        print(f"Error sending email: {e}")
        return jsonify({"message": f"Failed to send message: {str(e)}", "success": False}), 500

# Serve React App
# Serve React App
@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve(path):
    if path != "" and os.path.exists(app.static_folder + '/' + path):
        return send_from_directory(app.static_folder, path)
    else:
        return send_from_directory(app.static_folder, 'index.html')

if __name__ == '__main__':
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port)
