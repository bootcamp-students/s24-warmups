# P-amount, rating
# R-tip
# switch statement for each rating
# return amount * .05, .1, .15...


import math

def calculate_tip(amount, rating):
    if (rating.upper() == "TERRIBLE"):
        return 0
    elif (rating.upper() == "POOR"):
        return math.ceil(amount * 0.05)
    elif (rating.upper() == "GOOD"):
        return math.ceil(amount * 0.10)
    elif (rating.upper() == "GREAT"):
        return math.ceil(amount * 0.15)
    elif (rating.upper() == "EXCELLENT"):
        return math.ceil(amount * 0.20)
    else:
        return "Rating not recognised"