def no_space(x):
    y = x.replace(" ", "")
    return y

# Replace the spaces with no spaces.

"""
    Ember's Feedback:
    - Good job!
    - make this file snake_case
"""


# Alternative Solution
def no_space(x):
    return "".join(x.split())


def no_space(x):
    import re

    return re.sub("\s*", "", x)
