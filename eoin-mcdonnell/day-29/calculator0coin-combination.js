def coin_combo(cents):
    coins = [1, 5, 10, 25]
    res = [0, 0, 0, 0]
    for i in range(len(coins) - 1, -1, -1):
        while cents >= coins[i]:
            res[i] += 1
            cents -= coins[i]
    return res
 # 2 case
def coin_combo(cents):
    return [cents % 5, cents % 25 % 10 // 5, cents % 25 // 10, cents // 25]