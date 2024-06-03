def no_space(x):
    # function takes a string and needs to remove all spaces from the string
    # baby easy, to solve, use replace(" ", "")
    return x.replace(" ", "")

"""
    Ember's Feedback:
    - Great work!
"""


# Alternative Solution
def no_space(x):
    return "".join(x.split())


import re


def no_space(x):
    return re.sub("\s*", "", x)
