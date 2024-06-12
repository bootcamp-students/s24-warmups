# Instructions: In this kata, you will do addition and subtraction on a given string. The return value must be also a string.
# Note: the input will not be empty.
# Examples: "1plus2plus3plus4"  --> "10"
# Params: given string
# Return: a string (it will be a number)
# Concerns: the string has words for operators
# Solution: ran an if else solution to check for plus and minus being present and replacing them with operators

# Given Code:
# def calculate(s):
#     # your code here
#     return

def calculate(s):
    # had to take out the first few lines so that it could add up multiple numbers, instead of spacing at all the numbers
    # num="0123456789"
    # for i in s:
    #     if i in num:
    #         s=s.replace(i," "+i+" ")
    result=s
    # up to this point a list is printed separated at the numbers and words, result is a string
    # words = result.split()
    # print(words)
    # up to this point it is an array of separated words, though it would be better to maybe do replace with the string?
    # maybe comment it out and try to replace it
    if ("minus" in result and "plus" in result):
        together = result.replace("plus", "+").replace("minus", "-")
        return str(eval(together))
    elif ("minus" in result):
        minus = result.replace("minus", "-")
        return str(eval(minus))
    elif ("plus" in result):
        plus = result.replace("plus", "+")
        return str(eval(plus))

"""
    Ember's Feedback:
    - needlessly complicated :P the below works on its own
    together = result.replace("plus", '+').replace("minus", '-')
        return str(eval(together))
    - that being said, eval is good enough for a kata but avoid on the job!!!
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
