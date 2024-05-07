import math

def calculate_tip(amount, rating):
    #function takes an amount and a rating
    #needs to return the tip amount (rounded up), or rating not recognized if it gets nonsense data
    
    #to solve, use a match statement to match each rating
    def tip(percent):
        return math.ceil(amount * percent)
    
    match str(rating).lower():
        case "terrible":
          return 0
        case "poor":
          return tip(0.05)
        case "good":
          return tip(0.1)
        case "great":
          return tip(0.15)
        case "excellent":
          return tip(0.2)
        case _:
          return "Rating not recognised"
