# Instructions: Given a year, return the century it is in.
# Examples: 1705 --> 18
# Params: given integer
# Return: return integer
# Concerns: none
# Solution: simply divide the year by 100 and use math ceil to round the number up to it's nearest integer

# Given Code: 
# def century(year):
#     # Finish this :)
#     return



import math

def century(year):
    return math.ceil(year/100)