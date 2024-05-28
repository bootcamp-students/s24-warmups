import math

def calculate_tip(amount, rating):
    # function takes an amount and a rating
    # needs to return the tip amount (rounded up), or rating not recognized if it gets nonsense data

    # to solve, use a match statement to match each rating
    def tip(percent):
        return math.ceil(amount * percent)

    match str(rating).lower():
        case "terrible":
            return 0
        case "poor":
            return tip(0.05)
        case "good":
            return tip(0.1)
        case "great":
            return tip(0.15)
        case "excellent":
            return tip(0.2)
        case _:
            return "Rating not recognised"

"""
  Ember's Feedback:
  - Good job :D
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
