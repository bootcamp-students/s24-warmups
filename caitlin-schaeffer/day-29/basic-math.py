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
    print(result)
    #up to this point a list is printed separated at the numbers and words, result is a string
    # words = result.split()
    # print(words)
    #up to this point it is an array of separated words, though it would be better to maybe do replace with the string?
    # maybe comment it out and try to replace it
    if ("minus" in result and "plus" in result):
        together = result.replace("plus", '+').replace("minus", '-')
        print(together)
        return str(eval(together))
    elif ("minus" in result):
        minus = result.replace("minus", '-')
        print(minus)
        return str(eval(minus))
    elif ("plus" in result):
        plus = result.replace("plus", '+')
        print(plus)
        return str(eval(plus))