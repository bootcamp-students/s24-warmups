def find_short(s):
    lowestWord = 1000
    for word in s.split(" "):
        if len(word) < lowestWord:
            lowestWord = len(word)
    return lowestWord

# a string of words

# return a number representing the length of the shortest words

# "bitcoin take over the world maybe who knows perhaps", 3

# I could have a type error, or incorrectly loop through the string

# Split the string by spaces, then loop through each word getting the length, compare the length to an outside variable
# if its less than replace the variable with that length. Then return the variable

# I'm doing great!

"""
    Ember's Feedback:
    - Great job!
    - naming convention in python for variable name is snake_case not camelCase
"""


# Alternative Solutions
# create a list of words (split is by space (" ") by default)
# map that list applying the len function to each element, resulting in a list of integers
# return the minimum number value from that list of numbers
def find_short(s):
    return min(map(len, s.split()))


# Get the shortest word from the list of words, using the len function as the key to determine minimum value
# Return the integer value of the length of the shortest word
def find_short(s):
    shortest = min(s.split(), key=len)
    return len(shortest)
