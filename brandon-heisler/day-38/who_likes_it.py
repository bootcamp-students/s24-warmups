def likes(names):
    if len(names) == 0:
        return('no one likes this')
    elif len(names) == 1:
        return('{} likes this'.format(names[0]))
    elif len(names) == 2:
        return('{} and {} like this'.format(names[0], names[1]))
    elif len(names) == 3:
        return('{}, {} and {} like this'.format(names[0], names[1], names[2]))
    elif len(names) > 3:
        others_count = len(names) - 2
        return('{}, {} and {} others like this'.format(names[0], names[1], others_count))
        pass
    
#     im going to make an if statement to check for the length of the given array and format 
# elif statements for different conditions and format the string accordingly, attaching
# the names and counts for each case