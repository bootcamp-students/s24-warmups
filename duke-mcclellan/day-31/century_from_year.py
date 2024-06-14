##parameters -
##return - century of a year.  Integer
##example - 1705 --> 18
##concern - Wrong method
##explain - I want to use a math function to round up the year to the century
##positive self-talk - You can do it!
##translate -


def century(year):
    return (year + 99) // 100


"""
    Ember's Feedback:
    - Great work!! :D
    - make all python file names snake_case
"""


# Alternative Solutions
def century(year):
    return year // 100 + (1 if year % 100 != 0 else 0)


import math


def century(year):
    return math.ceil(year / 100)


def century(year):
    return (year - 1) // 100 + 1
