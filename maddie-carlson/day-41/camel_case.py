def to_camel_case(text):
    #function takes a string delimited by dashes or underscores, needs to return the same string in camelCase
    
    if len(text) < 1: #check for an empty string
        return ""
    
    #to solve, replace any dashes in the string with underscores, then split it by underscores
    text = text.replace("-", "_")
    array = text.split("_")
    
    #now that we have our array, loop over it, ignoring the FIRST word and then capitalize the rest
    for i in range(len(array)):
        if i < 1:
            continue
        array[i] = array[i].capitalize()
    
    #then recombine our array
    new_text = ""
    for word in array:
        new_text = new_text + word
    
    return new_text
