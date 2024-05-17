import re
def calculate(s):
    s = re.sub('plus', '+', s)
    s = re.sub('minus','-', s) 
    return str(eval(s))
