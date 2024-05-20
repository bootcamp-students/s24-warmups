def find_short(s):
    print(s)
    
    word = s.split(" ")
    
    short = min(word, key=len)
    print(short)
    
    return len(short)


# Parameters- find the shortest word length 
# Return- My function should return the shortest word in the string
# Example- bitcoin take over the world maybe who knows perhaps"), 3
# Concerns- I could use the wrong method to solve this
# Explain- split the string. use len to show the number of items in an object
# and use min to return the lowest valued item in the array
