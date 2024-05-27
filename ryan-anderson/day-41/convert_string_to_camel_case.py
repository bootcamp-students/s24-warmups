def to_camel_case(text):
    if text == '':
        return ''
    first_char = text[0] # stores first letter's original case
    text = text.replace('-',' ').replace('_',' ').title().replace(' ','') # replace underscores and dashes with spaces, 
                                                                          # capitalize each character following a space,
                                                                          # remove spaces
    return text.replace(text[0], first_char)    #return modified string with original first character, in case it was lowercase

# return empty string if input is emptry string
# replace underscores and dashes with spaces
# use title() to capitalize each word