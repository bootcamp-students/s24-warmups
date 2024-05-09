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
    print("firstWord:", firstWord)
    l = len(firstWord)
    print("l:", l)
    return l
