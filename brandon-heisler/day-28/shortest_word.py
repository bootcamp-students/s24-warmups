def find_short(s):
    split_array = s.split()
    length = 100
    
    for word in split_array:
        if length > len(word):
            length = len(word)
        
    return length # l: shortest word length

# problem isnt too bad, i need to split the string into an array, strings arent mutable in python
# then establish a check, l = 100
#for each word in the array, if 100 is > than the length of the word
#then l = length of the shortest word. return l.
#basically just subtracting down until l is = to the shortest word.
