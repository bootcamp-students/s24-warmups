def calculate(s):
    s = s.replace('plus', '+').replace('minus', '-')
    return str(eval(s))
        
#separate words and numbers
#add at plus or subtract at minus