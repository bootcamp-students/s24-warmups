import math
def calculate_tip(amount, rating):
    rating = rating.lower()
    if rating == 'terrible':
        tip = 0
    elif rating == 'poor':
        tip = 0.05
    elif rating == 'good':
        tip = 0.1
    elif rating == 'great':
        tip = 0.15
    elif rating =='excellent':
        tip = 0.2
    else:
        return 'Rating not recognised'
    return math.ceil(amount * tip)

#Convert rating to lowercase for case-insensitive comparison
#Define tip based on rating
#Return amount * tip