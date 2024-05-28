def century(year):
    if year % 100 == 0:
        return year / 100
    else:
        return int((year - (year % 100)) / 100 + 1)
# use % to remove ones and tens places

"""
    Ember's Feedback:
    - interesting solution!
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
