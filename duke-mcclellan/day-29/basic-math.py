##parameters - string
##return - string 
##example - 1plus2plus3plus4"  --> "10"
#concerns - learning a new language 
##explain - using eval to evaluate the resulting expression stored in the string
##and replace to remove plus and + and return the string. 

def calculate(s):
    string = s.replace("plus", "+").replace("minus", "-") 
    return str(eval(string))