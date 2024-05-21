# replace the work plus with +
# replace minus
# after


def calculate(s):
    evaluated = eval(s.replace("plus", "+").replace("minus", "-"))
    return str(evaluated)


"""
    Ember's Feedback:
    - please pay attention to detail, this was a js file and not a python file
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
