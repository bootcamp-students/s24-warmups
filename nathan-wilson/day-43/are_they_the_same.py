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
    
# an array of integers

# a boolean

#  a1 = [121, 144, 19, 161, 19, 144, 19, 11]
#  a2 = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]
#  True

# I could do the math wrong or have a type error

# sort both arrays individually, then if they are the same length ill loop through them and compare
# them by their indexes and check if b is the square of a, if all of them are then ill return true else false

# I can do this