def to_camel_case(text):
    if text == "":
        return ""
    first_char = text[0]  # stores first letter's original case
    text = (
        text.replace("-", " ").replace("_", " ").title().replace(" ", "")
    )  # replace underscores and dashes with spaces,
    # capitalize each character following a space,
    # remove spaces
    return text.replace(
        text[0], first_char
    )  # return modified string with original first character, in case it was lowercase


# return empty string if input is empty string
# replace underscores and dashes with spaces
# use title() to capitalize each word

"""
    Ember's Feedback:
    - Good job!
    - I personally like writing line comments above the lines of code, because formatters don't know how to handle them -
      when they are at the end of the line
"""

# Alternative Solution

import re


def to_camel_case(text):

    # created a variable to split text into a list that removes all _ and -
    words = re.split("[-_]", text)
    # combine the first word with the capitalized versions of the subsequent words
    result = words[0] + "".join(word.capitalize() for word in words[1:])

    return result
