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