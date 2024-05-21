# same as my javascript but with python. also recognised is not a word.. haha

import math


def calculate_tip(amount, rating):
    rating = rating.lower()

    if rating == "terrible":
        return math.ceil(amount * 0)
    elif rating == "poor":
        return math.ceil(amount * 0.05)
    elif rating == "good":
        return math.ceil(amount * 0.10)
    elif rating == "great":
        return math.ceil(amount * 0.15)
    elif rating == "excellent":
        return math.ceil(amount * 0.20)
    else:
        return "Rating not recognised"

"""
    Ember's Feedback:
    - Great job!
    - Below are a couple other ways of doing it, including a Python match case
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
