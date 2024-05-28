# parameters- take a string and turn it into an equation.
# return- the string equation result
# example- "1plus2plus3plus4"  --> "10"
# explain- we replace plus with + and replace minus with -. evaluate s with the new operators. return the result as a string.


def calculate(s):
    s = s.replace("plus", "+").replace("minus", "-")

    result = eval(s)

    return str(result)


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
