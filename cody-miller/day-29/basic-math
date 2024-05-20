def calculate(s):
    string = s.replace("plus", "+").replace("minus", "-")
    return str(eval(string))


# I believe I can use eval to evaluate the string
# once the operators have been converted
# The re can be used to replace spelled out operators
# Turns out that replace is easier to use to replace words
# with operators

"""
    Ember's Feedback:
    - no mime type on file
    - file is not  snake_case, which is the convention for python files
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
