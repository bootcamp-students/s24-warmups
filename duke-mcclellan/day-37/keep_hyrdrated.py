##Parameters - time in hours
##Return - number of litres drank rounded to smallest value (integer)
##Example - time = 3 ----> litres = 1
##Concern - wrong method
##Explain - I want to use math in python and multiply .5 litres
##per hour and round to smallest value

import math


def litres(time):
    return math.floor(time * 0.5)


"""
    Ember's Feedback:
    - Good work!
"""


# Alternative Solutions
def litres(time):
    return int(time * 0.5)


def litres(time):
    return time // 2
