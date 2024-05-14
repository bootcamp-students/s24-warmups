#replace the work plus with +
#repplace minus 
#after 

def calculate(s):
    evaluated = eval(s.replace("plus","+").replace("minus","-"))
    return str(evaluated)