##parameters- string
##return-removing all string spaces
##example - "8aaaaa dddd r     " -> "8aaaaaddddr"
##concerns - wrong method
##explain - I want to create a function that removes string space
##and returns the new string
##positive self-talk - You got this!
##translate -

def no_space(x):
    return x.replace(" ", "")

"""
    Ember's Feedback:
    - Great job :D
"""


# Alternative Solution
def no_space(x):
    return "".join(x.split())


import re


def no_space(x):
    return re.sub("\s*", "", x)
