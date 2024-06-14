def kill_monsters(health, monsters, damage):
    monsters_dat_hit = 0
    if monsters % 3 > 0:
        monsters_dat_hit = monsters // 3
    else:
        monsters_dat_hit = monsters // 3 - 1
    total_damage = monsters_dat_hit * damage
    remaining_health = health - total_damage
    if remaining_health <= 0:
        return "hero died"
    else:
        return f"hits: {monsters_dat_hit}, damage: {total_damage}, health: {remaining_health}"


# 3 integers

# 1 string

# (50, 7, 10), "hits: 2, damage: 20, health: 30", "For input (50, 7, 10)"

# I could have a type error or do the math wrong

# monsters divided by 3 will show you how many monsters hit me, if monsters mod 3 equals 0,
# monsters divided by 3 - 1 is how many monsters hit me, else not minus 1 hit me
# take that number times damage to get the damage they delt and subtract health by that to get final health
# if final health is 0 or below say they died

# I can do this

"""
    Ember's Feedback:
    - good work
"""
