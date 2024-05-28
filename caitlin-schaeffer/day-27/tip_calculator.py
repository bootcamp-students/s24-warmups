# Instructions: Complete the function, which calculates how much you need to tip based on the total amount of the bill and the service.
# Terrible: tip 0%
# Poor: tip 5%
# Good: tip 10%
# Great: tip 15%
# Excellent: tip 20%
# The rating is case insensitive (so "great" = "GREAT"). If an unrecognised rating is received, then you need to return:
# "Rating not recognised"
# Because you're a nice person, you always round up the tip, regardless of the service.

# Examples: 30, "poor" = 2
# Params: given integer and tip rating
# Return:
# Concerns: rounding up in python is unknown
# Solution: set a variable at the beginning to make sure each rating is coerced into lower case, ran through an if else statement to
# check for each rating, and applying math.ceil to the result of each tip amount

# Given Code:
# def calculate_tip(amount, rating):
#     #your code here

# Logic:
# If tip = poor, amount * .5
# etc

# was originally using round() but it wasn't working as I thought, so imported math and did math.ceil()
import math

def calculate_tip(amount, rating):
    x = rating.lower()
    if (x == "terrible"):
        ter = amount * 0
        return math.ceil(ter)
    elif (x == "poor"):
        po = amount * 0.05
        return math.ceil(po)
    elif (x == "good"):
        go = amount * 0.10
        return math.ceil(go)
    elif (x == "great"):
        gr = amount * 0.15
        return math.ceil(gr)
    elif (x == "excellent"):
        ex = amount * 0.2
        return math.ceil(ex)
    else:
        return "Rating not recognised"


"""
   Ember's Feedback:
   - great job :D
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
