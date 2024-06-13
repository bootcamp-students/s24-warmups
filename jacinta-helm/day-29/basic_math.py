import re


def calculate(s):
    s = re.sub("plus", "+", s)
    s = re.sub("minus", "-", s)
    result = eval(s)
    return result


# Parameters - Add and subtract a string
# Return - my function should return addition in a string as well as subtraction
# Example - '1plus2plus3plus4'), '10'; 1plus2plus3minus4'), '2'
# Concerns - I use the wrong method
# Explain -

"""
    Ember's Feedback:
    - Keep practicing the explain part, it will help you pass interviews and -
    it will help you communicate clearly on the job. A really important soft skill.
    - eval is good enough for a kata but I heavily recommend against using it on the job.
        It is can be a security vulnerability.
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
