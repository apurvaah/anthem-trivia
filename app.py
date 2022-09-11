import os
from flask import Flask, jsonify, request, json
from flask_cors import CORS, cross_origin
import math
from backend.dataset import *

app = Flask(__name__, static_folder='./build', static_url_path='/')

# enabling and initializing cross origin resource sharing
CORS(app)

# configuring headers for app
app.config['CORS_HEADERS'] = 'Content-Type'

# when app is accessed, should show reactJS file
@app.route("/")
def hello_world():
    return app.send_static_file('index.html')

# Load questions into quiz
@app.route("/quiz")
def loadJson():
    file = open("./build/quiz.json")
    data = json.load(file)
    return json.dumps(data)

# Method to collect data on quiz score and gas expenditure of participant in ongoing session
@app.route('/send-rewards-data',methods=['POST'])
@cross_origin()
def sendRewardsData():
    marks_and_money = request.get_json()
    marks = marks_and_money.get("marks")
    cash = marks_and_money.get("gasMoney")
    # prob = score_calculation(marks,cash)
    # Keeping cash constant for demo purposes as we want more coupons and less better lucks next time
    prob = score_calculation(marks,50)
    reward = random_rewards(int(math.floor(prob*100)))
    return reward

reward_string = "Better Luck Next Time"

# method to update the reward string in order to store it
@app.route('/update-rewards',methods=['POST'])
@cross_origin()
def updateRewardsData():
    reward = request.get_json().get("reward")
    print("Reward ---------------------")
    print(reward)
    reward_string = reward
    return json.dumps({'reward':reward_string})

# method to fetch reward on rewards screen
@app.route('/get-reward',methods=['POST'])
@cross_origin()
def getRewardsData():
    return reward_string

# Run flask app on heroku
if __name__ == "__main__":
    app.run(host='0.0.0.0', debug=False, port=os.environ.get('PORT', 80))

@app.errorhandler(404)
def not_found(e):
    return app.send_static_file('index.html')