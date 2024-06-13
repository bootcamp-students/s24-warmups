# Instructions: Write a simple parser that will parse and run Deadfish.
# Deadfish has 4 commands, each 1 character long:
#   i increments the value (initially 0)
#   d decrements the value
#   s squares the value
#   o outputs the value into the return array
# Invalid characters should be ignored.
# Example: 
# parse("iiisdoso")  ==>  [8, 64]
# Params: string
# Return: integer list
# Concerns: handling loop
# Solution: for loop with if written for each letter function
# Given code:
# def parse(data):
#  your code here
#     return []



def parse(data):
    value = 0
    return_array = []
    
    for letter in data:
        if letter == 'i':
            value += 1 
        if letter == 'd':
            value -= 1
        if letter == 's':
            value**=2
            #this is the same thing as value * value
        if letter == 'o':
            return_array.append(value)

    return return_array


"""
    Ember's Feedback:
    - Good work!
"""

# Alternative Solution
def parse(data):
    value = 0
    return_array = []
    
    for letter in data:
        match letter:
            case "i":
                value += 1
            case "d":
                value -= 1
            case "s":
                value *= value
            case "o": 
                return_array.append(value)
            case _: #ignore invalid characters
                pass

    return return_array