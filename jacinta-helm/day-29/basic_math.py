import re

def calculate(s):
    print(s)
    s = re.sub('plus', '+', s)
    s = re.sub('minus', '-', s)
    result = eval(s)
    return result 


# Parameters - Add and subtract a string 
# Return - my function should return addition in a string as well as subtraction 
# Example - '1plus2plus3plus4'), '10'; 1plus2plus3minus4'), '2'
# Concerns - I use the wrong method
# Explain - 