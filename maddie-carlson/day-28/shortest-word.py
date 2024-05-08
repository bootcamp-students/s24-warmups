def find_short(s):
    #function takes a string of words, needs to return the length of the shortest word in the sentence
    #to solve, first split the string into an array of words
    
    array = s.split(" ")
    l = 10000 #begin comically large
    
    #then, loop over the array, checking length and saving the smallest length found
    for i in range(len(array)):
        word = array[i]
        if len(word) < l:
            l = len(word)        
    
    #return the smallest word length
    return l
