# parameters- take a string of words separated by dashes or underscores and camelcase them.
# return- string of words camelcased
# example- "the-stealth-warrior" gets converted to "theStealthWarrior"


def to_camel_case(text):
    splits = text.replace("-", "_").split("_")

    if len(splits) == 1:
        return splits[0]

    camel = [splits[0]] + [split[0].upper() + split[1:] for split in splits[1:]]

    return "".join(camel)


"""
    Ember's Feedback:
    - Good work!
"""

# Alternative Solution

import re


def to_camel_case(text):

    # created a variable to split text into a list that removes all _ and -
    words = re.split("[-_]", text)
    # combine the first word with the capitalized versions of the subsequent words
    result = words[0] + "".join(word.capitalize() for word in words[1:])

    return result
