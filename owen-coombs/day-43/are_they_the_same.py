def comp(array1, array2):
    if array1 is None or array2 is None:
        return False 
    
    return sorted ([i **2 for i in array1]) == sorted(array2)
	
    
    
    
    
## will use None to in an if statement to see if its true or false
## **2 is the math for squared 
## will use sort to sort the result in the array after they have been squared 
## compare sorrted array1 to sorted array 2 

"""
    Ember's Feedback:
    - Great work!
"""
# Alternative Solution


def comp(array1, array2):
    try:
        return sorted([i**2 for i in array1]) == sorted(array2)
    except:
        return False