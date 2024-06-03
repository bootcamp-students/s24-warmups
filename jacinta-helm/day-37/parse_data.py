def parse(data):
    value = 0
    value_array = []
    
    for letter in data:
        if letter == 'i':
            value += 1;
        elif letter == 'd':
            value -= 1;
        elif letter == 's':
            value **= 2;
        elif letter == 'o':
            value_array.append(value) 
    return value_array
#     return ['letter']
    
# Parameters parse the data that is in my function 
#Return my function should return the value of each letter equaling a symbol and the math 
#Example ooo"), [0,0,0], ioioio"), [1,2,3], isoisoiso"), [1,4,25,
#Concerns, I use the wrong method on this function, or i forget how to square a value in python
#Explain set the starting value to 0, then i will use a switch case along with appending, which will add the elements in a list, and return the output.

