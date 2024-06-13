def find_short(s):
    word = s.split(" ")

    short = min(word, key=len)

    return len(short)


# Parameters- find the shortest word length
# Return- My function should return the shortest word in the string
# Example- bitcoin take over the world maybe who knows perhaps"), 3
# Concerns- I could use the wrong method to solve this
# Explain- split the string. use len so min() knows how to determine the smallest value.
# and use min to return the lowest valued item in the array

"""
    Ember's Feedback:
    - Great job :D
    - Not sure what you
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
