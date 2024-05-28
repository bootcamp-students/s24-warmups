# parameters- given a string of words return the shortest word / words
# example- ("bitcoin take over the world maybe who knows perhaps"), 3
# syntax tripped me up a bit here because I kept trying to do javascript by habit.


def find_short(s):
    words = s.split(" ")
    shortest = min(map(lambda word: len(word), words))
    return shortest


"""
    Ember's Feedback:
    - Great job!
    - You can actually nix the argument to split as it does empty space by default
    - Also, since you are applying the "len" to each element, in both JS and in Python
        you don't need an inline function. You just give the function definition as an -
        argument to map and it calls the function for you.
        e.g. JS [].map(len) // assuming a "len" function exists
        Below is how you would write that in Python
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
