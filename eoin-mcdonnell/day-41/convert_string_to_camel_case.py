import re

def to_camel_case(text):
    text = text.replace('-', '_')
    text = text.split('_')
    index = 0
    camelcase = ""
    for word in text:
        index += 1
        if index == 1:
            camelcase += word
        else:
            camelcase += word.capitalize()
    return camelcase