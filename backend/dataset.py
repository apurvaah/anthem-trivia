import datetime
from decimal import Decimal
from flask import jsonify
import pymongo
#import numpy as np
import random
import time
import re

#Use Cluster0



client = pymongo.MongoClient('mongodb+srv://APAD_MONGO:APAD2022@cluster0.i5zqp20.mongodb.net/?retryWrites=true&w=majority')
db = client.rewards
rewar = db.coupons

def random_rewards(prob):
    rewards_list = db.coupons.aggregate([{ "$sample": { "size": prob } }])
    #rewards_list.pop('_id')
    a=list(rewards_list)
    final_rewards=[]
    for i in a:
        final_rewards.append(i['rewards'])
    for i in range(100-prob):
        final_rewards.append("Better luck next time!!")
    return random.choice(final_rewards)

def score_calculation(get_score,get_cash):
    max_score=100
    min_score=0
    total_score = get_score + get_cash
    # X_std = (total_score - min_score) / (max_score - min_score)*(0.75)
    X_std = (total_score - min_score) / (max_score - min_score)
    return X_std