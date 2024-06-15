def coin_combo(cents):
    coin_list = [0, 0, 0, 0]

    coin_list[3] = cents // 25
    cents %= 25

    coin_list[2] = cents // 10
    cents %= 10

    coin_list[1] = cents // 5
    cents %= 5

    coin_list[0] = cents

    return coin_list


"""
    Ember's Feedback:
    - please remove print statements when you push these up for review
    - no mime type on file
    - file is not  snake_case, which is the convention for python files
"""
# Alternative Solution


def coin_combo(cents):
    quarters = cents // 25
    dimes = cents % 25 // 10
    nickels = cents % 25 % 10 // 5
    pennies = cents % 25 % 10 % 5
    return [pennies, nickels, dimes, quarters]
