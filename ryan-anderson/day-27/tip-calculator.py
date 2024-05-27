import math


def calculate_tip(amount, rating):
    rating = rating.lower()
    if rating == "terrible":
        tip = 0
    elif rating == "poor":
        tip = 0.05
    elif rating == "good":
        tip = 0.1
    elif rating == "great":
        tip = 0.15
    elif rating == "excellent":
        tip = 0.2
    else:
        return "Rating not recognised"
    return math.ceil(amount * tip)


# Convert rating to lowercase for case-insensitive comparison
# Define tip based on rating
# Return amount * tip


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
