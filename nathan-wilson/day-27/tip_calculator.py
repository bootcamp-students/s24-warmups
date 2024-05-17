import math

def calculate_tip(amount, rating):
    lowerCaseRating = rating.lower()
    if lowerCaseRating == "terrible":
        return 0
    if lowerCaseRating == "poor":
        return math.ceil(amount * 0.05)

    if lowerCaseRating == "good":
        return math.ceil(amount * 0.1)

    if lowerCaseRating == "great":
        return math.ceil(amount * 0.15)

    if lowerCaseRating == "excellent":
        return math.ceil(amount * 0.20)

    else:
        return "Rating not recognised"
# Takes a number and a string

# Returns a number

# (30, "poor"), 2

# I could have a type or logic error

# do an if else statement for all the possible ratings, then do the math and return the answer
# within each of them

# I can do it!
"""
    Ember's Feedback:
    - Great job!!
    - naming convention in python for variable name is snake_case not camelCase
    - I hope python is coming easy
"""


# Alternative Solution
def calculate_tip(amount, rating):
    rating = rating.lower()
    mult_value = 0

    match rating:
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
