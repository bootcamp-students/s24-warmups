import re


def calculate(s):
    x = s.replace("plus", "+").replace("minus", "-")
    sum = str(eval(x))
    return sum


# the idea is to replace "plus" and "minus" so you can use eval and return it into a str.
# i started with regex but it got complicated,
# you can chain replace together. so replace plus with + and minus with -
# then add it together using eval and return
"""
    Ember's Feedback:
    - Good enough for a kata, avoid on the job!
    - Eval executes any code in the s string so is a potential vulnerability
"""


# Alternative Solution
def calculate(s):
    s = s.replace("minus", " -")
    s = s.replace("plus", " ")
    s = s.split()
    s = map(int, s)
    s = sum(s)
    return str(s)


# OR
def calculate(s):
    return str(sum(map(int, s.replace("minus", " -").replace("plus", " ").split())))


def calculate(s):
    return str(
        sum(int(num) for num in s.replace("minus", " -").replace("plus", " ").split())
    )
