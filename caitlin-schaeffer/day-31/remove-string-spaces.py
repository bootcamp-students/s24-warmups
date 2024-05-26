# Instructions: Write a function that removes the spaces from the string, then return the resultant string.
# Examples:
# Input -> Output
# "8 j 8   mBliB8g  imjB8B8  jl  B" -> "8j8mBliB8gimjB8B8jlB"
# Params: given a string
# Return: return string with no spaces
# Concerns: could use regex?
# Solution: use the replace method to substitute "" (no space) for all of the " " (spaces)

# Given Code:
# def no_space(x):
#     #your code here


def no_space(x):
    return x.replace(" ", "")

"""
    Ember's Feedback:
    - snake case file
"""


# Alternative Solution
def no_space(x):
    return "".join(x.split())


import re


def no_space(x):
    return re.sub("\s*", "", x)
