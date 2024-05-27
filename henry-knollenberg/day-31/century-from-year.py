# if % by 100 = 0, then return divided by 100
# else divide by 100, round down, and add 1, return

import math

def century(year):
    if year % 100 == 0:
        return year / 100
    else:
        return math.floor(year / 100) + 1

"""
    Ember's Feedback:
    - Great job!
    - snake case this file name
"""


# Alternative Solutions
def century(year):
    return year // 100 + (1 if year % 100 != 0 else 0)


def century(year):
    return (year + 99) // 100


import math


def century(year):
    return math.ceil(year / 100)


def century(year):
    return (year - 1) // 100 + 1
