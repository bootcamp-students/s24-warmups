import re

def calculate(s):
    print(s)
    
    numbers = re.split('plus|minus', s)

    operators = re.split("\d+", s)
    operators.pop(0)
    operators.pop(-1)
    final_sum = int(numbers[0])
    
    print(operators)
    print(numbers)
    for number in range(len(operators)):
        iterator = int(number)
        print(iterator)
        if operators[iterator] == "plus":
            final_sum += int(numbers[iterator + 1])
        else:
            final_sum -= int(numbers[iterator + 1])
        
    return str(final_sum)

# A string

# Return a string number

# '1plus2plus3plus4'), '10'

# I could have a type error

# Take the string, get the character before any operator string convert it to a number
# , then take the operators out. Store them
# in arrays, then operate on them in order [0] with [0] and so on. Then convert it back to a string and
# return the solution

# I can do this