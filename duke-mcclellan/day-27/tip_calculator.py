##parameters - service rating and tip amount
##return - tip amount
##example - Terrible: tip 0%, Poor: tip 5% Good: tip 10% Great: tip 15% Excellent: tip 20%
##concern - new language
##explain - I need to make sure that the rating is case insensitive, define tip percentages
##and multiply the total bill by the service rating to return the tip amount

import math


def calculate_tip(total_bill, service_rating):
    # service rating to lowercase for case-insensitive comparison
    service_rating = service_rating.lower()

    # tip percentages
    tip_percentages = {
        "terrible": 0.0,
        "poor": 0.05,
        "good": 0.10,
        "great": 0.15,
        "excellent": 0.20,
    }

    if service_rating in tip_percentages:
        # tip amount based on rating
        tip = total_bill * tip_percentages[service_rating]
        # Rounding the tip
        tip = math.ceil(tip)
        return tip
    else:
        return "Rating not recognised"


"""
    Ember's Feedback:
    - Great job :D
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
