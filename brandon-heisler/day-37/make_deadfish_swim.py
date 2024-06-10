def parse(data):
    data = data.lower()
    return_array = []
    value = 0
    for letter in data:
        if letter == "i":
            value = value + 1
        if letter == "d":
            value = value - 1
        if letter == "s":
            value = value ** 2
        if letter == "o":
            return_array.append(value)
        print (letter);
        
    return return_array
# i need to write a function that takes a string and loops through each letter
#check for invalid characters.
# running the letters through a series of checks based on 4 letters and
# returns the result as an array,
# ill make a for loop over the string and do some operations.
# first ill make sure the letter is lower case.
# then ill run through the idso letters.