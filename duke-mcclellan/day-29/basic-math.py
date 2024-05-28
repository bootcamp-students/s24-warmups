##parameters - string
##return - string
##example - 1plus2plus3plus4"  --> "10"
# concerns - learning a new language
##explain - using eval to evaluate the resulting expression stored in the string
##and replace to remove plus and + and return the string.


def calculate(s):
    string = s.replace("plus", "+").replace("minus", "-")
    return str(eval(string))


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
