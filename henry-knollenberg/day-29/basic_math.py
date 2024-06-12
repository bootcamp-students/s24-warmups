# P-s
# R-answerStr

# replace plus > +
# replace minus > -
# if plus in s
# if minus in s

# .split

# iterate over list
#     if isnumeric() then current_num
#         else if + then current current_op
#         else if - then current_op

#     if current op +
#         then acc + current_num
#     else if current_0p -
#         then acc - current_num


def calculate(s):
    s = s.replace("plus", " + ")
    s = s.replace("minus", " - ")
    arr = s.split(" ")
    current_number = 0
    acc = int(arr[0])
    current_op = ""
    for a in arr:
        if a.isnumeric():
            current_number = int(a)
            if current_op == "+":
                acc = current_number + acc
            elif current_op == "-":
                acc = acc - current_number
        else:
            current_op = a

    return str(acc)


"""
    Ember's Feedback:
    - Make file name snake_case
    - Great job :D Thank you for not using eval lol
"""


# Alternative Solution
def calculate(s):
    s = s.replace("minus", " -")
    s = s.replace("plus", " ")
    s = s.split()
    s = map(int, s)
    s = sum(s)
    return str(s)


# OR
def calculate(s):
    return str(sum(map(int, s.replace("minus", " -").replace("plus", " ").split())))


def calculate(s):
    return str(
        sum(int(num) for num in s.replace("minus", " -").replace("plus", " ").split())
    )
