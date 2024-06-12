import math


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


"""
    Ember's Feedback:
    - no mime type on file
    - file is not  snake_case, which is the convention for python files
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
