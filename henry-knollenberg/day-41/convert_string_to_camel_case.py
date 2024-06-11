# Parameters - string
# Return - string camel case
# split into list
# iterate over list
# if next to be capitalized is true, return capital and set not next to be capitalized
# else if - or _ return "", and set next to be capitalized
# else, set not next to be capitalized and return itself
# return joined list string


def to_camel_case(text):
    lst = []
    for letter in text:
        lst.append(letter)

    next_cap = False
    lst_return = []
    for l in lst:
        if next_cap == True:
            lst_return.append(l.capitalize())
            next_cap = False
        elif l == "-" or l == "_":
            next_cap = True
        else:
            lst_return.append(l)
            next_cap = False
    return "".join(lst_return)


"""
    Ember's Feedback:
    - Good work :D
    - so you can make a list from a string by simply invoking the list class
     eg: lst = list(text)
    - For the sake of readability, don't use variable names like "l", use something descriptive like "letter"
"""
# Alternative Solution
import re


def to_camel_case(text):
    # created a variable to split text into a list that removes all _ and -
    words = re.split("[-_]", text)
    # combine the first word with the capitalized versions of the subsequent words
    result = words[0] + "".join(word.capitalize() for word in words[1:])

    return result
