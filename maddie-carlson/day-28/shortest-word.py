def find_short(s):
    # function takes a string of words, needs to return the length of the shortest word in the sentence
    # to solve, first split the string into an array of words

    array = s.split(" ")
    l = 10000 #begin comically large

    # then, loop over the array, checking length and saving the smallest length found
    for i in range(len(array)):
        word = array[i]
        if len(word) < l:
            l = len(word)

    # return the smallest word length
    return l

"""
    Ember's Feedback:
    - Great work :D
    - you can actually leave out the " " from split as that is the default, if you wish
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
