##parameters - service rating and tip amount 
##return - tip amoutn 
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
        "excellent": 0.20
    }

    if service_rating in tip_percentages:
        # tip amount based on rating
        tip = total_bill * tip_percentages[service_rating]
        # Rounding the tip
        tip = math.ceil(tip)
        return tip
    else:
        return "Rating not recognised"  




