def calculate(s):
    numbers = s.replace("plus", "+").replace("minus", "-")
    return str(eval(numbers))


# didn't finish got from tv screen, will give my answer later if I have time

"""
    Ember's Feedback:
    - Rename this file to conform to the class standard, all lowercase
    - Good enough for a kata, avoid on the job!
    - Eval executes any code in the s string so is a potential security vulnerability
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
