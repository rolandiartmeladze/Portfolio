from flask import Flask, jsonify
from flask_cors import CORS
import requests

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

@app.route('/api/data')
def get_data():
    data = {
        "name": "John Doe",
        "age": 30,
        "skills": ["Python", "React", "Flask"]
    }
    return jsonify(data)



@app.route('/api/profile')
def info_from_githube():
    url = "https://api.github.com/users/rolandiartmeladze"
    response = requests.get(url)
    if response.status_code == 200:
        data = response.json()
        profil_data = {
            "name": data.get("name"),
            "avatar": data.get("avatar_url"),

        }
        return jsonify(profil_data)
    else: 
        return jsonify({"error" : "not working"}), response.status_code





if __name__ == '__main__':
    app.run(debug=True)
