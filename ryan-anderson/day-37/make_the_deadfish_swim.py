def parse(data):
    value = 0
    output_list = []
    data_list = list(data)
    for char in data_list:
        if char == 'i':
            value += 1
        elif char == 'd':
            value -= 1
        elif char == 's':
            value = value ** 2 # i initially tried value ^ 2 which didn't work, then learned about **
        elif char == 'o':
            output_list.append(value)
        else:
            value = value # skips over invalid characters
    return output_list

# increment value (++?)
# decrement value (--?)
# square value (^2)
# output value

# split string to create a list to iterate over
# split didn't work, use list() instead
# for loop over list, performing action corresponding to each character

"""
    Ember's Feedback:
    - Great work! :D
    - You can for-in loop over a string without it being a list
"""


# Alternative Solution
def parse(data):
    default_value = 0
    return_array = []

    for command in data:
        match command:
            case "i":
                default_value += 1
            case "d":
                default_value -= 1
            case "s":
                default_value *= default_value
            case "o":
                return_array.append(default_value)

    return return_array
