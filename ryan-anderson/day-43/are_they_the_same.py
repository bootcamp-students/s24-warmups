import math

def comp(array1, array2):
    if array1 == None or array2 == None: # return false if either array is None
        return False
    
    if array1 == [] and array2 != []: # return false if one of the arrays is empty, but not the other
        return False
    if array1 != [] and array2 == []: # if both arrays are empty, true should be returned
        return False
    
    for i in range(0, len(array1)): # changes negative numbers in array1 to positive
        if array1[i] < 0:           # so that sorting will put numbers in order of absolute value
            array1[i] *= (-1)
            
    array1 = sorted(array1) # sorts arrays in numerical order so that
    array2 = sorted(array2) # entries can be directly compared by index
    
    for i in range(0, len(array1)):
        if array2[i] != array1[i]**2:   # checking by indices will check whether the elements in array2
            print(array1[i], array2[i]) # have the same multiplicity as the corresponding elements in array1
            return False
    return True

# check if all values in array2 are the square of a value in array1
# return true or false