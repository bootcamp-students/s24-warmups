def calculate(s):
    string = s.replace("plus", "+").replace("minus", "-") 
    return str(eval(string))
    

# I believe I can use eval to evalute the string 
# once the operators have been converted
# The re can be used to replace spelled out operators
# Turns out that replace is easier to use to replace words
# with operators