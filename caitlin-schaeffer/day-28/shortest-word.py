# Instructions: Simple, given a string of words, return the length of the shortest word(s). String will never be empty and you do not need to account for different data types.
# Examples: "bitcoin take over the world maybe who knows perhaps") = 3
# Params: given a string
# Return: integer
# Concerns: none
# Solution:

# Given Code:
# def find_short(s):
#     # your code here
#     return l # l: shortest word length

def find_short(s):
    words = s.split()
    sort = sorted(words, key=len)
    firstWord = sort[0]
    l = len(firstWord)
    return l

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
