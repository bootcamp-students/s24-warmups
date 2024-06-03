# Instructions: Complete the method/function so that it converts dash/underscore delimited words into camel casing. 
# The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, 
# also often referred to as Pascal case). The next words should be always capitalized.
# Example: 
# "the-stealth-warrior" gets converted to "theStealthWarrior"
# "The_Stealth_Warrior" gets converted to "TheStealthWarrior"
# Params: Given string with dashes/underscores
# Return: String with no dashes/underscores, converted start of each word to capital 
# Concerns: trying to make an efficient code
#Pseudo Code: take out all dashes and underscores, lowercase the first word, capitalize all others, return a string joined together
# Solution: 
# Given code:
# def to_camel_case(text):
#     return

#I'm going to clean up the code I wrote earlier:
def to_camel_case(text):
    # set up a guard clause for blank strings first and foremost
    if text == '':
        return ''
    
    # Replace dashes and underscores with spaces in one line instead of splitting it into a big if else
    text = text.replace("-", ' ').replace("_", ' ')
    
    # Split the string into individual words
    words = text.split()
    
    # Take each individual element, leaving the element at index[0] alone, then capitalize all of the other words
    for i in range(len(words)):
        if i == 0:
            words[i] = words[i]
        else:
            words[i] = words[i].capitalize()
    
    # Now join all of the manipulated elements back into one string
    result = ''.join(words)
    return result




#I misread the instructions, or more so I assumed it was camel case where the first letter is lowercase, so all this code is dumb:

# def to_camel_case(text):
#     # set up a guard clause for blank strings 
#     if text == '':
#         return ''
    
#     # do an if else to get rid of dashes/underscrores and return camel case
#     if "-" in text:
#         no_dashes = text.replace("-", ' ')
#         print('NO DASHES: ', no_dashes)
#         listed1 = no_dashes.split()
#         print('LISTED1: ', listed1)
#         for i in range(len(listed1)):
#             if i == 0:
#                 listed1[i] = listed1[i].lower()
#             else:
#                 listed1[i] = listed1[i].title()
#                    # Join the words back into a single string
#         return ''.join(listed1)
#     elif "_" in text:
#         no_underscores = text.replace("_", ' ')
#         print('NO UNDERSCORES: ', no_underscores)
#         listed2 = no_underscores.split()
#         print('LISTED2: ', listed2)
#         for i in range(len(listed2)):
#             if i == 0:
#                 listed2[i] = listed2[i].lower()
#             else:
#                 listed2[i] = listed2[i].title()
#                    # Join the words back into a single string
#         return ''.join(listed2)
    
