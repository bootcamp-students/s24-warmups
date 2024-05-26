def no_space(x):
    return x.replace(" ", "")

# a string

# a string with no spaces

# ('8 j 8   mBliB8g  imjB8B8  jl  B'), '8j8mBliB8gimjB8B8jlB'

# I could have a type error or not remove the correct amount of strings

# take the string and replace all spaces with nothing

# I can do this

"""
    Ember's Feedback:
    - Great work :D
    - similar to JS
"""


# Alternative Solution
def no_space(x):
    return "".join(x.split())


def no_space(x):
    import re

    return re.sub("\s*", "", x)
