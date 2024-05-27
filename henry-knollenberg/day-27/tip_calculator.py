# P-amount, rating
# R-tip
# switch statement for each rating
# return amount * .05, .1, .15...


import math


def calculate_tip(amount, rating):
    if rating.upper() == "TERRIBLE":
        return 0
    elif rating.upper() == "POOR":
        return math.ceil(amount * 0.05)
    elif rating.upper() == "GOOD":
        return math.ceil(amount * 0.10)
    elif rating.upper() == "GREAT":
        return math.ceil(amount * 0.15)
    elif rating.upper() == "EXCELLENT":
        return math.ceil(amount * 0.20)
    else:
        return "Rating not recognised"


"""
    Ember's Feedback:
    - rename file to be tip_calculator.py
    - great work!
"""


# Alternative Solutions
def calculate_tip(amount, rating):
    how_was_service = {
        "terrible": 0.0,
        "poor": 0.05,
        "good": 0.1,
        "great": 0.15,
        "excellent": 0.2,
    }

    rating = rating.lower()

    return (
        math.ceil(amount * how_was_service[rating])
        if rating in how_was_service
        else "Rating not recognised"
    )


def calculate_tip(amount, rating):
    match (rating.lower()):
        case "terrible":
            return math.ceil(amount * 0.0)
        case "poor":
            return math.ceil(amount * 0.05)
        case "good":
            return math.ceil(amount * 0.10)
        case "great":
            return math.ceil(amount * 0.15)
        case "excellent":
            return math.ceil(amount * 0.2)
        case _:
            return "Rating not recognized"
