def to_camel_case(text):
    # function takes a string delimited by dashes or underscores, needs to return the same string in camelCase

    if len(text) < 1:  # check for an empty string
        return ""

    # to solve, replace any dashes in the string with underscores, then split it by underscores
    text = text.replace("-", "_")
    array = text.split("_")

    # now that we have our array, loop over it, ignoring the FIRST word and then capitalize the rest
    for i in range(len(array)):
        if i < 1:
            continue
        array[i] = array[i].capitalize()

    # then recombine our array
    new_text = ""
    for word in array:
        new_text = new_text + word

    return new_text


"""
    Ember's Feedback:
    - Good work!
    - on line 12, you can just start the range at 1 instead of zero. range(1, len(array))
        that would allow you to not perform the i < 1 check on each pass of the loop, saving you compute
"""
# Alternative Solution

import re


def to_camel_case(text):

    # created a variable to split text into a list that removes all _ and -
    words = re.split("[-_]", text)
    # combine the first word with the capitalized versions of the subsequent words
    result = words[0] + "".join(word.capitalize() for word in words[1:])

    return result
