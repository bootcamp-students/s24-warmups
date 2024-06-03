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
    print(n)
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