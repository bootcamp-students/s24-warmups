def calculate(s):
    s = s.replace("plus", "+").replace("minus", "-")
    return str(eval(s))


# separate words and numbers
# add at plus or subtract at minus

"""
    Ember's Feedback:
    - Good enough for a kata, avoid on the job!
    - Eval executes any code in the s string so is a potential vulnerability
"""


# Alternative Solution
def calculate(s):
    s = s.replace("minus", " -")
    s = s.replace("plus", " ")
    s = s.split(" ")
    s = map(int, s)
    s = sum(s)
    return str(s)
