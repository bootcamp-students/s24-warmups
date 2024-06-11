# Instructions: Implement the function which takes an array containing the names of people that like an item. It must return the display 
# text as shown in the examples:
# Example: 
# []                          -->  "no one likes this"
# ["Peter"]                   -->  "Peter likes this"
    # Note: For 4 or more names, the number in "and 2 others" simply increases.
# Params: given a list
# Return: a string
# Concerns: converting number length minus two to a string
# Solution: if else, could do a matchcase as well
# Given code:
# def likes(names):
#     # your code here
#     pass


def likes(names):
    status = ''
    n = len(names)
    if n <= 0:
        status = 'no one likes this'
    elif n == 1:
        status = names[0] + ' likes this'
    elif n == 2:
        status = names[0] + ' and ' + names[1] + ' like this'
    elif n == 3:
        status = names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this'
    elif n >= 4:
        number = n - 2
        insert = str(number)
        status = names[0] + ', ' + names[1] + ' and ' + insert + ' others like this'
    else:
        'not real'
    return status

# return f'{names0} and {names1} like this'

# Alternative Solutions
def likes(names):
    match len(names):
        case 0:
            return "no one likes this"
        case 1:
            return f"{names[0]} likes this"
        case 2:
            return f"{names[0]} and {names[1]} like this"
        case 3:
            return f"{names[0]}, {names[1]} and {names[2]} like this"
        case _:
            return f"{names[0]}, {names[1]} and {len(names) - 2} others like this"


# OR
def likes(names):
    n = len(names)
    return {
        0: "no one likes this",
        1: "{} likes this",
        2: "{} and {} like this",
        3: "{}, {} and {} like this",
        4: "{}, {} and {others} others like this",
    }[min(4, n)].format(*names[:3], others=n - 2)


# OR
def likes(names):
    match names:
        case []:
            return "no one likes this"
        case [a]:
            return f"{a} likes this"
        case [a, b]:
            return f"{a} and {b} like this"
        case [a, b, c]:
            return f"{a}, {b} and {c} like this"
        case [a, b, *rest]:
            return f"{a}, {b} and {len(rest)} others like this"