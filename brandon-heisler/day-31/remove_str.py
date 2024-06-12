def no_space(x):
    return x.replace(" ", "")

# no brainer, use replace and replace spaces with no spaces, return.

"""
    Ember's Feedback:
    - Good work :D
"""


# Alternative Solution
def no_space(x):
    return "".join(x.split())


import re


def no_space(x):
    return re.sub("\s*", "", x)
