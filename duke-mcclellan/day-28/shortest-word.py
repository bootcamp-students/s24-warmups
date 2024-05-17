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
