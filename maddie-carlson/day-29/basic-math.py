def calculate(s):
    # function takes a string detailing a series of addition/subtraction operations with NO spaces
    # needs to return the result of these operations

    # to solve, replace all the pluses and minuses with " + " and " - "
    # the spaces are important!

    s = s.replace("plus", " + ")
    s = s.replace("minus", " - ")

    # then split our string by spaces
    array = s.split(" ")

    # then loop over our array, adding and subtracting as needed
    result = 0
    operator = "+" #start with plus to add our first result

    for value in array:
        if value.isnumeric(): #num
            if operator == "+":
                result += int(value)
            elif operator == "-":
                result -= int(value)
            operator = "" #blank until we get a new op
        else: #+ or -
            operator = value

    # return our result as a string (for some reason)
    return str(result)

"""
    Ember's Feedback:
    - U R awesome :D
"""


# Alternative Solution
def calculate(s):
    s = s.replace("minus", " -")
    s = s.replace("plus", " ")
    s = s.split()
    s = map(int, s)
    s = sum(s)
    return str(s)


# OR
def calculate(s):
    return str(sum(map(int, s.replace("minus", " -").replace("plus", " ").split())))


def calculate(s):
    return str(
        sum(int(num) for num in s.replace("minus", " -").replace("plus", " ").split())
    )
