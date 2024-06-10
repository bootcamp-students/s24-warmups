import re


def to_camel_case(text):
    split_array = re.split(r"_|-", text)

    final_array = []

    for word in split_array:
        if word == split_array[0]:
            final_array.append(word)
        else:
            final_array.append(word.capitalize())

    return "".join(final_array)


# a string

# a string

# ("the_stealth_warrior"), "theStealthWarrior"

# I could have a logic or type error

# Take the text split it at the _ and the -, then for each element in the array capitalize the first letter, leave the first element
# as it was originally, combine the array and return it as a string

# I can do this

"""
    Ember's Feedback:
    - Great work!
    - Good use of regex as the argument for split
"""
def to_camel_case(text):
    # created a variable to split text into a list that removes all _ and -
    words = re.split("[-_]", text)
    # combine the first word with the capitalized versions of the subsequent words
    result = words[0] + "".join(word.capitalize() for word in words[1:])

    return result
