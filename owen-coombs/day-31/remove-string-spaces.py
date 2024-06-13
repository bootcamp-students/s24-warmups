def no_space(x):
    return x.replace(" ", "")


# use replace to remove whitespace

"""
    Ember's Feedback:
    - Good job! Similar to JS
"""


# Alternative Solution
def no_space(x):
    return "".join(x.split())


def no_space(x):
    import re

    return re.sub("\s*", "", x)
