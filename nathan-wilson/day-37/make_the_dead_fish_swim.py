def parse(data):
    final_list = []
    cur_int = 0
    
    def increment():
        nonlocal cur_int
        cur_int += 1
    def decrement():
        nonlocal cur_int
        cur_int -= 1
    def square():
        nonlocal cur_int
        cur_int *= cur_int
    def output():
        final_list.append(cur_int)
    
    filtered_char_string = data
    
    for char in filtered_char_string:
        if char != "i" and char != "d" and char != "s" and char != "o":
            filtered_char_string = filtered_char_string.replace(char, "")
            
    for char in filtered_char_string:
        if char == "i":
            increment()
        elif char == "d":
            decrement()
        elif char == "s":
            square()
        else:
            output()
            
    return final_list

# takes a string

# returns a list of integers

# "ioioio"), [1,2,3]

# I could get a type error or do the math wrong

# Take the string and take out all of the characters that dont eqla i d s or o
# have a dictonary that corresponds with what the letters do
# loop over the string and for each character do the value of that character in the dictionary to the character
# save the result in an external string
# return that string