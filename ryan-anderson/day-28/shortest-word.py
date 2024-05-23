def find_short(s):
    word_list = s.split()
    min_len = 9999
    for w in word_list:
        if len(w) < min_len:
            min_len = len(w)
    return min_len


# split string into array of words
# initialize min length variable at 9999 to ensure something in array will be shorter than it
# loop over array, if a word is shorter than current min length then it becomes new min length

"""
    Ember's Feedback:
    - Great job!
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
