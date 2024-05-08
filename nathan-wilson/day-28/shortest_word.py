def find_short(s):
    lowestWord = 1000
    for word in s.split(" "):
        if len(word) < lowestWord:
            lowestWord = len(word)
    return lowestWord

# a string of words

# return a number representing the length of the shortest words

# "bitcoin take over the world maybe who knows perhaps", 3

# I could have a type error, or incorrectly loop through the string

# Split the string by spaces, then loop through each word getting the length, compare the length to an outside variable
# if its less than replace the variable with that length. Then return the variable

# I'm doing great!