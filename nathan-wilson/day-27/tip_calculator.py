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

# do an if elese statement for all the possible ratings, then do the math and return the answer
# within each of them

# I can do it!