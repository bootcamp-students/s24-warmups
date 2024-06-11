def parse(data):
    #function takes a string, needs to parse it with the Deadfish esolang and return a list of outputs
    #takes four commands:
    # i increments value (init 0)
    # d decrements value
    # s squares the value
    # o outputs the value
    
    array = []
    value = 0
    
    #to solve, loop over the input string, manipulating and storing value in array
    for i in range(len(data)):
        char = data[i]
        
        match char:
            case "i":
                value += 1
            case "d":
                value -= 1
            case "s":
                value *= value
            case "o": 
                array.append(value)
            case _: #ignore invalid characters
                pass
    
    return array

"""
    Ember's Feedback:
    - Wonderful work :)
"""