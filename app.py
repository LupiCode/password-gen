from flask import Flask, render_template, request
import random
import string

app = Flask(__name__)

# Password generator logic
def generate_password(length):
    if length < 8 or length > 128:
        return "Password length must be between 8 and 128 characters."
    
    # Password characters: uppercase, lowercase, digits, special characters
    all_characters = string.ascii_letters + string.digits + string.punctuation
    password = ''.join(random.choice(all_characters) for _ in range(length))
    return password

@app.route("/", methods=["GET", "POST"])
def index():
    if request.method == "POST":
        length = int(request.form["length"])
        password = generate_password(length)
        return render_template("index.html", password=password)
    return render_template("index.html", password=None)

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8000)
