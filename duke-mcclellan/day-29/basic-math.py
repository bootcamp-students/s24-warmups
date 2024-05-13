##parameters - string
##return - string 
##example - 1plus2plus3plus4"  --> "10"
#concerns - learning a new language 
##explain - 

def calculate(s):
    string = s.replace("plus", "+").replace("minus", "-") 
    return str(eval(string))
