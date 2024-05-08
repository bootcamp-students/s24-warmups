import math
def calculate_tip(amount, rating):
    lc_rating = rating.lower()
    if lc_rating == "terrible":
        return math.ceil(amount * .00)
    elif lc_rating == "poor":
        return math.ceil(amount * .05)
    elif lc_rating == "good":
        return math.ceil(amount * .10)
    elif lc_rating == "great":
        return math.ceil(amount * .15)
    elif lc_rating == "excellent":
        return math.ceil(amount * .20)
    else: return "Rating not recognised"

# i have to find the tip based off of a rating related to a percentage.
# first i need to make sure the rating case is the same, 
# then I need an else if statement. if rating is X then 
# return the rounded up result of the amount * tip percentage.
# got error math is not defined. need to import math for math.ceil
# need to add else "rating not recognised"
