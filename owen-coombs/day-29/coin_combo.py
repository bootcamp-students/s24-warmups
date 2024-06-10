def coin_combo(cents):
    quarters = cents // 25
    dimes = cents % 25 // 10
    nickels = cents % 25 % 10 // 5
    pennies = cents % 25 % 10 % 5
    return [pennies, nickels, dimes, quarters]