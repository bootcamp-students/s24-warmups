# P- s , listWords, shortestWordLength
# R - shortestWordLength
# split string - .split()
# shortestWordLength = len(listWords[0])
# iterate through words
#     if len(x) < shortesetWordLength
#         shortestWordLength = len(x)
# return shortestWordLength


def find_short(s):
    list_words = s.split()
    shortest_word_length = len(list_words[0])
    
    for x in list_words:
        if len(x) < shortest_word_length:
            shortest_word_length = len(x)
    return shortest_word_length 
