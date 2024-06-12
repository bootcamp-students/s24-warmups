import re


def no_space(x):
    return re.sub("\s*", "", x)


"""
    Ember's Feedback:
    - Good use of regular expression!
    - Great work :D
    - rename file to use snake_case
"""


# Alternative Solution
def no_space(x):
    return "".join(x.split())


def no_space(x):
    return x.replace(" ", "")
