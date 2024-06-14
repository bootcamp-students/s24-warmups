def no_space(x):
    return x.replace(' ' ,'')

"""
    Ember's Feedback:
    - Great work!
"""


# Alternative Solution
def no_space(x):
    return "".join(x.split())


def no_space(x):
    import re

    return re.sub("\s*", "", x)
