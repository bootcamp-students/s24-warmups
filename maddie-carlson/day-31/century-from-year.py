import math

def century(year):
    #function takes an int (a year) and needs to return the century
    #this can be calculated simply by dividing the number by 100 and rounding it up
    return math.ceil(year / 100)
