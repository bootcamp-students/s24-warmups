def century(year):
    century = (year + 99) // 100
    return century


"""
    Ember's Feedback:
    - Make all of these python and sql files snake_case, all lowercase
    - Great work!
"""


# Alternative Solutions
def century(year):
    return year // 100 + (1 if year % 100 != 0 else 0)


import math


def century(year):
    return math.ceil(year / 100)


def century(year):
    return (year - 1) // 100 + 1
