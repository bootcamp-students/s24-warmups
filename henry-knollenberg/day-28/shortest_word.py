# P- s , listWords, shortestWordLength
# R - shortestWordLength
# split string - .split()
# shortestWordLength = len(listWords[0])
# iterate through words
#     if len(x) < shortesetWordLength
#         shortestWordLength = len(x)
# return shortestWordLength


def find_short(s):
<<<<<<< HEAD:henry-knollenberg/day-28/shortest_word.py
    list_words = s.split()
    shortest_word_length = len(list_words[0])
    
    for x in list_words:
        if len(x) < shortest_word_length:
            shortest_word_length = len(x)
    return shortest_word_length 
=======
    listWords = s.split()
    shortestWordLength = len(listWords[0])

    for x in listWords:
        if len(x) < shortestWordLength:
            shortestWordLength = len(x)
    return shortestWordLength


"""
    Ember's Feedback:
    - rename file to use snake case
    - the naming convention for python is to snake case variables, so
    list_words instead of listWords, etc...
    Please make that change and push up the update.
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
>>>>>>> main:henry-knollenberg/day-28/shortest-word.py
