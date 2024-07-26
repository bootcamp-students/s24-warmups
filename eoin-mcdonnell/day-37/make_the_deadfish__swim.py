def parse(data):
    # TODO: your code here
    num = 0
    arr = []
    for letter in data:
        if letter == 'i':
            num += 1
        elif letter == 'd':
            num -= 1
        elif letter == 's':
            num *= num
        elif letter == 'o':
            arr.append(num)
    return arr