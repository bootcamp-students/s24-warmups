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
# Solution: 

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
      ter =  amount * 0 
      return math.ceil(ter)
    elif (x == "poor"):
       po = amount * .05
       return math.ceil(po)
    elif (x == "good"):
       go = amount * .10
       return math.ceil(go)
    elif (x == "great"):
       gr = amount * .15
       return math.ceil(gr)
    elif (x == "excellent"):
       ex = amount * .2
       return math.ceil(ex)
    else:
       return "Rating not recognised"