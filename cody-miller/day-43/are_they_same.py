def comp(array1, array2): 
    if type(array1) is list and type(array2) is list:
        array1 = sorted([abs(number) for number in array1])
        array2 = sorted([abs(number) for number in array2]) 
        
        if len(array1) != len(array2):
            return False
        
        for i in range(len(array1)):
            if abs(array1[i]) ** 2 != abs(array2[i]):
                return False  
            
        return True  
    
    else:
        return False

"""
    Ember's Feedback:
    - Good job!
    - Squaring a number makes it positive so the abs call are uncessary
    - do the square in your list comprehension on line 3, so that way you can forgo
    the for loop to check the values. Because it is sorted you can just leverage pythons
    built in comparisson of lists. array1 == array2 will look at every value in order for you
    and return true if they are all the same.
"""