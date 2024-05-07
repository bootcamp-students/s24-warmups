import math
def calculate_tip(amount, rating):
    tip = 0
    if rating.lower() == 'terrible':
        tip = 0
    elif rating.lower() == 'poor':
        tip = 0.05 * amount
    elif rating.lower() == 'good':
        tip = 0.10 * amount
    elif rating.lower() == 'great':
        tip = 0.15 * amount
    elif rating.lower() == 'excellent':
        tip = 0.20 * amount
    else:
        return 'Rating not recognised'
        
    
    return math.ceil(tip)

# use if elif 
# use .lower for case sensitive
