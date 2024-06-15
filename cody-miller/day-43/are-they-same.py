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