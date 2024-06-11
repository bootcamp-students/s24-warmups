def parse(data):
    num = 0
    arr = []
    for letter in data:
        if letter == "i":
            num += 1
        elif letter == "d":
            num -= 1
        elif letter == "s":
            num *= num
        elif letter == "o":
            arr.append(num)
    return arr


"""
    Ember's Feedback:
    - good work
"""
