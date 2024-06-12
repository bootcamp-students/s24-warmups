import re
def to_camel_case(text):
    # var to split text into a list that removes all_ and -
    words = re.split("[-_]", text)
    # combine and capitalize
    result = words[0] + "".join(word.capitalize() for word in words [1:])
    return result

# embers solution

"""
    Ember's Feedback:
    - Good work!
"""