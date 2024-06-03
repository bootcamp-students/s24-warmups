import math

def century(year):
    # function takes an int (a year) and needs to return the century
    # this can be calculated simply by dividing the number by 100 and rounding it up
    return math.ceil(year / 100)

"""
    Ember's Feedback:
    - snake case file name
    - great work!
"""


# Alternative Solution
# Alternative Solutions
def century(year):
    return year // 100 + (1 if year % 100 != 0 else 0)


def century(year):
    return (year + 99) // 100


def century(year):
    return (year - 1) // 100 + 1
