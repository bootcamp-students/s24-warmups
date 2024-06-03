import re

def to_camel_case(text):
    split_array = re.split(r'_|-', text)
    
    final_array = []
    
    for word in split_array:
        if word == split_array[0]:
            final_array.append(word)
        else:
            final_array.append(word.capitalize())
            
    return "".join(final_array)
    

# a string

# a string

# ("the_stealth_warrior"), "theStealthWarrior"

# I could have a logic or type error

# Take the text split it at the _ and the -, then for each element in the array capitalize the first letter, leave the first element
# as it was originally, combine the array and return it as a string

# I can do this