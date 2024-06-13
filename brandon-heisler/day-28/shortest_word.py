def find_short(s):
    split_array = s.split()
    length = 100

    for word in split_array:
        if length > len(word):
            length = len(word)

    return length  # l: shortest word length


# problem isn't too bad, i need to split the string into an array, strings aren't mutable in python
# then establish a check, l = 100
# for each word in the array, if 100 is > than the length of the word
# then l = length of the shortest word. return l.
# basically just subtracting down until l is = to the shortest word.

"""
    Ember's Feedback:
    - Great job! :D

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
