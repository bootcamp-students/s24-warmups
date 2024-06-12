def no_space(x):
    return x.replace(" ", "")


"""
Parameters - remove the spaces
Return- I need to return a function that removes all spaces in the string
Example- '8 j 8   mBliB8g  imjB8B8  jl  B'), '8j8mBliB8gimjB8B8jlB
Concern- I not sure what method to use. in Javscript I used replace all. here i used replace
Explain-  I'm just going to us the replace method. replace all spaces with no space. lol
Positive Talk- I remember how to do this plus Python isn't that bad.
"""

"""
    Ember's Feedback:
    - Great work!! :D
"""


# Alternative Solution
def no_space(x):
    return "".join(x.split())


import re


def no_space(x):
    return re.sub("\s*", "", x)
