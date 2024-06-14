# find integer count
def find_short(s):
    list = s.split()
    length = float("inf")
    for word in list:
        if len(word) < length:
            length = len(word)
    return length


# also this work


def find_short(s):
    # split the wor
    words = s.split()

    # min len for word in wor
    shortest_word_length = min(len(word) for word in words)
    return shortest_word_length


"""
    Ember's Feedback:
    - Great job! :D
    - Two solutions for the price of one
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
