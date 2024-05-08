def find_short(s):
    # your code here
    # find word length
    # return word length for word
    return min(len(word) for word in s.split()) # len: shortest word length
