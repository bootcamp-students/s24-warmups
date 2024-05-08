# same as my javascript but with python. also recognised is not a word.. haha

import math

def calculate_tip(amount, rating):
    rating = rating.lower()
    
    if rating == 'terrible':
        return math.ceil(amount * 0)
    elif rating == 'poor':
        return math.ceil(amount * 0.05)
    elif rating == 'good':
        return math.ceil(amount * 0.10)
    elif rating == 'great':
        return math.ceil(amount * 0.15)
    elif rating == 'excellent':
        return math.ceil(amount * 0.20)
    else:
        return 'Rating not recognised'