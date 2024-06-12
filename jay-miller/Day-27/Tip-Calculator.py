import math
def calculate_tip(amount, rating):
    rating = rating.lower()
    if rating == "terrible":
        return math.ceil(amount * 0)
    elif rating == "poor":
        return math.ceil(amount * 0.05)
    elif rating == "good":
        return math.ceil(amount * 0.1)
    elif rating == "great":
        return math.ceil(amount * 0.15)
    elif rating == "excellent":
        return math.ceil(amount * 0.2)
    else:
        return "Rating not recognised"

"""
    Ember's Feedback:
    - Good job
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
