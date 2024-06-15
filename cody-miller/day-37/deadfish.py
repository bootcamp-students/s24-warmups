def parse(data):
    value = 0
    output = []
    for char in data:
        if char == 'i':
            value += 1
        elif char == 'd':
            value -= 1
        elif char == 's':
            value = value ** 2
        elif char == 'o':
            output.append(value)
        
    return output

"""
    Ember's Feedback:
    - Excellent, great work :D
"""