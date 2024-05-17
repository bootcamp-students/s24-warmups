#switch case in python
# math ceil in python
import math
def calculate_tip(amount, rating):
    #your code here
    rates = {
        'terrible':0,
        'poor':5,
        'good':10,
        'great':15,
        'excellent':20
    }
    if not rating or rating.lower() not in rates:
        return 'Rating not recognised'
    else:
        return math.ceil(amount * rates[rating.lower()] / 100)