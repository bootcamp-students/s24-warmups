import re
def calculate(s):
    x = s.replace("plus", "+").replace("minus", "-")
    sum = str(eval(x))
    return sum
# the idea is to replace "plus" and "minus" so you can use eval and return it into a str.
# i started with regex but it got complicated,
# you can chain replace together. so replace plus with + and minus with -
# then add it together using eval and return
