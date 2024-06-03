def create_phone_number(n):
    #takes an array of numbers and is supposed to return them formatted as a phone number
    #fairly easy, just loop over the array and format accordingly (888) 888-8888
    
    #start with a string
    phone = "("
    
    for i in range(len(n)):
        #handle special formatting
        next = str(n[i])
        
        if i == 3:
            phone = phone + ") " + next #close parenthesis
        elif i == 6:
            phone = phone + "-" + next #add dash
        else:
            phone = phone + next #add num
    
    return phone
