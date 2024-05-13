# parameters- take a string and turn it into an equation.
# return- the string equation result
# example- "1plus2plus3plus4"  --> "10"
# explain- we replace plus with + and replace minus with -. evaluate s with the new operators. return the result as a string.

import re
def calculate(s):
    s = s.replace('plus', '+').replace('minus', '-')
    
    result = eval(s)
    
    return str(result)