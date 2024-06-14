def comp(array1, array2):
    try:
        return sorted([i ** 2 for i in array1]) == sorted(array2)
    except:
        return False
	
    
    
#Parameters- array1 and array2
#Return, my function should return whether an array is the squares of the elements. 
#example-  [121, 144, 19, 161, 19, 144, 19, 11]
 #       a2 = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]
#Concern- I don't understand the function. I'm confused on if i should throw an error or not. 
#Explain- i need to first understand the math between array one and array 2. the values in array 1 are being squared to equal the values in array 2.
#   using sorted will make sure that the order of the array doesn't get mixed up. using a try block with except to handle potential errors, if one occurs, 
#   and creating a new list/array in array1 with the squared values. 

"""
    Ember's Feedback:
    - Good use of try except!
"""