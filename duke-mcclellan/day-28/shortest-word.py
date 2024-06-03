##parameters - length of shortest word
##return - shortest word
##example - whichever word is shortest in length needs to be returned
##concern - wrong method
##explain - I need to split the string of words and calculate the minimum length word to return the result


def find_short(s):
    # Split the string into words
    words = s.split()

    # Find the length of the shortest word
    shortest_length = min(len(word) for word in words)

    return shortest_length


"""
    Ember's Feedback:
    - great job, most excellent :D
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
