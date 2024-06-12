# switch case in python
# math ceil in python
import math


def calculate_tip(amount, rating):
    rates = {"terrible": 0, "poor": 5, "good": 10, "great": 15, "excellent": 20}
    if not rating or rating.lower() not in rates:
        return "Rating not recognised"
    else:
        return math.ceil(amount * rates[rating.lower()] / 100)


"""
    Ember's Feedback:
    - Great job! I like that syntax in the if else
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
