import math


def calculate_tip(amount, rating):
    lc_rating = rating.lower()
    if lc_rating == "terrible":
        return math.ceil(amount * 0.00)
    elif lc_rating == "poor":
        return math.ceil(amount * 0.05)
    elif lc_rating == "good":
        return math.ceil(amount * 0.10)
    elif lc_rating == "great":
        return math.ceil(amount * 0.15)
    elif lc_rating == "excellent":
        return math.ceil(amount * 0.20)
    else:
        return "Rating not recognised"


# i have to find the tip based off of a rating related to a percentage.
# first i need to make sure the rating case is the same,
# then I need an else if statement. if rating is X then
# return the rounded up result of the amount * tip percentage.
# got error math is not defined. need to import math for math.ceil
# need to add else "rating not recognised"


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
