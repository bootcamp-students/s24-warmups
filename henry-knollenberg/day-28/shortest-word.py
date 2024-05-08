# P- s , listWords, shortestWordLength
# R - shortestWordLength
# split string - .split()
# shortestWordLength = len(listWords[0])
# iterate through words
#     if len(x) < shortesetWordLength
#         shortestWordLength = len(x)
# return shortestWordLength

def find_short(s):
    listWords = s.split()
    shortestWordLength = len(listWords[0])
    
    for x in listWords:
        if len(x) < shortestWordLength:
            shortestWordLength = len(x)
    return shortestWordLength 