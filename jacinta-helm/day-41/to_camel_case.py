import re 
def to_camel_case(text): 
    words = re.split("[-_]", text)
    result = words[0] + "".join(word.capitalize() for word in words[1:])
    
    return result



#     # i'm replacing underscores and dashes with spaces
#     text = text.replace("_", " ").replace("-", " ")
    
#     # I split the text into words
#     words = text.split()
    
#     # I combine the words into camelCase
#     if len(words) == 0:
#         return ""
    
#     camel_str = words[0].lower() + ''.join(word.capitalize() for word in words[1:])
    
#     return camel_str



#parameters text, string 
#return, my function should return a string in CamelCase
#example "the_stealth_warrior"), "theStealthWarrior", "to_camel_case('the_stealth_warrior'
#Concerns, I confuse SnackCase and CamelCase with each other 
#expalin, I need to replace all dashes and hyphens with spaces. 
#then split the string into seperate words. 
#then make the first letter in each word capital except the first one. while joining them together

