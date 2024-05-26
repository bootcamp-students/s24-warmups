# split " "
# join

def no_space(x):
    return "".join(x.split(" "))

"""
    Ember's Feedback:
    - Great job!
    - snake case this file name
"""


# Alternative Solution
def no_space(x):
    return "".join(x.split())


def no_space(x):
    return x.replace(" ", "")


import re


def no_space(x):
    return re.sub("\s*", "", x)
