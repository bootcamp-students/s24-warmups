def find_short(s):
    words = s.split()
    length = [len(word) for word in words]
    smallest_length = min(length)
    return smallest_length


# will use map
# will use math.min
# dont forget to import map

"""
    Ember's Feedback:
    - Rename this file to conform to the class standard, also give it a mime type .py
    - Great job!
    - You can actually do this much simpler in Python
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
