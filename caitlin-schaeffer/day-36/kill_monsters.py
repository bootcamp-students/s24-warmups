# Instructions: You are Saitama (a.k.a One Punch Man), and you are fighting against the monsters! You are strong enough to kill them 
# with one punch, but after you punch 3 times, one of the remaining monsters will hit you once.
# Your health is health; number of monsters is monsters, damage that monster can give you is damage.
# Example: "hits: 2, damage: 20, health: 30", "For input (50, 7, 10)")
# Params: given values for health, monsters, damage
# Return: integers = how many hits you received, how much damage you received and your remaining health.
# Concerns:
# Solution: 
# Given code:
# def kill_monsters(health, monsters, damage):
    # return

import math

def kill_monsters(health, monsters, damage):
    monsters_who_can_hit = math.floor(monsters / 3)
    if monsters % 3 == 0:
        monsters_who_can_hit -= 1
    monster_damage_to_you = monsters_who_can_hit * damage
    hits = monsters_who_can_hit
    print(hits)
    health = health - monster_damage_to_you
    print(health)
    damage = hits * damage
    print(damage)
    if health == 0 or health < 0:
        return "hero died"
    else:
        return f"hits: {hits}, damage: {damage}, health: {health}"

# could also do hits = monsters - 1 // 3