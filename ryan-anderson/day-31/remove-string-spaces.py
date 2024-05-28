def no_space(x):
    return x.replace(" ", "")


# use .replace to remove spaces

"""
    Ember's Feedback:
    - good work!
"""


# Alternative Solution
def no_space(x):
    return "".join(x.split())


def no_space(x):
    import re

    return re.sub("\s*", "", x)
