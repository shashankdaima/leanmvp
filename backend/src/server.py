from flask import Flask, request, jsonify, session
from werkzeug.security import generate_password_hash, check_password_hash
from flask_sqlalchemy import SQLAlchemy
from flask_session import Session
import secrets
from config import config
from flask_cors import CORS
import redis
app = Flask(__name__)

# Configure the database
app.config["SQLALCHEMY_DATABASE_URI"] = config["POSTGRES_URL"]
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

# Configure session
# TODO: Need to add redis based sessions
app.secret_key = secrets.token_hex(16)
app.config["SESSION_TYPE"] = "redis"  # or use 'redis' for production
app.config["SESSION_PERMANENT"] = False
app.config["SESSION_USE_SIGNER"] = True
app.config["SESSION_COOKIE_HTTPONLY"] = True
app.config["SESSION_COOKIE_SECURE"] = False  # Set to True in production with HTTPS
app.config["SESSION_REDIS"] = redis.from_url("redis://127.0.0.1:6379")  # Set to True in production with HTTPS

Session(app)

CORS(app, supports_credentials=True)
# CORS(app, supports_credentials=True) # - include credentials (like cookies) in CORS requests

db = SQLAlchemy(app)


# Define a User model
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password_hash = db.Column(
        db.String(162), nullable=False
    )  # although password hash is 162 length


# Create the database tables
with app.app_context():
    db.create_all()


@app.route("/signup", methods=["POST"])
def signup():
    data = request.get_json()
    name = data.get("name")
    email = data.get("email")
    password = data.get("password")

    if User.query.filter_by(email=email).first():
        return jsonify({"message": "Email already exists!"}), 409
    else:
        password_hash = generate_password_hash(password)
        new_user = User(name=name, email=email, password_hash=password_hash)
        db.session.add(new_user)
        db.session.commit()
        session["email"] = email
        return jsonify({"message": "Signup successful!"}), 201


@app.route("/login", methods=["POST"])
def login():
    data = request.get_json()
    email = data.get("email")
    password = data.get("password")

    user = User.query.filter_by(email=email).first()
    if user and check_password_hash(user.password_hash, password):
        session["email"] = email
        return jsonify({"message": "Login successful!"}), 200
    else:
        return jsonify({"message": "Invalid email or password!"}), 401


@app.route("/logout", methods=["POST"])
def logout():
    session.pop("email", None)
    return jsonify({"message": "Logout successful!"}), 200


@app.route("/status", methods=["GET"])
def status():
    email = session.get("email")
    if not email:
        return jsonify({"error": "Unauthorized"}), 401
    
    user = User.query.filter_by(email=email).first()
    return jsonify({
        "id": user.id,
        "email": user.email
    }) 


if __name__ == "__main__":
    app.run(debug=config["IS_DEBUG"])
