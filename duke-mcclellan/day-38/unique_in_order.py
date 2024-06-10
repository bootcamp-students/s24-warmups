##Parameters - sequence
##Return - a list of items without elements of the same value
##next to each other
##Example - unique_in_order([1, 2, 2, 3, 3]) == [1, 2, 3]
##Concern - wrong method
##Explain - I want to iterate over the objects in the array.  In each pass, 
##I want the function to detect an identical value and remove it from the array 


def unique_in_order(sequence):
    
    result = []
    for i, item in enumerate(sequence):
        if i == 0 or item != sequence[i -1]:
            result.append(sequence[i])
    return result