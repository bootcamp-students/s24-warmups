def find_short(s):
    # your code here
    # find word length
    # return word length for word
    return min(len(word) for word in s.split()) # len: shortest word length
"""
    Ember's Feedback:
    - good job
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
