import math


def calculate_tip(amount, rating):
    tip = 0
    if rating.lower() == "terrible":
        tip = 0
    elif rating.lower() == "poor":
        tip = 0.05 * amount
    elif rating.lower() == "good":
        tip = 0.10 * amount
    elif rating.lower() == "great":
        tip = 0.15 * amount
    elif rating.lower() == "excellent":
        tip = 0.20 * amount
    else:
        return "Rating not recognised"

    return math.ceil(tip)


# use if elif
# use .lower for case sensitive

"""
    Ember's Feedback:
    - rename this file to conform to the class standard
    - Great job!
"""


# Alternative Solutions
def calculate_tip(amount, rating):
    match rating.lower():
        case "terrible":
            mult_value = 0
        case "poor":
            mult_value = 0.05
        case "good":
            mult_value = 0.10
        case "great":
            mult_value = 0.15
        case "excellent":
            mult_value = 0.20
        case _:
            return "Rating not recognised"

    return math.ceil(amount * mult_value)


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
